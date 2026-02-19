import { portfolio } from "@/src/data/portfolio";
import ImagesSlider from "@/src/components/Albums/ImagesSlider";
import AlbumsArrow from "@/src/components/Albums/AlbumsArrow";
import CategoriesArrow from "@/src/components/Albums/CatergoriesArrow";
import CloseButton from "@/src/components/Albums/Close";

interface AlbumsPageProps {
  params: Promise<{ category: string; album: string }>;
}

export default async function CategoryAlbumsPage({ params }: AlbumsPageProps) {
  const { category, album } = await params;

  const currentCategory = portfolio.find(
    (c) => c.slug === category
  );

  if (!currentCategory) {
    return <h1>Category Not Found</h1>;
  }

  if (!currentCategory.albums) {
    return <h1>Albums Not Found</h1>;
  }

  const currentAlbum = currentCategory.albums.find(
    (a) => a.slug === album
  );

  if (!currentAlbum) {
    return <h1>Album Not Found</h1>;
  }

  return (
    <div className="album-banner-section min-h-screen lg:pt-20 md:pt-16 pt-8 relative">
      <CloseButton  basePath="categories" categorySlug={currentCategory.slug}/>
<ImagesSlider images={currentAlbum.images} />

      <AlbumsArrow
        categorySlug={currentCategory.slug}
        albums={currentCategory.albums?.filter((a) => a.title) as any}
        currentAlbumSlug={album} 
        basePath="categories"
      />
      
      <CategoriesArrow categorySlug={currentCategory.slug}/>
    
    </div>
      
  );
}
