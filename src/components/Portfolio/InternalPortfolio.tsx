"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { portfolio } from "@/src/data/portfolio";

import Image from "next/image";

// REQUIRED SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Autoplay } from "swiper/modules";


const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-");


export default function InternalPortfolio(){

     const internalPortfolio = [
    { img: "/images/internal-portfolio-1.png", title: "Concept Art"},
    { img: "/images/internal-portfolio-2.png", title: "Stylized Art"},
    { img: "/images/internal-portfolio-1.png", title: "Character"}
  ].map(item => ({
  ...item,
  slug: slugify(item.title),
}));

    return (
        <section className="internal-portfolio-section lg:py-16 md:py-16 py-8 border-t border-[#ffffff66] ">
        <div>
                <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-[#FFFFFF] leading-tight font-bold text-center w-full mb-8 lg:px-16 md:px-16 px-8">Internal Portfolio</h2>
        </div>
        <Swiper
        modules={[Autoplay]}
                autoplay={{
                  delay:2000,
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

          {/* EACH CARD MUST BE A SEPARATE SLIDE */}
          {portfolio.map((portfolio) => (
            <SwiperSlide key={portfolio.id} className="py-2">
                <div className="portfolio group h-full">
        <div className="group-hover:shadow-[0px_16px_20px_0px_#D500001A] overflow-hidden shadow-[0_4px_16px_0_#00000033] relative rounded-lg h-full transition-all duration-700 mx-2 "> 
            <div className="overflow-hidden"> 
                <img src={portfolio.image} className="w-full object-contain h-full scale-100 xl:group-hover:scale-150 origin-top transition-all duration-700 ease-out rounded-lg" /> 
            </div> 
                
            <div className="w-full inline-block xl:absolute relative 3xl:-bottom-[12%] 2xl:-bottom-[23%] xl:-bottom-[14%] bottom-0 group-hover:bottom-0 transition-all duration-700 ease-out py-2 px-4 bg-[linear-gradient(89.16deg,#0A0A0A_1.81%,#03010E_99.03%)]"> 
                <h2 className="3xl:text-[42px] 2xl:text-[38px] lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">{portfolio.title}</h2> 
                    
                    <div className="w-full">
                         <Link
                            href={`/categories/${portfolio.slug}`}
                            className="
                                group/button
                                flex
                                items-center
                                3xl:text-[35px] 2xl:text-[30px] xl:text-[22px] lg:text-[22px] md:text-[18px] text-[16px]
                                text-white
                                leading-tight
                                font-semibold
                                relative
                                lg:p-4
                                overflow-hidden
                            "
                            >
                                    <span
                                        className="
                                        flex items-center
                                        transition-all duration-500 ease-out
                                        group-hover/button:-translate-x-10
                                        "
                                    >
                                        <span
                                        className="
                                            inline-block w-[28px] h-px bg-white me-1
                                            transition-all duration-300
                                            group-hover/button:opacity-0
                                        "
                                        ></span>

                                        <span
                                        className="
                                            transition-all duration-500 ease-out
                                        "
                                        >
                                        Explore Now
                                        </span>
                                    </span>

                                    <span
                                    className="
                                        relative inline-flex items-center
                                        w-[30px] h-px bg-white
                                        opacity-0 transition-all duration-500 ease-out ms-1
                                        group-hover/button:opacity-100 group-hover/button:-translate-x-10
                                        after:content-['.']
                                        after:absolute after:-right-0 after:-top-1
                                        after:-translate-y-1/2 
                                        after:text-white
                                        after:text-[20px]
                                        after:leading-none
                                    "
                                    >

                                </span>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
          ))}

        </Swiper>
        </section>
    )
}