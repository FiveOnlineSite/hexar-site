import React from 'react'

interface BackButtonProps {
   basePath: "categories" | "projects" | "showreels";
}

const BackButton = ({ basePath}: BackButtonProps) => {
  let href = "";
  if (basePath === "categories") {
        href = `/portfolio#internal-portfolio`;
  } else if (basePath === "projects") {
    href = `/portfolio#project-showcase`;
  } else if (basePath === "showreels") {
    href = `/portfolio#showreels`;
  }

  return (
      <a href={href} className="flex items-start justify-center close-button h-10 w-10 z-10 mt-[100px] ">
        <img src="/images/icons/back.png" className="lg:w-6 lg:h-6 h-4 w-4" alt="close" />
      </a>
  )
}

export default BackButton
