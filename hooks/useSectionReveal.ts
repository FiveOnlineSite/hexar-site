"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSectionReveal() {

  const pathname = usePathname();

  useEffect(() => {

    const mm = gsap.matchMedia();

    /* ======================
       DESKTOP
    ====================== */

    mm.add("(min-width: 769px)", () => {

  const sections = gsap.utils.toArray<HTMLElement>(".section-reveal");

  sections.forEach((section) => {

    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 40%",
          scrub: true
        }
      }
    );

  });

  ScrollTrigger.refresh();
});

    /* ======================
       MOBILE
    ====================== */

    mm.add("(max-width: 768px)", () => {

      const sections = document.querySelectorAll<HTMLElement>(".section-reveal");

      sections.forEach(section => {

        gsap.set(section, {
          opacity: 0,
          y: 60
        });

      });

      const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            });

          }

        });

      }, { threshold: 0.25 });

      sections.forEach(section => observer.observe(section));

      return () => observer.disconnect();

    });

    return () => mm.revert();

  }, [pathname]);

}