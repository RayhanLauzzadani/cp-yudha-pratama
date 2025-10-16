import React from "react";
import AboutUs from "../sections/about/AboutUs";  // Menambahkan AboutUs import

export default function AboutPage() {
  return (
    <>
      {/* Spacer agar konten tidak ketutup navbar */}
      <div className="h-16" />
      
      <main className="overflow-x-hidden">
        {/* Section 1: AboutUs untuk carousel dan CV Yudha Pratama */}
        <AboutUs />  {/* Menambahkan komponen AboutUs yang berisi carousel dan CV */}

        {/* Section 2: AboutClean dengan carousel, stats, dan Partners/Clients */}
        {/* Note: PartnersClients sudah di-render di dalam AboutClean */}
      </main>
    </>
  );
}
