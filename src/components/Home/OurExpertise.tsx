"use client"
import { expertise } from "@/src/data/expertise";

type OurExpertiseProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function OurExpertise({ id, ...rest }: OurExpertiseProps){
    return (
        <section {...rest} id={id} className="our-expertise-seciton lg:p-16 md:p-16 p-8 bg-[#0A0A0A] bg-[url('/images/our-expertise-bg.png')] bg-contain bg-right-bottom bg-no-repeat bg-[length:60%]">
            <div className="lg:flex block items-center justify-between w-full">
                <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight lg:mb-8 mb-4 text-white font-bold">Our Expertise</h2>
                
                <div className="group">
                    <a href="#" className="reveal inline-block 3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 py-3 px-5 mb-8 text-[#D50000] group-hover:text-white bg-transparent group-hover:bg-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000] transition-all duration-500 ease-in-out">Explore</a>           
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-4 md:gap-4 gap-2 reveal-stagger">
             
                {expertise.map((expertiseItem, index) => (
                   
                <div key={index}  className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src={expertiseItem.img}
                    alt={expertiseItem.title}
                    className="relative z-0 w-full 3xl:h-[500px] 2xl:h-[500px] xl:h-[500px] lg:h-[400px] md:h-[400px] h-[200px] object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20 text-center
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] xl:text-[25px] lg:text-[25px] md:text-[20px] text-[16px] 3xl:font-bold 2xl:font-bold lxl:font-bold lg:font-bold md:font-bold font-base
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    {expertiseItem.title}
                </h2>

                </div>
                ))}

                
            </div>
        </section>
    )
}