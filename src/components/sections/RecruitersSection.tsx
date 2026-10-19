"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Building2,
  Users2,
} from "lucide-react";

export default function RecruitersSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="employers" className="py-5 sm:py-6 bg-white/70 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[550px] h-[450px] bg-gradient-to-tr from-cyan-100/30 via-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute top-1/3 -right-20 w-[550px] h-[450px] pointer-events-none -z-10 rounded-full"
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
              02 • FOR COLLEGES
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Get Discovered
              <br />
              <span className="text-slate-900">by </span>
              <span className="text-[#0084ff]">Students and</span>
              <br />
              <span className="text-[#0084ff]">Recruiters.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
            </p>

            <div className="pt-1">
              <button
                onClick={() => scrollTo("#register")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/25 transition-all hover:gap-2.5 cursor-pointer"
              >
                List Your College
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
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      VERIFIED PROFILE
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-bold">
                      <CheckCircle className="w-3 h-3" />
                      NAAC A++ Ready
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-50 text-[#0084ff] border border-cyan-200 text-[11px] font-bold">
                      98% Match
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                  Build your college profile
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      02
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      DIRECT ENROLL
                    </span>
                  </div>

                  <div className="flex flex-col sm:items-end gap-0.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl bg-blue-50 text-[#0084ff] border border-blue-200 text-[11px] font-semibold">
                        <MessageSquare className="w-3 h-3" />
                        Direct Enquiries
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        WHATSAPP / CHAT
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium">
                      Avg. response: &lt;15 min
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                  Students discover and connect
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      03
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      CAMPUS RECRUITING
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-semibold">
                      <Building2 className="w-3 h-3" />
                      500+ Hiring Partners
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl bg-blue-50 text-[#0084ff] border border-blue-200 text-[11px] font-semibold">
                      <Users2 className="w-3 h-3" />
                      Connect Directly
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                  Recruiters discover your College
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.
                </p>
              </div>

              <div className="bg-white rounded-[16px] p-3.5 sm:p-[20px] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#0084ff] text-xs font-extrabold flex items-center justify-center border border-blue-100">
                      04
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      LIVE HUD
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-[11px] font-bold">
                      <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping" />
                      LIVE PLACEMENTS
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0084ff] text-white text-[11px] font-semibold shadow-sm">
                      Students • Interviews • Offers
                    </span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                  Track placements in real time
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Track students, interviews, offers and placements from one centralized dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
