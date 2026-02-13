"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    /* =======================
       DESKTOP
    ======================= */
    mm.add("(min-width: 769px)", () => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => {
        if (el.closest(".category-card")) return;

        gsap.set(el, { opacity: 0, y: 40 });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true, // 🔥 NEVER reverse
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach(container => {
        if (container.closest(".category-card")) return;

        const items = Array.from(container.children) as HTMLElement[];
        if (!items.length) return;

        gsap.set(items, { opacity: 0, y: 30 });

        gsap.to(items, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    /* =======================
       MOBILE (Observer)
    ======================= */
    mm.add("(max-width: 768px)", () => {
      const elements = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-stagger > *"
      );

      elements.forEach(el => {
        if (el.closest(".category-card")) return;
        gsap.set(el, { opacity: 0, y: 24 });
      });

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          if (el.closest(".category-card")) return;

          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
            });
            observer.unobserve(el); // 🔥 animate once
          }
        });
      }, { threshold: 0.3 });

      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    });

    return () => mm.revert();
  }, [pathname]);

  return null;
}
