"use client";

const GoToTopButton = () => {

  const handleTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  document.body.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <div
      onClick={handleTop}
      className={`fixed lg:bottom-8 lg:right-8 md:bottom-7 md:right-7 bottom-6 right-6 z-30 cursor-pointer group transition-opacity duration-300`}
    >
      <div className="bg-black p-2 border-[#444] group-hover:border-black border-[3px] rounded-full flex items-center justify-center transition group-hover:scale-110">

        <img
          src="/images/icons/top.png"
          alt="top"
          className="lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] w-[18px] h-[18px] object-contain"
        />

      </div>

    </div>
  );
};

export default GoToTopButton;