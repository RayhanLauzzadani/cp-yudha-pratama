import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import bgMengapaKamiMobile from "../../assets/icons/bg-mengapakami_mobile.png";
import bgMengapaKamiDesktop from "../../assets/icons/bg-mengapakami.png";
import bgMengapaBundar from "../../assets/icons/bg-mengapa_bundar_mobile.png";

import klienImage from "../../assets/icons/klien.png";
import mitraImage from "../../assets/icons/mitra.png";
import klienImageMobile from "../../assets/icons/klien_mobile.png";
import mitraImageMobile from "../../assets/icons/mitra_mobile.png";
import vectorKiri from "../../assets/icons/vector_kiri.png";
import vectorKanan from "../../assets/icons/vector_kanan.png";
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";

import { ReactComponent as MedalIcon } from "../../assets/icons/medal.svg";
import { ReactComponent as LabIcon } from "../../assets/icons/lab.svg";
import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";

const PANELS = [
  { tag: "SEJAK 2009", title: "15+ Tahun Pengalaman", desc: "Pengalaman Dalam Menangani Proyek-Proyek Besar BUMN Dan Swasta Dengan Track Record Yang Terpercaya Sejak 2009." },
  { tag: "LAB TRISAKTI", title: "Kualitas Teruji Lab", desc: "Semua Material Alam Telah Melalui Uji Kualitas Di Laboratorium Universitas Trisakti Untuk Menjamin Standar Terbaik." },
  { tag: "SELURUH INDONESIA", title: "Jaringan Distribusi Luas", desc: "Melayani JABODETABEK Hingga Seluruh Indonesia: Jawa, Sumatera, Kalimantan, Dan Sulawesi Dengan Logistik Terpadu." },
];

const EASE = [0.22, 0.61, 0.36, 1];
const CARD_EASE = [0.22, 1, 0.36, 1];
const DUR = 0.45;
const CARD_DUR = 0.28;
const AUTOPLAY_MS = 4500;

// Autoplay untuk Mitra/Klien
const PARTNER_AUTOPLAY_MS = 5000;

/* ====== Komponen teks toggle tanpa pergeseran (Desktop) ====== */
function NoShiftTextButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="relative inline-flex items-baseline align-baseline bg-transparent px-1 focus:outline-none hover:opacity-90 transition-opacity"
      style={{ lineHeight: 1.15 }}
    >
      <span className="invisible font-jakarta font-extrabold text-[30px]">{label}</span>
      <span
        className={`absolute inset-0 font-jakarta text-[30px] ${selected ? "font-extrabold" : "font-normal"}`}
        style={{ lineHeight: 1.15 }}
      >
        {label}
      </span>
    </button>
  );
}

/* ====== Komponen teks toggle tanpa pergeseran (Mobile) ====== */
function NoShiftTextButtonMobile({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="relative inline-flex items-baseline align-baseline bg-transparent px-0.5 focus:outline-none hover:opacity-90 transition-opacity"
      style={{ lineHeight: 1.12 }}
    >
      <span className="invisible font-jakarta font-extrabold text-[18px]">{label}</span>
      <span
        className={`absolute inset-0 font-jakarta text-[18px] ${selected ? "font-extrabold" : "font-normal"}`}
        style={{ lineHeight: 1.12 }}
      >
        {label}
      </span>
    </button>
  );
}

