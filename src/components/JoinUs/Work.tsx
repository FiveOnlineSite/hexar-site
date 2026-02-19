"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {workwithus} from "../../data/work-with-us";

export default function Work(){
    return (
        <section className="work-section bg-[#1D1D1D] lg:p-16 md:p-16 p-8">
            <div className="">
                <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] lg:mb-8 mb-8 text-white font-bold leading-tight">
                Why Work With Us?
                </h2>
            </div>

             <div className="relative w-full flex justify-center">
          

          {/* SWIPER */}
          <Swiper
             modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        spaceBetween={0}
        slidesPerView={6}
        breakpoints={{
          1200: { slidesPerView: 6 },
          991: { slidesPerView: 4 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
            className="mySwiper w-full pb-4 reveal-stagger"
          >
            {workwithus.map((workwithus, index) => (
               <SwiperSlide key={index} >
              <div className="">
                <img
                  src={workwithus.image}
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center 3xl:text-[26px] 2xl:text-[24px] xl:text-[22px] lg:text-[22px] md:text-[20px] text-[20px] font-medium ">{workwithus.title}</h5>
              </div>
            </SwiperSlide>
            ))
              }
           

          </Swiper>
        </div>
        </section>
    )
}