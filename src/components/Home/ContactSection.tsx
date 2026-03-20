
export default function ContactSection (){
    return (
   <section
  className="section-reveal
    relative
    w-full
    lg:h-[590px] h-full
    bg-[url('/images/contact-section-bg.png'),_linear-gradient(89deg,#0A0A0A,#03010E)]
    bg-contain bg-no-repeat xl:bg-[90%] lg:bg-[90%] bg-[100%]
    p-8 lg:p-16 bg-fixed border-[#ffffff66] border-b
  "
>
    <div className="w-full flex flex-col items-start justify-center h-full">
        <h2 className="text-reveal 4xl:text-[70px] 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-white font-bold">
            Say <span className="text-[#D50000]">Hello</span>! &<br /> Let’s Create Together
        </h2>

<div className="group mt-16 text-reveal">
        <a href="/contact-us" className="inline-block lg:px-10 md:px-8 px-6 lg:py-4 md:py-4 py-3 rounded-xl border border-transparent group-hover:bg-transparent bg-[#D50000] group-hover:border-[#D50000] group-hover:text-[#D50000] 4xl:text-[22px] 3xl:text-[20px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-base font-semibold transition-all duration-500 ease-in-out">
            Contact Us
        </a>
</div>
        
    </div>
</section>


    )
}