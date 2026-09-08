"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OffCanvas from "./OffCanvas";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

const Header = ({ HeaderData, MenusData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef(null);
  const logo = HeaderData?.Header_Logo;
  const logoUrl = typeof logo === "object" && logo?.url ? logo.url : null;
  const logoAlt = (typeof logo === "object" && logo?.alt) || "MeaNova";
  const cta = HeaderData?.link;
  const ctaUrl = cta?.url || "/";
  const menus = MenusData?.menus ?? [];

  useEffect(() => {
    const scroller = new Lenis({
      duration: 1.2, // speed of scroll
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = scroller;

    return () => {
      scroller.destroy();
    };
  }, []);

  // ✅ Smooth scroll handler for internal section links
  const handleSmoothScroll = (e, targetId) => {
    if (pathname !== "/") return;
    e.preventDefault();
    const targetEl = document.querySelector(targetId);
    if (targetEl && lenisRef.current) {
      lenisRef.current.scrollTo(targetEl, {
        offset: -80, // adjust for sticky header height
        duration: 1.2,
      });
    }
    setIsOpen(false); // close off-canvas if open
  };

  return (
    <>
      <header className="py-31 sticky top-0 bg-white z-[99]">
        <div className="container">
          <div className="flex justify-between items-center gap-50">
            <Link href="/" aria-roledescription="link">
              {logoUrl ? (
                <Image
                  className="w-100 xl:w-135"
                  src={logoUrl}
                  alt={logoAlt}
                  role="img"
                  width={200}
                  height={60}
                  fetchPriority="high"
                />
              ) : (
                <span className="font-jakarta font-medium text-primary">MeaNova</span>
              )}
            </Link>

            <nav
              id="menu"
              className="xl:block hidden"
              role="navigation"
              aria-label="menü"
            >
              <ul className="flex justify-center items-center gap-48 [&_li>a]:text-primary [&_li>a]:font-outfit [&_li>a]:text-base font-light">
                {menus.map((menu, index) => {
                  const menuUrl = menu.link?.url || "/";
                  const isAnchor = menuUrl.startsWith("#"); // detect section links
                  const isActive =
                    pathname === menuUrl ||
                    (menuUrl !== "/" && pathname.startsWith(menuUrl));

                  return (
                    <li key={index}>
                      {isAnchor ? (
                        <a
                          href={pathname !== "/" ? `/${menuUrl}` : menuUrl}
                          onClick={(e) => handleSmoothScroll(e, menuUrl)}
                          className={`${
                            isActive ? "active" : "text-primary"
                          } transition-all duration-200`}
                        >
                          {menu.link?.label}
                        </a>
                      ) : (
                        <Link
                          href={menuUrl}
                          aria-label={menu.link?.label || ""}
                          aria-roledescription="link"
                          target={menu.link?.target || "_self"}
                          className={`${
                            isActive ? "active" : "text-primary"
                          } transition-all duration-200`}
                        >
                          {menu.link?.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex justify-end items-center gap-16 md:gap-24">
              <Link
                href={
                  pathname !== "/" && ctaUrl.startsWith("#")
                    ? `/${ctaUrl}`
                    : ctaUrl
                }
                onClick={(e) => handleSmoothScroll(e, ctaUrl)}
                target={cta?.target}
                aria-label="Kontaktieren Sie uns – Startseite"
                className="btn-dark !hidden sm:!block"
              >
                <span>{cta?.Kontakt_label}</span>
              </Link>

              <Link
                href={ctaUrl}
                target={cta?.target}
                aria-label="Kontaktieren Sie uns – Startseite"
                className="bg-black p-4 rounded-sm !block sm:!hidden"
              >
                <Image
                  src="/images/phone.svg"
                  alt="phone icon"
                  role="img"
                  width={50}
                  height={50}
                  className="w-30 h-30 block sm:hidden"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                id="menu-btn"
                className="xl:hidden block cursor-pointer"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src="/images/menu-btn.svg"
                  alt="Menu button"
                  role="img"
                  width={50}
                  height={50}
                  className="w-40 h-40"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OffCanvas Menu */}
      <OffCanvas
        logo={logoUrl}
        menus={menus}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
      />
    </>
  );
};

export default Header;