export default function Whyme() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [partnerTab, setPartnerTab] = useState("mitra");

  // autoplay untuk panel Whyme (atas)
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((p) => (p + 1) % PANELS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // autoplay untuk gambar Mitra/Klien (bawah)
  useEffect(() => {
    const id = setInterval(() => {
      setPartnerTab((p) => (p === "mitra" ? "klien" : "mitra"));
    }, PARTNER_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // Preload gambar partner untuk performa optimal
  useEffect(() => {
    [mitraImage, klienImage, mitraImageMobile, klienImageMobile].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="whyme" className="relative min-h-screen py-10 bg-white overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img src={bgMengapaKamiMobile} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img src={bgMengapaKamiDesktop} alt="" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-multiply"
        style={{ background: "linear-gradient(to bottom, #A20000 0%, #A20000 54%, #800000 100%)" }}
      />
      <div className="absolute top-0 left-0 z-[2] pointer-events-none">
        <img src={bgMengapaBundar} alt="" className="w-[250px] lg:w-[350px] h-auto" />
      </div>

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 lg:hidden px-4 mt-4">
        <h2 className="font-jakarta font-extrabold text-[#FAFAFA] text-center text-[26px] w-[230px] mx-auto drop-shadow-md">
          Mengapa Memilih Kami?
        </h2>

        <div className="mt-3 px-8 py-[14px] border border-[#FFFFFF] rounded-xl max-w-[340px] mx-auto">
          <p className="text-[#FAFAFA] text-[12px] mb-[14px] text-center max-w-[340px] mx-auto" style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
            Keunggulan yang membuat kami menjadi pilihan utama untuk proyek konstruksi Anda
          </p>
          <button
            className="flex items-center gap-1.5 px-[20px] py-[7px] border border-white text-white rounded-[20px] font-medium hover:bg-white/10 transition-all duration-300 text-[10px] mx-auto"
            style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
          >
            Selengkapnya
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stepper ikon */}
        <div className="relative mx-auto max-w-[268px] px-8 h-[45px] mt-[18px]">
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#5F5F5F] z-0" />
          <div className="relative z-10 flex items-center justify-between h-full">
            {[MedalIcon, LabIcon, GlobeIcon].map((IconComp, i) => {
              const selected = activeIdx === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  aria-pressed={selected}
                  className="relative grid place-items-center w-[45px] h-[45px]"
                >
                  <div
                    className={`grid place-items-center rounded-full shadow-sm ${selected ? "bg-white text-black" : "bg-[#2F2F2F] text-white"}`}
                    style={{
                      width: 45,
                      height: 45,
                      transform: `scale(${selected ? 1 : 0.9})`,
                      transition: `transform 240ms cubic-bezier(${EASE.join(",")}), background-color 240ms, color 240ms`,
                    }}
                  >
                    <IconComp
                      style={{
                        width: 26,
                        height: 26,
                        transform: `scale(${selected ? 1 : 0.76})`,
                        transition: `transform 240ms cubic-bezier(${EASE.join(",")})`,
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stack bar/card */}
        <LayoutGroup>
          <motion.div layout className="mt-[15px] w-full flex justify-center" transition={{ duration: DUR, ease: EASE }}>
            <div className="w-full max-w-[360px] space-y-2">
              {PANELS.map((panel, i) => {
                const isActive = i === activeIdx;
                return (
                  <motion.div
                    key={i}
                    layout
                    transition={{ duration: DUR, ease: EASE }}
                    className={!isActive ? "cursor-pointer" : undefined}
                    onClick={() => !isActive && setActiveIdx(i)}
                  >
                    <AnimatePresence initial={false} mode="wait">
                      {isActive ? (
                        <motion.div
                          key={`card-${i}`}
                          layout
                          className="w-full bg-white rounded-2xl shadow-sm"
                          initial={{ borderRadius: 999, height: 12, width: 200 }}
                          animate={{ borderRadius: 16, height: "auto", width: "100%" }}
                          exit={{ borderRadius: 999, height: 12, width: 200 }}
                          transition={{ duration: DUR, ease: EASE }}
                        >
                          <motion.div
                            layout
                            className="px-[15px] py-[12px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: DUR * 0.6, ease: EASE }}
                          >
                            <p className="italic font-bold text-[12px] text-[#383838] mb-1 font-jakarta">{panel.tag}</p>
                            <h3 className="text-[18px] font-[800] text-[#A20000] leading-snug mb-2 font-jakarta">{panel.title}</h3>
                            <p className="text-[12px] leading-relaxed text-[#383838]">{panel.desc}</p>
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`bar-${i}`}
                          layout
                          className="rounded-full bg-white shadow-sm border border-white/70"
                          style={{ height: 12, width: 200, borderRadius: 999 }}
                          transition={{ duration: DUR, ease: EASE }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </LayoutGroup>

        {/* ====== MOBILE: Mitra & Klien Section (GRID OVERLAY - SMOOTH & STABLE) ====== */}
        <div className="mt-4 relative">
          {/* Vector TOP kiri */}
          <img
            src={vectorTop}
            alt="Vector Top"
            className="absolute -top-3 left-0 w-[100px] h-auto select-none pointer-events-none"
            draggable="false"
          />

          {/* Teks toggle mobile */}
          <div className="flex items-baseline justify-center gap-1 mb-[10px] pt-6">
            <NoShiftTextButtonMobile
              label="Mitra"
              selected={partnerTab === "mitra"}
              onClick={() => setPartnerTab("mitra")}
            />
            <span className="font-jakarta text-[18px] font-normal select-none">&nbsp;&amp;&nbsp;</span>
            <NoShiftTextButtonMobile
              label="Klien"
              selected={partnerTab === "klien"}
              onClick={() => setPartnerTab("klien")}
            />
          </div>

          {/* Border wrapper + grid overlay untuk crossfade stabil */}
          <div className="flex justify-center">
            <div className="p-[6px] border border-white rounded-[16px]">
              {/* Grid overlay: dua gambar ditumpuk di cell yang sama */}
              <div className="grid rounded-[12px] overflow-hidden" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
                {/* Gambar Mitra - ALWAYS MOUNTED */}
                <motion.img
                  initial={false}
                  src={mitraImageMobile}
                  alt="Mitra"
                  className="w-full max-w-[300px] select-none block"
                  style={{ gridColumn: 1, gridRow: 1 }}
                  animate={{ opacity: partnerTab === "mitra" ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  draggable="false"
                />
                {/* Gambar Klien - ALWAYS MOUNTED */}
                <motion.img
                  initial={false}
                  src={klienImageMobile}
                  alt="Klien"
                  className="w-full max-w-[300px] select-none block"
                  style={{ gridColumn: 1, gridRow: 1 }}
                  animate={{ opacity: partnerTab === "klien" ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  draggable="false"
                />
              </div>
            </div>
          </div>

          {/* Vector BOT */}
          <div className="flex justify-center mt-3">
            <img
              src={vectorBot}
              alt="Vector Bottom"
              className="w-[120px] h-auto select-none"
              draggable="false"
            />
          </div>
        </div>
        {/* ====== END MOBILE: Mitra & Klien ====== */}
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 hidden lg:block">
        <div className="mx-auto w-full lg:px-0 xl:max-w-[1130px]">
          <div className="grid grid-cols-[1.05fr_auto_1.6fr] gap-6 xl:gap-8 items-start">
            {/* KIRI */}
            <div className="pt-6 relative z-20 lg:pl-[100px]">
              <h2 className="font-jakarta font-extrabold text-white drop-shadow-sm leading-[1.02] lg:text-[26px] xl:text-[32px] 2xl:text-[34px]">
                Mengapa
                <br />
                Memilih Kami?
              </h2>

              <div className="mt-5 xl:mt-6 rounded-2xl border border-white/90 text-white lg:p-5 xl:p-6 lg:max-w-[560px] xl:max-w-[620px]">
                <p className="lg:text-[14px] xl:text-[16px] leading-relaxed" style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
                  Keunggulan Yang Membuat Kami Menjadi Pilihan Utama Untuk Proyek Konstruksi Anda
                </p>
                <a
                  href="#about"
                  className="mt-4 xl:mt-5 inline-flex items-center gap-2 rounded-[45px] border border-white bg-transparent lg:px-5 lg:py-[9px] xl:px-6 xl:py-[10px] lg:text-[12px] xl:text-[13px] font-semibold tracking-[0.02em] text-white hover:bg-white/10 transition"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  SELENGKAPNYA
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* TENGAH: stepper vertikal */}
            <div className="relative flex flex-col items-center pt-2">
              <div className="absolute top-[60px] bottom-[60px] w-[2px] bg-[#3A3A3A]" />
              {[{ Icon: MedalIcon, idx: 0 }, { Icon: LabIcon, idx: 1 }, { Icon: GlobeIcon, idx: 2 }].map(({ Icon, idx }, i) => {
                const selected = activeIdx === idx;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(idx)}
                    aria-pressed={selected}
                    className={`relative z-10 grid place-items-center rounded-full shadow-sm
                      ${selected ? "bg-white text-black" : "bg-[#2F2F2F] text-white"}
                      w-[56px] h-[56px] xl:w-[64px] xl:h-[64px] 2xl:w-[68px] 2xl:h-[68px]
                      transition-transform duration-200
                      ${i < 2 ? "mb-[22px] xl:mb-[26px]" : ""}`}
                    style={{ transform: `scale(${selected ? 1 : 0.94})` }}
                  >
                    <Icon width={28} height={28} className="lg:block xl:hidden" />
                    <Icon width={32} height={32} className="hidden xl:block 2xl:hidden" />
                    <Icon width={34} height={34} className="hidden 2xl:block" />
                  </button>
                );
              })}
            </div>

            {/* KANAN: card + bars */}
            <div className="pt-2 lg:pr-[100px]">
              <div className="space-y-3 lg:min-h-[180px] xl:min-h-[200px]">
                {PANELS.map((panel, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <div key={i} className={!isActive ? "cursor-pointer" : undefined} onClick={() => !isActive && setActiveIdx(i)}>
                      {isActive ? (
                        <motion.div
                          key={`desk-card-${i}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: CARD_DUR, ease: CARD_EASE }}
                          className="rounded-2xl bg-[#F4F4F4] shadow-sm lg:px-[70px] lg:py-5 xl:px-[80px] xl:py-6"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <p className="italic font-bold text-[#4B4B4B] mb-1 lg:text-[12px] xl:text-[13px] 2xl:text-[13px] font-jakarta">{panel.tag}</p>
                          <h3 className="text-[#A20000] leading-[1.18] mb-2 lg:text-[20px] xl:text-[24px] 2xl:text-[26px] font-[800] font-jakarta">{panel.title}</h3>
                          <p className="text-[#4A4A4A] max-w-[860px] lg:text-[13px] xl:text-[15px] 2xl:text-[15px] leading-relaxed" style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
                            {panel.desc}
                          </p>
                        </motion.div>
                      ) : (
                        <div className="rounded-full bg-white shadow-sm border border-white/70 ml-auto transition-opacity duration-200" style={{ height: 12, width: 360, borderRadius: 999 }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========= Heading "Mitra & Klien" + gambar (Desktop - GRID OVERLAY) ========= */}
          <div className="mt-[20px] hidden lg:flex flex-col items-center justify-center text-white">
            {/* Teks (no-shift) + jarak 10px ke gambar */}
            <div className="flex items-baseline justify-center gap-1 mb-[10px]">
              <NoShiftTextButton
                label="Mitra"
                selected={partnerTab === "mitra"}
                onClick={() => setPartnerTab("mitra")}
              />
              <span className="font-jakarta text-[30px] font-normal select-none">&nbsp;&amp;&nbsp;</span>
              <NoShiftTextButton
                label="Klien"
                selected={partnerTab === "klien"}
                onClick={() => setPartnerTab("klien")}
              />
            </div>

            {/* Vector nempel ke BORDER gambar (jarak 6px) */}
            <div className="w-full flex items-center justify-center gap-[6px]">
              {/* Kanan */}
              <img
                src={vectorKanan}
                alt="Dekor kanan"
                className="select-none shrink-0 w-[180px] lg:w-[220px]"
                draggable="false"
              />

              {/* Gambar tengah dengan BORDER PUTIH + padding 6px + GRID OVERLAY */}
              <div className="p-[6px] border border-white rounded-[20px]">
                {/* Grid overlay: dua gambar ditumpuk di cell yang sama */}
                <div className="grid rounded-[14px] overflow-hidden" style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
                  {/* Gambar Mitra - ALWAYS MOUNTED */}
                  <motion.img
                    initial={false}
                    src={mitraImage}
                    alt="Mitra"
                    className="w-full max-w-[760px] select-none block"
                    style={{ gridColumn: 1, gridRow: 1 }}
                    animate={{ opacity: partnerTab === "mitra" ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    draggable="false"
                  />
                  {/* Gambar Klien - ALWAYS MOUNTED */}
                  <motion.img
                    initial={false}
                    src={klienImage}
                    alt="Klien"
                    className="w-full max-w-[760px] select-none block"
                    style={{ gridColumn: 1, gridRow: 1 }}
                    animate={{ opacity: partnerTab === "klien" ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    draggable="false"
                  />
                </div>
              </div>

              {/* Kiri */}
              <img
                src={vectorKiri}
                alt="Dekor kiri"
                className="select-none shrink-0 w-[180px] lg:w-[220px]"
                draggable="false"
              />
            </div>
          </div>
          {/* =================================================================== */}
        </div>
      </div>

      {/* spacer */}
      <div className="relative z-10">
        <div className="h-[18vh] lg:h-[20vh]" />
      </div>
    </section>
  );
}
