"use client"

import Image from "next/image";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type SolutionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Solution({ id, ...rest }:SolutionProps){

    const sectionRef = useRef(null);
    const bgDesktopRef = useRef(null);
    const bgMobileRef = useRef(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const isDesktop = window.innerWidth >= 1024;
    const element = isDesktop ? bgDesktopRef.current : bgMobileRef.current;

    if (!element) return;

    gsap.set(element, {
      opacity: 0,
      scale: 0.7,
      x: 120,
      y: 80,
      willChange: "transform, opacity",
      transformOrigin: "100% 100%",
    });

    const tl = gsap.timeline({
      ease: "power2.out",
      paused: true,
    });

    tl.to(element, {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 1.6,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
      animation: tl,
      invalidateOnRefresh: true,
    });
  }, sectionRef);

  ScrollTrigger.refresh();
  return () => ctx.revert();
}, []);


    return(
       <section {...rest} id={id} ref={sectionRef} className="solution-section relative h-full w-full overflow-hidden">
  
        <img
        ref={bgDesktopRef}
        src="/images/end-to-end-bg.png"
        className="absolute right-0 top-0 w-[900px] h-auto object-contain xl:block lg:block hidden"
      />
      <div className="relative z-10 flex items-center">
                <div className="lg:w-[65%] w-full lg:pb-16 md:pb-16 pb-8">
                    <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] font-bold text-white lg:leading-tight md:leading-tight leading-[40px] lg:px-16 lg:pt-16 lg:pb-8 md:px-16 md:pt-16 pb-4 pt-8 px-8"><span className="text-[#D50000]">End-to-End </span>3D Art Solutions for Film, Games & Beyond</h2>
                    <img ref={bgMobileRef} src="/images/end-to-end-bg.png" alt="bg" className="relative top-0 right-0 xl:hidden lg:hidden block w-full h-full pe-0"/>
                    <div className="3xl:w-[65%] 2xl:w-[65%] lg:w-[62%] w-full lg:px-16 md:px-16 px-8">
                        <p className="reveal my-6 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">We partner with leading studios, game developers, and production houses worldwide to craft exceptional 3D art that stands out. From the spark of a 2D concept to high-resolution sculpts, highly detailed VFX assets and fully optimized in-game assets, our pipeline blends artistic passion with technical mastery. </p>

                        <p className="reveal my-6 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">Every project is executed through a secure, efficient, and collaborative workflow, ensuring that your vision transforms into a tangible, visually stunning reality — on time, on spec, and beyond expectation.</p>
                    </div>

                    <div className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center justify-center xl:w-[85%] w-full lg:mt-[10%] lg:mb-[8%] lg:px-16 md:px-16 px-8">

                    <div className="flex flex-col items-center justify-center lg:py-0 md:py-0 py-2 lg:px-2">
                        <img src="./images/icons/Icon-Pre 1.png" alt="pre-production" className="xl:w-auto lg:w-[60px] md:w-[65px] w-[55px]" />
                        <h4 className="lg:text-[23px] md:text-[20px] text-[18px] leading-tight font-light lg:mt-4 md:mt-2 mt-2 text-center">Pre-Production</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:border-r lg:border-l md:border-r md:border-l lg:py-0 md:py-0 py-2 lg:px-2">
                        <img src="./images/icons/Icon-Prod 1.png" alt="production" className="xl:w-auto lg:w-[60px] md:w-[65px] w-[55px]"  />
                        <h4 className="lg:text-[23px] md:text-[20px] text-[18px] leading-tight font-light lg:mt-4 md:mt-2 mt-2 text-center">Production</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:py-0 md:py-0 py-2 lg:px-2">
                        <img src="./images/icons/Icon-Post 1.png" alt="post-production" className="xl:w-auto lg:w-[60px] md:w-[65px] w-[55px]" />
                        <h4 className="lg:text-[23px] md:text-[20px] text-[18px] leading-tight font-light lg:mt-4 md:mt-2 mt-2 text-center">Post-Production</h4>
                    </div>

                    </div>

                </div>
            </div>
        </section>
    )
}