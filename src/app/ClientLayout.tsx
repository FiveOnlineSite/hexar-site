"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // hide footer only on album pages
  const hideFooter = pathname?.includes("/albums/");

  return (
    <>
      <Navbar />
      <ScrollAnimation/>
      
     {/* <div id="navbar-sentinel" className="h-[1px]" /> */}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
