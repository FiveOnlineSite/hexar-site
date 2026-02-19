import React from 'react'

interface CloseButtonProps {
    categorySlug?: string;
   basePath: "categories" | "projects";
   projectSlug?: string;
}

const CloseButton = ({ categorySlug, basePath, projectSlug }: CloseButtonProps) => {
  let href = "";
  if (basePath === "categories") {
    href = `/categories/${categorySlug}`;
  } else if (basePath === "projects" && projectSlug) {
    href = `/projects/${projectSlug}`;
  }

  return (
    <div>
      <a href={href} className="close-button h-10 w-10 absolute 3xl:top-[15%] 2xl:top-[15%] xl:top-[15%] lg:top-[20%] md:top-[20%] top-[29%] left-[5%] z-10">
        <img src="/images/icons/back.png" className="absolute top-1/2 left-1/2 lg:w-6 lg:h-6 h-4 w-4" alt="close" />
      </a>
    </div>
  )
}

export default CloseButton
