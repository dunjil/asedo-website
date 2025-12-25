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
    <div className="flex py-4 md:py-6 px-4 md:px-10 lg:px-20 justify-between items-center border-b-[0.4px] border-b-[#000] bg-[#FFF] w-full">
      <Link href="/">
        <img
          src="/logo.png"
          className="shrink-0 w-32 md:w-64 h-auto max-w-none"
          alt="ASEDO Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-2 xl:gap-4 w-fit">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex p-2 xl:p-2.5 justify-center items-center gap-2.5 w-fit h-[47px]"
          >
            <p
              className={`font-openSans text-sm xl:text-md leading-[1.25em] w-fit whitespace-nowrap ${currentPath === item.href
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
          className="flex p-2 xl:p-2.5 justify-center items-center gap-2.5 bg-[#E3A700] w-fit px-4 xl:px-6 h-[47px]"
        >
          <p className="text-[#0A1E3F] font-openSans text-sm xl:text-md font-normal leading-[1.25em] w-fit whitespace-nowrap">
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
        <div className="absolute top-[59px] left-0 right-0 bg-[#FFF] border-b border-[#000] lg:hidden z-50 shadow-lg">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <p
                  className={`font-openSans text-md leading-[1.25em] ${currentPath === item.href
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
              <p className="text-[#0A1E3F] font-openSans text-md font-normal leading-[1.25em]">
                CONTACT US
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
