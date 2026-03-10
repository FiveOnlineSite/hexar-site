import React from 'react'

const ScrollDown = () => {
  return (
    <div>
  <div id="scroll-down-animation" className="xl:block hidden absolute top-1/2 left-[6%] -translate-y-1/2 z-20">
  <span className="mouse my-0 mx-auto block rounded-[50px] border h-[100px] w-[50px] relative">
    <span className="move absolute left-1/2 bg-white h-[10px] w-[10px] rounded-full -translate-x-1/2"></span>
  </span>
  <h2 className="text-[14px]">Scroll down</h2>
</div>
      
    </div>
  )
}

export default ScrollDown
