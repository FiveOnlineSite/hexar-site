// "use client";

// import { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Timeline() {
//   // const sectionRef = useRef<HTMLDivElement | null>(null);

// //  useLayoutEffect(() => {
// //   const ctx = gsap.context(() => {

// //     const totalCards = 3;
// // const scrollPerCard = window.innerHeight * 0.9;

// //     gsap.set(".card1", { xPercent: 0, scale: 1, zIndex: 3 });
// //     gsap.set(".card2", { xPercent: 100, scale: 0.95, zIndex: 2, opacity: 0 });
// //     gsap.set(".card3", { xPercent: 120, scale: 0.9, zIndex: 1, opacity: 0 });

// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: sectionRef.current,
// //         start: "top top",
// //         end: `+=${totalCards * scrollPerCard}`,
// //         pin: true,
// //         pinSpacing:  true,
// //         scrub: true,
// //         anticipatePin: 1,
// //         fastScrollEnd: true,
// //         invalidateOnRefresh: true,
// //       },
// //     });

// //     tl.to(".card2", {
// //       xPercent: 0,
// //       scale: 1,
// //       opacity: 1,
// //       zIndex: 3,
// //     })
// //       .to(
// //         ".card1",
// //         {
// //           xPercent: -12,
// //           scale: 0.92,
// //           zIndex: 2,
// //         },
// //         "<"
// //       )
// //       .to(".card3", {
// //         xPercent: 0,
// //         scale: 1,
// //         opacity: 1,
// //         zIndex: 3,
// //       })
// //       .to(
// //         ".card2",
// //         {
// //           xPercent: -12,
// //           scale: 0.92,
// //           zIndex: 2,
// //         },
// //         "<"
// //       );
      
// //    ScrollTrigger.refresh();
// //   }, sectionRef);


// //   return () => ctx.revert(); // ✅ kills timeline + ScrollTrigger safely

//   useLayoutEffect(() => {
//   const ctx = gsap.context(() => {
//     const cards = gsap.utils.toArray<HTMLElement>(
//       ".stacking-cards .card"
//     );

//     if (!cards.length) return;

//     const totalCards = cards.length - 1;

//     const introCard = document.querySelector(
//       ".stacking-cards .card-intro"
//     ) as HTMLElement | null;

//     const wrapper = document.querySelector(
//       ".stacking-cards-wrapper"
//     ) as HTMLElement | null;

//     const cardWidth = introCard?.offsetWidth ?? 0;
//     const containerWidth = wrapper?.offsetWidth ?? 0;

//     const gap = 24;
//     const offset =
//       totalCards > 1
//         ? (containerWidth - cardWidth) / (totalCards - 1)
//         : 0;

//     gsap.set(cards, {
//   zIndex: (i) => cards.length - i,
// });

//     gsap.to(cards, {
//       x: (i) =>
//         i === 0
//           ? 0
//           : -i * cardWidth + i * offset - offset - gap * i,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".stacking-cards",
//         pin: true,
//         scrub: true,
//         markers: true,
//         start: "top top",
//         end: `+=${totalCards * 100}%`,
//       },
//     });
//   });

//   return () => ctx.revert();
// }, []);

//   return (
//     // <section ref={sectionRef} className="our-timeline-section bg-[#0A0A0A] w-full flex items-center justify-center overflow-visible py-16" style={{ height: "100vh" }} >
      
//     //     <div className="relative w-[75vw] h-[450px] overflow-visible">
//     //     <div className="card1 absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
//     //   <div className="lg:w-[60%] w-full">
//     //     <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">1</h2>
//     //     <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">Hexar Studios expanded globally...</p>
//     //     <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">Hexar Studios expanded globally...</p>
//     //   </div>
//     //   <div className="lg:w-[30%] w-full">
//     //      <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
//     //   </div>
//     // </div>

//     // <div className="card2 absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
//     //   <div className="lg:w-[60%] w-full">
//     //     <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">2</h2>
//     //     <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">Hexar Studios expanded globally...</p>
//     //     <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">Hexar Studios expanded globally...</p>
//     //   </div>
//     //   <div className="lg:w-[30%] w-full">
//     //      <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
//     //   </div>
//     // </div>

//     // <div className="card3 absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
//     //   <div className="lg:w-[60%] w-full">
//     //     <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">3</h2>
//     //     <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">Hexar Studios expanded globally...</p>
//     //     <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">Hexar Studios expanded globally...</p>
//     //   </div>
//     //   <div className="lg:w-[30%] w-full">
//     //      <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
//     //   </div>
//     // </div>
//     //     </div>
      
