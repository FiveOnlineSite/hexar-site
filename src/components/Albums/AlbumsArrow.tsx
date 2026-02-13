// "use client"

// import { useEffect, useState } from "react"
// import { categories } from "@/src/data/categories"
// import AlbumsBox from "../AlbumsBox"

// interface Album {
//   id: number;
//   album_img: string;
//   slug: string;
// }

// interface AlbumsArrowProps {
//   categorySlug: string;
//   albums: Album[];
// }

// export default function AlbumsArrow({categorySlug, albums}: AlbumsArrowProps){
      
//     const [openAlbums, setOpenAlbums] = useState(false)

//     return (
//         <>
        
//         <button className={` z-20 ${openAlbums ? "absolute left-0 top-1/2" : "absolute top-1/2 right-[2%]"}`}   onClick={() => setOpenAlbums((prev) => !prev)}>
//             <img src="/images/icons/albums-arrow.png" alt="albums-arrow" className={`w-full h-full object-contain transition-transform duration-300 ${
//             openAlbums ? "rotate-180" : ""
//           }`} />
//         </button>
//         {openAlbums && (
//             <div className={`bg-[#666666CC] h-screen w-[50%] flex justify-start overflow-y-scroll right-0 top-0 z-10 ${openAlbums ? "relative" : "absolute"}`}>
//             <div className="grid grid-cols-2 gap-1 w-[70%] pt-16 ps-16">
//                 <AlbumsBox categorySlug={categorySlug} albums={albums}/>
//             </div>
//         </div>
//         )}
        
//         </>
        
//     )
// }

"use client";

import { useState } from "react";
import AlbumsBox from "../AlbumsBox";

interface Album {
  id: number;
  album_img: string;
  slug: string;
  title: string;
}

interface AlbumsArrowProps {
  categorySlug?: string;
   basePath: "categories" | "projects";
   projectSlug?: string;
  albums: Album[];
  currentAlbumSlug?: string;
}

export default function AlbumsArrow({ categorySlug, basePath, projectSlug, albums, currentAlbumSlug }: AlbumsArrowProps) {
  const [openAlbums, setOpenAlbums] = useState(false);

  
  return (
    <>
      {!openAlbums && (
        <button
          className="side-arrow absolute top-1/2 right-[2%] z-10 -translate-y-1/2"
          onClick={() => setOpenAlbums(true)}
        >
            <div className="relative bg-[#666666CC] w-10 h-10 p-2 rounded-full">

          <img
            src="/images/icons/left-arrow1.png"
            alt="albums-arrow"
            className="w-[12px] h-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          </div>
        </button>
      )}

      {/* PANEL */}
      <div className="absolute top-0 right-0 h-full z-20">
  
  {/* CLOSE ARROW — NOT CLIPPED */}
  {openAlbums && (
    <button
      className="absolute top-1/2 -left-5 -translate-y-1/2 z-10"
      onClick={() => setOpenAlbums(false)}
    >
      <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
        <img
          src="/images/icons/left-arrow1.png"
          className="w-[12px] h-[12px] rotate-180 object-contain"
        />
      </div>
    </button>
  )}

  {/* PANEL */}
  <div
    className={`h-full transition-all duration-500 overflow-y-scroll z-30
    ${openAlbums ? "3xl:w-[55vw] 2xl:w-[55vw] xl:w-[55vw] lg:w-[55vw] w-[80vw] bg-[#000000cc]" : "w-0"}`}
  >
    <div className="grid grid-cols-2 gap-2 py-16 3xl:px-16 2xl:px-16 xl:px-16 lg:px-16 md-px-8 px-4 3xl:w-[80%] 2xl:w-[80%] xl:w-[80%] w-full">
     <AlbumsBox
  basePath={basePath}
  slug={categorySlug || projectSlug || ""}

  albums={albums}
  currentAlbumSlug={currentAlbumSlug}
/>
    </div>
  </div>
</div>

    </>
  );
}
