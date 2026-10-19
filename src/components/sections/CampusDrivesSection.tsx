"use client";

import React from "react";
import {
  ArrowRight,
  Zap,
  Calendar,
  RefreshCw,
} from "lucide-react";

export default function CampusDrivesSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="campus-drives" className="py-5 sm:py-6 bg-slate-50/40 relative overflow-hidden">
      <div className="absolute bottom-1/4 -right-20 w-[550px] h-[450px] bg-gradient-to-bl from-blue-100/30 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute top-1/4 -left-20 w-[550px] h-[450px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.25) 0%, rgba(245, 208, 254, 0.18) 50%, rgba(245, 208, 254, 0) 100%)",
          backdropFilter: "blur(110px)",
          WebkitBackdropFilter: "blur(110px)",
          filter: "blur(60px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="w-full space-y-4 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80 text-[#0084ff] text-[11px] font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0084ff]" />
              03 • FOR EMPLOYERS
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Stop running
              <br />
              campus drives.
              <br />
              <span className="text-slate-900">Start hiring the right </span>
              <br className="hidden sm:inline" />
              <span className="text-[#0084ff]">people.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
            </p>

            <div className="pt-1">
              <button
                onClick={() => scrollTo("#register")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/25 transition-all hover:gap-2.5 cursor-pointer"
              >
                Post a Job
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col items-start lg:items-end">
            <div className="w-full max-w-[580px] space-y-2.5">
              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      01
                    </span>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Post a role in minutes
                      </h3>
                      <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-full uppercase">
                        INSTANT SETUP
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-bold">
                      <Zap className="w-3 h-3 fill-current" />
                      5 Min Deployment
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[11px] font-semibold">
                      500+ Campus Network
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium sm:pl-8">
                  Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      02
                    </span>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Receive a matched shortlist
                      </h3>
                      <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-full uppercase">
                        INSTANT SETUP
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-bold">
                      <RefreshCw className="w-3 h-3" />
                      Zero CV Clutter
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[11px] font-semibold">
                      Tier 1–Tier 3 Parity
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium sm:pl-8">
                  Get candidates matched to your role by skills, experience, location and hiring requirements.
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      03
                    </span>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Connect with candidates directly
                      </h3>
                      <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-full uppercase">
                        INSTANT SETUP
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl bg-blue-50 text-[#0084ff] border border-blue-200 text-[11px] font-semibold">
                      <Calendar className="w-3 h-3" />
                      In-App Scheduling
                    </span>
                    <span className="px-2 py-0.5 rounded-xl bg-slate-50 text-slate-600 border border-slate-200 text-[11px] font-semibold">
                      1-Click Video / Chat
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium sm:pl-8">
                  Message, schedule interviews, and move candidates through your pipeline — all in one place.
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      04
                    </span>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Reduce your time-to-hire
                      </h3>
                      <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-full uppercase">
                        INSTANT SETUP
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0084ff] text-white text-[11px] font-bold shadow-sm">
                      &lt;2 DAYS
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-bold">
                      57% Faster Hiring
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium sm:pl-8">
                  Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
