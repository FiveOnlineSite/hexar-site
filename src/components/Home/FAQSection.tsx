"use client"

import FAQAccordion from "../FAQAccordion";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FAQSectionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function FAQSection ({ id, ...rest }: FAQSectionProps) {
    const faqs = [
    {
      question: "What kind of experience does Hexar have?",
      answer:
        "Hexar offers end-to-end art and technical services for game development. Our expertise spans 2D and 3D art, animation, tech art, VFX, and quality assurance. We’ve contributed to globally recognized game titles and are comfortable working across a wide range of production pipelines. By handling scale and execution, we allow our partners’ internal teams to stay focused on creative and strategic goals.",
    },
    {
      question: "How do you maintain quality across deliverables?",
      answer:
        "Quality is embedded into our production process from the very beginning. Each asset passes through multiple review layers, including peer reviews, lead approvals, and project-level quality checks. Our discipline leads work closely with QA to ensure every deliverable meets both visual expectations and technical specifications before submission.",
    },
    {
      question: "At which stage of game development can Hexar join?",
      answer:
        "Hexar can integrate at any phase of development. In early stages, we help define visual direction, workflows, and production pipelines. During full production or LiveOps, we seamlessly adapt to existing styles, tools, and technical constraints without disrupting established processes.",
    },
    {
      question: "What does the project onboarding process look like?",
      answer:
        "Our onboarding is designed to be clear and efficient. We begin by signing an NDA, followed by gathering project details and aligning on expectations through an introductory call. Based on this, we prepare a customized proposal, conduct a test task if required, finalize the scope, and then begin production as your long-term art partner.",
    },
    {
      question: "What game engines and tools do you work with?",
      answer:
        "We work comfortably with major game engines such as Unreal Engine and Unity, along with industry-standard tools like Maya, Blender, ZBrush, Substance, Photoshop, and more. Our teams adapt quickly to proprietary tools and custom pipelines.",
    },
    {
      question: "Can you match an existing art style or visual direction?",
      answer:
        "Absolutely. We specialize in style adaptation and consistency. Whether it’s a realistic AAA look or a stylized mobile aesthetic, our artists are trained to match and maintain established visual standards.",
    },
    {
      question: "Do you offer long-term partnerships or only short-term projects?",
      answer:
        "We support both. Some partners engage us for specific asset batches, while others work with Hexar as an extended production arm over months or years.",
    },
    {
      question: "How do you handle communication and project tracking?",
      answer:
        "We believe transparency drives trust. Our teams provide regular updates, progress tracking, and clear communication through tools aligned with the client’s workflow, ensuring full visibility at every stage.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  const handleToggle = (index: number) => {
  setActiveIndex((prev: number | null) => (prev === index ? null : index));
};

 useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.15, y: 40 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: false,
            once: false,

            onEnter: () => {
                gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.25, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                }
                );
            },

            onLeaveBack: () => {
                gsap.set(imageRef.current, { opacity: 0, scale: 0.25, y: 40 });
            },
            },
        }
        );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
    }, []);

    return (
        <section {...rest} id={id} ref={sectionRef} className="faq-section p-8 lg:p-16 border-[#ffffff66] border-t">
            <div className="lg:flex block items-start justify-center">
                <div className="lg:w-[40%] w-full">
                    <h2 className="reveal 3xl:text-[70px] 2xl:text-[65px] xl:text-[56px] lg:text-[56px] md:text-[48px] text-[30px] leading-tight lg:mb-8 mb-4 text-white font-bold">Frequently Asked Question</h2>
                    <img ref={imageRef} src="./images/FAQs.png" alt="faq-bg" className="w-full lg:h-[520px] md:h-[400px] h-[420px] lg:mb-0 mb-4 object-contain" />
                </div>
                <div className="lg:w-[60%] w-full px-4 reveal-stagger">
                    {faqs.map((faq, i) => (
            <FAQAccordion faq={faq} key={i} isOpen={activeIndex === i}
            onToggle={() => handleToggle(i)} />
          ))}
                </div>
            </div>
        </section>
    )
}