// "use client";

// type CategoriesCardProps = {
//   id: number;
//   title: string;
//   image: string;
//   isOpen: boolean;
//   onToggle: () => void;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// };

// export default function CategoriesCard({
//   id,
//   title,
//   image,
//   isOpen,
//   onToggle
// }: CategoriesCardProps) {


//   return (
//     <div className="category-card reveal-stagger border-[#FFFFFF14] border-[3px] rounded-2xl relative group mt-16 mb-36">
//       <div className="p-4 bg-[#0A0A0A]  group-hover:bg-[#000] rounded-2xl transition-all duration-500 shadow-none group-hover:shadow-[0_16px_20px_#00000040]">

//         {/* HEADER */}
//         <div className="relative">
//  <div className="lg:w-[45%] w-full pl-8 py-8">
//           <h2 className="text-[40px] pb-5 font-bold leading-base">{title}</h2>
//           <p className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] pb-10 mb-10 font-normal leading-base">
//             From realistic humans to stylized heroes, we deliver detailed,
//             production-ready character models tailored to your project’s style
//             and pipeline
//           </p>

//           <div className="flex items-center w-full mt-6">
//             <a href="#" className="border-[#D50000] border-[2px] px-8 py-3 text-[19px] font-semibold text-[#D50000] rounded-xl transition-all duration-500 bg-[#0A0A0A] group-hover:bg-[#D50000] group-hover:text-[#fff]">View Portfolio</a>
                    

//             {/* UP ARROW */}
           
//           </div>
//         </div>

//       <div className="w-full">
//         <button
//           onClick={onToggle}
//           className={`absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ${
//             isOpen ? "opacity-0" : "opacity-100"
//           }`}
//         >
//                 <img src="./images/icons/arrow-down.png" className="h-full w-full object-contain" />

//         </button>
//         </div>

//               <div className={`transition-all duration-500 ${isOpen ? "3xl:absolute 2xl:absolute xl:absolute lg:absolute md:relative relative group-hover:lg:right-0 bottom-0 right-0" : "lg:absolute relative lg:group-hover:right-[8%] right-0 bottom-0"} z-10`}>
//                     <img src={image} className="h-full w-full object-contain" />
//             </div>

//         </div>
       
// <div className="w-full">
//           <button
//               onClick={onToggle}
//               className={`transition-opacity absolute bottom-[1%] left-1/2 -translate-x-1/2 z-10 ${
//                 isOpen ? "opacity-100" : "opacity-0"
//               }`}
//             >
//                 <img src="./images/icons/arrow-up.png" alt="" />

//             </button>
// </div>

//         {/* PROCESS SECTION */}
//         <div
//           className={`
//             process-div 
//             transition-all duration-700 ease-in-out
//             overflow-hidden
//             ${isOpen ? "max-h-[2000px] opacity-100 mt-20" : "max-h-0 opacity-0"}
//           `}
//         >
//            <svg
//             className="absolute 3xl:top-[43%] 2xl:top-[43%] xl:top-[43%] lg:top-[43%] md:top-[51%] top-[60%] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
//             viewBox="0 0 1000 3200"
//             preserveAspectRatio="none"
//             >
//             <path
//                 d="
//                 M 350, 150 
//                 C 350, 300 650, 400 650, 550
//                 C 650, 700 350, 800 350, 950
//                 C 350, 1100 650, 1200 650, 1350
//                 "
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="1"
//                 strokeDasharray="15 15" /* This creates the dashed effect */
//                 className={`transition-opacity duration-500 ${
//                 isOpen ? "opacity-100 animate-process-line" : "opacity-0"
//                 }`}
//             />
//             </svg>

//                         <h3 className="reveal text-[36px] font-semibold leading-base ms-8">The Process</h3>
//                         <div className="reveal-stagger my-16 flex items-center justify-center reveal-stagger">
//                             <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
//                                 <div className="3xl:mx-4 2xl:mx-4 xl:mx-4 lg:mx-4 md:mx-4 mx-0 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
//                                 <img src="./images/icons/pre-production-icon.png" alt="pre-production" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
//                                 </div>
//                                 <div className="3xl:px-4 2xl:px-4 xl:px-4 lg:px-4 px-0 w-[50%]">
//                                     <h6 className="text-[16px] font-light leading-base">Step 01</h6>
//                                     <h4 className="text-[20px] font-semibold leading-base py-2">Pre-Production</h4>
//                                     <p className="text-[16px] font-light leading-base">Gathering references and defining technical specifications.</p>
//                                 </div>
//                             </div>

//                         </div>


//                          <div className="reveal-stagger my-16 flex items-center justify-center reveal-stagger">
//                             <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
                                
