// src/sections/about/WhyChooseUs.jsx
import React, { useState, useEffect } from "react";

// Background images
import bgMengapaKamiMobile from "../../assets/icons/bg-mengapakami_mobile.png";
import bgMengapaKamiDesktop from "../../assets/icons/bg-mengapakami.png";
import bgMengapaBundar from "../../assets/icons/bg-mengapa_bundar_mobile.png";

// Icons untuk card
import iconMedal from "../../assets/icons/medal.svg";
import iconLab from "../../assets/icons/lab.svg";
import iconGlobe from "../../assets/icons/globe.svg";

// Vector decorations untuk Mitra & Klien
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";

// Partner images
import klienImage from "../../assets/icons/klien.png";
import mitraImage from "../../assets/icons/mitra.png";
import klienImageMobile from "../../assets/icons/klien_mobile.png";
import mitraImageMobile from "../../assets/icons/mitra_mobile.png";

// Toggle button component - Desktop dengan MD adjustment
function NoShiftTextButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="relative inline-flex items-baseline align-baseline bg-transparent px-1 focus:outline-none hover:opacity-90 transition-opacity text-white"
      style={{ lineHeight: 1.15 }}
    >
      <span className="invisible font-jakarta font-bold md:text-[28px] lg:text-[30px]">{label}</span>
      <span
        className={`absolute inset-0 font-jakarta md:text-[28px] lg:text-[30px] ${selected ? "font-bold" : "font-normal"}`}
        style={{ lineHeight: 1.15 }}
      >
        {label}
      </span>
    </button>
  );
}

// Toggle button mobile (tidak diubah)
function NoShiftTextButtonMobile({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="relative inline-flex items-baseline align-baseline bg-transparent px-0.5 focus:outline-none hover:opacity-90 transition-opacity text-white"
      style={{ lineHeight: 1.12 }}
    >
      <span className="invisible font-jakarta font-bold text-[18px] md:text-[22px]">{label}</span>
      <span
        className={`absolute inset-0 font-jakarta text-[18px] md:text-[22px] ${selected ? "font-bold" : "font-normal"}`}
        style={{ lineHeight: 1.12 }}
      >
        {label}
      </span>
    </button>
  );
}

