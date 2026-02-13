"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingShield() {
  useEffect(() => {
    const shield = document.getElementById("floating-shield");
    if (!shield) return;

    const hero = document.querySelector("section.hero-section");
    const sections = [...document.querySelectorAll("[data-shield-section]")];

    if (!hero || !sections.length) return;

    // hide initially
    gsap.set(shield, { opacity: 0 });

    // 🔹 HIDE inside Hero always
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      onEnter: () => gsap.to(shield, { opacity: 0, duration: 0.3 }),
      onEnterBack: () => gsap.to(shield, { opacity: 0, duration: 0.3 }),
    });

    // 🔹 ANIMATE shield for each section (1 → 10)
    sections.forEach((section, index) => {
      const isLeft = index % 2 === 0;

      const x = isLeft ? "-18vw" : "18vw";
      const y = -5 + index * 6;

      ScrollTrigger.create({
        trigger: section,
        start: "top center", // appears as section enters viewport
        onEnter: () => {
          gsap.to(shield, {
            opacity: 0.35,
            x,
            y: `${y}vh`,
            duration: 1.2,
            ease: "power3.out",
          });
        },
        onEnterBack: () => {
          gsap.to(shield, {
            opacity: 0.35,
            x,
            y: `${y}vh`,
            duration: 1.2,
            ease: "power3.out",
          });
        },
      });
    });

    // 🔹 HIDE shield after FAQ (section-10)
    const faqSection = document.querySelector("#section-10");

    if (faqSection) {
      ScrollTrigger.create({
        trigger: faqSection,
        start: "bottom bottom",
        onEnter: () => gsap.to(shield, { opacity: 0, duration: 0.4 }),
      });
    }

    // 🔹 Also hide in footer as extra safety
    ScrollTrigger.create({
      trigger: "footer",
      start: "top bottom",
      onEnter: () => gsap.to(shield, { opacity: 0, duration: 0.4 }),
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}
