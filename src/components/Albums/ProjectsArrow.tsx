"use client";

import { useState } from "react";
import { projects } from "@/src/data/projects";
import Link from "next/link";

interface ProjectsArrowProps {
  projectSlug: string;
}

export default function ProjectsArrow({ projectSlug }: ProjectsArrowProps) {
  const [openProjects, setOpenProjects] = useState(false);

  const filteredProjects = projects.filter(
  (project) => project.slug !== projectSlug
);
  return (
    <>
      {/* TOGGLE BUTTON */}
      {!openProjects && (
      <button
        className="down-arrow absolute left-1/2 bottom-[6%] z-10"
        onClick={() => setOpenProjects((prev) => !prev)}
      >
        <div className="relative bg-[#666666CC] w-10 h-10 p-2 rounded-full">

          <img
            src="/images/icons/down-arrow.png"
            alt="albums-arrow"
            className={`w-[12px] h-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain ${openProjects ? "" : "rotate-180"}`}
         
          />
          </div>
      </button>
      )}

    <div
        className={`absolute bottom-0 left-0 w-full z-10 transition-all duration-500 bg-[#000000cc]
        ${openProjects ? "3xl:h-[70%] 2xl:h-[70%] xl:h-[70%] lg:h-[60%] md:h-[60%] h-[60%]" : "h-0"}`}
      >
      {openProjects && (
      <button
        className="absolute left-1/2 3xl:-top-[2.5%] 2xl:-top-[2.2%] xl:-top-[4.5%] lg:-top-[2.5%] md:-top-[2.5%] -top-[2.6%] z-20"
        onClick={() => setOpenProjects((prev) => !prev)}
      >
        <div className="relative bg-black w-10 h-10 p-2 rounded-full">
            <img
          src="/images/icons/down-arrow.png"
          alt="projects-arrow"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] object-contain transition-transform duration-300 ${
            openProjects ? "" : "rotate-180"
          }`}
        />
        </div>
        
      </button>
      )}
        <div className={`mx-auto grid lg:grid-cols-4 grid-cols-2 gap-2 overflow-y-scroll ${openProjects ? "h-full lg:p-16 md:p-16 p-8" : "h-0 p-0"}`}>
            {filteredProjects.map((project) => (

              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className="group 3xl:h-[350px] 2xl:h-[320px] xl:h-[250px] lg:h-[220px] md:h-[300px] h-[180px] relative rounded-lg border border-[#FFFFFF33] inline-block w-full overflow-hidden"
              >
                <div className="overflow-hidden">
                    <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 origin-center scale-100 group-hover:scale-110 relative rounded-lg"
                />
                </div>
                
                <div className="w-full bg-[#000000] flex items-end absolute bottom-0">
                  <h6 className="text-white text-[18px] font-base p-2">
                    {project.title}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
      </div>

      {/* OVERLAY */}
  
    </>
  );
}
