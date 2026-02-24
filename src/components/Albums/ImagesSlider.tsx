"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface AlbumSliderProps {
  media: MediaItem[];
}
export default function AlbumSlider({media}: AlbumSliderProps){

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
            {media.map((item, index)=> (
                <SwiperSlide key={index}>
            <div >
                 {item.type === "image" && (
                <img src={item.src} className="3xl:h-[90vh] 2xl:h-[90vh] xl:h-[90vh] lg:h-[90vh] md:h-[90vh] h-screen w-full object-contain z-0" alt={`Album-${index}`}  />
                 )}
                    {item.type === "video" && (
              <video
                src={item.src}
                className="3xl:h-[90vh] 2xl:h-[90vh] xl:h-[90vh] lg:h-[90vh] md:h-[90vh] h-screen w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            )}
            </div>
            </SwiperSlide>
            ))}
            
              </Swiper>
            </section>
    )
}