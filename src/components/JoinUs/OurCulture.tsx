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
                        spaceBetween={"10px"}
        slidesPerView={1.33}
        breakpoints={{
          1200: { slidesPerView: 1.33 },
          991: { slidesPerView: 1.33 },
          640: { slidesPerView: 1},
          0: { slidesPerView: 1, spaceBetween: "10px" },
        }}
        className="reveal-stagger our-culture-slider w-full lg:pl-16 md:pl-16 pl-8 pt-16 pb-4">
          {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                          <div className="flex items-center justify-evenly">
                            <div className="lg:h-[405px] md:h-[500px] h-[405px] lg:w-[30%] w-[50%] rounded-xl">
                                <img
                              src={testimonial.image}
                              className=" h-full w-full object-cover rounded-xl"
                            />
                            </div>
                            
                            <div className="lg:w-[65%] w-[50%] lg:h-[405px] md:h-[500px] h-[405px] bg-[#666666] lg:px-8 md:px-6 px-4 lg:py-10 md:py-8 py-6 lg:pr-24 md:pr-15 pr-6 rounded-xl overflow-y-scroll">
                                <div className="flex items-start justify-start">
                                  <img src="/images/icons/double-quote.png" alt="double-qoute" className="lg:h-[34px] lg:w-[44px] md:h-[30px] md:w-[40px] w-[30px] h-[24px] mb-5 object-contain" />
                                </div>
                                <div>
                                  <div className="flex items-center lg:min-h-[200px] md:min-h-[250px] min-h-[250px]">
                                  <p className="lg:text-[18px] md:text-[16px] text-[14px] leading-base font-base mb-5">{testimonial.content}</p>

                                  </div>
                                  <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold leading-tight mb-1">{testimonial.name}</h3>
                                  <h4 className="lg:text-[20px] md:text-[18px] text-[16px] font-base leading-tight">{testimonial.designation}</h4>
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