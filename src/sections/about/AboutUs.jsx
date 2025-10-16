import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "../../assets/brand/logo-mark.svg";
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const AUTOPLAY_DURATION = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    {
      title: "SEJARAH",
      subtitle: "CV. YUDHA PRATAMA",
      content: (
        <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] leading-relaxed text-[#474747]" style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
          CV. Yudha Pratama Merupakan Hasil Pengembangan Dari Perusahaan Sebelumnya, Mitra Keluarga Sejahtera (MKS), Yang Berdiri Sejak Tahun 2008. Seiring Dengan Perluasan Ruang Lingkup Usaha Dan Peningkatan Kebutuhan Mitra, Perusahaan Kemudian Melakukan Pergantian Nama Menjadi CV. Yudha Pratama Pada Tanggal 30 April 2009, Yang Resmi Berdomisili Di Kelapadua Tugu, Cimanggis, Depok.
        </p>
      )
    },
    {
      title: "VISI & MISI",
      subtitle: "CV. YUDHA PRATAMA",
      content: (
        <div className="space-y-4 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] leading-relaxed text-[#474747]" style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
          <div>
            <p className="font-bold mb-1">VISI</p>
            <p>Menjadi Perusahaan General Contractor & Supplier Yang Mengutamakan Pelayanan Prima Kepada Pelanggan</p>
          </div>
          <div>
            <p className="font-bold mb-1">MISI</p>
            <p>Mengutamakan Ketepatan Waktu Disetiap Keinginan Dan Kebutuhan Pelanggan Dan Memprioritaskan Hubungan Pelanggan Yang Berkelanjutan</p>
          </div>
        </div>
      )
    },
    {
      title: "BUDAYA",
      subtitle: "CV. YUDHA PRATAMA",
      content: (
        <div className="space-y-4 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] leading-relaxed text-[#474747]" style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
          <div>
            <p className="font-bold mb-1">PROFESIONALITAS</p>
            <p>Penerapan Mutu Kulaitas Sumber Daya Manusia Yang Kompeten</p>
          </div>
          <div>
            <p className="font-bold mb-1">KOLABORATIF</p>
            <p>Penerapan Kerjasama Yang Erat Yang Mengutamakan Diskusi Guna Mencapai Tujuan Yang Akan Dicapai</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center">
      {/* Vector atas kiri */}
      <img
        src={vectorTop}
        alt="Vector Top"
        className="absolute top-[-40px] left-0 w-[120px] sm:w-[140px] lg:w-[280px] xl:w-[320px] h-auto select-none pointer-events-none"
        draggable="false"
      />

      {/* Container dengan padding untuk konten (kecuali garis merah) */}
      <div className="w-full flex flex-col items-center px-4">
        {/* Logo dengan lingkaran di belakang */}
        <div className="mt-[20px] lg:mt-[40px] flex justify-center items-center relative">
          <div className="absolute bg-[#D9D9D9] opacity-30 rounded-full w-[86px] h-[86px] sm:w-[104px] sm:h-[104px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px]"></div>
          <img
            src={logoMark}
            alt="Logo Yudha Pratama"
            className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] xl:w-[200px] h-auto object-contain select-none"
            draggable="false"
          />
        </div>

        {/* Heading dinamis dengan animasi */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-[13px] lg:mt-[20px] font-jakarta font-extrabold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[42px] xl:text-[48px] leading-tight text-[#585858] tracking-tight mb-[7px] lg:mb-[12px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.8px"
            }}>
            {slides[currentSlide].title}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Garis horizontal full width */}
      <div className="relative w-full flex items-center justify-center">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] lg:h-[3px] xl:h-[4px] bg-[#A20000]"></div>
        
        {/* Subtitle dengan animasi */}
        <AnimatePresence mode="wait">
          <motion.span
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 bg-white px-3 lg:px-5 text-[#A20000] font-bold text-[15px] sm:text-[17px] md:text-[19px] lg:text-[26px] xl:text-[30px] tracking-wide"
            style={{
              fontFamily: '"Segoe UI", SegoeUI, sans-serif'
            }}>
            {slides[currentSlide].subtitle}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Box teks dengan konten dinamis dan animasi */}
      <div className="mt-[16px] lg:mt-[24px] w-full px-4 flex justify-center relative">
        <div 
          className="rounded-lg px-[12px] sm:px-[16px] md:px-[20px] lg:px-[32px] xl:px-[40px] py-[16px] sm:py-[18px] md:py-[20px] lg:py-[28px] xl:py-[32px] text-center w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[800px] xl:max-w-[1100px] min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[200px] xl:min-h-[220px] flex items-center justify-center"
          style={{
            border: '0.4px solid rgba(0, 0, 0, 0.25)'
          }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full">
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Arrows */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] rounded-full bg-[#E2E2E2] items-center justify-center hover:bg-[#D0D0D0] transition-colors z-30"
          aria-label="Slide sebelumnya">
          <svg className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] text-[#919191]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-[48px] h-[48px] xl:w-[56px] xl:h-[56px] rounded-full bg-[#E2E2E2] items-center justify-center hover:bg-[#D0D0D0] transition-colors z-30"
          aria-label="Slide berikutnya">
          <svg className="w-[24px] h-[24px] xl:w-[28px] xl:h-[28px] text-[#919191]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Carousel Controls */}
      <div className="lg:hidden absolute top-[440px] sm:top-[480px] md:top-[520px] left-0 right-0 w-full flex items-center justify-center z-20">
        <button
          onClick={prevSlide}
          className="absolute left-4 w-[32px] h-[32px] rounded-full bg-[#E2E2E2] flex items-center justify-center hover:bg-[#D0D0D0] transition-colors"
          aria-label="Slide sebelumnya">
          <svg className="w-[18px] h-[18px] text-[#919191]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-[8px] bg-[#E5E5E5] rounded-full overflow-hidden flex gap-[2px]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="flex-1 h-full rounded-full transition-all duration-300 cursor-pointer hover:opacity-80"
              style={{
                backgroundColor: index === currentSlide ? '#A20000' : 'transparent'
              }}
              aria-label={`Ke slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 w-[32px] h-[32px] rounded-full bg-[#E2E2E2] flex items-center justify-center hover:bg-[#D0D0D0] transition-colors"
          aria-label="Slide berikutnya">
          <svg className="w-[18px] h-[18px] text-[#919191]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Desktop Progress Bar */}
      <div className="hidden lg:flex mt-[32px] xl:mt-[40px] w-full justify-center z-20">
        <div className="w-full max-w-[320px] xl:max-w-[380px] h-[10px] xl:h-[12px] bg-[#E5E5E5] rounded-full overflow-hidden flex gap-[3px]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="flex-1 h-full rounded-full transition-all duration-300 cursor-pointer hover:opacity-80"
              style={{
                backgroundColor: index === currentSlide ? '#A20000' : 'transparent'
              }}
              aria-label={`Ke slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Vector bawah kanan */}
      <img
        src={vectorBot}
        alt="Vector Bottom"
        className="absolute bottom-[100px] lg:bottom-[80px] right-[-6px] w-[120px] sm:w-[140px] lg:w-[280px] xl:w-[320px] h-auto select-none pointer-events-none"
        draggable="false"
      />
    </section>
  );
}
