

import BackButton from "@/src/components/Albums/BackButton";
import { portfolio } from "@/src/data/portfolio";
import Link from "next/link";

interface CategoriesPageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoriesPage({ params }: CategoriesPageProps) {

  const { category } = await params;

  const currentPortfolio = portfolio.find(
    (p) => p.slug === category
  );

  if (!currentPortfolio) {
    return <h1>Portfolio Not Found</h1>;
  }

    return (
          <section className="3xl:mx-20 2xl:mx-18 xl:mx-16 mx-0 categories-banner-section mt-[100px] lg:p-16 md:p-16 p-8">
      <BackButton basePath="categories"/>

            <div className="3xl:flex 2xl:flex xl:flex lg:flex md:flex block items-center justify-between">
               <h1 className="reveal 3xl:text-[45px] 2xl:text-[43px] xl:text-[38px] lg:text-[38px] md:text-[34px] text-[30px] font-bold leading-base uppercase">{currentPortfolio.title}</h1>
            {/* <p className="reveal text-[15px] font-light 3xl:w-[25%] 2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[35%] 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-5 w-full leading-base">{currentPortfolio.description}</p> */}
            </div>
            <div className="reveal-stagger grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mt-6 gap-2">
              {currentPortfolio.albums && currentPortfolio.albums.map((album: typeof currentPortfolio.albums[number]) => (
                 <Link href={`/categories/${currentPortfolio.slug}/albums/${album.slug}`} key={album.id} className="flex items-center justify-center">
                <div className="relative group overflow-hidden 4xl:h-[400px] 4xl:w-[400px] 3xl:h-[343px] 3xl:w-[343px] 2xl:h-[304px] 2xl:w-[304px] xl:h-[214px] xl:w-[214px] lg:h-[198px] lg:w-[198px] h-full w-full">
                    
                <img src={album.album_img} className="z-10 4xl:h-[400px] 4xl:w-[400px] 3xl:h-[343px] 3xl:w-[343px] 2xl:h-[304px] 2xl:w-[304px] xl:h-[214px] xl:w-[214px] lg:h-[198px] lg:w-[198px] h-full w-full object-contain relative overflow-hidden group-hover:scale-125 transition-all duration-700" alt={`Album-${album.id}`}  />
                                {/* <div className="absolute z-20 top-0 -right-[102%] 3xl:w-[310px] 3xl:h-[310px] 2xl:w-[280px] 2xl:h-[280px] xl:h-[220px] xl:w-[220px] lg:h-[145px] lg:w-[145px] 3xl:block 2xl:block xl:block lg:block none bg-[#00000066] group-hover:right-0 duration-700 transition-all overflow-hidden"></div> */}
                                  <h5 className="hidden absolute z-20 3xl:-bottom-[20%] 2xl:-bottom-[20%] xl:-bottom-[28%] lg:-bottom-[25%] left-[2%] bottom-[5%] 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 duration-700 transition-all p-2 3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] leading-tight font-semibold">{album.title}</h5>
                                </div>
                                </Link>
              ))}
            </div>
                   </section>
    )
}