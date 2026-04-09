import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest } from "next/server";
import sharp from "sharp";

const CONVERTIBLE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

function normalizeSource(input: string): string | null {
  const [withoutHash] = input.split("#");
  const [pathname] = withoutHash.split("?");

  if (!pathname) {
    return null;
  }

  if (pathname.startsWith("./")) {
    return pathname.slice(1);
  }

  if (pathname.startsWith("../")) {
    return null;
  }

  if (pathname.startsWith("/")) {
    return pathname;
  }

  return null;
}

function getMimeType(extension: string): string {
  if (extension === ".png") {
    return "image/png";
  }

  return "image/jpeg";
}

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src") ?? "";
  const quality = Number(request.nextUrl.searchParams.get("q") ?? "82");
  const normalizedSrc = normalizeSource(src);

  if (!normalizedSrc) {
    return new Response("Invalid src", { status: 400 });
  }

  const extension = path.extname(normalizedSrc).toLowerCase();
  if (!CONVERTIBLE_EXTENSIONS.has(extension)) {
    return new Response("Unsupported image type", { status: 415 });
  }

  const absolutePath = path.resolve(process.cwd(), "public", `.${normalizedSrc}`);
  const publicRoot = path.resolve(process.cwd(), "public");

  if (!absolutePath.startsWith(publicRoot)) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const sourceBuffer = await fs.readFile(absolutePath);
    const safeQuality = Number.isFinite(quality) ? Math.min(Math.max(quality, 40), 100) : 82;

    const webpBuffer = await sharp(sourceBuffer)
      .rotate()
      .webp({ quality: safeQuality })
      .toBuffer();

    return new Response(webpBuffer, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    try {
      const fallbackBuffer = await fs.readFile(absolutePath);
      return new Response(fallbackBuffer, {
        headers: {
          "Content-Type": getMimeType(extension),
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {
      return new Response("Image not found", { status: 404 });
    }
  }
}
