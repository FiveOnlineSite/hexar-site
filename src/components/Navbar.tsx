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
    { label: "Blogs", href: "/blogs" },
    { label: "Join Us", href: "/join-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <section data-no-blast className={`navbar-section relative z-50`}>
      {/* TOP BAR */}
      <div className={`absolute top-0 left-0 right-0 z-[60] flex items-center justify-between lg:px-16 md:px-8 px-8 lg:py-6 md:py-4 py-4
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <Link href="/">
          <img src="/images/icons/hexar-logo.png" className="4xl:h-[150px] 3xl:h-[110px] 2xl:h-[110px] xl:h-[90px] lg:h-[90px] md:h-[70px] h-[70px]" />
        </Link>

        <button onClick={() => setOpen(true)} data-no-blast>
          <img src="/images/icons/menu-line.png" className="4xl:h-10 3xl:h-8 2xl:h-8 h-6" />
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
            <img src="/images/icons/hexar-logo.png" className="4xl:h-[150px] 3xl:h-[110px] 2xl:h-[110px] xl:h-[90px] lg:h-[90px] md:h-[70px] h-[70px]" />
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="4xl:text-[35px] 3xl:text-[30px] 2xl:text-[25px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[20px] font-bold text-white"
          >
            ✕
          </button>
        </div>

        {/* <div className="space-y-4 ps-8"> */}
        <div className="space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center text-white 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[24px] xl:text-[22px] lg:text-[22px] md:text-[20px] text-[18px] 4xl:py-2 3xl:py-2 py-0 font-semibold"
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

<div className="flex items-center justify-start mt-8">
        <img
          src="/images/icons/tpn-logo.png"
          className="mx-8 w-[140px]"
          alt="TPN Logo"
        />
        <a href="https://www.artstation.com/headhoppersstudios" target="_blank">
          <img
            src="/images/icons/Art Station.png"
            className="w-[140px]"
            alt="Art Station"
          />
        </a>
        </div>
      </div>
    </section>
  );
}
