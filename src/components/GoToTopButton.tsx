"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GoToTopButton = () => {

  const progressRef = useRef<SVGCircleElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (height <= 0) return;

      const progress = Math.min(scrollTop / height, 1);
      const offset = circumference - progress * circumference;

      if (progressRef.current) {
        progressRef.current.style.strokeDashoffset = offset.toString();
      }

      if (buttonRef.current) {
        if (scrollTop > 100) {
          gsap.to(buttonRef.current, { autoAlpha: 1, duration: 0.3 });
        } else {
          gsap.to(buttonRef.current, { autoAlpha: 0, duration: 0.3 });
        }
      }
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);

  }, [circumference]);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={buttonRef}
      onClick={handleTop}
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] flex items-center justify-center cursor-pointer group opacity-0"
    >

      <svg className="absolute w-full h-full rotate-[-90deg]">

        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#444"
          strokeWidth="3"
          fill="transparent"
        />

        <circle
          ref={progressRef}
          cx="30"
          cy="30"
          r={radius}
          stroke="white"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />

      </svg>

      <div className="w-[45px] h-[45px] bg-black rounded-full flex items-center justify-center transition group-hover:scale-110">

        <img
          src="/images/icons/top.png"
          alt="top"
          className="w-[22px]"
        />

      </div>

    </div>
  );
};

export default GoToTopButton;