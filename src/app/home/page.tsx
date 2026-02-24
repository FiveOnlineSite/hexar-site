import GallerySlider from "@/src/components/Home/GallerySlider"
import Hero from "@/src/components/Home/Hero"
import About from "@/src/components/Home/About"
import MissionVision from "@/src/components/Home/MissionVision"
import Solution from "@/src/components/Home/Solution"
import OurExpertise from "@/src/components/Home/OurExpertise"
import Clients from "@/src/components/Home/Clients"
import Contribution from "@/src/components/Home/Contribution"
import WhyUs from "@/src/components/Home/WhyUs"
import ContactSection from "@/src/components/Home/ContactSection"
import BlogSection from "@/src/components/Home/BlogSection"
import FAQSection from "@/src/components/Home/FAQSection"

export default function HomePage () {
    return (
        <>
        <Hero/>
        <GallerySlider/>
        <About image={"/images/about-img.png" }/>
        <MissionVision/>
        <Solution/>
        <OurExpertise/>
        <Clients/>
        <Contribution/>
        <WhyUs/>
        <ContactSection />
        <BlogSection/>
        <FAQSection/>
        </>
        
    )
}