import { promises as fs } from 'node:fs'
import path from 'node:path'
import { unstable_cache } from 'next/cache'
import { NextRequest } from 'next/server'
import sharp from 'sharp'
import { logSlowRequest } from '@/src/lib/observability'

const CONVERTIBLE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

export const revalidate = 86400

function normalizeSource(input: string): string | null {
  const [withoutHash] = input.split('#')
  const [pathname] = withoutHash.split('?')

  if (!pathname) {
    return null
  }

  if (pathname.startsWith('./')) {
    return pathname.slice(1)
  }

  if (pathname.startsWith('../')) {
    return null
  }

  if (pathname.startsWith('/')) {
    return pathname
  }

  return null
}

function getMimeType(extension: string): string {
  return extension === '.png' ? 'image/png' : 'image/jpeg'
}

function toBodyBytes(buffer: Buffer): Uint8Array {
  return Uint8Array.from(buffer)
}

const convertToWebp = unstable_cache(
  async (absolutePath: string, quality: number) => {
    const sourceBuffer = await fs.readFile(absolutePath)

    return sharp(sourceBuffer)
      .rotate()
      .webp({ quality })
      .toBuffer()
  },
  ['webp-convert-v1'],
  { revalidate: 86400 },
)

export async function GET(request: NextRequest) {
  const startedAt = Date.now()
  const src = request.nextUrl.searchParams.get('src') ?? ''
  const quality = Number(request.nextUrl.searchParams.get('q') ?? '82')
  const normalizedSrc = normalizeSource(src)

  if (!normalizedSrc) {
    return new Response('Invalid src', { status: 400 })
  }

  const extension = path.extname(normalizedSrc).toLowerCase()
  if (!CONVERTIBLE_EXTENSIONS.has(extension)) {
    return new Response('Unsupported image type', { status: 415 })
  }

  const absolutePath = path.resolve(process.cwd(), 'public', `.${normalizedSrc}`)
  const publicRoot = path.resolve(process.cwd(), 'public')

  if (!absolutePath.startsWith(publicRoot)) {
    return new Response('Forbidden', { status: 403 })
  }

  try {
    const safeQuality = Number.isFinite(quality) ? Math.min(Math.max(quality, 40), 100) : 82
    const webpBuffer = await convertToWebp(absolutePath, safeQuality)

    return new Response(toBodyBytes(webpBuffer) as unknown as BodyInit, {
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable, s-maxage=31536000',
      },
    })
  } catch {
    try {
      const fallbackBuffer = await fs.readFile(absolutePath)

      return new Response(toBodyBytes(fallbackBuffer) as unknown as BodyInit, {
        headers: {
          'Content-Type': getMimeType(extension),
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
        },
      })
    } catch {
      return new Response('Image not found', { status: 404 })
    }
  } finally {
    logSlowRequest('/api/webp', startedAt, { src: normalizedSrc })
  }
}
