import { whyus } from "@/src/data/whyus";

export default function WhyWeRock() {
    return (
        <section className="bg-[#0A0A0A] why-we-rock-section lg:p-16 md:p-16 p-8 border-[#ffffff66] border-t">
            <div className="lg:w-[50%] w-full">
               <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-white font-bold mb-5">
          Why We <span className="text-[#D50000]">Stand Out</span>
        </h2>

        <p className="reveal w-full 3xl:text-[28px] 2xl:text-[24px] xl:text-[22px] md:text-[20px] text-[18px] leading-base text-white">
          Artistic mastery, reliable delivery, and complete production trust — all in one place.
        </p>
            </div>
        <div className="reveal-stagger grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-col-1 gap-4 lg:my-12 md:my-10 my-8">
            {whyus.map((item, index) => (
                <div key={index} className="group mb-2 relative bg-black rounded-lg overflow-hidden h-full transition-all duration-700"> 
                    <img src={item.image} className="w-full xl:object-cover lg:object-cover object-cover xl:h-full h-[255px] relative overflow-hidden" /> 
                    <div className="xl:absolute relative 3xl:-bottom-[25%] 2xl:-bottom-[30%] xl:-bottom-[32%] bottom-0 xl:group-hover:bottom-[0%] transition-all duration-700 ease-out p-2 bg-black"> 
                        <h2 className="3xl:text-[30px] 2xl:text-[25px] xl:text-[22px] lg:text-[22px] md:text-[20px] text-[18px] font-semibold leading-tight pb-2">{item.title}</h2> 
                        <p className="3xl:text-[18px] 2xl:text-[18px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-[12px] 3xl:min-h-[100px] 2xl:min-h-[100px] xl:min-h-[80px] font-light leading-base pb-4">{item.content}</p>
                    </div> 
            </div>
                ))}
            
            </div>
        </section>
    )
}