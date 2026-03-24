import { othercategories } from '@/src/data/othercategories'
import Link from 'next/dist/client/link'

const OtherCategories = () => {
  return (
     <section id="showreels" className='section-reveal showreels-section lg:p-16 md:p-16 p-8'>
      <div>
                <h2 className="text-reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] text-[#FFFFFF] leading-tight font-bold">Showreels</h2>
            </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:mt-10 mt-8">
                      {othercategories.map((categories, index) => (
                                                   
                    <Link key={index}
              href={`/showreels/${categories.slug}`}
              className="portfolio group h-full"
            >

              <div className="group-hover:shadow-[0px_16px_20px_0px_#D500001A] overflow-hidden shadow-[0_4px_16px_0_#00000033] relative rounded-lg h-full transition-all duration-700 mx-2">

                <div className="overflow-hidden">
                  <img
                    src={categories.image}
                    className="w-full object-contain h-full scale-100 xl:group-hover:scale-150 origin-center transition-all duration-700 ease-out rounded-lg"
                  />
                </div>

                <div className="w-full inline-block xl:absolute relative 4xl:-bottom-[10%] 3xl:-bottom-[13%] 2xl:-bottom-[18%] xl:-bottom-[18%] bottom-0 group-hover:bottom-0 transition-all duration-700 ease-out py-2 px-4 bg-[linear-gradient(89.16deg,#0A0A0A_1.81%,#03010E_99.03%)]">

                  <h4 className="4xl:text-[38px] 3xl:text-[35px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">
                    {categories.title}
                  </h4>

                  <div className="w-full"> <div className=" group/button flex items-center 4xl:text-[32px] 3xl:text-[30px] 2xl:text-[28px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-[16px] text-white leading-tight font-semibold relative lg:p-4 overflow-hidden " > <span className=" flex items-center transition-all duration-500 ease-out group-hover/button:-translate-x-10 " > <span className=" inline-block w-[28px] h-px bg-white me-1 transition-all duration-300 group-hover/button:opacity-0 " ></span> <span className=" transition-all duration-500 ease-out " > Explore Now </span> </span> <span className=" relative inline-flex items-center w-[30px] h-px bg-white opacity-0 transition-all duration-500 ease-out ms-1 group-hover/button:opacity-100 group-hover/button:-translate-x-10 after:content-['.'] after:absolute after:-right-0 after:-top-1 after:-translate-y-1/2 after:text-white after:text-[20px] after:leading-none " > </span> </div> </div>

                </div>
              </div>

            </Link>
                      ))}
    
                </div>
     </section>
  )
}

export default OtherCategories
