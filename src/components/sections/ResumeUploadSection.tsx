"use client";

import React, { useState } from "react";
import {
  ArrowUp,
  Zap,
  Asterisk,
  Check,
  FileText,
} from "lucide-react";

export default function ResumeUploadSection() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0].name);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  return (
    <section
      id="register"
      className="py-5 sm:py-6 bg-gradient-to-b from-white via-blue-50/25 to-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/40 via-cyan-100/30 to-purple-100/30 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div
        className="absolute bottom-0 -left-20 w-[550px] h-[450px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.25) 0%, rgba(245, 208, 254, 0.18) 50%, rgba(245, 208, 254, 0) 100%)",
          backdropFilter: "blur(110px)",
          WebkitBackdropFilter: "blur(110px)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 shadow-sm text-[11px] font-semibold">
            <span className="flex items-center gap-1.5 text-blue-600 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              TRY IT LIVE
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">v2.4 AI Engine</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Upload your resume.
            <br />
            <span className="text-[#0084ff]">Find jobs that fit.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto mb-5">
          <div className="absolute -top-4 left-1 sm:-top-5 sm:-left-5 z-20 bg-white rounded-2xl p-2 sm:p-3 border border-slate-200/90 shadow-md shadow-slate-200/50 flex items-center gap-2 sm:gap-2.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EAF7D8] text-[#4D7C0F] flex items-center justify-center shrink-0">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-none">
                98% Match Rate
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 font-medium leading-none">
                AI semantic rank
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-1 sm:-bottom-5 sm:-right-5 z-20 bg-white rounded-2xl p-2 sm:p-3 border border-slate-200/90 shadow-md shadow-slate-200/50 flex items-center gap-2 sm:gap-2.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFF2E8] text-[#F97316] flex items-center justify-center shrink-0 font-bold">
              <Asterisk className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-none">
                ATS Compliant
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5 font-medium leading-none">
                Standardized parser
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-8 border border-slate-200/90 shadow-xl shadow-blue-500/5">
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-5 sm:p-10 text-center transition-all ${
                dragActive
                  ? "border-[#0084ff] bg-blue-50/50"
                  : "border-blue-200/70 bg-gradient-to-b from-blue-50/20 to-transparent"
              }`}
            >
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-400/80 rounded-tl" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-400/80 rounded-tr" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-400/80 rounded-bl" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-blue-400/80 rounded-br" />

              <input
                type="file"
                id="resume-file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="hidden"
              />

              <label htmlFor="resume-file" className="cursor-pointer flex flex-col items-center">
                {uploadedFile ? (
                  <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold animate-fade-in">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{uploadedFile} (Selected)</span>
                  </div>
                ) : null}

                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                  Upload your resume
                </h3>

                <p className="text-xs text-slate-500 max-w-md mx-auto mb-4 leading-relaxed font-medium">
                  PDF, DOC, or DOCX • Up to 10MB • We&apos;ll use it to understand your skills and experience.
                </p>

                <button
                  type="button"
                  onClick={() => document.getElementById("resume-file")?.click()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0084ff] hover:bg-[#0070dd] text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all cursor-pointer"
                >
                  Upload resume
                  <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <div className="mt-3 text-xs text-slate-400 font-medium">
                  or drag and drop your file here
                </div>

                <div className="mt-1.5 flex items-center justify-center gap-1.5">
                  {["PDF", "DOC", "DOCX"].map((fmt) => (
                    <span
                      key={fmt}
                      className="px-2 py-0.5 rounded border border-cyan-400/80 text-cyan-600 text-[9px] font-bold bg-cyan-50/40"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Resume analyzed
              </div>
              <div className="text-[10px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Ready in 4s
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Skills matched
              </div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                Deep taxonomy
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Experience matched
              </div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                Contextual seniority
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 leading-tight">
                1,000+ sources searched
              </div>
              <div className="text-[10px] text-[#0084ff] font-medium mt-0.5">
                Real-time aggregators
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
