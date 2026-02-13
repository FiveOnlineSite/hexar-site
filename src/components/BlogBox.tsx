"use client"

import Link from 'next/link'

type BlogBoxProps = {
  blog: {
    image: string;
    title: string;
    date: string;
  }
}

interface BlogBoxComponentProps { blog: BlogBoxProps['blog'] }

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-");   


const BlogBox = ({blog}: BlogBoxComponentProps) => {
   
  return (
    <>
       <Link
  href={`/blogs/${slugify(blog.title)}`}
  className="
    group block
    rounded-lg
    bg-[#0A0A0A]
    overflow-hidden
    transition-all duration-700
    hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]
  "
>
  {/* Image */}
  <div className="h-[250px] overflow-hidden">
    <img
      src={blog.image}
      alt={blog.title}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
    />
  </div>

  {/* Content */}
  <div className="flex items-start justify-between">
    <h3 className="p-3 lg:text-[22px] text-[20px] w-[75%]">
      {blog.title}
    </h3>

    <h4 className="w-[25%] p-3 text-[18px] text-[#FFFFFFCC] text-right">
      {blog.date}
    </h4>
  </div>
</Link>

    </>
  )
}

export default BlogBox