"use client"

import CreativeForce from "@/src/components/AboutUs/CreativeForce"
import Timeline from "@/src/components/AboutUs/Timeline"
import WhyWeRock from "@/src/components/AboutUs/WhyWeRock"
import Banner from "@/src/components/Banner"
import About from "@/src/components/Home/About"
import MissionVision from "@/src/components/Home/MissionVision"

export default function AboutUsPage () {
    return (
        <>
        <Banner title="About Us" video="./videos/About Banner.mp4"/>
        <About image={"/images/about-bg.png" }/>
        <Timeline/>
        <CreativeForce/>
        <WhyWeRock/>
        </>
    
    )
   
}