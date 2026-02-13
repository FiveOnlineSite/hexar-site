"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const sentinel = document.getElementById("navbar-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // when sentinel is NOT visible → user scrolled down
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  const menuItems = [  { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <section data-no-blast className={`navbar-section relative z-20`}>
      {/* TOP BAR */}
      <div className={`absolute top-0 left-0 right-0 z-[60] flex items-center justify-between lg:px-16 px-8 py-6
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <Link href="/">
          <img src="/images/icons/hexar-logo.png" className="h-[70px]" />
        </Link>

        <button onClick={() => setOpen(true)} data-no-blast>
          <img src="/images/icons/menu-line.png" className="h-8" />
        </button>
      </div>

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full bg-black z-[80]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        data-no-blast
      >
        <div className="px-8 py-6 flex justify-between items-center">
          <Link href="/">
            <img src="/images/icons/hexar-logo.png" className="h-[70px]" />
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="3xl:text-[30px] 2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[25px] text-[20px] font-bold text-white"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 ps-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center text-white text-[20px] font-semibold"
            >
              <img
                src="/images/icons/hexar-small-logo.png"
                className="w-[40px] h-[40px] opacity-0 -translate-x-10 
                group-hover:opacity-100 group-hover:translate-x-6
                transition-all duration-500"
              />

              <span className="transition-all duration-500 group-hover:translate-x-[35px]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <img
          src="/images/icons/tpn-logo.png"
          className="mx-8 mt-8 w-[140px]"
        />
      </div>
    </section>
  );
}
