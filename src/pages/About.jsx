import React from "react";
import AboutUs from "../sections/about/AboutUs";
import CompanyProfile from "../sections/about/CompanyProfile";

export default function AboutPage() {
  return (
    <>
      {/* Spacer agar konten tidak ketutup navbar */}
      <div className="h-16" />
      
      <main className="overflow-x-hidden">
        {/* Section 1: AboutUs - Carousel (Sejarah, Visi & Misi, Budaya) */}
        <AboutUs />

        {/* Section 2: CompanyProfile - CV Yudha Pratama dengan team photo */}
        <CompanyProfile />
      </main>
    </>
  );
}
