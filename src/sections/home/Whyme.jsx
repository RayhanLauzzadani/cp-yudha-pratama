import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    tag: "SEJAK 2009",
    title: "15+ Tahun Pengalaman",
    desc: "Pengalaman Dalam Menangani Proyek-Proyek Besar BUMN Dan Swasta Dengan Track Record Yang Terpercaya Sejak 2009.",
  },
  {
    tag: "LAB TRISAKTI",
    title: "Kualitas Teruji Lab",
    desc: "Semua Material Alam Telah Melalui Uji Kualitas Di Laboratorium Universitas Trisakti Untuk Menjamin Standar Terbaik.",
  },
  {
    tag: "SELURUH INDONESIA",
    title: "Jaringan Distribusi Luas",
    desc: "Melayani JABODETABEK Hingga Seluruh Indonesia: Jawa, Sumatera, Kalimantan, Dan Sulawesi Dengan Logistik Terpadu.",
  },
];

const EASE = [0.16, 1, 0.3, 1];
const AUTOPLAY_MS = 5500;
const PARTNER_AUTOPLAY_MS = 5000;

/* ====== Toggle button Desktop ====== */
function NoShiftTextButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="relative inline-flex items-baseline align-baseline bg-transparent px-1 focus:outline-none hover:opacity-90 transition-opacity text-white"
      style={{ lineHeight: 1.15 }}
    >
      <span className="invisible font-jakarta font-extrabold md:text-[22px] lg:text-[30px]">
        {label}
      </span>
      <span
        className={`absolute inset-0 font-jakarta md:text-[22px] lg:text-[30px] ${
          selected ? "font-extrabold" : "font-normal"
        }`}
        style={{ lineHeight: 1.15 }}
      >
        {label}
      </span>
    </button>
  );
}

