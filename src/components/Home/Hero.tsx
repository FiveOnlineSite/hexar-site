// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import {gsap} from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

//  function NextArrow({ onClick }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         absolute xl:bottom-[15%] lg:bottom-[15%] md:bottom-[15%] bottom-[50%] xl:left-[5%] lg:left-[7%] md:left-[7%] left-[70%]
//         lg:mx-16 mx-8 rounded-full rounded-full
//         transition-all duration-700
//         z-20
//         hover:shadow-[0_2px_20px_0_#FFFFFF40]
//       "
//     >
//       <Image src="/images/icons/right-arrow.png" alt="right-arrow" width={48} height={48} className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12"/>
//     </button>
//   );
// }

// function PrevArrow({ onClick }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         absolute xl:bottom-[15%] lg:bottom-[15%] md:bottom-[15%] bottom-[50%] xl:left-[0%] lg:left-[0%] md:left-[0%] left-[55%]
//         rounded-full
//         lg:mx-16 mx-8
//         transition-all duration-700
//         z-20
//         hover:shadow-[0_2px_20px_0_#FFFFFF40]
//       "
//     >
//       <Image
//   src="/images/icons/left-arrow.png"
//   alt="left-arrow"
//   width={48}
//   height={48}
//   className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
// />
//     </button>
//   );
// }



// export default function Hero() {

//     const imageRef = useRef<any[]>([]);
//     const sectionRef = useRef(null);

//   const settings = {
//     infinite: true,
//     dots: false,
//     arrows: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
//   afterChange: (i) => playAnimation(i),
//   };

// const playAnimation = (i) => {

//   if (!imageRef.current[i]) return; 

//    gsap.fromTo(
//     imageRef.current[i],
//    { opacity: 0, scale: 0.3, transformOrigin: "100% 100%" },
//     { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
//    );
// }

// useEffect(() => {
//   ScrollTrigger.create({
//     trigger: sectionRef.current,
//     start: "top 80%",
//     once: false,
//     onEnter: () => playAnimation(0),
//   });
// }, []);

//   return (
//     <section className="hero-section">
//         <Slider {...settings} className="xl:h-full lg:h-full md:h-full h-screen relative">
//               <div className="relative xl:h-full lg:h-full md:h-full h-screen">
//                   <video src="./videos/bg-video1.mp4" playsInline autoPlay muted loop className="blur-md xl:h-full lg:h-full md:h-full h-screen w-full object-cover relative"></video>
//                     <h1 className="xl:text-[53px] lg:text-[48px] md:text-[40px] text-[36px] xl:leading-tight lg:leading-[45px] md:leading-[40px] leading-[40px] font-bold absolute xl:top-[50%] lg:top-[50%] md:top-[50%] top-[30%] left-0 lg:px-16 px-8 xl:w-[50%] lg:w-[60%] md:w-[70%] w-full -translate-y-1/2">Predator Hunting Grounds</h1>
//                     <a
//               href="#"
//               className="group flex items-center text-[22px] text-white leading-tight font-semibold absolute xl:bottom-[32%] lg:bottom-[32%] md:bottom-[32%] bottom-[58%] left-0 lg:px-16 px-8 overflow-hidden"
//             >
//           <span
//             className="
//               flex items-center
//               transition-all duration-500 ease-out
//               group-hover:-translate-x-10
//             "
//           >
//             <span
//               className="
//                 inline-block w-[28px] h-px bg-white me-1
//                 transition-all duration-300
//                 group-hover:opacity-0
//               "
//             ></span>

//             <span
//               className="
//                 transition-all duration-500 ease-out
//               "
//             >
//               Take A Look
//             </span>
//           </span>

//           <span
//           className="
//             relative inline-flex items-center
//             w-[30px] h-px bg-white
//             opacity-0 -translate-x-0
//             transition-all duration-500 ease-out ms-1
//             group-hover:opacity-100 group-hover:-translate-x-10
//             after:content-['.']
//             after:absolute after:-right-0
//             after:-top-1 after:-translate-y-1/2
//             after:text-white after:text-[18px] after:leading-none
//           "
//         ></span>
//         </a>

