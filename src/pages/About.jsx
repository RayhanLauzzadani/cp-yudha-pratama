import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../sections/about/AboutUs";
import CompanyProfile from "../sections/about/CompanyProfile";
import WhyChooseUs from "../sections/about/WhyChooseUs";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    // Jika ada hash di URL (misal: /about#company-profile)
    if (location.hash) {
      // Tunggu sebentar untuk memastikan DOM sudah ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Jika tidak ada hash, scroll ke atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* Spacer agar konten tidak ketutup navbar */}
      <div className="h-16" />
      
      <main className="overflow-x-hidden">
        {/* Section 1: AboutUs - Carousel (Sejarah, Visi & Misi, Budaya) */}
        <AboutUs />

        {/* Section 2: CompanyProfile - CV Yudha Pratama dengan team photo */}
        <CompanyProfile />

        {/* Section 3: WhyChooseUs - Keunggulan perusahaan dengan background merah */}
        <WhyChooseUs />
      </main>
    </>
  );
}
