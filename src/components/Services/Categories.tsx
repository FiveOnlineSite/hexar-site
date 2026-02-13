"use client";

import { useState } from "react";
import CategoriesCard from "../CategoriesCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories } from "@/src/data/categories";

export default function CategoriesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveCard(prev => (prev === id ? null : id));

    // 🔥 FORCE GLOBAL RECALC AFTER DOM UPDATE
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });
  };

  return (
    <section className="lg:p-16 p-8 bg-[#0A0A0A]">
      {categories.map(category => (
        <CategoriesCard
          key={category.id}
          {...category}
          isOpen={activeCard === category.id}
          onToggle={() => handleToggle(category.id)}
        />
        ))}
      
    </section>
  );
}
