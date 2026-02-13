import Banner from "@/src/components/Banner";
import FAQSection from "@/src/components/Home/FAQSection";
import Categories from "@/src/components/Services/Categories";
import LetsWork from "@/src/components/Services/LetsWork";
import OurContributions from "@/src/components/Services/OurContributions";
import Trust from "@/src/components/Services/Trust";

export default function ServicesPage(){
    return (
        <>
                <Banner title="Services" image="./images/banners/Sevices.jpg"/>
                <Categories/>
                <OurContributions/>
                {/* <Trust/> */}
                <LetsWork/>
                <FAQSection id="section13"/>
     
        </>
    )
}