//                                 <div className="px-4 w-[50%]">
//                                     <h6 className="text-[16px] font-light leading-base">Step 02</h6>
//                                     <h4 className="text-[20px] font-semibold leading-base py-2">Modeling</h4>
//                                     <p className="text-[16px] font-light leading-base">Creating high-quality 3D models based on the approved concept.</p>
//                                 </div>
//                                 <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
//                                 <img src="./images/icons/modeling-icon.png" alt="modeling" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
//                                 </div>
//                             </div>

//                         </div>

//                          <div className="reveal-stagger my-16 flex items-center justify-center reveal-stagger">
//                             <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
//                                 <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
//                                 <img src="./images/icons/texturing-icon.png" alt="pre-production" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
//                                 </div>
//                                 <div className="px-4 w-[50%]">
//                                     <h6 className="text-[16px] font-light leading-base">Step 03</h6>
//                                     <h4 className="text-[20px] font-semibold leading-base py-2">Texturing</h4>
//                                     <p className="text-[16px] font-light leading-base">Applying textures to enhance the realism of the 3D models.</p>
//                                 </div>
//                             </div>

//                         </div>

//                          <div className="reveal-stagger my-16 flex items-center justify-center reveal-stagger">
//                             <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
                                
//                                 <div className="px-4 w-[50%]">
//                                     <h6 className="text-[16px] font-light leading-base">Step 04</h6>
//                                     <h4 className="text-[20px] font-semibold leading-base py-2">Integration</h4>
//                                     <p className="text-[16px] font-light leading-base">Implementing the optimised 3D assets into the game engine.</p>
//                                 </div>
//                                 <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
//                                 <img src="./images/icons/integration-icon.png" alt="integration" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
//                                 </div>
//                             </div>

