import { blogs } from '@/src/data/blogs';
import BlogBox from '../BlogBox';
import Link from 'next/link';

interface BlogContentProps {
  blogSlug: string;
}

export default function BlogContent({ blogSlug }: BlogContentProps) {
  const currentBlog = blogs.find((b) => b.slug === blogSlug);

  if (!currentBlog) {
    return <h1>Blog Not Found</h1>;
  }

  const filteredBlog = blogs.filter(
    (blog) => blog.slug !== blogSlug
  );

  return (
    <>
    <section className="blog-hero-section lg:p-16 md:p-16 p-8 lg:pt-32 md:pt-32 pt-16">
      <img
        src={currentBlog.image}
        alt={currentBlog.title}
        className="3xl:h-[90vh] 2xl:h-[90vh] xl:h-[90vh] lg:h-[90vh] md:h-full h-full w-full object-cover rounded-xl"
      />
    </section>

    <section className='blog-content-section lg:p-16 md:p-16 p-8 lg:pt-0 md:pt-0 pt-0'>
        <div className='3xl:flex 2xl:flex xl:flex lg:flex block justify-start items-start gap-8'>
        <div className="3xl:w-[65%] 2xl:w-[65%] xl:w-[65%] lg:w-[65%] w-full">
            <h6 className='reveal bg-[#808080] py-2 px-2 rounded-lg inline-block text-[20px] leading-base font-light'>{currentBlog.date}</h6>
            <h1 className='reveal 3xl:text-[53px] 2xl:text-[50px] xl:text-[46px] lg:text-[40px] md:text-[36px] text-[30px] font-bold leading-tight mt-4 pr-6'>
                {currentBlog.title}
            </h1>
           {currentBlog.subtitle && <h5 className='reveal font-semibold mt-6 3xl:text-[25px] 2xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] leading-base'>{currentBlog.subtitle}</h5>}
           <p className="reveal mt-6 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">{currentBlog.content1}</p>
           {currentBlog.content2 && <p className="reveal mt-6 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">{currentBlog.content2}</p>}
           {currentBlog.content3 && <p className="reveal mt-6 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">{currentBlog.content3}</p>}
           {currentBlog.content4 && <p className="reveal mt-6 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">{currentBlog.content4}</p>}
            {/* <img src={currentBlog.img1} alt="" className='reveal 3xl:w-[80%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-full h-[304px] object-cover rounded-lg my-6' /> */}
       </div>
        
        <div className='3xl:w-[35%] 2xl:w-[35%] xl:w-[35%] lg:w-[35%] w-full 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0 mt-10'>
            <h3 className='reveal 3xl:text-[44px] 2xl:text-[40px] xl:text-[36px] lg:text-[36px] md:text-[32px] text-[28px] font-base leading-base mb-4'>More like this</h3>
            
            {filteredBlog.slice(0,2).map((blog, i) => (
            <div className='reveal mb-6 rounded-xl' key={i}>
                <BlogBox blog={blog}/>
               
            </div>
             ))}
            
        </div>
        </div>
        
    </section>
    </>
    
  );
}
