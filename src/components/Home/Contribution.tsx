"use client"

import { contributions } from "@/src/data/contributions";

type ContributionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Contribution({ id, ...rest }: ContributionProps){
    return(
        <section {...rest} id={id} className="contribution-section bg-[#0A0A0A] lg:p-16 md:p-16 p-8 h-full w-full">
            <div className="lg:flex block items-center justify-between w-full">
                <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tights lg:mb-16 mb-8 text-white font-bold">Our Contribution</h2>
                <div className="group">
                    <a href="#" className="reveal inline-block 3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 py-3 px-5 mb-8 text-[#D50000] group-hover:text-white bg-transparent group-hover:bg-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000] transition-all duration-500 ease-in-out">Explore</a>           
                </div>
                </div>
            <div className="reveal-stagger grid 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-6 gap-5 mb-5">
             
                {contributions.map((contribution) => (
                   
                <a key={contribution.id}  href="#" className="relative group my-2 block overflow-hidden rounded-xl">

                <div className="overflow-hidden lg:py-[40px] lg:-my-[40px] relative rounded-xl">
                    <img 
                    src={contribution.image}
                    alt={`Contribution ${contribution.id}`}
                                      className=" overflow-hidden rounded-xl object-contain transition-transform duration-700 group-hover:scale-110 w-full h-full relative z-20"
/>
                </div>
{/* 
                <div className="xl:block lg:block md:block hidden absolute inset-0 overflow-hidden py-[40px] -my-[40px] z-10 pointer-events-none">

                    <div className="3xl:hidden 2xl:hidden block 
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl contrib-height 3xl:w-[80%] 2xl:w-[90%] w-[75%]
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:-rotate-[8deg]
                    "></div>

                    <div className=" 3xl:hidden 2xl:hidden block
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl contrib-height 3xl:w-[80%] 2xl:w-[90%] w-[75%] 
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:rotate-[8deg]
                    "></div>

                </div> */}

                <div
  className="
    absolute left-0 right-0 
    bottom-0
    h-[900px] w-[800px] overflow-hidden
    flex items-center justify-center
    z-20
    opacity-100

    lg:opacity-0 lg:-bottom-[10px]
    lg:group-hover:opacity-100 lg:group-hover:bottom-0
    transition-all duration-700
  "
>
                    <div className="bg-[#00000099] h-[900px] w-[800px] rounded-xl"></div>

                    <div className="group/button flex items-center 3xl:text-[35px] 2xl:text-[30px] text-[22px] text-white leading-tight font-semibold absolute bottom-6 left-6">

                <span className="
                    flex items-center transition-all duration-500 ease-out
                    group-hover/button:-translate-x-10">
                    <span className="
                        inline-block w-[28px] h-px bg-white me-1
                        transition-all duration-300
                        group-hover/button:opacity-0
                    "></span>

                    <span className="transition-all duration-500 ease-out">
                    Take A Look
                    </span>
                </span>

                <span className="
                    relative inline-flex items-center
                    w-[30px] h-px bg-white
                    opacity-0 -translate-x-0
                    transition-all duration-500 ease-out ms-1
                    group-hover/button:opacity-100 group-hover/button:-translate-x-10
                    after:content-['.']
                    after:absolute after:-right-0
                    after:-top-1 after:-translate-y-1/2
                    after:text-white after:text-[18px] after:leading-none
                "></span>

                    </div>
                </div>
                </a>
                ))}

            </div>
        </section>
    )
}