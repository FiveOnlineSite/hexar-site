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
import Image from "next/image";

const darkPlaceholder =
  "data:image/gif;base64,R0lGODlhAQABAPAAABEREf///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

export default function WhyUs() {
  return (
    <section
      className="
        why-us-section section-reveal
        bg-[#0A0A0A]
        lg:py-16 md:py-16 py-8
        w-full
        bg-[url('/images/why-us-bg.png')]
        bg-no-repeat bg-right bg-contain border-[#ffffff66] border-t 
      "
    >
      {/* Heading + Paragraph */}
      <div className="lg:px-16 md:px-16 px-8 pb-16">
        <h2 className="text-reveal 4xl:text-[70px] 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-white font-bold leading-base mb-5">
          Why Us?
        </h2>

        <h6 className="text-reveal lg:w-[50%] w-full 4xl:text-[28px] 3xl:text-[28px] 2xl:text-[24px] xl:text-[22px] lg:text-[22px] md:text-[20px] text-[18px] leading-tight text-white">
          Artistic mastery, reliable delivery, and complete production trust — all in one place.
        </h6>
      </div>

      {/* Swiper Slider */}
      <Swiper
      modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}speed={900}
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
        <div className="group relative bg-[#000] rounded-lg overflow-hidden 3xl:min-h-[570px] 2xl:min-h-[500px] xl:min-h-[420px] h-full transition-all duration-700 mx-2"> 
          <div className="overflow-hidden relative 4xl:h-[700px] 3xl:h-[540px] 2xl:h-[450px] xl:h-[380px] h-[260px]"> 
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 480px) 92vw, (max-width: 768px) 78vw, (max-width: 1200px) 50vw, 33vw"
              quality={50}
              priority={index === 0}
              placeholder="blur"
              blurDataURL={darkPlaceholder}
              className="w-full object-cover scale-1 group-hover:scale-125 origin-center transition-all duration-700 ease-out"
            />
          </div>  
          <div className="xl:absolute relative 4xl:-bottom-[12%] 3xl:-bottom-[14%] 2xl:-bottom-[18%] xl:-bottom-[20%] bottom-0 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 transition-all duration-700 ease-out py-2 pl-4 lg:pr-8 md:pr-6 pr-4 flex flex-col items-start justify-start 3xl:min-h-0 2xl:min-h-0 xl:min-h-[100px] lg:min-h-[210px] md:min-h-[220px] min-h-[220px] bg-[linear-gradient(89.16deg,#0A0A0A_1.81%,#03010E_99.03%)] w-full"> 
            <h4 className="text-white 4xl:text-[34px] 3xl:text-[32px] 2xl:text-[30px] xl:text-[28px] lg:text-[28px] md:text-[24px] text-[20px] font-semibold leading-tight py-2"> 
              {item.title}
              </h4> 
              <p className="4xl:text-[22px] 3xl:text-[20px] 2xl:text-[18px] xl:text-[14px] lg:text-[16px] md:text-[14px] text-[14px] font-light min-h-[75px] leading-base pb-4"> 
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
