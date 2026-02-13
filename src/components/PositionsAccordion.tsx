type PositionsItem = {
  designation: string;
  description: string;
};

type PositionsAccordionProps = {
  position: PositionsItem;
  isOpen: boolean;
  onToggle: () => void;
};

export default function PositonsAccordion({ position, isOpen, onToggle }: PositionsAccordionProps) {

  const scrollToApply = () => {
  const el = document.getElementById("apply-now-section");
  if (!el) return;

  const yOffset = -100; // adjust for header height
  const y =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

    return (
        <div className="border-b border-[#FFFFFFCC] overflow-hidden py-2 mb-2">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="3xl:text-[40px] 2xl:text-[35px] lg:text-[30px] md:text-[25px] text-[20px] font-base text-white">
          {position.designation}
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
        className={`pt-6 text-[#ffffffcc] 3xl:text-[20px] 2xl:text-[18px] lg:text-[15px] md:text-[15px] text-[14px] leading-relaxed transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>
        {position.description}

        </div>
        <div className="inline-flex justify-end w-full mb-5 group">
        <a href='mailto:career@hexarstudios.com' className="group-hover:bg-transparent border group-hover:text-[#D50000] group-hover:border-[#D50000] border-transparent 3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px] font-bold leading-base py-3 px-8 bg-[#D50000] text-white rounded-xl lg:mt-4 md:mt-4 mt-6 inline-block transition-all duration-500 ease-in-out">Apply Now</a>

        </div>
      </div>
    </div>
    ) 
}