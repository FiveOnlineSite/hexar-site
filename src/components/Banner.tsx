type BannerProp = {
  title: string;
  video?: string
    image?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Banner ({title, video, image}:BannerProp) {
    return (
        <section className="banner-section">
            <div className="relative h-screen w-full">

                {video ? <video src={video} loop muted autoPlay playsInline className="relative w-full h-screen object-cover"></video> : <img src={image} alt="banner" className="relative w-full h-screen object-cover" />}
                <h1 className="absolute top-1/2 left-[10%] -translate-y-1/2 3xl:text-[75px] 2xl:text-[65px] xl:text-[53px] lg:text-[48px] md:text-[40px] sm:text-[36px] text-[30px] leading-tight font-bold">{title}</h1>
            </div>
        </section>
    )
}