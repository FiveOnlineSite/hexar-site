import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from '@/src/lib/request-control'

const BLOCKED_BOT_MESSAGE = 'Crawler blocked by policy'

function shouldSkipRateLimit(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/sitemap.xml')
  )
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (shouldSkipRateLimit(pathname)) {
    return NextResponse.next()
  }

  const ip = getClientIp(request.headers)
  const userAgent = request.headers.get('user-agent') ?? ''
  const rateLimit = await checkRateLimit({ ip, userAgent })

  if (rateLimit.botCategory === 'aggressive') {
    return new NextResponse(BLOCKED_BOT_MESSAGE, {
      status: 403,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Bot-Category': 'aggressive',
      },
    })
  }

  if (!rateLimit.success) {
    return NextResponse.json(
      {
        error: 'Too many requests',
        retryAfterSeconds: Math.max(rateLimit.reset - Date.now(), 0) / 1000,
      },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': String(rateLimit.limit),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-RateLimit-Reset': String(rateLimit.reset),
          'X-Bot-Category': rateLimit.botCategory,
        },
      },
    )
  }

  const response = NextResponse.next()

  response.headers.set('X-RateLimit-Limit', String(rateLimit.limit))
  response.headers.set('X-RateLimit-Remaining', String(rateLimit.remaining))
  response.headers.set('X-RateLimit-Reset', String(rateLimit.reset))
  response.headers.set('X-Bot-Category', rateLimit.botCategory)

  if (request.method === 'GET' && !pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=600')
  }

  return response
}

export const config = {
  matcher: ['/((?!.*\\.).*)'],
}
