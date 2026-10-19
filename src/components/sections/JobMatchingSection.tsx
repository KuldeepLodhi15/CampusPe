"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Zap } from "lucide-react";

export default function JobMatchingSection() {
  const matchedJobs = [
    {
      role: "Associate Software Engineer",
      company: "Razorpay",
      type: "Full-Time",
      ctc: "₹14 - 18 LPA",
      location: "Bangalore (Hybrid)",
      matchScore: "98% Match",
      tags: ["React", "TypeScript", "Node.js"],
      urgent: true,
    },
    {
      role: "Product Growth Analyst",
      company: "Swiggy",
      type: "Full-Time",
      ctc: "₹11 - 14 LPA",
      location: "Bangalore",
      matchScore: "95% Match",
      tags: ["SQL", "Python", "Product Analytics"],
      urgent: false,
    },
    {
      role: "AI / Data Science Intern",
      company: "Tata Digital",
      type: "Internship (6 Mos)",
      ctc: "₹45,000 / month",
      location: "Mumbai / Remote",
      matchScore: "92% Match",
      tags: ["PyTorch", "LLMs", "FastAPI"],
      urgent: false,
    },
  ];

  return (
    <section id="jobs" className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Smart Matching Engine
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Stop searching.
              <br />
              <span className="text-blue-600">Start getting matched.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No more applying to hundreds of black-hole job boards. Upload your profile once, and our AI matches your real projects and college credentials with HRs actively looking for fresh talent.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "Direct interview invites from verified company HRs",
                "100% transparent CTC breakdowns and verified stipends",
                "Real-time application tracking with zero ghosting",
                "Priority shortlisting for partner college students",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/20 transition-all hover:gap-3 cursor-pointer"
              >
                Create Free Profile &amp; Get Matched
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-tr from-slate-50 via-blue-50/40 to-slate-100 p-6 sm:p-8 rounded-3xl border border-blue-100 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-slate-500 ml-2">
                    Live Matches for You
                  </span>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full">
                  3 Open Opportunities
                </span>
              </div>

              <div className="space-y-4">
                {matchedJobs.map((job, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900">
                            {job.role}
                          </h4>
                          {job.urgent && (
                            <span className="text-[10px] uppercase font-bold tracking-wider bg-rose-50 text-rose-600 px-2 py-0.5 rounded-md border border-rose-200">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mt-1">
                          <span className="font-semibold text-slate-700">{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center sm:flex-col sm:items-end justify-between">
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Star className="w-3 h-3 fill-emerald-600" />
                          {job.matchScore}
                        </span>
                        <span className="text-sm font-extrabold text-blue-600 sm:mt-1">
                          {job.ctc}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer">
                        Quick Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