/* ====== Toggle button Mobile ====== */
function NoShiftTextButtonMobile({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className="relative inline-flex items-baseline align-baseline bg-transparent px-0.5 focus:outline-none hover:opacity-90 transition-opacity text-white"
      style={{ lineHeight: 1.12 }}
    >
      <span className="invisible font-jakarta font-extrabold text-[18px]">
        {label}
      </span>
      <span
        className={`absolute inset-0 font-jakarta text-[18px] ${
          selected ? "font-extrabold" : "font-normal"
        }`}
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

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((p) => (p + 1) % PANELS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setPartnerTab((p) => (p === "mitra" ? "klien" : "mitra"));
    }, PARTNER_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    [mitraImage, klienImage, mitraImageMobile, klienImageMobile].forEach(
      (src) => {
        const img = new Image();
        img.src = src;
      }
    );
  }, []);

  return (
    <section
      id="whyme"
      className="relative w-full pb-4 sm:pb-18 md:pb-5 lg:pb-8 overflow-hidden"
    >
      {/* ========== BACKGROUNDS ========== */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src={bgMengapaKamiMobile}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img
          src={bgMengapaKamiDesktop}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-multiply"
        style={{
          background:
            "linear-gradient(to bottom, #A20000 0%, #A20000 54%, #800000 100%)",
        }}
      />
      <div className="absolute top-0 left-0 z-[2] pointer-events-none">
        <img
          src={bgMengapaBundar}
          alt=""
          className="w-[250px] lg:w-[350px] h-auto"
        />
      </div>

      {/* ========== CONTENT ========== */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10">
        {/* ========== MOBILE: Title + Description (CENTER) ========== */}
        <div className="lg:hidden">
          <h2
            className="text-center text-white font-jakarta font-extrabold text-[28px] sm:text-[32px] md:text-[34px]"
            style={{
              textShadow: "2px 2px 0px rgba(0, 0, 0, 0.23)",
            }}
          >
            Mengapa Memilih Kami?
          </h2>

          <div className="mt-3 flex justify-center">
            <div
              className="border rounded-lg px-4 py-3 max-w-[340px] md:max-w-[520px]"
              style={{
                borderColor: "#FAFAFA",
                borderRadius: "8px",
              }}
            >
              <p
                className="text-[12px] sm:text-[13px] md:text-[13px] text-center leading-relaxed mb-3"
                style={{
                  fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                  color: "#FAFAFA",
                }}
              >
                Keunggulan Yang Membuat Kami Menjadi Pilihan Utama Untuk Proyek
                Konstruksi Anda
              </p>

              <div className="flex justify-center">
                <button
                  className="flex items-center gap-1.5 px-[20px] py-[7px] border border-white text-white rounded-[20px] font-medium hover:bg-white/10 transition-all duration-300 text-[10px]"
                  style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
                >
                  Selengkapnya
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========== MOBILE: STEPPER & CARDS - MORPH ANIMATION ========== */}
        <div className="lg:hidden">
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
                      className={`grid place-items-center rounded-full shadow-sm ${
                        selected
                          ? "bg-white text-black"
                          : "bg-[#2F2F2F] text-white"
                      }`}
                      style={{
                        width: 45,
                        height: 45,
                        transform: `scale(${selected ? 1 : 0.9})`,
                        transition: `transform 300ms cubic-bezier(${EASE.join(
                          ","
                        )}), background-color 300ms, color 300ms`,
                      }}
                    >
                      <IconComp
                        style={{
                          width: 26,
                          height: 26,
                          transform: `scale(${selected ? 1 : 0.76})`,
                          transition: `transform 300ms cubic-bezier(${EASE.join(
                            ","
                          )})`,
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CARDS - MORPH ANIMATION */}
          <div className="mt-[15px] w-full flex justify-center">
            <div className="w-full max-w-[360px] space-y-2">
              {PANELS.map((panel, i) => {
                const isActive = i === activeIdx;
                return (
                  <div
                    key={i}
                    className={!isActive ? "cursor-pointer" : undefined}
                    onClick={() => !isActive && setActiveIdx(i)}
                  >
                    {isActive ? (
                      <motion.div
                        layoutId={`panel-${i}`}
                        className="w-full bg-white rounded-2xl shadow-sm overflow-hidden"
                        transition={{
                          layout: { duration: 0.4, ease: EASE },
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="px-[15px] py-[12px]"
                        >
                          <p className="italic font-bold text-[12px] text-[#383838] mb-1 font-jakarta">
                            {panel.tag}
                          </p>
                          <h3 className="text-[18px] font-[800] text-[#A20000] leading-snug mb-2 font-jakarta">
                            {panel.title}
                          </h3>
                          <p
                            className="text-[12px] leading-relaxed text-[#383838]"
                            style={{
                              fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                            }}
                          >
                            {panel.desc}
                          </p>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        layoutId={`panel-${i}`}
                        className="rounded-full bg-white shadow-sm border border-white/70"
                        style={{
                          height: 12,
                          width: 200,
                        }}
                        transition={{
                          layout: { duration: 0.4, ease: EASE },
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========== DESKTOP: GRID LAYOUT (Kiri: Text | Tengah: Stepper | Kanan: Card) ========== */}
        <div className="hidden lg:block mt-14 lg:mt-20 xl:mt-20">
          <div className="grid grid-cols-[auto_auto_1fr] gap-12 xl:gap-16 items-center max-w-[1300px] mx-auto">
            {/* KIRI: Heading + Deskripsi + Button */}
            <div className="text-left">
              <h2
                className="text-white font-jakarta font-extrabold lg:text-[32px] xl:text-[38px] 2xl:text-[42px] leading-[1.1]"
                style={{
                  textShadow: "2px 2px 0px rgba(0, 0, 0, 0.23)",
                }}
              >
                Mengapa
                <br />
                Memilih Kami?
              </h2>

              {/* Deskripsi dengan border */}
              <div className="mt-6 xl:mt-7 rounded-2xl border border-white/90 text-white lg:p-5 xl:p-6 lg:max-w-[320px] xl:max-w-[360px]">
                <p
                  className="lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-relaxed"
                  style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
                >
                  Keunggulan Yang Membuat Kami Menjadi Pilihan Utama Untuk
                  Proyek Konstruksi Anda
                </p>

                {/* Button Selengkapnya */}
                <Link
                  to="/about#why-choose-us"
                  className="mt-4 xl:mt-5 inline-flex items-center gap-2 rounded-[45px] border border-white bg-transparent lg:px-5 lg:py-[9px] xl:px-6 xl:py-[10px] lg:text-[12px] xl:text-[13px] font-semibold tracking-[0.02em] text-white hover:bg-white/10 transition"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  SELENGKAPNYA
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* TENGAH: STEPPER VERTIKAL */}
            <div className="relative flex flex-col items-center">
              <div className="absolute top-[36px] bottom-[36px] w-[3px] bg-[#3A3A3A] rounded-full" />
              {[
                { Icon: MedalIcon, idx: 0 },
                { Icon: LabIcon, idx: 1 },
                { Icon: GlobeIcon, idx: 2 },
              ].map(({ Icon, idx }, i) => {
                const selected = activeIdx === idx;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(idx)}
                    aria-pressed={selected}
                    className={`relative z-10 grid place-items-center rounded-full shadow-lg
                      ${
                        selected
                          ? "bg-white text-black"
                          : "bg-[#2F2F2F] text-white"
                      }
                      w-[64px] h-[64px] xl:w-[72px] xl:h-[72px] 2xl:w-[80px] 2xl:h-[80px]
                      transition-all duration-300
                      ${i < 2 ? "mb-[32px] xl:mb-[40px]" : ""}`}
                    style={{
                      transform: `scale(${selected ? 1.05 : 1})`,
                      boxShadow: selected
                        ? "0 8px 24px rgba(0,0,0,0.15)"
                        : "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Icon
                      width={32}
                      height={32}
                      className="lg:block xl:hidden"
                    />
                    <Icon
                      width={36}
                      height={36}
                      className="hidden xl:block 2xl:hidden"
                    />
                    <Icon width={40} height={40} className="hidden 2xl:block" />
                  </button>
                );
              })}
            </div>

            {/* KANAN: CONTENT CARD + BARS - SIMPLE & SMOOTH */}
            <div className="relative space-y-3">
              {PANELS.map((panel, i) => {
                const isActive = i === activeIdx;
                return (
                  <div
                    key={i}
                    className={!isActive ? "cursor-pointer" : undefined}
                    onClick={() => !isActive && setActiveIdx(i)}
                  >
                    {isActive ? (
                      <motion.div
                        layoutId="active-card"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-2xl bg-white shadow-xl px-[17px] py-[15px]"
                      >
                        {/* TAG */}
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.1 }}
                          className="italic font-bold text-[#383838] mb-2 lg:text-[12px] xl:text-[13px] 2xl:text-[14px] font-jakarta"
                        >
                          {panel.tag}
                        </motion.p>

                        {/* TITLE */}
                        <motion.h3
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.15 }}
                          className="text-[#A20000] leading-[1.18] mb-4 lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[800] font-jakarta"
                        >
                          {panel.title}
                        </motion.h3>

                        {/* DESCRIPTION */}
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.2 }}
                          className="text-[#4A4A4A] max-w-[720px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed"
                          style={{
                            fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                          }}
                        >
                          {panel.desc}
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`bar-${i}`}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.015, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-full bg-white shadow-md border border-white/70 hover:shadow-lg transition-shadow duration-200"
                        style={{
                          height: 16,
                          width: "100%",
                          maxWidth: 460,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========== MITRA & KLIEN SECTION ========== */}
        <div className="mt-2 lg:mt-8 relative">
          {/* MOBILE VERSION */}
          <div className="md:hidden">
            <img
              src={vectorTop}
              alt="Vector Top"
              className="absolute -top-16 -left-7 w-[160px] sm:w-[120px] h-auto select-none pointer-events-none z-10"
              draggable="false"
            />

            <div className="relative z-20 py-4">
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <NoShiftTextButtonMobile
                  label="Mitra"
                  selected={partnerTab === "mitra"}
                  onClick={() => setPartnerTab("mitra")}
                />
                <span className="font-jakarta text-[18px] font-normal select-none text-white">
                  &nbsp;&amp;&nbsp;
                </span>
                <NoShiftTextButtonMobile
                  label="Klien"
                  selected={partnerTab === "klien"}
                  onClick={() => setPartnerTab("klien")}
                />
              </div>

              <div className="flex justify-center">
                <div className="p-[6px] border border-white rounded-[16px]">
                  <div
                    className="grid rounded-[12px] overflow-hidden"
                    style={{
                      gridTemplateColumns: "1fr",
                      gridTemplateRows: "1fr",
                    }}
                  >
                    <img
                      src={mitraImageMobile}
                      alt="Mitra"
                      className="w-full max-w-[300px] select-none block"
                      style={{
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: partnerTab === "mitra" ? 1 : 0,
                        transition:
                          "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      draggable="false"
                    />
                    <img
                      src={klienImageMobile}
                      alt="Klien"
                      className="w-full max-w-[300px] select-none block"
                      style={{
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: partnerTab === "klien" ? 1 : 0,
                        transition:
                          "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      draggable="false"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  onClick={() => setPartnerTab("mitra")}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    partnerTab === "mitra" ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Lihat Mitra"
                />
                <button
                  onClick={() => setPartnerTab("klien")}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    partnerTab === "klien" ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Lihat Klien"
                />
              </div>
            </div>

            <img
              src={vectorBot}
              alt="Vector Bottom"
              className="absolute -bottom-10 -right-8 w-[160px] sm:w-[140px] h-auto select-none pointer-events-none z-10"
              draggable="false"
            />
          </div>

          {/* DESKTOP VERSION */}
          <div className="hidden md:block">
            <div className="flex flex-col items-center justify-center text-white">
              <div className="flex items-baseline justify-center gap-1 mb-[10px]">
                <NoShiftTextButton
                  label="Mitra"
                  selected={partnerTab === "mitra"}
                  onClick={() => setPartnerTab("mitra")}
                />
                <span className="font-jakarta md:text-[22px] lg:text-[30px] font-normal select-none">
                  &nbsp;&amp;&nbsp;
                </span>
                <NoShiftTextButton
                  label="Klien"
                  selected={partnerTab === "klien"}
                  onClick={() => setPartnerTab("klien")}
                />
              </div>

              <div className="w-full flex items-center justify-center gap-[6px] max-w-[1400px]">
                <img
                  src={vectorKanan}
                  alt="Dekor kanan"
                  className="select-none shrink-0"
                  style={{ width: "clamp(140px, 18vw, 280px)" }}
                  draggable="false"
                />

                <div className="p-[6px] border border-white rounded-[20px]">
                  <div
                    className="grid rounded-[14px] overflow-hidden"
                    style={{
                      gridTemplateColumns: "1fr",
                      gridTemplateRows: "1fr",
                    }}
                  >
                    <img
                      src={mitraImage}
                      alt="Mitra"
                      className="w-full md:max-w-[520px] lg:max-w-[760px] xl:max-w-[840px] 2xl:max-w-[920px] select-none block"
                      style={{
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: partnerTab === "mitra" ? 1 : 0,
                        transition:
                          "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      draggable="false"
                    />
                    <img
                      src={klienImage}
                      alt="Klien"
                      className="w-full md:max-w-[520px] lg:max-w-[760px] xl:max-w-[840px] 2xl:max-w-[920px] select-none block"
                      style={{
                        gridColumn: 1,
                        gridRow: 1,
                        opacity: partnerTab === "klien" ? 1 : 0,
                        transition:
                          "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      draggable="false"
                    />
                  </div>
                </div>

                <img
                  src={vectorKiri}
                  alt="Dekor kiri"
                  className="select-none shrink-0"
                  style={{ width: "clamp(130px, 17vw, 270px)" }}
                  draggable="false"
                />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  onClick={() => setPartnerTab("mitra")}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    partnerTab === "mitra" ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Lihat Mitra"
                />
                <button
                  onClick={() => setPartnerTab("klien")}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    partnerTab === "klien" ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Lihat Klien"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
