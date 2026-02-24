import Banner from "@/src/components/Banner";
import FAQSection from "@/src/components/Home/FAQSection";
import InternalPortfolio from "@/src/components/Portfolio/InternalPortfolio";
import LetsCollaborate from "@/src/components/Portfolio/LetsCollaborate";
import PortfolioShowcase from "@/src/components/Portfolio/ProjectShowcase";

export default function PortfolioPage () {
    return (
        <>
        <Banner title="Portfolio" image="./images/banners/Portfolio.jpg"/>
        <PortfolioShowcase/>
        <InternalPortfolio/>
        <FAQSection/>
        <LetsCollaborate/>
        </>
    )
}