export default function WhyChooseUs() {
  const [partnerTab, setPartnerTab] = useState("mitra");

  // Autoplay toggle Mitra/Klien setiap 5 detik
  useEffect(() => {
    const id = setInterval(() => {
      setPartnerTab((p) => (p === "mitra" ? "klien" : "mitra"));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Preload images
  useEffect(() => {
    [mitraImage, klienImage, mitraImageMobile, klienImageMobile].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative w-full pt-4 sm:pb-18 sm:pt-4 lg:pb-10 overflow-hidden">
      {/* ========== BACKGROUNDS ========== */}
      
      {/* Background image mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img 
          src={bgMengapaKamiMobile} 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Background image desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img 
          src={bgMengapaKamiDesktop} 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Red gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-multiply"
        style={{ 
          background: "linear-gradient(to bottom, #A20000 0%, #A20000 54%, #800000 100%)" 
        }}
      />
      
      {/* Circular decoration (top-left) */}
      <div className="absolute top-0 left-0 z-[2] pointer-events-none">
        <img 
          src={bgMengapaBundar} 
          alt="" 
          className="w-[250px] lg:w-[350px] h-auto" 
        />
      </div>

      {/* ========== CONTENT ========== */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* Title - TETAP CENTER di semua breakpoint */}
        <h2 
          className="text-center text-white font-jakarta font-extrabold text-[28px] sm:text-[32px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px]"
          style={{
            textShadow: '2px 2px 0px rgba(0, 0, 0, 0.23)'
          }}>
          Mengapa Memilih Kami?
        </h2>

        {/* Text dengan border - TETAP CENTER di semua breakpoint */}
        <div className="mt-3 flex justify-center">
          <div 
            className="border rounded-lg px-4 py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-4 max-w-[340px] md:max-w-[520px] lg:max-w-[680px] xl:max-w-[800px] 2xl:max-w-[900px]"
            style={{ 
              borderColor: '#FAFAFA',
              borderRadius: '8px'
            }}>
            <p 
              className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-center leading-relaxed"
              style={{ 
                fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                color: '#FAFAFA'
              }}>
              Keunggulan Yang Membuat Kami Menjadi Pilihan Utama Untuk Proyek Konstruksi Anda
            </p>
          </div>
        </div>

        {/* Cards Grid - EQUAL HEIGHT dengan items-stretch */}
        <div className="mt-14 md:mt-14 lg:mt-20 xl:mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* Card 1: 15+ Tahun Pengalaman */}
          <div className="relative flex flex-col">
            <div className="absolute -top-8 lg:-top-10 xl:-top-12 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-white -m-2" />
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#383838] flex items-center justify-center shadow-lg">
                  <img 
                    src={iconMedal} 
                    alt="Medal" 
                    className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                    style={{ filter: 'brightness(0) invert(1)' }} 
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg pt-12 lg:pt-14 xl:pt-16 pb-6 lg:pb-7 xl:pb-8 px-6 md:px-4 lg:px-6 xl:px-7 text-center relative flex-1">
              <p 
                className="text-[12px] lg:text-[13px] xl:text-[14px] font-bold italic uppercase tracking-wider mb-2 mt-2"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#454545'
                }}>
                Sejak 2009
              </p>
              
              <h3 
                className="text-[16px] md:text-[17px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] font-extrabold mb-3 lg:mb-4"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#A20000'
                }}>
                15+ Tahun Pengalaman
              </h3>
              
              <p 
                className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal leading-relaxed"
                style={{ 
                  fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                  color: '#383838'
                }}>
                Pengalaman Dalam Menangani Proyek-Proyek Besar BUMN Dan Swasta Dengan Track Record Yang Terpercaya Sejak 2009.
              </p>
            </div>
          </div>

          {/* Card 2: Kualitas Teruji Lab */}
          <div className="relative flex flex-col mt-4 md:mt-0">
            <div className="absolute -top-8 lg:-top-10 xl:-top-12 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-white -m-2" />
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#383838] flex items-center justify-center shadow-lg">
                  <img 
                    src={iconLab} 
                    alt="Laboratory" 
                    className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg pt-12 lg:pt-14 xl:pt-16 pb-6 lg:pb-7 xl:pb-8 px-6 md:px-4 lg:px-6 xl:px-7 text-center relative flex-1">
              <p 
                className="text-[12px] lg:text-[13px] xl:text-[14px] font-bold italic uppercase tracking-wider mb-2 mt-2"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#454545'
                }}>
                Lab Trisakti
              </p>
              
              <h3 
                className="text-[16px] md:text-[17px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] font-extrabold mb-3 lg:mb-4"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#A20000'
                }}>
                Kualitas Teruji Lab
              </h3>
              
              <p 
                className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal leading-relaxed"
                style={{ 
                  fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                  color: '#383838'
                }}>
                Semua Material Alam Telah Melalui Uji Kualitas Di Laboratorium Universitas Trisakti Untuk Menjamin Standar Terbaik.
              </p>
            </div>
          </div>

          {/* Card 3: Jaringan Distribusi Luas */}
          <div className="relative flex flex-col mt-4 md:mt-0">
            <div className="absolute -top-8 lg:-top-10 xl:-top-12 left-1/2 -translate-x-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full bg-white -m-2" />
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-[#383838] flex items-center justify-center shadow-lg">
                  <img 
                    src={iconGlobe} 
                    alt="World" 
                    className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg pt-12 lg:pt-14 xl:pt-16 pb-6 lg:pb-7 xl:pb-8 px-6 md:px-4 lg:px-6 xl:px-7 text-center relative flex-1">
              <p 
                className="text-[12px] lg:text-[13px] xl:text-[14px] font-bold italic uppercase tracking-wider mb-2 mt-2"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#454545'
                }}>
                Seluruh Indonesia
              </p>
              
              <h3 
                className="text-[16px] md:text-[17px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] font-extrabold mb-3 lg:mb-4"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#A20000'
                }}>
                Jaringan Distribusi Luas
              </h3>
              
              <p 
                className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal leading-relaxed"
                style={{ 
                  fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                  color: '#383838'
                }}>
                Melayani JABODETABEK Hingga Seluruh Indonesia: Jawa, Sumatera, Kalimantan, Dan Sulawesi Dengan Logistik Terpadu.
              </p>
            </div>
          </div>
        </div>

        {/* ========== MITRA & KLIEN SECTION ========== */}
        <div className="mt-2 lg:mt-8 relative min-h-[400px]">
          {/* Vector Top - positioned at top left */}
          <img
            src={vectorTop}
            alt="Vector Top"
            className="absolute -top-16 -left-7 w-[160px] sm:w-[120px] lg:w-[160px] xl:w-[180px] h-auto select-none pointer-events-none z-10"
            draggable="false"
          />

          {/* Konten Mitra & Klien */}
          <div className="relative z-20 py-4 lg:py-6">
            {/* Toggle text - Mobile */}
            <div className="lg:hidden flex items-baseline justify-center gap-1 mb-6">
              <NoShiftTextButtonMobile
                label="Mitra"
                selected={partnerTab === "mitra"}
                onClick={() => setPartnerTab("mitra")}
              />
              <span className="font-jakarta text-[18px] md:text-[22px] font-normal select-none text-white">&nbsp;&amp;&nbsp;</span>
              <NoShiftTextButtonMobile
                label="Klien"
                selected={partnerTab === "klien"}
                onClick={() => setPartnerTab("klien")}
              />
            </div>

            {/* Toggle text - Desktop dengan MD adjustment */}
            <div className="hidden lg:flex items-baseline justify-center gap-1 mb-8">
              <NoShiftTextButton
                label="Mitra"
                selected={partnerTab === "mitra"}
                onClick={() => setPartnerTab("mitra")}
              />
              <span className="font-jakarta md:text-[28px] lg:text-[30px] font-normal select-none text-white">&nbsp;&amp;&nbsp;</span>
              <NoShiftTextButton
                label="Klien"
                selected={partnerTab === "klien"}
                onClick={() => setPartnerTab("klien")}
              />
            </div>

            {/* Partner Logos Container - Mobile (Grid overlay crossfade) */}
            <div className="lg:hidden flex justify-center">
              <div className="p-[6px] border border-white rounded-[16px]">
                <div className="grid rounded-[12px] overflow-hidden" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
                  {/* Gambar Mitra - ALWAYS MOUNTED */}
                  <img
                    src={mitraImageMobile}
                    alt="Mitra"
                    className="w-full max-w-[300px] select-none block"
                    style={{ 
                      gridColumn: 1, 
                      gridRow: 1,
                      opacity: partnerTab === "mitra" ? 1 : 0,
                      transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    draggable="false"
                  />
                  {/* Gambar Klien - ALWAYS MOUNTED */}
                  <img
                    src={klienImageMobile}
                    alt="Klien"
                    className="w-full max-w-[300px] select-none block"
                    style={{ 
                      gridColumn: 1, 
                      gridRow: 1,
                      opacity: partnerTab === "klien" ? 1 : 0,
                      transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    draggable="false"
                  />
                </div>
              </div>
            </div>

            {/* Partner Logos Container - Desktop (Grid overlay crossfade) */}
            <div className="hidden lg:flex justify-center">
              <div className="p-[6px] border border-white rounded-[20px]">
                <div className="grid rounded-[14px] overflow-hidden" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
                  {/* Gambar Mitra - ALWAYS MOUNTED */}
                  <img
                    src={mitraImage}
                    alt="Mitra"
                    className="w-full max-w-[760px] select-none block"
                    style={{ 
                      gridColumn: 1, 
                      gridRow: 1,
                      opacity: partnerTab === "mitra" ? 1 : 0,
                      transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    draggable="false"
                  />
                  {/* Gambar Klien - ALWAYS MOUNTED */}
                  <img
                    src={klienImage}
                    alt="Klien"
                    className="w-full max-w-[760px] select-none block"
                    style={{ 
                      gridColumn: 1, 
                      gridRow: 1,
                      opacity: partnerTab === "klien" ? 1 : 0,
                      transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vector Bottom - positioned at bottom right */}
          <img
            src={vectorBot}
            alt="Vector Bottom"
            className="absolute -bottom-10 -right-8 w-[160px] sm:w-[140px] lg:w-[180px] xl:w-[200px] h-auto select-none pointer-events-none z-10"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
