"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BracketConnector from "../BracketConnector";

gsap.registerPlugin(ScrollTrigger);

export default function About({ image }: { image: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgDesktopRef = useRef<HTMLDivElement | null>(null);
  const bgMobileRef = useRef<HTMLImageElement | null>(null);

  // ✅ Separate refs for each SVG
  const smallMain = useRef<SVGPathElement | null>(null);
  const smallLeft = useRef<SVGPathElement | null>(null);
  const smallRight = useRef<SVGPathElement | null>(null);

  const largeMain = useRef<SVGPathElement | null>(null);
  const largeLeft = useRef<SVGPathElement | null>(null);
  const largeRight = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* Background Animation */
      // const isDesktop = window.innerWidth >= 1024;
      // const bgElement = isDesktop ? bgDesktopRef.current : bgMobileRef.current;

      // if (bgElement) {
      //   gsap.set(bgElement, { opacity: 0, x: 120 });
      //   gsap.to(bgElement, {
      //     opacity: 1,
      //     x: 0,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "top 80%",
      //       end: "bottom 60%",
      //       scrub: 1,
      //     },
      //   });
      // }

      /* ✅ Animate BOTH SVGs independently */
      const allPathGroups = [
        [smallMain.current, smallLeft.current, smallRight.current],
        [largeMain.current, largeLeft.current, largeRight.current],
      ];

      allPathGroups.forEach((paths) => {
        const validPaths = paths.filter(Boolean) as SVGPathElement[];
        if (validPaths.length === 0) return;

        validPaths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 1,
          });
        });

        const drawTl = gsap.timeline({ paused: true });
        drawTl.to(validPaths, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.15,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          onEnter: () => drawTl.restart(),
          onEnterBack: () => drawTl.restart(),
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-section section-reveal inline-block w-full border-b border-[#ffffff66]"
    >
      <div className="relative w-full inline-block">
        <div
          className="absolute inset-0 bg-right bg-no-repeat bg-contain pointer-events-none hidden lg:block"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="relative z-[2]">
          <h2 className="text-reveal 4xl:text-[70px] 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight font-bold lg:px-16 lg:pt-16 px-8 pt-8">
            About Hexar Family
          </h2>

          <img
            src={image}
            alt="background"
            className="block lg:hidden w-full object-contain pointer-events-none"
          />

          <div className="lg:w-[40%] px-8 lg:px-16 pt-8 text-reveal">
            <p className="mb-3 4xl:text-[22px] 3xl:text-[22px] 2xl:text-[20px] xl:text-[15px] lg:text-[15px] md:text-[15px] text-[15px] font-light">
              Welcome to Hexar Studios — the unified force created through the strategic integration of Head Hoppers Studios and Ares Visual Effects Studio.
            </p>
            <p className="mb-3 4xl:text-[22px] 3xl:text-[22px] 2xl:text-[20px] xl:text-[15px] lg:text-[15px] md:text-[15px] text-[15px] font-light">
              We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning 3D visuals for games, films, advertising, and immersive experiences.
            </p>
            <p className="4xl:text-[22px] 3xl:text-[22px] 2xl:text-[20px] xl:text-[15px] lg:text-[15px] md:text-[15px] text-[15px] font-light">
              With Hexar, you're not just working with a studio — you're partnering with a creative powerhouse trusted by global brands.
            </p>
          </div>

          <div className="relative xl:w-[40%] lg:w-[40%] w-full lg:p-16 p-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <img
                src="/images/icons/hexar-logo1.png"
                alt="hexar"
                className="h-[80px] xl:h-[105px] lg:h-[115px] w-full"
              />
              <p className="4xl:text-[15px] 3xl:text-[15px] 2xl:text-[12px] xl:text-[10px] text-[10px] font-light text-center">
                The Parent Organisation
              </p>
            </div>

            <div className="lg:pt-[80px] md:pt-[80px] pt-[60px] flex w-full justify-center">
              {/* ✅ Pass separate refs for each SVG */}
              <BracketConnector
                smallRefs={{ main: smallMain, left: smallLeft, right: smallRight }}
                largeRefs={{ main: largeMain, left: largeLeft, right: largeRight }}
              />
            </div>

            <div className="flex 4xl:justify-evenly 3xl:justify-around 2xl:justify-evenly xl:justify-evenly lg:justify-between md:justify-evenly justify-between mt-4">
              <div className="flex flex-col items-center">
                <img src="/images/icons/head-hoppers-logo.png" className="h-[30px] lg:h-[50px]" />
                <p className="4xl:text-[15px] 3xl:text-[15px] 2xl:text-[12px] xl:text-[10px] text-[10px] font-light mt-2 text-center">
                  Character / Hair Specialist
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/icons/ares-logo.png" className="h-[30px] lg:h-[50px] drop-shadow-[4px_4px_10px_rgba(0,0,0,0.8)]" />
                <p className="4xl:text-[15px] 3xl:text-[15px] 2xl:text-[12px] xl:text-[10px] text-[10px] font-light mt-2 text-center">
                  Concept / VFX / Technical Art / Co-dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
