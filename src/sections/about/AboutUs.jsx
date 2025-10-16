// src/sections/about/AboutUs.jsx
import { useRef, useState, useEffect, useCallback } from "react";
import logoMark from "../../assets/brand/logo-mark.svg";
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";

const CAROUSEL_DURATION = 5000; // ms

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // progress bar
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const segmentPct = 100 / totalSlides;

  const cancelProgressAnimation = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const runProgressAnimation = useCallback(() => {
    const frame = (time) => {
      if (startTimeRef.current == null) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const raw = Math.min(elapsed / CAROUSEL_DURATION, 1);
      setProgress(raw);
      if (raw < 1) rafRef.current = requestAnimationFrame(frame);
      else setCurrentSlide((p) => (p + 1) % totalSlides);
    };
    rafRef.current = requestAnimationFrame(frame);
  }, [totalSlides]);

  const resetAutoPlay = useCallback(() => {
    cancelProgressAnimation();
    setProgress(0);
    startTimeRef.current = null;
    runProgressAnimation();
  }, [runProgressAnimation]);

  const nextSlide = () => {
    setCurrentSlide((p) => (p + 1) % totalSlides);
    resetAutoPlay();
  };
  const prevSlide = () => {
    setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
    resetAutoPlay();
  };

  useEffect(() => {
    cancelProgressAnimation();
    startTimeRef.current = null;
    setProgress(0);
    runProgressAnimation();
    return () => cancelProgressAnimation();
  }, [currentSlide, runProgressAnimation]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) setContainerWidth(entry.contentRect.width);
    });
    ro.observe(el);
    setContainerWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* CAROUSEL */}
      <section className="relative w-full bg-white h-screen min-h-[525px] font-jakarta overflow-hidden flex items-center justify-center">
        <div className="absolute inset-y-0 left-0 w-[320px] sm:w-[360px] md:w-[400px] opacity-30 pointer-events-none flex items-stretch">
          <img src={vectorTop} alt="" className="w-full h-full object-cover object-left" aria-hidden="true" />
        </div>
        <div className="absolute inset-y-0 right-0 w-[320px] sm:w-[360px] md:w-[400px] opacity-30 pointer-events-none flex items-stretch">
          <img src={vectorBot} alt="" className="w-full h-full object-cover object-right" aria-hidden="true" />
        </div>
        <div ref={containerRef} className="relative w-full h-full">
          <div className="flex h-full transition-transform duration-700 ease-in-out transform-gpu will-change-transform" style={{ transform: `translateX(-${currentSlide * containerWidth}px)` }}>
            {/* Slide 1 */}
            <div className="min-w-full flex-shrink-0 relative h-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-0 px-6">
                <div className="flex flex-col items-center justify-end h-[260px] md:h-[300px] mt-[25px]">
                  {/* Lingkaran di belakang logo */}
                  <div className="relative w-[160px] h-[160px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
                    <img
                      src={logoMark}
                      alt="Logo Yudha Pratama"
                      className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[200px] h-auto object-contain"
                    />
                  </div>
                  <h2 className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-extrabold leading-tight text-[#383737]">SEJARAH</h2>
                </div>
                <div className="w-full relative mt-0 mb-6 h-12">
                  <div className="absolute left-1/2 -translate-x-1/2 w-screen top-1/2 -translate-y-1/2 h-[4px] bg-[#A20000]" />
                  <div className="relative flex justify-center items-center h-full">
                    <h3 className="bg-white px-8 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#A20000]">CV. YUDHA PRATAMA</h3>
                  </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 max-w-[900px] sm:max-w-[1000px] w-full">
                  <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-[#383737]/90 text-center">CV. Yudha Pratama Merupakan Hasil Pengembangan Dari Perusahaan Sebelumnya, Mitra Keluarga Sejahtera (MKS), Yang Berdiri Sejak Tahun 2008. Seiring Dengan Perluasan Ruang Lingkup Usaha Dan Peningkatan Kebutuhan Mitra, Perusahaan Kemudian Melakukan Pergantian Nama Menjadi CV. Yudha Pratama Pada Tanggal 30 April 2009, Yang Resmi Berdomisili Di Kelapadua Tugu, Cimanggis, Depok.</p>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="min-w-full flex-shrink-0 relative h-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-0 px-6">
                <div className="flex flex-col items-center justify-end h-[260px] md:h-[300px] mt-[25px]">
                  <div className="relative w-[160px] h-[160px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
                    <img
                      src={logoMark}
                      alt="Logo Yudha Pratama"
                      className="w-[120px] sm:w-[140px] md:w-[160px] h-auto object-contain"
                    />
                  </div>
                  <h2 className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-extrabold leading-tight text-[#383737]">VISI & MISI</h2>
                </div>
                <div className="w-full relative mt-0 mb-6 h-12">
                  <div className="absolute left-1/2 -translate-x-1/2 w-screen top-1/2 -translate-y-1/2 h-[4px] bg-[#A20000]" />
                  <div className="relative flex justify-center items-center h-full">
                    <h3 className="bg-white px-8 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#A20000]">CV. YUDHA PRATAMA</h3>
                  </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 max-w-[900px] w-full">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="text-center">
                      <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#383737] mb-3">VISI</h4>
                      <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#383737]/90">Menjadi Perusahaan General Contractor & Supplier Yang Mengutamakan Pelayanan Prima Kepada Pelanggan</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#383737] mb-3">MISI</h4>
                      <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#383737]/90">Mengutamakan Ketepatan Waktu Disetiap Keinginan Dan Kebutuhan Pelanggan Dan Memprioritaskan Hubungan Pelanggan Yang Berkelanjutan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="min-w-full flex-shrink-0 relative h-full flex items-center justify-center overflow-hidden">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-0 px-6">
                <div className="flex flex-col items-center justify-end h-[260px] md:h-[300px] mt-[25px]">
                  <div className="relative w-[160px] h-[160px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
                    <img
                      src={logoMark}
                      alt="Logo Yudha Pratama"
                      className="w-[120px] sm:w-[140px] md:w-[160px] h-auto object-contain"
                    />
                  </div>
                  <h2 className="text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-extrabold leading-tight text-[#383737]">BUDAYA</h2>
                </div>
                <div className="w-full relative mt-0 mb-6 h-12">
                  <div className="absolute left-1/2 -translate-x-1/2 w-screen top-1/2 -translate-y-1/2 h-[4px] bg-[#A20000]" />
                  <div className="relative flex justify-center items-center h-full">
                    <h3 className="bg-white px-8 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#A20000]">CV. YUDHA PRATAMA</h3>
                  </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 max-w-[900px] w-full">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="text-center">
                      <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#383737] mb-3">PROFESIONALITAS</h4>
                      <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#383737]/90">Penerapan Mutu Kulitas Sumber Daya Manusia Yang Kompeten</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#383737] mb-3">KOLABORATIF</h4>
                      <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#383737]/90">Penerapan Kerjasama Yang Erat Yang Mengutamakan Diskusi Guna Mencapai Tujuan Yang Akan Dicapai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* arrows */}
          <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 group" aria-label="Slide sebelumnya">
            <svg className="w-7 h-7 text-[#A20000] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 group" aria-label="Slide berikutnya">
            <svg className="w-7 h-7 text-[#A20000] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          {/* progress */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-[520px] px-6 pointer-events-none">
            <div className="relative h-[14px] w-full rounded-full bg-[#E5E5E5] overflow-hidden">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div key={`sep-${i}`} className="absolute top-0 h-full border-r border-white/40" style={{ left: `${(i * 100) / totalSlides}%`, width: `${100 / totalSlides}%` }} />
              ))}
              <div className="absolute top-0 left-0 h-full rounded-full bg-[#A20000] shadow-[0_0_8px_rgba(162,0,0,0.5)]" style={{ left: `${currentSlide * segmentPct}%`, width: `${segmentPct * progress}%`, transformOrigin: "left center", transition: "none", willChange: "width,left" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
