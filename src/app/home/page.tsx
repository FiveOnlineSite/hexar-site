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
        <MissionVision id="section-2" data-shield-section/>
        <Solution id="section-3" data-shield-section/>
        <OurExpertise id="section-4" data-shield-section/>
        <Clients id="section-5" data-shield-section/>
        <Contribution id="section-6" data-shield-section/>
        <WhyUs id="section-7" data-shield-section/>
        <ContactSection id="section-8" data-shield-section/>
        <BlogSection id="section-9" data-shield-section/>
        <FAQSection id="section-10" data-shield-section/>
        </>
        
    )
}