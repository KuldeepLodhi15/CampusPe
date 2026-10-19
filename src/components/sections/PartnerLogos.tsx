"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnerLogos() {
  const partners = [
    {
      name: "Startup Karnataka",
      src: "/campuspe/partner/partner-1.png",
    },
    {
      name: "Karnataka University",
      src: "/campuspe/partner/partner-2.png",
    },
    {
      name: "Talentspotify",
      src: "/campuspe/partner/partner-3.png",
    },
    {
      name: "Radiant Info",
      src: "/campuspe/partner/partner-4.jpg",
    },
  ];

  const repeatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <section id="colleges" className="py-4 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <h2 className="text-sm sm:text-base font-semibold text-slate-700 tracking-tight">
          Trusted by partners across India
        </h2>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex items-center gap-10 sm:gap-20 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {repeatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center shrink-0 cursor-pointer"
            >
              <div className="relative h-12 sm:h-16 w-32 sm:w-52 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 140px, 210px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
