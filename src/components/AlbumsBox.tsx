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
              className="3xl:h-[280px] 3xl:w-[280px] 2xl:h-[250px] 2xl:w-[250px] xl:h-[200px] xl:w-[200px] lg:h-[150px] lg:w-[150px] h-full w-full object-contain"
              alt={album.title}
            />

            <div className="absolute top-0 -right-[140%] 3xl:h-[290px] 3xl:w-[290px] 2xl:h-[260px] 2xl:w-[260px] xl:h-[220px] xl:w-[220px] lg:h-[160px] lg:w-[160px] 3xl:block 2x:block xl:block lg:block none bg-[#00000066] group-hover:right-0 transition-all duration-700" />

            <h5 className="absolute hidden 3xl:-bottom-[20%] 2xl:-bottom-[20%] xl:-bottom-[28%] lg:-bottom-[20%] bottom-0 left-[2%] 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 transition-all duration-700 p-2 3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[15px] text-[14px] leading-tight font-semibold">
              {album.title}
            </h5>
          </div>
        </Link>
      ))}
    </>
  );
}
