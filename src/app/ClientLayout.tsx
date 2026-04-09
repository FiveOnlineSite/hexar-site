"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import ContactUsButton from "../components/ContactUsButton";
import Loader from "../components/Loader";

const SmoothScrollProvider = dynamic(() => import("../components/SmoothScrollProvider"), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [pastBanner, setPastBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const hideFooter = pathname?.includes("/albums/");
  const hideContactButton = pathname?.includes("/contact-us");
  const hideTopButton = pathname?.includes("/albums/");
  const enableSmoothScroll = !pathname?.includes("/albums/");

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const trySetup = () => {
      const lenis = (window as any).__lenis;

      if (lenis) {
        const handleScroll = ({ scroll }: { scroll: number }) => {
          setPastBanner(scroll > window.innerHeight * 0.5);
        };
        lenis.on("scroll", handleScroll);
        cleanup = () => lenis.off("scroll", handleScroll);
      } else {
        const handleScroll = () => {
          setPastBanner(window.scrollY > window.innerHeight * 0.5);
        };
        window.addEventListener("scroll", handleScroll);
        cleanup = () => window.removeEventListener("scroll", handleScroll);
      }
    };

    trySetup();
    const timeout = setTimeout(trySetup, 500);

    return () => {
      clearTimeout(timeout);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      {enableSmoothScroll && <SmoothScrollProvider />}
      <Loader isLoading={isLoading} />
      <Navbar />
      {!hideTopButton && <GoToTopButton pastBanner={pastBanner} />}
      {!hideContactButton && <ContactUsButton pastBanner={pastBanner} />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
