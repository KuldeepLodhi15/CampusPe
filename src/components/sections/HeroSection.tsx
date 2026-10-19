"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Check,
  Bell,
  ArrowRight,
  Landmark,
  GraduationCap,
  Briefcase,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  const [waitlistSuccess, setWaitlistSuccess] = useState<string | null>(null);

  const handleWaitlist = (role: string) => {
    setWaitlistSuccess(`You've been added to the ${role} waitlist! We'll notify you.`);
    setTimeout(() => setWaitlistSuccess(null), 4000);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-3 pb-5 bg-gradient-to-b from-blue-50/40 via-white to-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-100/40 via-blue-100/30 to-purple-100/30 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div
        className="absolute pointer-events-none rounded-full -z-10"
        style={{
          width: "800px",
          height: "613px",
          top: "303px",
          left: "60px",
          opacity: 1,
          borderRadius: "9999px",
          background:
            "linear-gradient(45deg, rgba(165, 243, 252, 0.3) 0%, rgba(191, 219, 254, 0.2) 50%, rgba(191, 219, 254, 0) 100%)",
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(100px)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute pointer-events-none rounded-full -z-10"
        style={{
          width: "860px",
          height: "613px",
          top: "207px",
          left: "432px",
          opacity: 1,
          borderRadius: "9999px",
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.3) 0%, rgba(245, 208, 254, 0.2) 50%, rgba(245, 208, 254, 0) 100%)",
          backdropFilter: "blur(110px)",
          WebkitBackdropFilter: "blur(110px)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="hidden lg:flex items-center gap-3 bg-white rounded-2xl p-3 border border-slate-200/90 shadow-sm max-w-[260px] text-left hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.942.552 3.753 1.51 5.303L2.001 22l4.821-1.488a9.98 9.98 0 0 0 5.209 1.519c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm5.828 14.185c-.244.686-1.42 1.309-1.956 1.391-.497.075-1.127.107-3.267-.78-2.585-1.072-4.234-3.708-4.364-3.879-.126-.171-1.037-1.381-1.037-2.635 0-1.254.654-1.871.888-2.126.233-.255.51-.318.68-.318.17 0 .341.002.489.01.159.008.373-.06.582.443.214.512.73 1.777.794 1.906.064.128.106.277.021.447-.085.17-.128.277-.255.426-.128.149-.268.332-.383.447-.128.128-.261.267-.112.523.149.256.66 1.089 1.417 1.764.973.868 1.794 1.137 2.05 1.265.256.128.405.106.554-.064.149-.17.639-.745.81-1.001.17-.256.341-.213.575-.128.234.085 1.488.702 1.744.83.256.128.426.191.489.3.064.106.064.617-.18 1.303z"/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wide">
                  WhatsApp Alert
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Get notified on whatsapp
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                  You&apos;ll get all important updates on your whatsapp
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 border border-blue-200/90 text-xs font-semibold text-blue-700 shadow-sm">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px]">
                🤖
              </span>
              AI-Powered Campus Assistant
            </div>

            <div className="hidden lg:flex items-center gap-3 bg-white rounded-2xl p-3 border border-purple-200/90 shadow-sm max-w-[270px] text-left hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 fill-purple-600" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wide">
                  Resume Builder
                </div>
                <div className="text-xs font-bold text-slate-800 leading-tight">
                  Build Your Resume
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                  Dynamic options to build better &amp; faster resume that got you hired
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-4">
          <h1 className="font-roboto font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] tracking-[0%] text-center align-middle text-slate-900">
            Connect{" "}
            <span className="text-[#0084ff] bg-gradient-to-r from-[#0084ff] to-[#00b4d8] bg-clip-text text-transparent">
              10X Faster.
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            One platform connecting students, colleges &amp; employers — faster.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-2xl border border-slate-200/80 shadow-sm text-left">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[8px] font-bold flex items-center justify-center ring-2 ring-white">
                AK
              </div>
              <div className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[8px] font-bold flex items-center justify-center ring-2 ring-white">
                PR
              </div>
              <div className="w-5 h-5 rounded-full bg-cyan-600 text-white text-[8px] font-bold flex items-center justify-center ring-2 ring-white">
                SN
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                <span>🔥</span> 142 students matched today
              </div>
              <div className="text-[9px] text-slate-400">
                Just now • IIT, BITS, VIT
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-bold text-[#0084ff]">
            <Sparkles className="w-3.5 h-3.5 fill-[#0084ff]" />
            <span>What are you looking for?</span>
            <Sparkles className="w-3.5 h-3.5 fill-[#0084ff]" />
          </div>

          <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-2xl border border-slate-200/80 shadow-sm text-left">
            <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-[10px] font-bold shrink-0">
              💼
            </div>
            <div>
              <div className="text-[11px] text-slate-800">
                <span className="font-bold text-[#0084ff]">Radiant Info</span> shortlisted 8 interns
              </div>
              <div className="text-[9px] text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Verified recruiter • 2 days ago
              </div>
            </div>
          </div>
        </div>

        {waitlistSuccess && (
          <div className="max-w-md mx-auto mb-4 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs font-bold text-emerald-700 flex items-center justify-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            {waitlistSuccess}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <div className="relative bg-white rounded-[24px] p-5 sm:p-6 border border-blue-100 shadow-md shadow-blue-500/5 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Landmark className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#0084ff] border border-[#0084ff]/40 bg-blue-50/40 px-3 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-1.5 font-serif tracking-tight">
                College
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-600 mb-5 leading-relaxed">
                Explore colleges, courses,fees, placements &amp; more
              </p>

              <ul className="space-y-2.5 mb-6">
                {[
                  "Search by course, location, fees",
                  "Connect directly with colleges",
                  "Improve student placements",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative pt-2">
              <button
                onClick={() => handleWaitlist("Colleges")}
                className="w-full py-3 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Join Waitlist
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-[24px] p-5 sm:p-6 border-2 border-blue-400 shadow-xl shadow-blue-500/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#0084ff] border border-[#0084ff]/40 bg-blue-50/40 px-3 py-0.5 rounded-full">
                  Available Now
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                I&apos;m Looking for a Job
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-600 mb-5 leading-relaxed">
                Upload your resume. We&apos;ll find jobs that fit you.
              </p>

              <div className="flex items-center justify-between gap-3 mb-6">
                <ul className="space-y-2.5">
                  {[
                    "Jobs from 1000+ sources",
                    "AI powered matching",
                    "WhatsApp & email alerts",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-14 h-18 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-2 flex flex-col justify-between shadow-sm shrink-0 relative group-hover:scale-105 transition-transform">
                  <div className="space-y-1">
                    <div className="h-1 bg-amber-400/80 rounded w-7" />
                    <div className="h-1 bg-emerald-400/70 rounded w-9" />
                    <div className="h-1 bg-blue-400/70 rounded w-6" />
                    <div className="h-1 bg-slate-300 rounded w-8" />
                  </div>
                  <div className="self-end w-5 h-5 rounded-full bg-white shadow border border-slate-100 flex items-center justify-center text-[9px]">
                    🔍
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollTo("#jobs")}
                className="w-full py-3 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 group-hover:gap-2.5 cursor-pointer"
              >
                Explore Jobs
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="relative bg-white rounded-[24px] p-5 sm:p-6 border border-blue-100 shadow-md shadow-blue-500/5 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#0084ff] border border-[#0084ff]/40 bg-blue-50/40 px-3 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                I&apos;m Hiring
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-600 mb-5 leading-relaxed">
                Connect with colleges and find candidates — from students to graduates.
              </p>

              <div className="flex items-center justify-between gap-3 mb-6">
                <ul className="space-y-2.5">
                  {[
                    "Connect directly with colleges",
                    "Find the right candidates",
                    "Simplify your hiring",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl flex items-center justify-center font-mono font-bold text-slate-700 text-xs shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                  &lt;/&gt;
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleWaitlist("Recruiters & Employers")}
                className="w-full py-3 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Join Waitlist
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