//       <div
//         ref={el => (imageRef.current[0] = el)}
//        className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none"
// >
//         <img
//           src="/images/image-2.png"
//           alt="banner"
//          className="max-h-[90%] w-auto object-contain block"
//   />
//       </div>
//         </div>
//         <div>
//           <div className="relative xl:h-full lg:h-full md:h-full h-screen">
//                   <video src="./videos/bg-video.mp4" playsInline autoPlay muted loop className="blur-md xl:h-full lg:h-full md:h-full h-screen w-full object-cover relative"></video>
//                     <h1 className="xl:text-[53px] lg:text-[48px] md:text-[40px] text-[36px] xl:leading-tight lg:leading-[45px] md:leading-[40px] leading-[40px] font-bold absolute xl:top-[50%] lg:top-[50%] md:top-[50%] top-[30%] left-0 lg:px-16 px-8 xl:w-[50%] lg:w-[60%] md:w-[70%] w-full -translate-y-1/2">Predator Hunting Grounds</h1>
//                     <a
//               href="#"
//               className="group flex items-center text-[22px] text-white leading-tight font-semibold absolute xl:bottom-[32%] lg:bottom-[32%] md:bottom-[32%] bottom-[58%] left-0 lg:px-16 px-8 overflow-hidden"
//             >
//           <span
//             className="
//               flex items-center
//               transition-all duration-500 ease-out
//               group-hover:-translate-x-10
//             "
//           >
//             <span
//               className="
//                 inline-block w-[28px] h-px bg-white me-1
//                 transition-all duration-300
//                 group-hover:opacity-0
//               "
//             ></span>

//             <span
//               className="
//                 transition-all duration-500 ease-out
//               "
//             >
//               Take A Look
//             </span>
//           </span>

//           <span
//           className="
//             relative inline-flex items-center
//             w-[30px] h-px bg-white
//             opacity-0 -translate-x-0
//             transition-all duration-500 ease-out ms-1
//             group-hover:opacity-100 group-hover:-translate-x-10
//             after:content-['.']
//             after:absolute after:-right-0
//             after:-top-1 after:-translate-y-1/2
//             after:text-white after:text-[18px] after:leading-none
//           "
//         ></span>
//         </a>

//       <div
//         ref={el => (imageRef.current[1] = el)}
//        className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none"
//   >
//         <img
//           src="/images/image-2.png"
//           alt="banner"
//           className="max-h-[90%] w-auto object-contain block"
//   />
//       </div>
 
//  </div>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>


