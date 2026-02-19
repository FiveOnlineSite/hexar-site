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
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "@/src/data/hero";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
   const heroRef = useRef(null);
   const sliderRef = useRef(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

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
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 80%",
      onEnter: () => animateImage(0),
    });
  }, []);


  return (
    <section ref={heroRef} className="hero-section w-full h-screen relative overflow-hidden z-0">

  <button
      id="custom-next"
      className="
        absolute xl:bottom-[15%] lg:bottom-[40%] md:bottom-[40%] bottom-[57%]
        3xl:left-[6%] xl:left-[10%] lg:left-[15%] md:left-[12%] left-[75%]
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
        className="w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10"
      />

      </button>

      <button
      id="custom-prev"
      className="
         absolute xl:bottom-[15%] lg:bottom-[40%] md:bottom-[40%] bottom-[57%]
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
        className="w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10"
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
            swiper.params.navigation.prevEl = "#trust-custom-prev";
            swiper.params.navigation.nextEl = "#trust-custom-next";
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
  animateImage(activeIndex);
}}

        loop={true}
        speed={1500}
        spaceBetween={0}
        slidesPerView={1}
        ref={sliderRef} 
        className="h-full w-full relative"

        >

{hero.map((item, index) => (
   <SwiperSlide key={index} className="relative h-screen w-full">
          <video
            src={item.video}
            playsInline
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          />

          <h1 className="xl:text-[53px] lg:text-[48px] md:text-[40px] sm:text-[36px] text-[30px] leading-tight font-bold absolute xl:top-1/2 top-[30%] lg:top-[30%] left-0 px-8 lg:px-16 w-full lg:w-[60%] -translate-y-1/2">
            {item.title}
          </h1>

               <a
              href="#"
              className="group flex items-center xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] text-[18px] text-white leading-tight font-semibold absolute xl:bottom-[32%] lg:bottom-[32%] md:bottom-1/2 bottom-[58%] left-0 lg:px-16 px-8 overflow-hidden"
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
                inline-block w-[28px] h-px bg-white me-1
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
            w-[30px] h-px bg-white
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
          <div className="absolute bottom-0 right-0 h-full w-full flex items-end justify-end pointer-events-none">
         <img
  ref={(el) => {
    if (el) imageRefs.current[index] = el;
  }}

              src={item.image}
              alt="banner"
              className="3xl:h-[800px] 2xl:h-[700px] xl:h-[600px] lg:h-[600px] md:h-[600px] h-auto object-contain"
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
