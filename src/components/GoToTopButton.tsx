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
      className={`fixed 4xl:bottom-12 4xl:right-12 3xl:bottom-10 3xl:right-10 2xl:bottom-8 2xl:right-8 xl:bottom-8 xl:right-8 lg:bottom-8 lg:right-8 md:bottom-7 md:right-7 bottom-6 right-6 z-30 cursor-pointer group transition-opacity duration-300`}
    >
      <div className="bg-black p-2 border-[#444] group-hover:border-black border-[3px] rounded-full flex items-center justify-center transition group-hover:scale-110">

        <img
          src="/images/icons/top.png"
          alt="top"
          className="4xl:w-[30px] 4xl:h-[30px] 3xl:w-[25px] 3xl:h-[25px] 2xl:w-[22px] 2xl:h-[22px] xl:w-[22px] xl:h-[22px] lg:w-[22px] lg:h-[22px] md:w-[20px] md:h-[20px] w-[18px] h-[18px] object-contain"
        />

      </div>

    </div>
  );
};

export default GoToTopButton;