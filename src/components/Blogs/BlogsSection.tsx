"use client"
import React, { useState } from 'react'
import BlogBox from '../BlogBox'
import { blogs } from '@/src/data/blogs'

const BLOGS_PER_VIEW = 6;
const BlogsSection = () => {
     const [visibleCount, setVisibleCount] = useState(BLOGS_PER_VIEW)
 
    const handleShowMore = () => { 
        if(visibleCount >= blogs.length){
setVisibleCount(BLOGS_PER_VIEW)
        }else{
            setVisibleCount(prev => prev + BLOGS_PER_VIEW)
        }
    }

  const isAllLoaded = visibleCount >= blogs.length;
  return (
    <section className="blogs-section lg:p-16 md:p-16 p-8 bg-[#0A0A0A] bg-[url('/images/blogs-bg.png')] bg-no-repeat bg-cover bg-right-bottom bg-[length:80%]">
        <div className='reveal-stagger grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full'>
          {blogs.slice(0, visibleCount).map((blogs, i) => (
                
        <BlogBox key={i} blog={blogs}/>
          ))} 
           
           
        </div>
        {BLOGS_PER_VIEW < blogs.length && (
            <div className='reveal flex items-center justify-center mt-8 group'>
                <button className="inline-block 3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 py-3 px-5 mb-8 text-[#D50000] group-hover:text-white bg-transparent group-hover:bg-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000] transition-all duration-500 ease-in-out" onClick={handleShowMore}>{isAllLoaded ? "Load Less" : "Load More"}</button>
            </div>
        )}
         
    </section>
  )
}

export default BlogsSection