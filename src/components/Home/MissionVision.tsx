"use client"

type MissionVisionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function MissionVision({ id, ...rest }: MissionVisionProps) {
  return (
    <section {...rest} id={id} className="lg:py-16 md:py-16 py-8 top-0 left-0 mission-vision-section w-full h-full bg-[url('/images/mission-vision-bg.png')] bg-no-repeat xl:bg-[25%] bg-center bg-contain bg-[#0A0A0A]">
<div className="lg:flex block items-center">
<div className="lg:w-[50%] w-full h-full flex items-center">
      <svg
        width="100%"
        height="100%"
        className="relative left-0 top-0"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
       <defs>
  <filter id="roundedMask" x="-10%" y="-10%" width="120%" height="120%">
    <feMorphology operator="dilate" radius="1" in="SourceGraphic" result="dilated" />
    <feGaussianBlur in="dilated" stdDeviation="1" result="blurred" />
    <feMorphology operator="erode" radius="1" in="blurred" result="rounded" />
    <feComposite in="rounded" in2="SourceGraphic" operator="over" />
  </filter>

  <mask id="diamondMask">
    <rect width="1200" height="1200" fill="black" />

    {/* === BIG DIAMOND (50-ish rounded via filter) === */}
    <rect
        x={-460}
        y={80}
        width={1020}
        height={1020}
        rx={50}
        ry={50}
        fill="white"
        transform="rotate(45 -80 380)"
        />

    {/* === SMALL DIAMOND 1 (center: 360,285) === */}
    <rect
        x={535.5}   // 480 - 102.5
        y={120}
        width={280}
        height={280}
        rx={25}
        ry={25}
        fill="white"
        transform="rotate(45 480 285)"
        />

    {/* === SMALL DIAMOND 2 (center: 360,565) === */}
    <rect
        x={650.5}
        y={500.5}
        width={280}
        height={280}
        rx={25}
        ry={25}
        fill="white"
        transform="rotate(45 480 565)"
        />

    {/* === SMALL DIAMOND 3 (center: 550,455) === */}
    <rect
        x={800.5}   // 670 - 102.5
        y={270.5}
        width={280}
        height={280}
        rx={25}
        ry={25}
        fill="white"
        transform="rotate(45 670 455)"
        />
  </mask>
</defs>


        {/* ONE SINGLE VIDEO MASKED BY ALL DIAMONDS */}
        <foreignObject
          x="0"
          y="0"
          width="1200"
          height="1200"
          mask="url(#diamondMask)"
        >
          <video
            src="./videos/Hexar Video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </div>

    <div className="lg:w-[50%] w-full lg:pe-20 md:pe-0 md:px-16 px-8">
        <div className="pb-2">
            <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight font-bold mb-5">Our Mission</h2>
            <p className="reveal lg:text-[16px] text-[16px] lg:font-base font-light lg:leading-[24px] leading-tight">Our mission is to provide cutting-edge 3D arts solutions with exceptional quality and innovation. We bring creativity to life through immersive visuals, pushing artistic boundaries.</p>
        </div>

        <div className="lg:pt-10 md:pt-8 pt-6">
            <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight font-bold mb-5">Our Vision</h2>
            <p className="reveal lg:text-[16px] text-[16px] lg:font-base font-light lg:leading-[24px] leading-tight">Inspire and empower through transformative 3D arts. We aim to be a trusted partner known for our visionary approach, technical expertise,and commitment to excellence. By embracing creativity and staying at the forefront of technology, we shape the future and leave a lasting impact in the industry.</p>
        </div>
        
    </div>
</div>
 
    </section>

   
  );
}
