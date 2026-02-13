import React from 'react'

const ApplyNow = () => {
  return (
    <section id="apply-now-section" className="bg-[url('/images/contact-section-bg.png'),_linear-gradient(89deg,#0A0A0A,#03010E)] lg:p-16 md:p-16 p-8 bg-contain bg-no-repeat xl:bg-[90%] lg:bg-[90%] bg-[100%] bg-fixed">
        <div className='flex w-full items-center'>
            <h2 className='reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-white font-bold'>Apply <span className='text-[#D50000]'>Now</span></h2>
            <span className='reveal ps-4'><img src="./images/icons/right-arrow (1).png" alt="right-arrow" className='lg:w-[62px] lg:h-[50px] md:w-[62px] md:h-[55px] w-[32px] h-[25px] object-contain' /></span>
        </div>
        <div className='lg:py-16 md:py-8 py-6 flex flex-col'>
            <h5 className='reveal lg:text-[32px] md:text-[25px] text-[22px] leading-base font-base my-4'>Drop us a mail at:</h5>
            <div className='group inline-block'>
            <a href='mailto:career@hexarstudios.com' className='group-hover:bg-transparent group-hover:border-white transition-all duration-500 ease-in-out reveal bg-[#D50000] border-[0.5px] border-transparent p-2 my-4 inline-block text-white lg:text-[32px] md:text-[25px] text-[22px] leading-base font-base'>career@hexarstudios.com</a>
            </div>
        </div>
    </section>
  )
}

export default ApplyNow