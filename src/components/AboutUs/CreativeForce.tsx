export default function CreativeForce() {
  return (
    <section className="our-creative-force-section bg-[#0A0A0A] lg:px-16 lg:py-16 md:px-16 md:py-8 px-16 py-8 border-[#ffffff66] border-t">
    
        <div className="">
            <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-center lg:mb-16 mb-8 text-white font-bold">
        The <span className="text-[#D50000]">Creative Force</span>
      </h2>
        </div>
      
      <div className="relative overflow-hidden">

        <svg
          className="absolute top-0 left-0 w-full h-25 z-10"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path className="lg:block hidden"
            d="M0,0 C360,40 1080,40 1440,0 L1440,0 L0,0 Z"
            fill="#0A0A0A"
          />
          <path className="lg:hidden md:block block"
            d="M0,0 C360,50 1080,50 1440,0 L1440,0 L0,0 Z"
            fill="#0A0A0A"
          />
        </svg>


        <div className="reveal-stagger grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-col-1 gap-4">
            <div className="relative overflow-hidden group transition-all duration-500">

                <img src="./images/team/Nik (1).jpg" className="h-full w-full object-contain relative brightness-50 group-hover:brightness-100 transition-all duration-500" />
               
                 <div className="absolute lg:-bottom-[12%] md:bottom-[15%] bottom-[5%] left-0 lg:px-8 px-4 lg:group-hover:bottom-[10%] transition-all ease-in-out duration-500">
                     <h5 className="lg:text-[24px] md:text-[18px] text-[16px] font-semibold leading-base">Nik John</h5>
                    <p className="lg:text-[16px] md:text-[14px] text-[14px] leading-tight">Co-founder and CEO</p>
                </div>
             </div>
              <div className="relative overflow-hidden group transition-all duration-500">

                <img src="./images/team/Tushank (1).jpg" className="h-full w-full object-contain relative brightness-50 group-hover:brightness-100 transition-all duration-500" />
                
                 <div className="absolute lg:-bottom-[12%] md:bottom-[15%] bottom-[5%] left-0 lg:px-8 px-4 lg:group-hover:bottom-[10%] transition-all ease-in-out duration-500">
                     <h5 className="lg:text-[24px] md:text-[18px] text-[16px] font-semibold leading-base">Tushank K Jaiswal</h5>
                    <p className="lg:text-[16px] md:text-[14px] text-[14px] leading-tight">Co-founder and CAO</p>
                </div>
             </div>
             <div className="relative overflow-hidden group transition-all duration-500">

                <img src="./images/team/Hari.jpg" className="h-full w-full object-contain relative lg:brightness-50 lg:group-hover:brightness-100 transition-all duration-500" />
                
                <div className="absolute lg:-bottom-[12%] md:bottom-[15%] bottom-[5%] left-0 lg:px-8 px-4 lg:group-hover:bottom-[10%] transition-all ease-in-out duration-500">
                     <h5 className="lg:text-[24px] md:text-[18px] text-[16px] font-semibold leading-base">Hari K Nair</h5>
                    <p className="lg:text-[16px] md:text-[14px] text-[14px] leading-tight">Co-founder and CFO</p>
                </div>
             </div>
          
             <div className="relative overflow-hidden group transition-all duration-500">

                <img src="./images/team/Prashant (1).jpg" className="h-full w-full object-contain relative brightness-50 group-hover:brightness-100 transition-all duration-500" />
                
                 <div className="absolute lg:-bottom-[12%] md:bottom-[15%] bottom-[5%] left-0 lg:px-8 px-4 lg:group-hover:bottom-[10%] transition-all ease-in-out duration-500">
                     <h5 className="lg:text-[24px] md:text-[18px] text-[16px] font-semibold leading-base">Prashant Verma</h5>
                    <p className="lg:text-[16px] md:text-[14px] text-[14px] leading-tight">Co-founder and CTO</p>
                </div>
             </div>

            

             </div>

        <svg
          className="absolute -bottom-[1px] left-0 w-full h-28 z-10"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path className="lg:block hidden"
            d="M0,100 C360,60 1080,60 1440,100 L1440,100 L0,100 Z"
            fill="#0A0A0A"
          />
          <path className="lg:hidden md:block block"
            d="M0,100 C360,80 1080,80 1440,100 L1440,100 L0,100 Z"
            fill="#0A0A0A"
          />
        </svg>

      </div>
    </section>
  );
}
