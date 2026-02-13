"use client";

import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQAccordion({ faq, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className="border border-[#FFFFFFCC] rounded-lg overflow-hidden p-4 mb-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="3xl:text-[25px] 2xl:text-[23px] lg:text-[20px] md:text-[18px] text-[16px] font-base text-white">
          {faq.question}
        </span>

        <span
          className="transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
        >
          <img
            src="/images/icons/arrow.png"
            alt="arrow"
            className="w-[24px] h-[24px] object-cover"
          />
        </span>
      </button>

      <div
        className={`pt-2 text-[#ffffffcc] 3xl:text-[20px] 2xl:text-[18px] lg:text-[15px] md:text-[15px] text-[14px] leading-relaxed transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
