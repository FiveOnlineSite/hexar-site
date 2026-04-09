import dynamic from "next/dynamic";

import Hero from "@/src/components/Home/Hero";
import GallerySlider from "@/src/components/Home/GallerySlider";

const About = dynamic(() => import("@/src/components/Home/About"));
const MissionVision = dynamic(() => import("@/src/components/Home/MissionVision"));
const Solution = dynamic(() => import("@/src/components/Home/Solution"));
const OurExpertise = dynamic(() => import("@/src/components/Home/OurExpertise"));
const Clients = dynamic(() => import("@/src/components/Home/Clients"));
const Contribution = dynamic(() => import("@/src/components/Home/Contribution"));
const WhyUs = dynamic(() => import("@/src/components/Home/WhyUs"));
const ContactSection = dynamic(() => import("@/src/components/Home/ContactSection"));
const BlogSection = dynamic(() => import("@/src/components/Home/BlogSection"));
const FAQSection = dynamic(() => import("@/src/components/Home/FAQSection"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <GallerySlider />
      <About image="/images/about-img.png" />
      <MissionVision />
      <Solution />
      <OurExpertise />
      <Clients />
      <Contribution />
      <WhyUs />
      <ContactSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}
