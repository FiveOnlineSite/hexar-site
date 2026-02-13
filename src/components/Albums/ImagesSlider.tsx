"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface AlbumSliderProps{
    images: string[];
}

export default function AlbumSlider({images}: AlbumSliderProps){

    return (
          <section className="relative">
            <Swiper
            modules={[Mousewheel]}
            direction="horizontal"
            spaceBetween={1}
            slidesPerView={1}
            mousewheel={{
            forceToAxis: false,          // prevents diagonal scroll issues
            sensitivity: 1,             // scroll strength
            releaseOnEdges: false,       // allow page scroll after last slide
            thresholdDelta: 30
          }}
          speed={1000}  
          className="mySwiper 3xl:h-[90vh] 2xl:h-[90vh] xl:h-[85vh] lg:h-[90vh] md:h-[90vh] h-screen relative"
        >
            {images.map((image, index)=> (
                <SwiperSlide key={index}>
            <div >
                <img src={image} className="3xl:h-[90vh] 2xl:h-[90vh] xl:h-[90vh] lg:h-[90vh] md:h-[90vh] h-screen w-full object-contain z-0" alt={`Album-${index}`}  />

            </div>
            </SwiperSlide>
            ))}
            
              </Swiper>
            </section>
    )
}