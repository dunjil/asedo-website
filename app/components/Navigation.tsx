"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  currentPath: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/about-us", label: "ABOUT US" },
    { href: "/services", label: "OUR SERVICES" },
    { href: "/projects", label: "OUR PROJECTS" },
    { href: "/blog", label: "OUR BLOG" },
  ];

  return (
    <div className="sticky top-0 z-50 flex py-4 md:py-6 px-4 md:px-10 lg:px-20 justify-between items-center border-b-[0.4px] border-b-[#000] bg-[#FFF] w-full">
      <Link href="/">
        <img
          src="/logo.png"
          className="shrink-0 w-32 md:w-64 h-auto max-w-none"
          alt="ASEDO Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-3 w-fit">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col px-3 py-2 justify-center items-center gap-1 h-[47px] relative"
          >
            <p
              className="font-openSans text-sm leading-[1.25em] whitespace-nowrap font-medium text-[#000206]"
            >
              {item.label}
            </p>
            {currentPath === item.href && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A89D]"></div>
            )}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`flex px-6 py-2 justify-center items-center h-[47px] transition-colors ml-2 ${currentPath === "/contact" ? "bg-[#00A89D]" : "bg-[#E3A700] hover:bg-[#d09900]"}`}
        >
          <p className={`font-openSans text-sm font-medium leading-[1.25em] whitespace-nowrap ${currentPath === "/contact" ? "text-[#FFF]" : "text-[#0A1E3F]"}`}>
            CONTACT US
          </p>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-black"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[59px] md:top-[75px] left-0 right-0 bg-[#FFF] border-b border-[#000] lg:hidden z-40 shadow-lg">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <p
                  className={`font-openSans text-sm leading-[1.25em] ${currentPath === item.href
                      ? "text-[#000206] font-semibold"
                      : "text-[#000206] font-normal"
                    }`}
                >
                  {item.label}
                </p>
              </Link>
            ))}
            <Link
              href="/contact"
              className="mx-4 mt-2 flex p-2.5 justify-center items-center bg-[#E3A700]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="text-[#0A1E3F] font-openSans text-sm font-normal leading-[1.25em]">
                CONTACT US
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
