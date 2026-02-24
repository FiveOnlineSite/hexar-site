// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// type WhyUsProps = {
//   id: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// };

// export default function WhyUs({ id, ...rest }: WhyUsProps) {
//   const settings = {
//     infinite: false,
//     speed: 600,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1.1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       {...rest}
//       id={id}
//       className="
//         why-us-section
//         bg-[#0A0A0A]
//         lg:py-16 md:py-16 py-8
//         w-full
//         bg-[url('/images/why-us-bg.png')]
//         bg-no-repeat bg-right bg-contain
//       "
//     >
//       <div className="lg:px-16 md:px-16 px-8 pb-16">
//         <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-white font-bold leading-tight mb-5">
//           Why Us?
//         </h2>

//         <p className="lg:w-[50%] w-full text-[22px] leading-tight font-base text-white">
//           Artistic mastery, reliable delivery, and complete production trust — all in one place.
//         </p>
//       </div>

//       <Slider {...settings} className="px-4">
//         {/* CARD 1 */}
//         <div className="group bg-black rounded-lg overflow-hidden mx-3">
//           <div className="overflow-hidden">
//             <img
//               src="/images/why-us-1.png"
//               className="
//                 w-full object-cover
//                 h-[320px] lg:h-[420px]
//                 transition-all duration-700
//                 group-hover:scale-105
//               "
//             />
//           </div>

//           <div className="p-4">
//             <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
//               Proven Global Track Record
//             </h2>
//             <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
//               Trusted by leading studios worldwide for consistently high-quality 3D art.
//             </p>
//           </div>
//         </div>

//         {/* CARD 2 */}
//         <div className="group bg-black rounded-lg overflow-hidden mx-3">
//           <div className="overflow-hidden">
//             <img
//               src="/images/why-us-2.png"
//               className="
//                 w-full object-cover
//                 h-[320px] lg:h-[420px]
//                 transition-all duration-700
//                 group-hover:scale-105
//               "
//             />
//           </div>

//           <div className="p-4">
//             <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
//               Artistic Mastery
//             </h2>
//             <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
//               Stunning visuals backed by deep technical production expertise.
//             </p>
//           </div>
//         </div>

//         <div className="group bg-black rounded-lg overflow-hidden mx-3">
//           <div className="overflow-hidden">
//             <img
//               src="/images/why-us-2.png"
//               className="
//                 w-full object-cover
//                 h-[320px] lg:h-[420px]
//                 transition-all duration-700
//                 group-hover:scale-105
//               "
//             />
//           </div>

//           <div className="p-4">
//             <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
//               Artistic Mastery
//             </h2>
//             <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
//               Stunning visuals backed by deep technical production expertise.
//             </p>
//           </div>
//         </div>

//       </Slider>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { whyus } from "@/src/data/whyus";

type WhyUsProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function WhyUs({ id, ...rest }: WhyUsProps) {
  return (
    <section
      {...rest}
      id={id}
      className="
        why-us-section
        bg-[#0A0A0A]
        lg:py-16 md:py-16 py-8
        w-full
        bg-[url('/images/why-us-bg.png')]
        bg-no-repeat bg-right bg-contain border-[#ffffff66] border-t 
      "
    >
      {/* Heading + Paragraph */}
      <div className="lg:px-16 md:px-16 px-8 pb-16">
        <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-white font-bold leading-base mb-5">
          Why Us?
        </h2>

        <p className="reveal lg:w-[50%] w-full 3xl:text-[28px] 2xl:text-[24px] xl:text-[22px] lg:text-[22px] md:text-[20px] text-[18px] leading-base text-white">
          Artistic mastery, reliable delivery, and complete production trust — all in one place.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
      modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={2.4}
        breakpoints={{
          768: { slidesPerView: 2.4},
          480: { slidesPerView: 1.1},
          0: { slidesPerView: 1.1 },
        }}
        className="px-4"
      >
        {whyus.map((item, index) => (
        <SwiperSlide key={index}>
        <div className="group relative bg-[#000] rounded-lg overflow-hidden 3xl:min-h-[400px] 2xl:min-h-[400px] xl:min-h-[410px] h-full transition-all duration-700 mx-2 "> 
          <div className="overflow-hidden"> 
            <img src={item.image} className="reveal w-full object-cover xl:h-[420px] h-full xl:scale-110 scale-100 xl:group-hover:h-[300px] origin-center transition-all duration-700 ease-out " /> 
          </div>  
          <div className="xl:absolute relative 3xl:-bottom-[19%] 2xl:-bottom-[19%] xl:-bottom-[20%] bottom-0 3xl:group-hover:bottom-02xl:group-hover:bottom-0 xl:group-hover:bottom-0 transition-all duration-700 ease-out py-2 pl-4 lg:pr-8 md:pr-6 pr-4 flex flex-col items-start justify-start 3xl:min-h-0 2xl:min-h-0 xl:min-h-[100px] lg:min-h-[210px] md:min-h-[220px] min-h-[220px] bg-[linear-gradient(89.16deg,#0A0A0A_1.81%,#03010E_99.03%)] w-full"> 
            <h2 className="text-white 3xl:text-[32px] 2xl:text-[30px] xl:text-[28px] lg:text-[28px] md:text-[24px] text-[20px] font-semibold leading-tight py-2"> 
              {item.title}
              </h2> 
              <p className="3xl:text-[20px] 2xl:text-[18px] xl:text-[14px] lg:text-[16px] md:text-[14px] text-[14px] font-light min-h-[75px] leading-base pb-4"> 
                {item.content}
                </p> 
              </div> 
            </div>
        </SwiperSlide>
        ))}

      
      </Swiper>
    </section>
  );
}
