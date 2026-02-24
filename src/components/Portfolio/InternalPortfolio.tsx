"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import { portfolio } from "@/src/data/portfolio";

import "swiper/css";
import "swiper/css/navigation";

export default function InternalPortfolio() {

  const sectionRef = useRef(null);
  const swiperRef = useRef<SwiperType>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👁 Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // 40% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ▶️ Control autoplay
  useEffect(() => {
    if (!swiperRef.current) return;

    if (isVisible) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef} id="internal-portfolio"
      className="internal-portfolio-section lg:py-16 md:py-16 py-8 border-t border-[#ffffff66]"
    >

      <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-[#FFFFFF] leading-tight font-bold text-center w-full mb-8 lg:px-16 md:px-16 px-8">
        Internal Portfolio
      </h2>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        speed={1500}
        spaceBetween={5}
        slidesPerView={2.2}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.2 },
        }}

        className="mySwiper reveal"
      >

        {portfolio.map((portfolio) => (
          <SwiperSlide key={portfolio.id} className="py-2">

            <Link
              href={`/categories/${portfolio.slug}`}
              className="portfolio group h-full"
            >

              <div className="group-hover:shadow-[0px_16px_20px_0px_#D500001A] overflow-hidden shadow-[0_4px_16px_0_#00000033] relative rounded-lg h-full transition-all duration-700 mx-2">

                <div className="overflow-hidden">
                  <img
                    src={portfolio.image}
                    className="w-full object-contain h-full scale-100 xl:group-hover:scale-150 origin-top transition-all duration-700 ease-out rounded-lg"
                  />
                </div>

                <div className="w-full inline-block xl:absolute relative 3xl:-bottom-[11%] 2xl:-bottom-[11%] xl:-bottom-[14%] bottom-0 group-hover:bottom-0 transition-all duration-700 ease-out py-2 px-4 bg-[linear-gradient(89.16deg,#0A0A0A_1.81%,#03010E_99.03%)]">

                  <h2 className="3xl:text-[42px] 2xl:text-[38px] lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">
                    {portfolio.title}
                  </h2>

                  <div className="w-full"> <div className=" group/button flex items-center 3xl:text-[35px] 2xl:text-[30px] xl:text-[22px] lg:text-[22px] md:text-[18px] text-[16px] text-white leading-tight font-semibold relative lg:p-4 overflow-hidden " > <span className=" flex items-center transition-all duration-500 ease-out group-hover/button:-translate-x-10 " > <span className=" inline-block w-[28px] h-px bg-white me-1 transition-all duration-300 group-hover/button:opacity-0 " ></span> <span className=" transition-all duration-500 ease-out " > Explore Now </span> </span> <span className=" relative inline-flex items-center w-[30px] h-px bg-white opacity-0 transition-all duration-500 ease-out ms-1 group-hover/button:opacity-100 group-hover/button:-translate-x-10 after:content-['.'] after:absolute after:-right-0 after:-top-1 after:-translate-y-1/2 after:text-white after:text-[20px] after:leading-none " > </span> </div> </div>

                </div>
              </div>

            </Link>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}