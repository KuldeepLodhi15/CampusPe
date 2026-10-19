"use client";

import React from "react";
import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <section className="py-5 sm:py-6 bg-white/70 relative overflow-hidden">
      <div className="absolute top-1/2 -left-20 w-[500px] h-[400px] bg-gradient-to-r from-blue-100/30 via-cyan-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute bottom-0 -right-20 w-[500px] h-[400px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.25) 0%, rgba(245, 208, 254, 0.18) 50%, rgba(245, 208, 254, 0) 100%)",
          backdropFilter: "blur(110px)",
          WebkitBackdropFilter: "blur(110px)",
          filter: "blur(60px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0084ff] tracking-tight">
              Download App Now
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
              Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.
            </p>

            <div className="pt-1">
              <div className="relative w-56 sm:w-72 h-11 sm:h-14 cursor-pointer hover:opacity-95 transition-opacity">
                <Image
                  src="/campuspe/applogo.png"
                  alt="Get it on Google Play and Download on the App Store"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-[250px] sm:h-[360px] md:h-[400px]">
              <Image
                src="/campuspe/mobileapp.png"
                alt="CampusPe Mobile App Interface Mockup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
