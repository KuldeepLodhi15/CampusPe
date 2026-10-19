"use client";

import React, { useState } from "react";
import { ArrowUpRight, Phone, CheckCircle2 } from "lucide-react";

export default function FaqCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="blogs" className="py-5 sm:py-6 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="w-full min-h-[300px] flex flex-col justify-between items-center pt-[28px] pb-[36px] sm:pb-[48px] px-5 sm:px-12 rounded-[24px] bg-gradient-to-b from-[#007FFC]/18 via-[#007FFC]/5 to-white border border-[#007FFC]/25 shadow-[inset_0_8px_20px_rgba(0,127,252,0.14)] relative overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-72 h-36 bg-[#007FFC]/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-0 left-1/4 w-72 h-36 bg-cyan-400/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
              Our support team is here to help you succeed. Get in touch anytime.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href="mailto:support@campuspe.com"
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-[#007FFC] hover:bg-[#006ee0] text-white text-xs sm:text-sm font-bold pl-5 pr-2 py-2 rounded-full shadow-md shadow-[#007FFC]/25 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Contact Support</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#007FFC] flex items-center justify-center shrink-0 shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </a>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-white hover:bg-blue-50/60 border border-[#007FFC] text-[#007FFC] text-xs sm:text-sm font-bold pl-5 pr-2 py-2 rounded-full shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>Schedule a Call</span>
              <span className="w-7 h-7 rounded-full bg-[#007FFC] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-3 h-3 fill-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-left relative">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Schedule a Call with CampusPe
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Pick a convenient time and our placement advisory team will give you a call.
            </p>

            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 text-base">Request Received!</h4>
                <p className="text-xs text-slate-600">Our team will call you within 15 minutes.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setModalOpen(false);
                  }}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditi Sharma"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#007FFC]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#007FFC]"
                  />
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="w-1/2 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 rounded-xl bg-[#007FFC] text-white text-xs font-bold hover:bg-[#006ee0] shadow cursor-pointer"
                  >
                    Confirm Call
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
