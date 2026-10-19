"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Colleges", href: "#colleges" },
    { label: "Employers", href: "#employers" },
    { label: "Jobs", href: "#jobs" },
    { label: "Blogs", href: "#blogs" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/campusPe" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="CampusPe - Connecting Students, Institutions & Companies"
              width={160}
              height={52}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-[15px] font-medium text-slate-800 hover:text-[#0084ff] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#login"
              onClick={(e) => handleScrollTo(e, "#register")}
              className="text-[15px] font-medium text-slate-800 hover:text-[#0084ff] transition-colors cursor-pointer"
            >
              Sign In
            </a>
            <a
              href="#register"
              onClick={(e) => handleScrollTo(e, "#register")}
              className="bg-[#0084ff] hover:bg-[#0072dd] text-white text-[15px] font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Sign Up
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white/98 backdrop-blur-xl px-5 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:text-[#0084ff] hover:bg-blue-50/50 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="#login"
              onClick={(e) => handleScrollTo(e, "#register")}
              className="w-full text-center py-2.5 text-[15px] font-medium text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#register"
              onClick={(e) => handleScrollTo(e, "#register")}
              className="w-full text-center py-2.5 text-[15px] font-medium text-white bg-[#0084ff] hover:bg-[#0072dd] rounded-full shadow transition-all"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
