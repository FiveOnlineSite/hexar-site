"use client";

import { useEffect } from "react";

const CONVERTIBLE_EXTENSIONS = /\.(jpe?g|png)$/i;
const WEBP_ENDPOINT = "/api/webp";

function normalizePath(source: string): string | null {
  if (!source || source.startsWith("data:") || source.startsWith("blob:")) {
    return null;
  }

  const [pathWithoutHash] = source.split("#");
  const [pathname] = pathWithoutHash.split("?");

  if (!pathname || !CONVERTIBLE_EXTENSIONS.test(pathname)) {
    return null;
  }

  if (pathname.startsWith("./")) {
    return pathname.slice(1);
  }

  if (pathname.startsWith("/")) {
    return pathname;
  }

  return null;
}

function getWebpUrl(source: string): string | null {
  const normalizedPath = normalizePath(source);
  if (!normalizedPath) {
    return null;
  }

  return `${WEBP_ENDPOINT}?src=${encodeURIComponent(normalizedPath)}`;
}

function optimizeImageSource(image: HTMLImageElement) {
  if (image.dataset.webpOptimized === "true") {
    return;
  }

  const currentSource = image.getAttribute("src");
  if (!currentSource) {
    return;
  }

  const webpSource = getWebpUrl(currentSource);
  if (!webpSource) {
    image.dataset.webpOptimized = "true";
    return;
  }

  image.dataset.originalSrc = currentSource;
  image.dataset.webpOptimized = "true";

  image.addEventListener(
    "error",
    () => {
      const originalSource = image.dataset.originalSrc;

      if (originalSource && image.getAttribute("src") !== originalSource) {
        image.setAttribute("src", originalSource);
      }
    },
    { once: true }
  );

  image.setAttribute("src", webpSource);
}

export default function WebpImageOptimizer() {
  useEffect(() => {
    const optimizeAllImages = () => {
      document.querySelectorAll("img").forEach((imageElement) => {
        optimizeImageSource(imageElement as HTMLImageElement);
      });
    };

    optimizeAllImages();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.tagName === "IMG") {
            optimizeImageSource(node as HTMLImageElement);
          }

          node.querySelectorAll("img").forEach((imgNode) => {
            optimizeImageSource(imgNode as HTMLImageElement);
          });
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
