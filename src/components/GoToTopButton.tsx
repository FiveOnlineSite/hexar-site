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
      className={`fixed bottom-6 right-6 z-50 w-[60px] h-[60px] cursor-pointer group transition-opacity duration-300`}
    >
      <div className="w-[45px] h-[45px] bg-black border-[#444] group-hover:border-black border-[3px] rounded-full flex items-center justify-center transition group-hover:scale-110">

        <img
          src="/images/icons/top.png"
          alt="top"
          className="w-[22px] h-[22px] object-contain"
        />

      </div>

    </div>
  );
};

export default GoToTopButton;