//       </Slider>
//     </section>
    
    
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "@/src/data/hero";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
   const heroRef = useRef(null);
   const imageRefs = useRef<HTMLImageElement[]>([]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const animateImage = (index: number) => {
  const img = imageRefs.current[index];
  if (!img) return;

  gsap.killTweensOf(img);

  gsap.fromTo(
    img,
    { opacity: 0, scale: 0.6, y: 40 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }
  );
};


  const waitForSlide = (callback: () => void) => {
    let tries = 0;

    const check = () => {
      const firstImage = imageRefs.current[0];
      if (firstImage) {
        callback();
      } else if (tries < 20) {
        tries++;
        requestAnimationFrame(check);
      }
    };

    requestAnimationFrame(check);
  };


    useEffect(() => {
    waitForSlide(() => animateImage(0));
  }, []);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 80%",
      onEnter: () => animateImage(0),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeSlideIndex) {
        video.play().catch(() => {
          // Ignore autoplay rejection; browser policies vary.
        });
      } else {
        video.pause();
      }
    });
  }, [activeSlideIndex]);


  return (
    <section ref={heroRef} className="hero-section w-full h-screen relative overflow-hidden z-0">

  <button
      id="custom-next"
      className="
        absolute 4xl:bottom-[25%] 3xl:bottom-[22%] 2xl:bottom-[22%] xl:bottom-[15%] lg:bottom-[40%] md:bottom-[40%] bottom-[57%]
        3xl:left-[10%] xl:left-[10%] lg:left-[15%] md:left-[12%] left-[75%]
         rounded-full
        transition-all duration-700 z-20
        hover:shadow-[0_2px_20px_0_#FFFFFF40]
      "
    >
      <Image
        src="/images/icons/right-arrow.png"
        alt="right-arrow"
        width={48}
        height={48}
        className="w-8 h-8 4xl:h-[65px] 4xl:w-[65px] 3xl:h-[55px] 3xl:w-[55px] 2xl:w-[50px] 2xl:h-[50px] xl:h-[45px] xl:w-[45px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[30px] sm:h-[30px]"
      />

      </button>

      <button
      id="custom-prev"
      className="
         absolute 4xl:bottom-[25%] 3xl:bottom-[22%] 2xl:bottom-[22%] xl:bottom-[15%] lg:bottom-[40%] md:bottom-[40%] bottom-[57%]
        xl:left-[0%] lg:left-[0%] md:left-[0%] left-[55%]
        lg:mx-16 mx-8 rounded-full
        transition-all duration-700 z-20
        hover:shadow-[0_2px_20px_0_#FFFFFF40]
      "
    >
      <Image
        src="/images/icons/left-arrow.png"
        alt="left-arrow"
        width={48}
        height={48}
        className="w-8 h-8 4xl:h-[65px] 4xl:w-[65px] 3xl:h-[55px] 3xl:w-[55px] 2xl:w-[50px] 2xl:h-[50px] xl:h-[45px] xl:w-[45px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[30px] sm:h-[30px]"
      />
    </button>

      <Swiper modules={[Navigation, Autoplay]}
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

          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          const activeIndex = swiper.realIndex;
          setActiveSlideIndex(activeIndex);
          animateImage(activeIndex);
        }}

        loop={true}
        speed={1500}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full w-full relative"

        >

{hero.map((item, index) => (
   <SwiperSlide key={index} className="relative h-screen w-full">
          <video
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            src={item.video}
            playsInline
            autoPlay={index === 0}
            muted
            loop
            preload={index === 0 ? "auto" : "none"}
            className="absolute inset-0 w-full h-screen object-cover blur-sm"
          />

          <h1 className="4xl:text-[70px] 3xl:text-[70px] 2xl:text-[60px] xl:text-[53px] lg:text-[48px] md:text-[40px] sm:text-[36px] text-[30px] leading-tight font-bold absolute xl:top-1/2 top-[30%] lg:top-[30%] left-0 px-8 lg:px-16 w-full lg:w-[50%] -translate-y-1/2">
            {item.title}
          </h1>

               <a
              href={item.url}
              className="group flex items-center 4xl:text-[40px] 3xl:text-[35px] 2xl:text-[30px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] text-[18px] text-white leading-tight font-semibold absolute 4xl:bottom-[38%] 3xl:bottom-[34%] 2xl:bottom-[30%] xl:bottom-[32%] lg:bottom-[52%] md:bottom-1/2 bottom-[58%] left-0 lg:px-16 px-8 overflow-hidden"
            >
          <span
            className="
              flex items-center
              transition-all duration-500 ease-out
              group-hover:-translate-x-10
            "
          >
            <span
              className="
                inline-block w-[28px] 4xl:w-[40px] h-px bg-white me-1
                transition-all duration-300
                group-hover:opacity-0
              "
            ></span>

            <span
              className="
                transition-all duration-500 ease-out
              "
            >
              Take A Look
            </span>
          </span>

          <span
          className="
            relative inline-flex items-center
            4xl:w-[40px] w-[30px] h-px bg-white
            opacity-0 -translate-x-0
            transition-all duration-500 ease-out ms-1
            group-hover:opacity-100 group-hover:-translate-x-10
            after:content-['.']
            after:absolute after:-right-0
            after:-top-1 after:-translate-y-1/2
            after:text-white after:lg:text-[18px] after:3xl:text-[25px] after:2xl:text-[20px] after:leading-none
          "
        ></span>
        </a>

          {/* Stick image to bottom */}
          <div className="absolute bottom-0 right-0 w-full flex items-end justify-end pointer-events-none">
         <img
  ref={(el) => {
    if (el) imageRefs.current[index] = el;
  }}

              src={item.image}
              alt="banner"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="4xl:h-[90vh] 3xl:h-[90vh] 2xl:h-[90vh] xl:h-[90vh] h-full object-contain"
            /> 
            {/* <img
  ref={(el) => {
    if (el) imageRefs.current[index] = el;
  }}

              src={item.image}
              alt="banner"
              className="lg:max-h-[90%] md:max-h-[90%] sm:max-h-[50%] max-h-[50%] object-contain"
            /> */}
          </div>
        </SwiperSlide>
))
}
      </Swiper>
    </section>
  );
}
