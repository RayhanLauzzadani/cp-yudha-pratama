import React, { useState } from "react";
import bgMengapaKamiMobile from "../../assets/icons/bg-mengapakami_mobile.png";
import bgMengapaKamiDesktop from "../../assets/icons/bg-mengapakami.png";
import bgMengapaBundar from "../../assets/icons/bg-mengapa_bundar_mobile.png";

// Icon stepper (pastikan SVG memakai currentColor)
import { ReactComponent as MedalIcon } from "../../assets/icons/medal.svg";
import { ReactComponent as LabIcon } from "../../assets/icons/lab.svg";
import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";

const Whyme = () => {
  const [activeDot, setActiveDot] = useState(-1); // -1 = semua default
  const icons = [MedalIcon, LabIcon, GlobeIcon];

  return (
    <section
      id="whyme"
      className="relative min-h-screen py-10 bg-white overflow-hidden"
      aria-labelledby="whyme-heading"
    >
      {/* Background Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src={bgMengapaKamiMobile}
          alt="Background Mengapa Kami Mobile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img
          src={bgMengapaKamiDesktop}
          alt="Background Mengapa Kami Desktop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #A20000 0%, #A20000 54%, #800000 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Dekorasi Bundar */}
      <div className="absolute top-0 left-0 z-[2] pointer-events-none">
        <img
          src={bgMengapaBundar}
          alt="Dekorasi Bundar"
          className="w-[250px] lg:w-[350px] h-auto"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10">
        <h2
          id="whyme-heading"
          className="font-jakarta font-extrabold text-[#FAFAFA]
                     text-center lg:text-left
                     text-[26px] lg:text-[40px]
                     w-[230px] lg:w-[300px]
                     mx-auto lg:mx-0 lg:ml-8 lg:mt-8
                     drop-shadow-md"
        >
          Mengapa Memilih Kami?
        </h2>
      </div>

      {/* Desktop description + button */}
      <div className="relative z-10 hidden lg:block lg:ml-8 lg:mt-6">
        <div className="px-4 py-[14px] inline-block border border-[#FFFFFF] rounded-xl">
          <p
            className="text-[#FAFAFA] text-[14px] mb-[14px] max-w-[400px]"
            style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
          >
            Keunggulan yang membuat kami menjadi pilihan utama untuk proyek
            konstruksi Anda
          </p>
          <button
            className="flex items-center gap-2 px-[26px] py-[11px] 
                       border border-white text-white rounded-[20px]
                       font-medium hover:bg-white/10 
                       transition-all duration-300 text-[14px]"
            style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
          >
            SELENGKAPNYA
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile description + button */}
      <div className="relative z-10 lg:hidden px-4 mt-3">
        <div className="px-8 py-[14px] border border-[#FFFFFF] rounded-xl max-w-[340px] mx-auto">
          <p
            className="text-[#FAFAFA] text-[12px] mb-[14px] text-center max-w-[340px] mx-auto"
            style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
          >
            Keunggulan yang membuat kami menjadi pilihan utama untuk proyek
            konstruksi Anda
          </p>

          <button
            className="flex items-center gap-1.5 px-[20px] py-[7px] 
                       border border-white text-white rounded-[20px]
                       font-medium hover:bg-white/10 
                       transition-all duration-300 text-[10px] mx-auto"
            style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
          >
            Selengkapnya
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ==== MOBILE STEPPER ICONS (smooth + max-w 268px) ==== */}
        <div className="relative mx-auto mt-[18px] max-w-[268px] px-8">
          {/* garis konektor mengikuti padding (left/right = px-8) */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#5F5F5F] z-0" />

          <div className="relative z-10 flex items-center justify-between">
            {[MedalIcon, LabIcon, GlobeIcon].map((IconComp, i) => {
              const selected = activeDot === i;

              // ukuran dasar + scale agar transisi halus
              const BASE = 40;              // diameter base (px)
              const SCALE = 1.12;           // scale saat selected (≈ 44.8px)
              const ICON_BASE = 20;         // icon base (px)
              const ICON_SELECTED = 22;     // icon selected (px)

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveDot((prev) => (prev === i ? -1 : i))}
                  className={`grid place-items-center rounded-full shadow-sm
                              transition-[transform,background-color,color] duration-200
                              ${selected ? "bg-white text-black" : "bg-[#2F2F2F] text-white"}`}
                  style={{
                    width: BASE,
                    height: BASE,
                    transform: `scale(${selected ? SCALE : 1})`,
                    // easing lebih empuk
                    transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
                  }}
                  aria-pressed={selected}
                  aria-label={i === 0 ? "Keunggulan kualitas" : i === 1 ? "Inovasi" : "Jangkauan/Global"}
                >
                  <IconComp
                    width={selected ? ICON_SELECTED : ICON_BASE}
                    height={selected ? ICON_SELECTED : ICON_BASE}
                    className="transition-[width,height] duration-200"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
        {/* ==== end stepper ==== */}
      </div>

      {/* Spacer */}
      <div className="relative z-10">
        <div className="h-[40vh] lg:h-[50vh]" />
      </div>
    </section>
  );
};

export default Whyme;
