

import { projects } from "@/src/data/projects";
import Link from "next/link";

interface ProjectsPageProps {
  params: Promise<{ project: string }>;
}

export default async function ProjectsPage({params}: ProjectsPageProps){
  
const {project} = await params;
const currentProject = projects.find((p) => p.slug === project)

if(!currentProject){
  return <h1>Project Not Found</h1>
}
    return (
          <section className="3xl:mx-20 2xl:mx-18 xl:mx-16 mx-0 categories-banner-section mt-[100px] lg:p-16 md:p-16 p-8">
            <div className="3xl:flex 2xl:flex xl:flex lg:flex md:flex block items-center justify-between">
               <h1 className="reveal 3xl:text-[45px] 2xl:text-[43px] xl:text-[38px] lg:text-[38px] md:text-[34px] text-[30px] font-bold leading-base uppercase">{currentProject.title}</h1>
            {/* <p className="reveal text-[15px] font-light 3xl:w-[25%] 2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[35%] 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-5 w-full leading-base">{currentProject.content}</p> */}
            </div>
            <div className="reveal-stagger grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mt-6 gap-2">
              {currentProject.albums && currentProject.albums.map((album) => (
                 <Link href={`/projects/${currentProject.slug}/albums/${album.slug}`} key={album.id}>
                <div className="text-left relative group overflow-hidden">
                    
              <img src={album.album_img} className="z-10 3xl:h-[330px] 3xl:w-[330px] 2xl:h-[280px] 2xl:w-[280px] xl:h-[200px] xl:w-[200px] lg:h-[198px] lg:w-[198px] h-full w-full object-contain relative overflow-hidden" alt={`Album-${album.id}`}  />
                <div className="absolute z-20 top-0 -right-[102%] 3xl:w-[310px] 3xl:h-[310px] 2xl:w-[280px] 2xl:h-[280px] xl:h-[200px] xl:w-[200px] lg:h-[145px] lg:w-[145px] 3xl:block 2xl:block xl:block lg:block none bg-[#00000066] group-hover:right-0 duration-700 transition-all overflow-hidden"></div>
                  <h5 className="absolute z-20 3xl:-bottom-[20%] 2xl:-bottom-[20%] xl:-bottom-[28%] lg:-bottom-[25%] left-[2%] bottom-[5%] 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 duration-700 transition-all p-2 3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] leading-tight font-semibold">{album.title}</h5>
                </div>
                </Link>
              ))}
            </div>
                   </section>
    )
}