//                         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CategoriesCardProps = {
  id: number;
  title: string;
  description: string;
  services_img: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function CategoriesCard({
  id,
  title,
  description,
  services_img,
  isOpen,
  onToggle,
}: CategoriesCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
  if (!isOpen || !processRef.current) return;

  const steps = processRef.current.querySelectorAll<HTMLElement>(".process-step");

  // Reset all items
  steps.forEach(step => {
    const items = step.querySelectorAll<HTMLElement>(".process-item");
    gsap.set(items, { opacity: 0, y: 30 });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const step = entry.target as HTMLElement;
        const items = step.querySelectorAll<HTMLElement>(".process-item");

        gsap.to(items, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
        });

        observer.unobserve(step); // 🔥 animate once
      });
    },
    {
      root: null,
      threshold: 0.3,
    }
  );

  steps.forEach(step => observer.observe(step));

  return () => observer.disconnect();
}, [isOpen]);


  return (
<div
      ref={cardRef}
      className="category-card border-[#FFFFFF14] border-[3px] rounded-2xl relative group xl:mt-40 lg:mt-26 mt-5 xl:mb-10 lg:mb-10 mb-5"
    >
      <div className="p-4 pb-0 bg-[#0A0A0A] group-hover:bg-[#000] rounded-2xl transition-all duration-500 shadow-none group-hover:shadow-[0_16px_20px_#00000040]">

        {/* HEADER */}
        <div className="relative">
          <div className="lg:w-[45%] w-full lg:pl-8 pl-0 py-8">
            <h2 className="lg:text-[40px] md:text-[35px] text-[30px] pb-5 font-bold lg:leading-base leading-tight">
              {title}
            </h2>

            <p className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] pb-10 mb-10 font-normal leading-base">
             {description}
            </p>

            <div className="flex items-center w-full mt-6">
              <a
                href="#"
                className="border-[#D50000] border-[2px] px-8 py-3 3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] font-semibold text-[#D50000] rounded-xl transition-all duration-500 ease-in-out bg-[#0A0A0A] group-hover:bg-[#D50000] group-hover:text-[#fff]"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* DOWN ARROW */}
          <button
            onClick={onToggle}
            className={`absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <img
              src="./images/icons/arrow-down.png"
              className="h-full w-full object-contain"
            />
          </button>

          {/* IMAGE */}
          <div
            className={`transition-all duration-500 z-10 ${
              isOpen
                ? "lg:absolute md:relative relative bottom-0 right-0"
                : "lg:absolute relative lg:group-hover:right-[8%] right-0 bottom-0"
            }`}
          >
            <img src={services_img} className="xl:h-[450px] lg:h-[380px] md:h-[300px] h-[400px] w-full object-contain" />
          </div>
        </div>

        {/* UP ARROW */}
        <button
          onClick={onToggle}
          className={`absolute bottom-[1%] left-1/2 -translate-x-1/2 z-10 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src="./images/icons/arrow-up.png" />
        </button>

        {/* PROCESS SECTION */}
        <div
          ref={processRef}
          className={`
            process-div transition-all duration-700 ease-in-out overflow-hidden
            ${isOpen ? "max-h-[2000px] opacity-100 mt-20" : "max-h-0 opacity-0"}
          `}
        >
          {/* SVG LINE */}
          <svg className="absolute 3xl:block 2xl:block xl:block lg:block md:hidden hidden 3xl:top-[43%] 2xl:top-[43%] xl:top-[46%] lg:top-[48%] md:top-[58%] top-[65%] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0" 
          viewBox="0 0 1000 3400" 
          preserveAspectRatio="none" > 
          <path d=" M 350, 150 C 350, 300 650, 400 650, 550 C 650, 700 350, 800 350, 950 C 350, 1100 650, 1200 650, 1350 " 
          fill="none" 
           stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2" 
strokeDasharray="5 5"
strokeLinecap="round"
vectorEffect="non-scaling-stroke"
          className={`transition-opacity duration-500 ${ isOpen ? "opacity-100 animate-process-line" : "opacity-0" }`} />
           </svg>

           <svg
  className="absolute 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:block block top-[56%] -left-[3%] w-full h-full pointer-events-none z-0"
  viewBox="-200 -200 1600 4200"
  preserveAspectRatio="none"
>
  <path
    d="
      M 350 180
      C 350 350 950 450 950 600
      C 950 750 350 850 350 1000
      C 350 1150 950 1250 950 1400
    "
    fill="none"
    stroke="white"
    strokeWidth="1"
    strokeDasharray="8 20"
      className={`transition-opacity duration-500 ${ isOpen ? "opacity-100 animate-process-line" : "opacity-0" }`}            

  />
</svg>
          <h3 className="lg:text-[36px] md:text-[30px] text-[25px] font-semibold leading-base lg:ms-8 ms-0">
            The Process
          </h3>

          <div className="flex flex-col justify-center items-center">
            {/* STEP 01 */}
          <div className="lg:w-[55%] md:w-[80%] w-full process-step my-4 flex items-center justify-evenly">
            <div className="process-item bg-[#333333] rounded-full flex items-center justify-center lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[72px] h-[72px]">
              <img src="./images/icons/pre-production-icon.png" className="lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] object-contain" />
            </div>
            <div className="process-item 3xl:px-4 2xl:px-4 xl:px-4 lg:px-4 px-0 w-[50%]">
              <h6 className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Step 01</h6>
              <h4 className="lg:text-[20px] md:text-[18px] text-[16px] font-semibold leading-base py-2">Pre-Production</h4>
              <p className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Gathering references and defining specifications.</p>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="lg:w-[55%] md:w-[80%] w-full process-step my-4 flex items-center justify-evenly">
            <div className="process-item 3xl:px-4 2xl:px-4 xl:px-4 lg:px-4 px-0 w-[50%]">
              <h6 className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Step 02</h6>
              <h4 className="lg:text-[20px] md:text-[18px] text-[16px] font-semibold leading-base py-2">Modeling</h4>
              <p className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">High-quality character modeling.</p>
            </div>
            <div className="process-item bg-[#333333] rounded-full flex items-center justify-center lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[72px] h-[72px]">
              <img src="./images/icons/modeling-icon.png" className="lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] object-contain" />
            </div>
          </div>

          {/* STEP 03 */}
          <div className="lg:w-[55%] md:w-[80%] w-full process-step my-4 flex items-center justify-evenly">
           <div className="process-item bg-[#333333] rounded-full flex items-center justify-center lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[72px] h-[72px]">
              <img src="./images/icons/texturing-icon.png" className="lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] object-contain" />
            </div>
            <div className="process-item 3xl:px-4 2xl:px-4 xl:px-4 lg:px-4 px-0 w-[50%]">
              <h6 className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Step 03</h6>
              <h4 className="lg:text-[20px] md:text-[18px] text-[16px] font-semibold leading-base py-2">Texturing</h4>
              <p className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Applying realistic materials.</p>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="lg:w-[55%] md:w-[80%] w-full process-step mt-4 mb-8 flex items-center justify-evenly">
            <div className="process-item 3xl:px-4 2xl:px-4 xl:px-4 lg:px-4 px-0 w-[50%]">
              <h6 className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Step 04</h6>
              <h4 className="lg:text-[20px] md:text-[18px] text-[16px] font-semibold leading-base py-2">Integration</h4>
              <p className="lg:text-[16px] md:text-[14px] text-[12px] font-light leading-base">Engine-ready delivery.</p>
            </div>
             <div className="process-item bg-[#333333] rounded-full flex items-center justify-center lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[72px] h-[72px]">
              <img src="./images/icons/integration-icon.png" className="lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] object-contain" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
