"use client"

import { useState } from "react";
import PositonsAccordion from "../PositionsAccordion";

export default function OpenPosition() {

      const positions = [
    {
      designation: "3D Props/ Weapons Artist",
      description:
        "A proficient 3D Character Artist should possess a strong foundation in high-poly sculpting using ZBrush, coupled with expertise in modeling and creating rigging-ready topology in Maya or Blender. Core technical skills must also include optimized retopology, meticulous UV mapping, and a thorough understanding of the PBR workflow and texture baking, with texturing executed primarily in Substance Painter.",
    },
    {
      designation: "3D Hair Artist",
      description:
        "A proficient 3D Character Artist should possess a strong foundation in high-poly sculpting using ZBrush, coupled with expertise in modeling and creating rigging-ready topology in Maya or Blender. Core technical skills must also include optimized retopology, meticulous UV mapping, and a thorough understanding of the PBR workflow and texture baking, with texturing executed primarily in Substance Painter.",
    },
    {
      designation: "3D Character Artist",
      description:
        "A proficient 3D Character Artist should possess a strong foundation in high-poly sculpting using ZBrush, coupled with expertise in modeling and creating rigging-ready topology in Maya or Blender. Core technical skills must also include optimized retopology, meticulous UV mapping, and a thorough understanding of the PBR workflow and texture baking, with texturing executed primarily in Substance Painter.",
    },
  ];

      const [activeIndex, setActiveIndex] = useState<number | null>(0);
    
     const handleToggle = (index: number) => {
  setActiveIndex((prev: number | null) => (prev === index ? null : index));
};
    return (
        <section className="open-positions-section p-8 lg:p-16 md:p-16">
                    <div className="">
                    <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight lg:mb-8 mb-4 text-white font-bold">Open Positions</h2>
                        
                        <div className="w-full px-4 reveal-stagger">
                            {positions.map((position, i) => (
                    <PositonsAccordion position={position} key={i} isOpen={activeIndex === i}
                    onToggle={() => handleToggle(i)} />
                  ))}
                        </div>
                    </div>
                </section>
    )
}