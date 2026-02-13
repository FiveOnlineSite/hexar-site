// "use client";

// import { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import useSlickFix from "@/src/app/hooks/useSlickFix";

// type ClientsSectionProps = {
//   id: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// };

// export default function Clients({ id, ...rest }: ClientsSectionProps) {

//   useSlickFix();

//   const settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     speed: 600,
//     rows: 2,
//     slidesPerRow: 1,

//     slidesToShow: 6,
//     slidesToScroll: 6,

//     arrows: false,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };



//   return (
//     <section {...rest} id={id} className="clients-section px-0 lg:px-16 md:px-16 p-8 overflow-hidden">

//       <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-center lg:mb-16 mb-8 text-white font-bold leading-tight">
//         Our Clients
//       </h2>

//       <Slider {...settings} className="h-full">

//         {/* All clients inside <div> wrappers */}
//         {[
//           "client-1","client-3","client-2","client-4","client-6",
//           "client-5","client-8","client-7","client-10","client-9",
//           "client-12","client-11","client-14","client-13",
//         ].map((name, i) => (
//           <div key={i}>
//             <img
//               src={`/images/clients/${name}.png`}
//               alt={name}
//               className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
//             />
//           </div>
//         ))}

//       </Slider>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type ClientsSectionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Clients({ id, ...rest }: ClientsSectionProps) {
  const clients = [
    "Artifact", "Awe Interactive", "BBW", "BCC", "Enigmatrix", "Frontier", "HF", "Hutch", "Illfonic", "Liithos", "Obsidian", "Pathea", "Piomotion", "Plarium", "Rivet", "Romero", "Sulfuric", "Turtle Rock - 2", "Ubisoft", "Wolcen", "World Maker 2", "Meta"
   ];

  // Split into chunks of 2 (to simulate rows)
  const rows = [];
  for (let i = 0; i < clients.length; i += 2) {
    rows.push([clients[i], clients[i + 1]]);
  }

  return (
    <section
      {...rest}
      id={id}
      className="clients-section px-0 lg:py-16 md:py-16 py-8 overflow-hidden"
    >
      <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-center lg:mb-16 mb-8 text-white font-bold">
        Our Clients
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        spaceBetween={0}
        slidesPerView={6}
        breakpoints={{
          1200: { slidesPerView: 6 },
          991: { slidesPerView: 4 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="w-full"
      >
        {rows.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col">
              {pair.map(
                (client) =>
                  client && (
                    <div key={client} className="revealpointer-events-auto border h-[172px] border-white/30 p-2 group overflow-hidden">
                      <img
                        src={`/images/clients/${client}.png`}
                        className="w-full h-full object-contain
transition-transform duration-700 ease-out
group-hover:scale-50"
                        alt={client}
                      />
                    </div>
                  )
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
