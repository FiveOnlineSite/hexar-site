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
 gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {

  gsap.set(el, { opacity: 0, y: 80 });

  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    end: "top 10%",
    onUpdate: (self) => {

      // scrolling DOWN → fade in
      if (self.direction === 1 && self.progress > 0.1) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        });
      }

      // scrolling UP → fade out downward
      if (self.direction === -1 && self.progress < 0.8) {
        gsap.to(el, {
          opacity: 0,
          y: 80,
          duration: 0.5,
          ease: "power3.in"
        });
      }

    }
  });

});

  gsap.utils.toArray<HTMLElement>(".reveal-stagger, .category-card").forEach((container) => {

  const items = Array.from(container.children) as HTMLElement[];

  gsap.set(items, { opacity: 0, y: 60 });

  ScrollTrigger.create({
    trigger: container,
    start: "top 90%",
    end: "top 10%",
    onUpdate: (self) => {

      if (self.direction === 1 && self.progress > 0.1) {

        gsap.to(items, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power3.out"
        });

      }

      if (self.direction === -1 && self.progress < 0.8) {

        gsap.to(items, {
          opacity: 0,
          y: 60,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.in"
        });

      }

    }
  });

});

gsap.utils.toArray<HTMLElement>(".albums-stagger").forEach(container => {

  const items = Array.from(container.children) as HTMLElement[];
  if (!items.length) return;

  gsap.fromTo(
    items,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "top 10%",
        toggleActions: "play none none reverse"
      }
    }
  );
});
      ScrollTrigger.refresh();
    });

    /* =======================
       MOBILE (Observer)
    ======================= */
    mm.add("(max-width: 768px)", () => {
      const elements = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-stagger, .albums-stagger > *"
      );

      elements.forEach(el => {
        if (el.closest(".category-card")) return;
        gsap.set(el, { opacity: 0, y: 40 });
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