//     // </section>
//     <section className="relative h-screen overflow-hidden stacking-cards">
//   <div className="stacking-cards-wrapper h-full flex items-center justify-center">
//     <div className="card-stack relative h-[75%] w-[90vw] max-w-[1200px]">
      
//       {/* Intro Card */}
//       <div className="card card-intro absolute inset-0">
//         <div className="card-inner h-full rounded-xl border border-white bg-yellow-400 p-16 flex items-center justify-center text-5xl font-bold">
//           0
//         </div>
//       </div>

//       {[1, 2, 3, 4, 5, 6].map((num) => (
//         <div key={num} className="card card-slide absolute inset-0">
//           <div className="card-inner h-full rounded-xl border border-white bg-yellow-400 p-16 flex items-center justify-center text-5xl font-bold">
//             {num}
//           </div>
//         </div>
//       ))}

//     </div>
//   </div>
// </section>

//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Timeline() {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   useEffect(() => {
//     // gsap.context handles the "double-call" in Strict Mode automatically
//     const ctx = gsap.context(() => {
      
//       gsap.fromTo(
//         sectionRef.current,
//         { translateX: 0 },
//         {
//           translateX: "-300vw",
//           ease: "none",
//           scrollTrigger: {
//             trigger: triggerRef.current,
//             start: "top top",
//             end: "+=2000", // Using a relative end value is more stable
//             scrub: 0.6,
//             pin: true,
//             // AnticipatePin avoids jumps when the pinning starts
//             anticipatePin: 1, 
//             // InvalidateOnRefresh ensures calculations reset on window resize
//             invalidateOnRefresh: true,
//           },
//         }
//       );
//     });

//     return () => {
//       // This kills the ScrollTrigger and removes all pinning styles/padding
//       ctx.revert(); 
//     };
//   }, []);

//   return (
//     <section className="scroll-outer-section">
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className="scroll-inner-section">
//           <div className="scroll-section">
//             <h3>Section 1</h3>
//           </div>
//           <div className="scroll-section">
//             <h3>Section 2</h3>
//           </div>
//           <div className="scroll-section">
//             <h3>Section 3</h3>
//           </div>
//           <div className="scroll-section">
//             <h3>Section 4</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

export default function Timeline() {
  const cards = [
    { id: 1, image:"./images/timeline/01. Neolibyan.png", title: "2017 — Independent Beginnings", text: "Head Hoppers and Ares were founded in 2017 as independent studios, each focusing on different strengths within game art production." },
    { id: 2, image:"./images/timeline/02. Marshal.png", title: "2018–2024 — Growing in Parallel", text: "While operating separately, both studios grew side by side — building solid pipelines, reliable teams, and a shared commitment to quality." },
    { id: 3, image:"./images/timeline/03. Porkman-1.png", title: "2024–2025 — Complementary Strengths", text: "Over time, a natural synergy emerged between the two studios — enabling end-to-end production capabilities through complementary strengths." },
    { id: 4, image:"./images/timeline/04. Todman-1.png", title: "2025-2026 — Hexar Studios", text: "In 2025, Head Hoppers and Ares came together under Hexar Studios, uniting 8 years of experience into a single, focused game art studio built for scale, consistency, and long-term partnerships." },
    
  ];

  return (
      <section className="our-timeline-section relative h-auto lg:p-16 md:p-16 p-8 flex flex-col items-center">
        <div className="text-left w-full mb-8">
            <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-white font-bold">The Hexar <span className="text-[#D50000]">Timeline</span></h2>

        </div>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
              sticky top-10 
              p-8
              w-full h-full bg-black
              rounded-3xl border border-[#ffffff66] shadow-[0_16px_20px_0_#D500001A]
              flex items-center justify-center
              lg:mb-[5vh] md:mb-[10vh] mb-[5vh]
            `}
            style={{
              // Higher z-index ensures newer cards appear on TOP of older ones
              zIndex: index + 1,
              // Optional: adds a slight downward offset to see the edges of previous cards
              top: `${80 + (index * 20)}px` 
            }}
          >
            <div className="reveal-stagger w-full flex lg:flex-row md:flex-row flex-col-reverse items-center justify-between">
              <div className="lg:w-[70%] md:w-[70%] w-full">
                  <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold lg:mb-16 md:mb-10 mb-8 leading-tight">{card.title}</h2>
                  <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">{card.text}</p>
              </div>
                <div className="lg:w-[30%] md:w-[30%] w-full lg:mb-0 md:mb-0 mb-5 inline-block">
                <img src={card.image} alt="timeline" className="w-full lg:h-[500px] md:h-[500px] h-[250px] object-contain" />
                </div>
              </div>
          </div>
        ))}
      </section>
  );
}