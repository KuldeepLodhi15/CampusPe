"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MobileAppSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = 5;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const slides = [
    { id: 0, title: "Student Dashboard" },
    { id: 1, title: "Post a Job" },
    { id: 2, title: "Explore Colleges" },
    { id: 3, title: "My Applications" },
    { id: 4, title: "College Directory" },
  ];

  const getSlideProps = (index: number) => {
    let offset = (index - activeIndex + totalSlides) % totalSlides;
    if (offset > 2) offset -= totalSlides;

    if (offset === 0) {
      return {
        x: 0,
        scale: isMobile ? 1.05 : 1.08,
        zIndex: 30,
        opacity: 1,
        blur: "blur(0px)",
        y: 0,
      };
    } else if (Math.abs(offset) === 1) {
      return {
        x: offset > 0 ? (isMobile ? 95 : 210) : (isMobile ? -95 : -210),
        scale: isMobile ? 0.82 : 0.88,
        zIndex: 20,
        opacity: isMobile ? 0.6 : 0.75,
        blur: "blur(2px)",
        y: isMobile ? 8 : 12,
      };
    } else {
      return {
        x: offset > 0 ? (isMobile ? 175 : 410) : (isMobile ? -175 : -410),
        scale: isMobile ? 0.68 : 0.75,
        zIndex: 10,
        opacity: isMobile ? 0.25 : 0.45,
        blur: "blur(3.5px)",
        y: isMobile ? 16 : 24,
      };
    }
  };

  return (
    <section className="py-5 sm:py-6 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[500px] pointer-events-none -z-10 rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.3) 0%, rgba(245, 208, 254, 0.2) 50%, rgba(245, 208, 254, 0) 100%)",
          backdropFilter: "blur(110px)",
          WebkitBackdropFilter: "blur(110px)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0084ff] tracking-tight mb-2">
            Checkout Our App Interface Look
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Experience the power of a unified campus ecosystem right in your pocket.{" "}
            <strong className="text-slate-900 font-bold">CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        <div className="relative h-[320px] sm:h-[420px] w-full flex items-center justify-center overflow-hidden">
          {slides.map((slide, index) => {
            const props = getSlideProps(index);
            const isCenter = (index - activeIndex + totalSlides) % totalSlides === 0;

            return (
              <motion.div
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer flex items-center justify-center"
                initial={false}
                animate={{
                  x: props.x,
                  y: props.y,
                  scale: props.scale,
                  zIndex: props.zIndex,
                  opacity: props.opacity,
                  filter: props.blur,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  width: isMobile ? "130px" : "168px",
                  height: isMobile ? "270px" : "348px",
                }}
              >
                <div
                  className={`relative w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden transition-all duration-300 ${
                    isCenter
                      ? "shadow-2xl shadow-blue-500/25 ring-2 ring-orange-500/30"
                      : "shadow-md"
                  }`}
                >
                  <Image
                    src="/campuspe/mobile-1.png"
                    alt={slide.title}
                    fill
                    priority={isCenter}
                    sizes="(max-width: 640px) 130px, 168px"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? "w-7 bg-[#0084ff]"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
