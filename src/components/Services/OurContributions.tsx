"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { worksamples } from "@/src/data/work-samples";

export default function OurContributions() {

  const images = [
    "Predators", "B4B", "GhostBusters", "GhostBusters"
  ]
  return (
    <div className="our-contributions-section lg:p-16 md:p-16 p-8 bg-[#0A0A0A] border-[#ffffff66] border-t">
      <div>
        <div className="lg:flex block items-center justify-between w-full">
          <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight lg:mb-8 mb-8 text-white font-bold">
            Work Samples
          </h2>
          
          <div className="group">
            <a
            href="#"
            className="reveal inline-block 3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-8 py-3 px-2 mb-8 group-hover:bg-[#D50000] bg-transparent group-hover:text-white text-[#D50000] border-[1.8px] rounded-xl border-[#D50000] transition-all duration-500 ease-in-out"
          >
            See Our Portfolio
          </a>
          </div>
          
        </div>

       <div className="relative w-full flex justify-center">
          
          {/* LEFT ARROW */}
          <button
            id="custom-prev"
            className="absolute 3xl:left-0 2xl:left-0 xl:left-0 lg:left-0 md:left-[85%] left-[70%] 3xl:top-1/2 2xl:top-1/2 xl:top-1/2 lg:top-1/2 md:-top-[25%] -top-[50%] 3xl:-translate-y-1/2 2xl:-translate-y-1/2 xl:-translate-y-1/2 lg:-translate-y-1/2 z-10
            rounded-full transition-all duration-700
            hover:shadow-[0_2px_20px_0_#FFFFFF40]"
          >
            <Image
              src="/images/icons/left-arrow.png"
              width={40}
              height={40}
              alt="prev"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            id="custom-next"
            className="absolute right-0 3xl:top-1/2 2xl:top-1/2 xl:top-1/2 lg:top-1/2 md:-top-[25%] -top-[50%] 3xl:-translate-y-1/2 2xl:-translate-y-1/2 xl:-translate-y-1/2 lg:-translate-y-1/2 z-10
            rounded-full transition-all duration-700
            hover:shadow-[0_2px_20px_0_#FFFFFF40]"
          >
            <Image
              src="/images/icons/right-arrow.png"
              width={40}
              height={40}
              alt="next"
            />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: "#custom-prev",
              nextEl: "#custom-next",
            }}
            onInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = "#custom-prev";
                swiper.params.navigation.nextEl = "#custom-next";
              }
              swiper.navigation?.init();
              swiper.navigation?.update();
            }}
            autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
            slidesPerView={1}
            className="mySwiper 3xl:w-[85%] 2xl:w-[85%] xl:w-[90%] lg:w-[85%] w-full"
          >
            {worksamples.map((work) => (
                <SwiperSlide key={work.id}>
              <div className="rounded-xl overflow-hidden m-2">
                <img
                  src={work.image}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            ))}
          

           
          </Swiper>
        </div>
      </div>
    </div>
  );
}
