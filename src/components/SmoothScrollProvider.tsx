"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScrollProvider() {
  const pathname = usePathname();

  // ── LENIS SMOOTH SCROLL ──────────────────────────────
  useEffect(() => {
    let lenis: any;
    let rafId: number;

    async function init() {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  // ── GSAP SCROLL ANIMATIONS ───────────────────────────
  useEffect(() => {
    let ctx: any;

    async function init() {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;

      gsap.registerPlugin(ScrollTrigger);

      // Small delay so DOM is painted
      await new Promise((r) => setTimeout(r, 200));

      ctx = gsap.context(() => {

        // ── Section reveal ──
        document.querySelectorAll<HTMLElement>(".section-reveal").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 60 },
            {
              opacity: 1, y: 0,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 35%",
                scrub: 1,
              },
            }
          );

          gsap.fromTo(el,
            { opacity: 1, y: 0 },
            {
              opacity: 0, y: -40,
              scrollTrigger: {
                trigger: el,
                start: "bottom 55%",
                end: "bottom 5%",
                scrub: 1,
              },
            }
          );
        });

        // ── Text reveal ──
        document.querySelectorAll<HTMLElement>(".text-reveal").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 35 },
            {
              opacity: 1, y: 0,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );

          gsap.fromTo(el,
            { opacity: 1, y: 0 },
            {
              opacity: 0, y: -25,
              scrollTrigger: {
                trigger: el,
                start: "bottom 20%",
                end: "bottom 5%",
                scrub: 1,
              },
            }
          );
        });

// ── Stagger grid ──
document.querySelectorAll<HTMLElement>(".stagger-grid").forEach((grid) => {
  const items = grid.querySelectorAll<HTMLElement>(".stagger-item");

  gsap.fromTo(items,
    {
      opacity: 0,
      y: 60,
      scale: 0.92,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: {
        amount: 0.6,        
        from: "start", 
      },
      scrollTrigger: {
        trigger: grid,   
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

});

        // ── Parallax images ──
        document.querySelectorAll<HTMLElement>(".parallax-img").forEach((img) => {
          gsap.fromTo(img,
            { y: 40 },
            {
              y: -40,
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });
    }

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [pathname]);

  return null;
}