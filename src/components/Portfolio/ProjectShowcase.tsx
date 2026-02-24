"use client";

import { projects } from "@/src/data/projects";
import { useState } from "react";

export default function ProjectShowcase(){
    const [showAll, setShowAll] = useState(false)

    return (
        <section id="project-showcase" className="project-showcase-section lg:p-16 md:p-16 p-8">
            <div>
                <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-[#FFFFFF] leading-tight font-bold">Our Project <span className="text-[#D50000]">Showcase</span></h2>
            </div>
            <div className="reveal-stagger grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-8">
                  {projects.filter((projects, index) => showAll || index < 3).map((projects, index) => (
                                               
                <a href={`/projects/${projects.slug}`}
                             key={index} className="relative overflow-hidden group rounded-lg">
                    {/* <img src={project.image} alt={project.title} className="relative 3xl:h-[500px] 2xl:h-[500px] xl:h-[500px] lg:h-[400px] md:h-[400px] h-[200px] w-full object-cover rounded-lg" /> */}
                    <img src={projects.image} alt={projects.title} className="relative h-full w-full object-cover rounded-lg" />

                    <div className="absolute 3xl:-bottom-[200%] 2xl:-bottom-[180%] xl:-bottom-[180%] lg:-bottom-[140%] bottom-0 left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 transition-all duration-700 3xl:px-8 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4 py-4 flex flex-col items-center justify-end">
                        <h5 className="uppercase text-center 3xl:text-[40px] 2xl:text-[30px] xl:text-[25px] lg:text-[25px] md:text-[20px] text-[16px] font-bold lg:leading-base leading-tight mb-2">{projects.title}</h5>
                        {/* <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[14px] text-[12px] leading-tight">{portfolio.content}</p> */}
                    </div>
                </a>
                  ))}

            </div>
            <div className="w-full flex justify-center mt-12 reveal group">
                    <button onClick={() => setShowAll(prev => !prev)} className="reveal inline-block 3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 py-3 px-5 mb-8 text-[#D50000] group-hover:text-white bg-transparent group-hover:bg-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000] transition-all duration-500 ease-in-out">{showAll ? "Show Less" : "Explore More"}</button>           
                
                </div>
        </section>
    )
}