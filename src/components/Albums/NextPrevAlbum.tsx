import React from "react";
import { othercategories } from "../../data/othercategories";
import { projects } from "../../data/projects";
import { portfolio } from "@/src/data/portfolio";

interface NextPrevAlbumProps {
  reelSlug?: string;
  projectSlug?: string;
  categorySlug?: string;
  albumSlug?: string;
  basePath: "categories" | "projects" | "showreels";
}

const NextPrevAlbum = ({
  categorySlug,
  reelSlug,
  projectSlug,
  albumSlug,
  basePath
}: NextPrevAlbumProps) => {

let albums: any[] = [];

if (basePath === "showreels") {
  const reel = othercategories.find(cat => cat.slug === reelSlug);
  albums = reel?.albums || [];
}

if (basePath === "projects") {
  const project = projects.find(p => p.slug === projectSlug);
  albums = project?.albums || [];
}

if (basePath === "categories") {
  const category = portfolio.find(cat => cat.slug === categorySlug);
  albums = category?.albums || [];
}

const index = albums.findIndex(album => album.slug === albumSlug);

const prev = index > 0 ? albums[index - 1] : null;
const next = index < albums.length - 1 ? albums[index + 1] : null;
const buildLink = (album: any) => {

  if (basePath === "showreels") {
    return `/showreels/${reelSlug}/albums/${album.slug}`;
  }

  if (basePath === "categories") {
    return `/categories/${categorySlug}/albums/${album.slug}`;
  }

  if (basePath === "projects") {
    return `/projects/${projectSlug}/albums/${album.slug}`;
  }

  return "/";
};

  return (
    <>
      {prev && (
        <div className="absolute left-[6%] bottom-[6%] z-10">
          <a href={buildLink(prev)} className="text-[14px] cursor-pointer">
            Prev Album
          </a>
        </div>
      )}

      {next && (
        <div className="absolute right-[6%] bottom-[6%] z-10">
          <a href={buildLink(next)} className="text-[14px] cursor-pointer">
            Next Album
          </a>
        </div>
      )}
    </>
  );
};

export default NextPrevAlbum;