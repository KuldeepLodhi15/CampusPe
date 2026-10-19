"use client";

import React, { useState } from "react";
import {
  Zap,
  MapPin,
  BookOpen,
  DollarSign,
  Laptop,
  Home as HomeIcon,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function OpportunitySection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    "All",
    "Colleges",
    "Jobs",
    "Internships",
    "Freelance",
    "Part-time",
  ];

  const allOpportunities = [
    {
      type: "Colleges",
      title: "IIM Bangalore",
      badge: "Top College",
      badgeColor: "bg-purple-50 text-purple-600 border border-purple-200/60",
      iconType: "crest",
      meta: [
        { label: "MBA", icon: BookOpen },
        { label: "Bengaluru", icon: MapPin },
        { label: "₹ 3L+", icon: DollarSign },
      ],
      description:
        "India's premier management institute with global exposure...",
      cta: "View Details",
    },
    {
      type: "Internships",
      title: "Product Intern",
      badge: "Internship",
      badgeColor: "bg-blue-50 text-blue-600 border border-blue-200/60",
      iconType: "google",
      meta: [
        { label: "Bengaluru", icon: MapPin },
        { label: "Hybrid", icon: Laptop },
        { label: "₹ 35K/mo", icon: DollarSign },
      ],
      description:
        "Work on real products, learn from top engineers and build...",
      cta: "Apply Now",
    },
    {
      type: "Freelance",
      title: "Marketing Gig",
      badge: "Freelance",
      badgeColor: "bg-emerald-50 text-emerald-600 border border-emerald-200/60",
      iconType: "notion",
      meta: [
        { label: "Remote", icon: HomeIcon },
        { label: "Freelance", icon: Briefcase },
        { label: "₹ 10K - ₹ 25K", icon: DollarSign },
      ],
      description:
        "Create content and help with social media campaigns for...",
      cta: "View Details",
    },
  ];

  const filteredOpportunities =
    activeFilter === "All"
      ? allOpportunities
      : allOpportunities.filter((item) => item.type === activeFilter);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="jobs" className="py-5 sm:py-6 bg-white/75 relative overflow-hidden">
      <div
        className="absolute top-1/3 -right-24 w-[600px] h-[500px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.3) 0%, rgba(245, 208, 254, 0.2) 50%, rgba(245, 208, 254, 0) 100%)",
          backdropFilter: "blur(110px)",
          WebkitBackdropFilter: "blur(110px)",
          filter: "blur(60px)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="w-full space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-600 text-[11px] font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              01 • OPPORTUNITY DISCOVERY
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Stop searching.
              <br />
              <span className="text-[#0084ff]">Start getting matched.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0 border border-purple-100">
                  01
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Set your preferences
                    </h3>
                    <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Smart Profile
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Tell us what you&apos;re looking for, from colleges and courses to jobs, internships and gigs.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200">
                  02
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Discover relevant opportunities
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      AI Ranked
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Explore colleges and career opportunities matched to your profile, interests and goals
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200">
                  03
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Get notified when something fits
                    </h3>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Instant Alerts
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Get notified when a relevant college or new opportunity is found, so you can act early.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => scrollTo("#register")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20 transition-all hover:gap-2.5 cursor-pointer"
              >
                Explore opportunities
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="w-full relative flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[500px] bg-white rounded-[24px] p-4 sm:p-5 border border-slate-200/90 shadow-xl shadow-blue-500/5">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#0084ff] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      CampusPe Opportunity Feed
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Colleges &amp; opportunities matched to you
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  12 new matches today
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3 scrollbar-none">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      activeFilter === tab
                        ? "bg-[#0084ff] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {filteredOpportunities.length === 0 ? (
                  <div className="text-center py-6 text-xs text-slate-400">
                    No items in this category right now.
                  </div>
                ) : (
                  filteredOpportunities.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                        <div className="flex items-start gap-2.5">
                          <div className="w-10 h-10 rounded-2xl border border-slate-200 flex items-center justify-center shrink-0 bg-white shadow-sm">
                            {item.iconType === "crest" && (
                              <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 font-bold text-[9px]">
                                🏛️
                              </div>
                            )}
                            {item.iconType === "google" && (
                              <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path
                                  fill="#4285F4"
                                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                                />
                                <path
                                  fill="#34A853"
                                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                                />
                                <path
                                  fill="#FBBC05"
                                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                                />
                                <path
                                  fill="#EA4335"
                                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                                />
                              </svg>
                            )}
                            {item.iconType === "notion" && (
                              <div className="w-5 h-5 rounded bg-slate-900 text-white font-bold flex items-center justify-center text-[10px]">
                                N
                              </div>
                            )}
                          </div>

                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                {item.title}
                              </h4>
                              <span
                                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.badgeColor}`}
                              >
                                {item.badge}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 mt-0.5 font-medium">
                              {item.meta.map((m, mIdx) => {
                                const MetaIcon = m.icon;
                                return (
                                  <span
                                    key={mIdx}
                                    className="flex items-center gap-1"
                                  >
                                    <MetaIcon className="w-3 h-3 text-slate-400" />
                                    <span>{m.label}</span>
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => scrollTo("#register")}
                          className="px-3 py-1 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs rounded-lg shadow-sm transition-all sm:self-center shrink-0 cursor-pointer self-start"
                        >
                          {item.cta}
                        </button>
                      </div>

                      <p className="text-xs text-slate-600 pt-1.5 border-t border-slate-100">
                        {item.description}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[11px]">
                <button
                  onClick={() => scrollTo("#register")}
                  className="font-bold text-[#0084ff] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View all matched opportunities
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-slate-400">
                  Curated for you • Updated daily
                </span>
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-center sm:justify-end gap-1.5 pr-3">
              <svg
                className="w-5 h-5 text-indigo-500 shrink-0 -rotate-12"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 30 C 20 15, 30 18, 32 8" />
                <path d="M26 8 L 32 8 L 32 14" />
              </svg>
              <p className="text-xs font-medium italic text-indigo-600">
                A mix of colleges, jobs, internships and gigs — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
