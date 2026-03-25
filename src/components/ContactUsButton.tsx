// ContactUsButton.tsx
import React from 'react'

type Props = {
  pastBanner: boolean;
}

const ContactUsButton = ({ pastBanner }: Props) => {
  return (
    <div
      className={`fixed 4xl:bottom-12 4xl:right-28 3xl:bottom-10 3xl:right-28 2xl:bottom-8 2xl:right-28 xl:bottom-9 xl:right-24 lg:bottom-9 lg:right-24 md:bottom-6 md:right-24 bottom-6 right-20 z-30 cursor-pointer group transition-opacity duration-500 ${pastBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="group">
        <a href="/contact-us" className="inline-block 3xl:text-[20px] 2xl:text-[18px] xl:text-[14px] lg:text-[14px] md:text-[16px] text-[14px] leading-tight font-semibold lg:py-2 lg:px-4 py-3 px-5 text-[#D50000] group-hover:text-white bg-transparent group-hover:bg-[#D50000] border-[1.8px] lg:rounded-lg md:rounded-lg rounded-md border-[#D50000] transition-all duration-500 ease-in-out">
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default ContactUsButton