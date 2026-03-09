import { othercategories } from "@/src/data/othercategories";
import ImagesSlider from "@/src/components/Albums/ImagesSlider";
import AlbumsArrow from "@/src/components/Albums/AlbumsArrow";
import OtherCategoriesArrow from "@/src/components/Albums/OtherCategoriesArrow";
import CloseButton from "@/src/components/Albums/Close";
import NextPrevAlbum from "@/src/components/Albums/NextPrevAlbum";
import ScrollDown from "@/src/components/Albums/ScrollDown";

interface AlbumsPageProps {
  params: Promise<{ reel: string; album: string }>;
}

export default async function OtherCategoriesAlbumsPage({ params }: AlbumsPageProps) {
  const { reel, album } = await params;

  const currentReel = othercategories.find(
    (r) => r.slug === reel
  );

  if (!currentReel) {
    return <h1>Reel Not Found</h1>;
  }

  if (!currentReel.albums) {
    return <h1>Albums Not Found</h1>;
  }

  const currentAlbum = currentReel.albums.find(
    (a) => a.slug === album
  );

  if (!currentAlbum) {
    return <h1>Album Not Found</h1>;
  }

  return (
    <div className="album-banner-section min-h-screen lg:pt-20 md:pt-16 pt-8 relative">
      <ScrollDown/>
      <CloseButton basePath="showreel" reelSlug={currentReel.slug}/>
<ImagesSlider media={currentAlbum.media as any} />
      <AlbumsArrow
        reelSlug={currentReel.slug}
        albums={currentReel.albums?.filter((a) => a.title) as any}
        currentAlbumSlug={album} 
        basePath="showreel"
      />      
      <OtherCategoriesArrow reelSlug={currentReel.slug}/>
    <NextPrevAlbum basePath="showreel" reelSlug={currentReel.slug} albumSlug={currentAlbum.slug}/>
    </div>
      
  );
}
