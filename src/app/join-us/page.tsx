import Banner from "@/src/components/Banner";
import ApplyNow from "@/src/components/JoinUs/ApplyNow";
import Hire from "@/src/components/JoinUs/Hire";
import OpenPosition from "@/src/components/JoinUs/OpenPositions";
import OurCulture from "@/src/components/JoinUs/OurCulture";
import Work from "@/src/components/JoinUs/Work";

export default function JoinUsPage(){
    return (
        <>
        <Banner title="Join The Journey" image="./images/banners/Join Us.jpg"/>
        <OpenPosition/>
        <Work/>
        <OurCulture/>
        <Hire/>
        <ApplyNow/>
        </>
    )
}