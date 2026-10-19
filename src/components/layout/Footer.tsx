"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const studentLinks = [
    { label: "Explore Colleges", href: "#colleges" },
    { label: "Find Opportunities", href: "#jobs" },
    { label: "Internships", href: "#jobs" },
    { label: "Full-time Jobs", href: "#jobs" },
    { label: "Part-time & Gig", href: "#jobs" },
    { label: "Application Tracker", href: "#register" },
  ];

  const collegeLinks = [
    { label: "List Your College", href: "#register" },
    { label: "Admissions", href: "#colleges" },
    { label: "Fee Collection", href: "#colleges" },
    { label: "Placements", href: "#colleges" },
  ];

  const employerLinks = [
    { label: "Post a Job", href: "#campus-drives" },
    { label: "Find Talent", href: "#employers" },
    { label: "Campus Hiring", href: "#campus-drives" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#blogs" },
    { label: "Blogs", href: "#blogs" },
    { label: "Careers", href: "#jobs" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Refund & Cancellation Policy", href: "#refund" },
    { label: "Cookie Policy", href: "#cookie" },
    { label: "Grievance Redressal", href: "#grievance" },
    { label: "Job & Internship Disclaimer", href: "#disclaimer" },
  ];

  return (
    <footer className="relative py-6 bg-gradient-to-b from-white via-[#F0F7FF] to-[#D4EAFF] shadow-[inset_0_-50px_100px_rgba(0,132,255,0.22)] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-3xl pointer-events-none rounded-full" />
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] pointer-events-none rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.25) 0%, rgba(245, 208, 254, 0.15) 50%, rgba(245, 208, 254, 0) 100%)",
          filter: "blur(80px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 border border-slate-200/90 shadow-xl shadow-blue-500/5 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="max-w-xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1">
              Ready for what&apos;s next?
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 shrink-0">
            <button
              onClick={() => scrollTo("#colleges")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0084ff] hover:bg-[#0070dd] text-white text-xs font-semibold rounded-full shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Explore Colleges
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollTo("#jobs")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0084ff] hover:bg-[#0070dd] text-white text-xs font-semibold rounded-full shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Find Opportunities
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollTo("#register")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-full shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              List Your College
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollTo("#campus-drives")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-full shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Post a Job
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6">
          <div className="lg:col-span-4 space-y-3">
            <Link href="/campusPe" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="CampusPe"
                width={140}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug max-w-xs">
              From choosing a college to finding your next opportunity.
            </h4>

            <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-xs">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            <div className="space-y-2.5">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                For Students
              </h5>
              <ul className="space-y-1.5 text-xs font-medium text-slate-600">
                {studentLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(l.href);
                      }}
                      className="hover:text-[#0084ff] transition-colors cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                For Colleges
              </h5>
              <ul className="space-y-1.5 text-xs font-medium text-slate-600">
                {collegeLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(l.href);
                      }}
                      className="hover:text-[#0084ff] transition-colors cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                For Employers
              </h5>
              <ul className="space-y-1.5 text-xs font-medium text-slate-600">
                {employerLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(l.href);
                      }}
                      className="hover:text-[#0084ff] transition-colors cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                Company
              </h5>
              <ul className="space-y-1.5 text-xs font-medium text-slate-600">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(l.href);
                      }}
                      className="hover:text-[#0084ff] transition-colors cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <h5 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                Legal &amp; Policies
              </h5>
              <ul className="space-y-1.5 text-xs font-medium text-slate-600">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(l.href);
                      }}
                      className="hover:text-[#0084ff] transition-colors cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <a
                href="#policies"
                className="inline-block text-xs font-bold text-[#0084ff] hover:underline pt-0.5"
              >
                View all policies →
              </a>

              <div className="p-2.5 bg-blue-50/70 border border-blue-100 rounded-xl text-[10px] text-slate-600 leading-relaxed font-medium">
                Separate user, institution and employer terms can live inside the full Policies page.
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-700">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:contactus@campuspe.com"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0084ff]" />
              <span>contactus@campuspe.com</span>
            </a>
            <a
              href="tel:+916362606464"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0084ff]" />
              <span>+91 6362606464</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>Students • Colleges • Employers</span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-600">
          <div>
            2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance
          </div>

          <div className="flex items-center gap-2.5">
            <a href="#linkedin" aria-label="LinkedIn" className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0084ff] hover:bg-[#0084ff] hover:text-white flex items-center justify-center transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a href="#instagram" aria-label="Instagram" className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0084ff] hover:bg-[#0084ff] hover:text-white flex items-center justify-center transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a href="#twitter" aria-label="X (Twitter)" className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0084ff] hover:bg-[#0084ff] hover:text-white flex items-center justify-center transition-colors shadow-sm">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="#facebook" aria-label="Facebook" className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0084ff] hover:bg-[#0084ff] hover:text-white flex items-center justify-center transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a href="#whatsapp" aria-label="WhatsApp" className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0084ff] hover:bg-[#0084ff] hover:text-white flex items-center justify-center transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.942.552 3.753 1.51 5.303L2.001 22l4.821-1.488a9.98 9.98 0 0 0 5.209 1.519c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm5.828 14.185c-.244.686-1.42 1.309-1.956 1.391-.497.075-1.127.107-3.267-.78-2.585-1.072-4.234-3.708-4.364-3.879-.126-.171-1.037-1.381-1.037-2.635 0-1.254.654-1.871.888-2.126.233-.255.51-.318.68-.318.17 0 .341.002.489.01.159.008.373-.06.582.443.214.512.73 1.777.794 1.906.064.128.106.277.021.447-.085.17-.128.277-.255.426-.128.149-.268.332-.383.447-.128.128-.261.267-.112.523.149.256.66 1.089 1.417 1.764.973.868 1.794 1.137 2.05 1.265.256.128.405.106.554-.064.149-.17.639-.745.81-1.001.17-.256.341-.213.575-.128.234.085 1.488.702 1.744.83.256.128.426.191.489.3.064.106.064.617-.18 1.303z"/>
              </svg>
            </a>

            <a href="#youtube" aria-label="YouTube" className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-[#0084ff] hover:bg-[#0084ff] hover:text-white flex items-center justify-center transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
