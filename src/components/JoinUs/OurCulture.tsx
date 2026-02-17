"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { testimonials } from "@/src/data/testimonials";

export default function OurCulture(){
    return (
        <section className="our-culture-section lg:py-16 md:py-16 py-8">
            <div className="">
                <h2 className="reveal lg:px-16 md:px-16 px-8 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-left text-[#D50000] font-bold leading-tight">
                    Our Culture
                </h2>
            <h2 className="reveal lg:px-16 md:px-16 px-8 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-left lg:mb-16 mb-8 text-white font-bold leading-tight">Through Our People</h2>
            </div>

            <div className="relative w-full flex justify-center">
                      
                      {/* LEFT ARROW */}
                      <button
                        id="custom-prev"
                        className="absolute lg:left-[86%] lg:top-0 md:left-[75%] left-[70%] -translate-y-0 z-10
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
                        className="absolute lg:right-[5%] lg:top-0 md:right-[10%] right-[7%] -translate-y-0 z-10
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
                  disableOnInteraction: true,
                }}
                        spaceBetween={0}
        slidesPerView={1.33}
        breakpoints={{
          1200: { slidesPerView: 1.33 },
          991: { slidesPerView: 1.33 },
          640: { slidesPerView: 1},
          0: { slidesPerView: 1 },
        }}
        className="reveal-stagger our-culture-slider w-full lg:pl-16 md:pl-16 pl-8 pt-16 pb-4">
          {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                          <div className="flex items-center justify-evenly">
                            <div className="h-[405px] w-[30%] rounded-xl">
                                <img
                              src={testimonial.image}
                              className=" h-full w-full object-cover rounded-xl"
                            />
                            </div>
                            
                            <div className="w-[65%] h-[405px] bg-[#666666] lg:px-8 md:px-6 px-4 lg:py-10 md:py-8 py-6 lg:pr-24 md:pr-15 pr-6 rounded-xl">
                                <div className="flex items-start justify-start">
                                  <img src="/images/icons/double-quote.png" alt="double-qoute" className="lg:h-[34px] lg:w-[44px] md:h-[30px] md:w-[40px] w-[30px] h-[24px] object-contain" />
                                </div>
                                <div>
                                  <div className="flex items-center lg:min-h-[200px] md:min-h-[250px] min-h-[250px]">
                                  <p className="text-base leading-base font-base">{testimonial.content}</p>

                                  </div>
                                  <h3 className="lg:text-[24px] md:text-[20px] text-[20px] font-semibold leading-base mb-1">{testimonial.name}</h3>
                                  <h4 className="lg:text-[20px] md:text-[18px] text-[18px] font-base leading-base">{testimonial.designation}</h4>
                                </div>
                            </div>
                            
                          </div>
                        </SwiperSlide>
          ))}
                      
            
                      </Swiper>
                    </div>
        </section>
    )
}