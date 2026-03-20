// "use client";

// import { usePathname } from "next/navigation";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ScrollAnimation from "../components/ScrollAnimation";
// import GoToTopButton from "../components/GoToTopButton";

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   // hide footer only on album pages
//   const hideFooter = pathname?.includes("/albums/");
//   const hideTopButton = pathname?.includes("/albums/");


//   return (
//     <>
//       <Navbar />
//       {/* <ScrollAnimation/> */}
//       {!hideTopButton && <GoToTopButton/>}
      
//      {/* <div id="navbar-sentinel" className="h-[1px]" /> */}
//       {children}
//       {!hideFooter && <Footer />}
//     </>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideFooter = pathname?.includes("/albums/");
  const hideTopButton = pathname?.includes("/albums/");

  return (
    <>
    <SmoothScrollProvider />
      <Navbar />
      {!hideTopButton && <GoToTopButton />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}