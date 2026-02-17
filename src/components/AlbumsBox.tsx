import Link from "next/link";

interface Album {
  id: number;
  album_img: string;
  slug: string;
  title: string;
}

interface AlbumsBoxProps {
  basePath: "categories" | "projects";
  slug: string;   // unified slug
  albums: Album[];
  currentAlbumSlug?: string;
}

export default function AlbumsBox({
  albums,
  currentAlbumSlug,
  basePath,
  slug,
}: AlbumsBoxProps) {

  const filteredAlbums = currentAlbumSlug
    ? albums.filter(album => album.slug !== currentAlbumSlug)
    : albums;

  return (
    <>
      {filteredAlbums.map((album) => (
        <Link
          href={`/${basePath}/${slug}/albums/${album.slug}`}
          key={album.id}
        >
          <div className="text-left relative group overflow-hidden">
            <img
              src={album.album_img}
              className="h-full w-full object-contain"
              alt={album.title}
            />

            <div className="absolute top-0 -right-[140%] 3xl:h-[380px] 3xl:w-[380px] 2xl:h-[310px] 2xl:w-[310px] xl:h-[280px] xl:w-[280px] lg:h-[260px] lg:w-[260px] 3xl:block 2x:block xl:block lg:block none bg-[#00000066] group-hover:right-0 transition-all duration-700" />

            <h5 className="absolute 3xl:-bottom-[20%] 2xl:-bottom-[20%] xl:-bottom-[28%] lg:-bottom-[20%] bottom-0 left-[2%] 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 transition-all duration-700 p-2 lg:text-[20px] md:text-[18px] text-[16px] leading-tight font-semibold">
              {album.title}
            </h5>
          </div>
        </Link>
      ))}
    </>
  );
}
