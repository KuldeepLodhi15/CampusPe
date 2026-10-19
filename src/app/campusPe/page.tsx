import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import PartnerLogos from "@/components/sections/PartnerLogos";
import OpportunitySection from "@/components/sections/OpportunitySection";
import ResumeUploadSection from "@/components/sections/ResumeUploadSection";
import RecruitersSection from "@/components/sections/RecruitersSection";
import CampusDrivesSection from "@/components/sections/CampusDrivesSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import DownloadAppSection from "@/components/sections/DownloadAppSection";
import FaqCtaSection from "@/components/sections/FaqCtaSection";

export default function CampusPePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 bg-lp-texture relative">
        <HeroSection />
        <StatsSection />
        <PartnerLogos />
        <OpportunitySection />
        <ResumeUploadSection />
        <RecruitersSection />
        <CampusDrivesSection />
        <MobileAppSection />
        <DownloadAppSection />
        <FaqCtaSection />
      </main>

      <Footer />
    </div>
  );
}
