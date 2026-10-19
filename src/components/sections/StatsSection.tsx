"use client";

import React from "react";
import { Users, Landmark, Briefcase, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      iconBg: "bg-[#F3EFFE] text-[#8B5CF6]",
      value: "800+",
      label: "Students",
    },
    {
      icon: Landmark,
      iconBg: "bg-[#EAF3FF] text-[#3B82F6]",
      value: "130+",
      label: "colleges",
    },
    {
      icon: Briefcase,
      iconBg: "bg-[#E8FAF0] text-[#10B981]",
      value: "100+",
      label: "jobs & internships",
    },
    {
      icon: ShieldCheck,
      iconBg: "bg-[#FFF2E8] text-[#F97316]",
      value: "100%",
      label: "Safe & Trusted",
    },
  ];

  return (
    <section className="relative py-3 sm:py-4 bg-gradient-to-r from-cyan-50/25 via-white to-pink-50/20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm shadow-blue-500/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 ${
                    idx !== 0 ? "md:border-l md:border-slate-200/80 md:pl-6" : ""
                  } ${idx % 2 !== 0 ? "max-md:border-l max-md:border-slate-200/80 max-md:pl-3" : ""}`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ${stat.iconBg}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-600 font-medium mt-1">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
