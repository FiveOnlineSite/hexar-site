// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import useSlickFix from "@/src/app/hooks/useSlickFix";

// type BlogSectionProps = {
//   id: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// };

// // ------------------------
// // 🔽 NEXT ARROW
// // ------------------------
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function NextArrow({ onClick }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         absolute xl:top-[65%] lg:top-[85%] -top-[15%]
//         xl:-left-[50%] lg:-left-[45%] left-[18%]
//         rounded-full transition-all duration-700
//         hover:shadow-[0_2px_20px_0_#FFFFFF40]
//       "
//     >
//       <Image
//         src="/images/icons/right-arrow.png"
//         alt="right-arrow"
//         width={48}
//         height={48}
//         className="w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10"
//       />
//     </button>
//   );
// }

// // ------------------------
// // 🔽 PREV ARROW
// // ------------------------
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function PrevArrow({ onClick }: any) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         absolute xl:top-[65%] lg:top-[85%] -top-[15%]
//         lg:-left-[58%] left-[5%]
//         rounded-full transition-all duration-700
//         hover:shadow-[0_2px_20px_0_#FFFFFF40]
//       "
//     >
//       <Image
//         src="/images/icons/left-arrow.png"
//         alt="left-arrow"
//         width={48}
//         height={48}
//         className="w-8 h-8 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10"
//       />
//     </button>
//   );
// }

// // ------------------------
// // 🔽 MAIN BLOG SECTION
// // ------------------------
// export default function BlogSection({ id, ...rest }: BlogSectionProps) {
//   useSlickFix();

//   const settings = {
//     infinite: true,
//     speed: 800,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
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
//         blog-section relative lg:flex block
//         justify-center items-start
//         py-8 lg:py-16
//       "
//     >
//       {/* LEFT TEXT AREA */}
//       <div className="lg:w-[40%] relative w-full px-8 lg:ps-16">
//         <h2 className="lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-4 text-white font-bold leading-tight">
//           News & <span className="text-[#D50000]">Blogs</span>
//         </h2>

//         <p className="lg:text-[22px] text-[20px] font-base leading-base text-white">
//           Stay tuned for the latest company news, current trends from the world
//           of game development
//         </p>
//       </div>

//       {/* RIGHT SLIDER */}
//       <div className="lg:w-[60%] w-full lg:pt-2 pt-20">
//         <Slider {...settings}>
//           {/* BLOG CARD 1 */}
//           <div className="hover:shadow-[0_2px_20px_0_#FFFFFF40] group transition-all duration-700 rounded-xl overflow-hidden m-2">
//             <div className="h-[250px] overflow-hidden">
//               <img
//                 src="/images/news-blogs-1.png"
//                 className="bg-contain h-[250px] scale-100 group-hover:scale-125 transition-all duration-700"
//               />
//             </div>

//             <div className="flex items-start justify-center">
//               <h3 className="p-3 lg:text-[22px] text-[20px] font-base leading-base w-[75%]">
//                 How AI is Changing the Gaming World
//               </h3>

//               <h4 className="w-[25%] p-3 text-[18px] font-light text-[#FFFFFFCC]">
//                 24 Nov
//               </h4>
//             </div>
//           </div>

//           {/* BLOG CARD 2 */}
//           <div className="hover:shadow-[0_2px_20px_0_#FFFFFF40] group transition-all duration-700 rounded-xl overflow-hidden m-2">
//             <div className="h-[250px] overflow-hidden">
//               <img
//                 src="/images/news-blogs-1.png"
//                 className="bg-contain h-[250px] scale-100 group-hover:scale-125 transition-all duration-700"
//               />
//             </div>

//             <div className="flex items-start justify-center">
//               <h3 className="p-3 lg:text-[22px] text-[20px] font-base leading-base w-[75%]">
//                 How AI is Changing the Gaming World
//               </h3>

//               <h4 className="w-[25%] p-3 text-[18px] font-light text-[#FFFFFFCC]">
//                 24 Nov
//               </h4>
//             </div>
//           </div>

//           {/* BLOG CARD 3 */}
//           <div className="hover:shadow-[0_2px_20px_0_#FFFFFF40] group transition-all duration-700 rounded-xl overflow-hidden m-2">
//             <div className="h-[250px] overflow-hidden">
//               <img
//                 src="/images/news-blogs-1.png"
//                 className="bg-contain h-[250px] scale-100 group-hover:scale-125 transition-all duration-700"
//               />
//             </div>

//             <div className="flex items-start justify-center">
//               <h3 className="p-3 lg:text-[22px] text-[20px] font-base leading-base w-[75%]">
//                 How AI is Changing the Gaming World
//               </h3>

//               <h4 className="w-[25%] p-3 text-[18px] font-light text-[#FFFFFFCC]">
//                 24 Nov
//               </h4>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

// REQUIRED SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";

type BlogSectionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function BlogSection({ id, ...rest }: BlogSectionProps) {
  const posts = [
    { img: "/images/news-blogs-1.png", date: "24 Nov" },
    { img: "/images/news-blogs-2.png", date: "24 Nov" },
    { img: "/images/news-blogs-1.png", date: "24 Nov" }
  ];

  return (
    <section
      {...rest}
      id={id}
      className="blog-section relative lg:flex block justify-center items-start py-8 lg:py-16"
    >
      {/* LEFT TEXT */}
      <div className="lg:w-[40%] w-full px-8 lg:ps-16">
        <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight lg:mb-8 mb-4 text-white font-bold">
          News & <span className="text-[#D50000]">Blogs</span>
        </h2>

        <p className="reveal 3xl:text-[28px] 2xl:text-[24px] xl:text-[22px] md:text-[20px] text-[18px] leading-base text-white">
          Stay tuned for the latest company news, current trends from the world
          of game development
        </p>
      </div>

      {/* RIGHT SLIDER */}
      <div className="lg:w-[60%] w-full lg:pt-2 pt-20 relative">

        {/* CUSTOM ARROWS */}
        <button
          id="custom-prev"
          className="reveal absolute xl:top-[75%] lg:top-[85%] top-[5%] 
lg:-left-[58%] left-[7%]
rounded-full transition-all duration-700
hover:shadow-[0_2px_20px_0_#FFFFFF40]"
        >
          <Image src="/images/icons/left-arrow.png" width={40} height={40} alt="prev" />
        </button>

        <button
          id="custom-next"
          className="reveal absolute xl:top-[75%] lg:top-[85%] top-[5%] 
   xl:-left-[50%] lg:-left-[45%] left-[20%]
  rounded-full transition-all duration-700
   hover:shadow-[0_2px_20px_0_#FFFFFF40]"
        >
          <Image src="/images/icons/right-arrow.png" width={40} height={40} alt="next" />
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
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
          spaceBetween={0}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },

          }}
          className="mySwiper"
        >

          {/* EACH CARD MUST BE A SEPARATE SLIDE */}
          {posts.map((post, i) => (
            <SwiperSlide key={i}>
              <div className="hover:shadow-[0_2px_20px_0_#FFFFFF40] rounded-xl overflow-hidden m-2 transition-all duration-700 group">
                <div className="h-[250px] overflow-hidden">
                  <img
                    src={post.img}
                    className="h-[250px] w-full object-cover group-hover:scale-125 transition-all duration-700"
                  />
                </div>

                <div className="flex items-start justify-between">
                  <h3 className="reveal p-3 lg:text-[22px] text-[20px] w-[75%]">
                    How AI is Changing the Gaming World
                  </h3>

                  <h4 className="reveal w-[25%] p-3 text-[18px] text-[#FFFFFFCC] text-right">
                    {post.date}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
}
