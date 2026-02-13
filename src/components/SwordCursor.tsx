"use client";

import { useEffect } from "react";

export default function SwordEffects() {
  useEffect(() => {

    const createBlast = (x: number, y: number) => {
      // Flash burst
      const flash = document.createElement("div");
      flash.className = "blast-flash";
      flash.style.left = `${x}px`;
      flash.style.top = `${y}px`;
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 150);

      // Shockwave ring
      const ring = document.createElement("div");
      ring.className = "blast-ring";
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
      document.body.appendChild(ring);
      setTimeout(() => ring.remove(), 400);

      // Debris particles
      const debrisCount = 20 + Math.floor(Math.random() * 20);
      for (let i = 0; i < debrisCount; i++) {
        const debris = document.createElement("div");
        debris.className = "blast-debris";

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;

        debris.style.setProperty("--moveX", `${Math.cos(angle) * distance}px`);
        debris.style.setProperty("--moveY", `${Math.sin(angle) * distance}px`);

        debris.style.left = `${x}px`;
        debris.style.top = `${y}px`;

        document.body.appendChild(debris);
        setTimeout(() => debris.remove(), 700);
      }

      // Smoke puff
      const smoke = document.createElement("div");
      smoke.className = "blast-smoke";
      smoke.style.left = `${x}px`;
      smoke.style.top = `${y}px`;
      document.body.appendChild(smoke);
      setTimeout(() => smoke.remove(), 1000);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Disable effect for navbar / menu / buttons that have data-no-blast
      if (target.closest("[data-no-blast]")) return;

      // Run blast
      createBlast(e.pageX, e.pageY);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);

  }, []);

  return null;
}
