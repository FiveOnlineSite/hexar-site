import React from 'react'

const Hire = () => {
  return (
    <section className='hire-seciton lg:p-16 md:p-16 p-8 border-[#ffffff66] border-t'>
        <h2 className='reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight text-left font-bold'>How We Hire?</h2>
        <div className='reveal-stagger grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-8'>
            <div className='mb-5'>
                <div className='border border-[#66666633] rounded-lg px-4 py-8 shadow-[0_12px_24px_0_#0000001A] flex justify-center relative overflow-hidden group'>
                    <img src="./images/icons/upload-2-line.png" alt="upload" className='w-[100px] h-[100px] object-contain relative z-10' />
                    <div className='h-[300px] w-[300px] absolute -bottom-[150%] left-[90%] -rotate-45 group-hover:-left-[18%] group-hover:-bottom-[38%] bg-[#FFFFFF] transition-all duration-500 ease-in-out'></div>
                </div>
                <h3 className='lg:text-[26px] md:text-[24px] text-[22px] font-semibold leading-base text-center pt-2'>Apply</h3>
            </div>

            <div className='mb-5'>
                <div className='border border-[#66666633] rounded-lg px-4 py-8 shadow-[0_12px_24px_0_#0000001A] flex justify-center relative overflow-hidden group'>
                    <img src="./images/icons/phone-fill.png" alt="phone" className='w-[100px] h-[100px] object-contain relative z-10' />
                    <div className='h-[300px] w-[300px] absolute -bottom-[150%] left-[90%] -rotate-45 group-hover:-left-[18%] group-hover:-bottom-[38%] bg-[#FFFFFF] transition-all duration-500 ease-in-out'></div>

                </div>
                <h3 className='lg:text-[26px] md:text-[24px] text-[22px] font-semibold leading-base text-center pt-2'>Short Call</h3>
            </div>

            <div className='mb-5'>
                <div className='border border-[#66666633] rounded-lg px-4 py-8 shadow-[0_12px_24px_0_#0000001A] flex justify-center relative overflow-hidden group'>
                    <img src="./images/icons/file-text-line.png" alt="file-text-line" className='w-[100px] h-[100px] object-contain relative z-10' />
                    <div className='h-[300px] w-[300px] absolute -bottom-[150%] left-[90%] -rotate-45 group-hover:-left-[18%] group-hover:-bottom-[38%] bg-[#FFFFFF] transition-all duration-500 ease-in-out'></div>
                </div>
                <h3 className='lg:text-[26px] md:text-[24px] text-[22px] font-semibold leading-base text-center pt-2'>Test</h3>
            </div>

            <div className='mb-5'>
                <div className='border border-[#66666633] rounded-lg px-4 py-8 shadow-[0_12px_24px_0_#0000001A] flex justify-center relative overflow-hidden group'>
                    <img src="./images/icons/wechat-line.png" alt="wechat-line" className='w-[100px] h-[100px] object-contain relative z-10' />
                    <div className='h-[300px] w-[300px] absolute -bottom-[150%] left-[90%] -rotate-45 group-hover:-left-[18%] group-hover:-bottom-[38%] bg-[#FFFFFF] transition-all duration-500 ease-in-out'></div>
                </div>
                <h3 className='lg:text-[26px] md:text-[24px] text-[22px] font-semibold leading-base text-center pt-2'>Final Interview</h3>
            </div>

            <div className='mb-5'>
                <div className='border border-[#66666633] rounded-lg px-4 py-8 shadow-[0_12px_24px_0_#0000001A] flex justify-center relative overflow-hidden group'>
                    <img src="./images/icons/shake-hands-line.png" alt="shake-hands-line" className='w-[100px] h-[100px] object-contain relative z-10' />
                    <div className='h-[300px] w-[300px] absolute -bottom-[150%] left-[90%] -rotate-45 group-hover:-left-[18%] group-hover:-bottom-[38%] bg-[#FFFFFF] transition-all duration-500 ease-in-out'></div>
                </div>
                <h3 className='lg:text-[26px] md:text-[24px] text-[22px] font-semibold leading-base text-center pt-2'>Offer</h3>
            </div>
        </div>
    </section>
  )
}

export default Hire