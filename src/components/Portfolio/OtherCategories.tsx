import { othercategories } from '@/src/data/othercategories'

const OtherCategories = () => {
  return (
     <section id="othercategories" className='othercategories-section lg:p-16 md:p-16 p-8'>
      <div className="reveal-stagger grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-8">
                      {othercategories.map((categories) => (
                                                   
                    <a href={`/showreel/${categories.slug}`}
                                 key={categories.id} className="relative overflow-hidden group rounded-lg">
                        {/* <img src={project.image} alt={project.title} className="relative 3xl:h-[500px] 2xl:h-[500px] xl:h-[500px] lg:h-[400px] md:h-[400px] h-[200px] w-full object-cover rounded-lg" /> */}
                        <img src={categories.image} alt={categories.title} className="relative 3xl:h-[809px] 2xl:h-[665px] xl:h-[518px] lg:h-[375px] md:h-[500px] h-full w-full object-cover rounded-lg" />
    
                        <div className="absolute 3xl:-bottom-[200%] 2xl:-bottom-[180%] xl:-bottom-[180%] lg:-bottom-[140%] bottom-0 left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 transition-all duration-700 3xl:px-8 2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4 py-4 flex flex-col items-center justify-end">
                            <h5 className="uppercase text-center 3xl:text-[40px] 2xl:text-[30px] xl:text-[25px] lg:text-[25px] md:text-[20px] text-[16px] font-bold lg:leading-base leading-tight mb-2">{categories.title}</h5>
                            {/* <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[14px] text-[12px] leading-tight">{portfolio.content}</p> */}
                        </div>
                    </a>
                      ))}
    
                </div>
     </section>
  )
}

export default OtherCategories
