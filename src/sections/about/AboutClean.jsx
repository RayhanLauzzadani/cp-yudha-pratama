// src/sections/home/AboutClean.jsx
import { useRef, useState, useEffect, useCallback } from "react";
import PartnersClients from "../home/PartnersClients";
import teamPhoto from "../../assets/images/team-photo.png";
import logoMark from "../../assets/brand/logo-mark.svg";
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";
import iconMedal from "../../assets/icons/medal.svg";
import iconLab from "../../assets/icons/laboratory.svg";
import iconWorld from "../../assets/icons/world.svg";
import group89 from "../../assets/icons/group_89.svg";

const CAROUSEL_DURATION = 5000; // ms

export default function AboutClean() {
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
  <section id="sejarah" className="relative w-full bg-white md:h-screen h-auto min-h-[560px] font-jakarta overflow-visible md:overflow-hidden flex items-center justify-center scroll-mt-20 pt-4 sm:pt-6 md:pt-0">
        <div className="absolute inset-y-0 left-0 w-[320px] sm:w-[360px] md:w-[400px] opacity-30 pointer-events-none flex items-stretch">
          <img src={vectorTop} alt="" className="w-full h-full object-cover object-left" aria-hidden="true" />
        </div>
        <div className="absolute inset-y-0 right-0 w-[320px] sm:w-[360px] md:w-[400px] opacity-30 pointer-events-none flex items-stretch">
          <img src={vectorBot} alt="" className="w-full h-full object-cover object-right" aria-hidden="true" />
        </div>
        <div ref={containerRef} className="relative w-full md:h-full h-auto pb-16 sm:pb-0">
          <div className="flex md:h-full h-auto transition-transform duration-700 ease-in-out transform-gpu will-change-transform" style={{ transform: `translateX(-${currentSlide * containerWidth}px)` }}>
            {/* Slide 1 */}
            <div className="min-w-full flex-shrink-0 relative md:h-full h-auto flex items-start justify-center overflow-visible md:overflow-hidden pt-14 md:pt-16 lg:pt-16">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-start gap-0 px-6">
                <div className="flex flex-col items-center justify-end h-[160px] sm:h-[200px] md:h-[220px]">
                  <img src={logoMark} alt="Logo Yudha Pratama" className="w-[90px] sm:w-[120px] md:w-[160px] h-auto object-contain mb-2 sm:mb-3" />
                  <h2 className="text-[34px] sm:text-[48px] md:text-[68px] lg:text-[76px] font-extrabold leading-tight text-[#383737]">SEJARAH</h2>
                </div>
                <div className="w-full relative mt-0 mb-4 sm:mb-6 h-10 sm:h-12 overflow-hidden">
                  <div className="absolute left-1/2 -translate-x-1/2 w-full top-1/2 -translate-y-1/2 h-[4px] bg-[#A20000]" />
                  <div className="relative flex justify-center items-center h-full">
                    <h3 className="bg-white px-6 sm:px-8 text-[18px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#A20000]">CV. YUDHA PRATAMA</h3>
                  </div>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 md:p-10 max-w-[900px] sm:max-w-[1000px] w-full mt-2 sm:mt-3">
                  <p className="text-[13px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-[#383737]/90 text-center">CV. Yudha Pratama Merupakan Hasil Pengembangan Dari Perusahaan Sebelumnya, Mitra Keluarga Sejahtera (MKS), Yang Berdiri Sejak Tahun 2008. Seiring Dengan Perluasan Ruang Lingkup Usaha Dan Peningkatan Kebutuhan Mitra, Perusahaan Kemudian Melakukan Pergantian Nama Menjadi CV. Yudha Pratama Pada Tanggal 30 April 2009, Yang Resmi Berdomisili Di Kelapadua Tugu, Cimanggis, Depok.</p>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="min-w-full flex-shrink-0 relative md:h-full h-auto flex items-start justify-center overflow-visible md:overflow-hidden pt-14 md:pt-16 lg:pt-16">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-start gap-0 px-6">
                <div className="flex flex-col items-center justify-end h-[160px] sm:h-[200px] md:h-[220px]">
                  <img src={logoMark} alt="Logo Yudha Pratama" className="w-[90px] sm:w-[120px] md:w-[160px] h-auto object-contain mb-2 sm:mb-3" />
                  <h2 className="text-[34px] sm:text-[48px] md:text-[68px] lg:text-[76px] font-extrabold leading-tight text-[#383737]">VISI & MISI</h2>
                </div>
                <div className="w-full relative mt-0 mb-4 sm:mb-6 h-10 sm:h-12 overflow-hidden">
                  <div className="absolute left-1/2 -translate-x-1/2 w-full top-1/2 -translate-y-1/2 h-[4px] bg-[#A20000]" />
                  <div className="relative flex justify-center items-center h-full">
                    <h3 className="bg-white px-6 sm:px-8 text-[18px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#A20000]">CV. YUDHA PRATAMA</h3>
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
            <div className="min-w-full flex-shrink-0 relative md:h-full h-auto flex items-start justify-center overflow-visible md:overflow-hidden pt-14 md:pt-16 lg:pt-16">
              <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center justify-start gap-0 px-6">
                <div className="flex flex-col items-center justify-end h-[160px] sm:h-[200px] md:h-[220px]">
                  <img src={logoMark} alt="Logo Yudha Pratama" className="w-[90px] sm:w-[120px] md:w-[160px] h-auto object-contain mb-2 sm:mb-3" />
                  <h2 className="text-[34px] sm:text-[48px] md:text-[68px] lg:text-[76px] font-extrabold leading-tight text-[#383737]">BUDAYA</h2>
                </div>
                <div className="w-full relative mt-0 mb-4 sm:mb-6 h-10 sm:h-12 overflow-hidden">
                  <div className="absolute left-1/2 -translate-x-1/2 w-full top-1/2 -translate-y-1/2 h-[4px] bg-[#A20000]" />
                  <div className="relative flex justify-center items-center h-full">
                    <h3 className="bg-white px-6 sm:px-8 text-[18px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#A20000]">CV. YUDHA PRATAMA</h3>
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
          <button onClick={prevSlide} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 group" aria-label="Slide sebelumnya">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#A20000] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 group" aria-label="Slide berikutnya">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#A20000] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          {/* progress */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-[520px] px-4 sm:px-6 pointer-events-none">
            <div className="relative h-[14px] w-full rounded-full bg-[#E5E5E5] overflow-hidden">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div key={`sep-${i}`} className="absolute top-0 h-full border-r border-white/40" style={{ left: `${(i * 100) / totalSlides}%`, width: `${100 / totalSlides}%` }} />
              ))}
              <div className="absolute top-0 left-0 h-full rounded-full bg-[#A20000] shadow-[0_0_8px_rgba(162,0,0,0.5)]" style={{ left: `${currentSlide * segmentPct}%`, width: `${segmentPct * progress}%`, transformOrigin: "left center", transition: "none", willChange: "width,left" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CV + MOTTO */}
      <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 font-jakarta">
        <div className="absolute inset-y-0 left-0 w-[220px] sm:w-[300px] md:w-[340px] opacity-25 pointer-events-none">
          <img src={vectorTop} alt="" className="w-full h-full object-cover object-left" aria-hidden="true" />
        </div>
        <div className="absolute inset-y-0 right-0 w-[220px] sm:w-[300px] md:w-[340px] opacity-25 pointer-events-none">
          <img src={vectorBot} alt="" className="w-full h-full object-cover object-right" aria-hidden="true" />
        </div>
        <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-10">
          <div className="flex-shrink-0 flex lg:justify-center justify-end w-full lg:w-1/2">
            <div className="relative w-[240px] sm:w-[460px] md:w-[520px] lg:w-[560px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[96%] sm:w-[98%] aspect-square rounded-full border-[14px] sm:border-[16px] border-[#E5E5E5] z-0" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] sm:w-[86%] aspect-square rounded-full bg-[#A20000] z-10" />
              <img src={teamPhoto} alt="Tim CV. Yudha Pratama" className="relative z-20 block w-full h-auto object-contain drop-shadow-md" draggable={false} />
            </div>
          </div>
          <div className="relative text-[#383737] lg:w-1/2 text-left">
            <h2 className="text-[30px] sm:text-[44px] md:text-[48px] font-extrabold leading-tight">CV. Yudha Pratama</h2>
            <div className="mt-4"><span className="block h-[4px] bg-[#A20000] rounded-full w-full max-w-[200px]" /></div>
            <p className="mt-6 text-[10px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#383737]/80">Perusahaan Kontraktor Yang Berkomitmen Untuk Selalu Aktif Dalam Mendukung Pembangunan Nasional Maupun Swasta. Kami Bergerak Di Bidang Konstruksi, Penyediaan Material (Supplier), Persiapan Lahan, Pekerjaan Galian Tanah, Pembangunan Saluran Air, Pekerjaan Kolam Detensi, Pekerjaan Taman, Serta Penyewaan Alat Berat.</p>
            <div className="mt-8">
              <h3 className="text-[#A20000] text-[18px] sm:text-[24px] font-bold mb-4">MOTTO PERUSAHAAN</h3>
              <ul className="list-disc pl-6 space-y-2 text-[10px] sm:text-[16px] md:text-[17px]">
                <li><span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>Mengutamakan Hasil Kerja Berkualitas</span> Sesuai Standar, Kebutuhan, Dan Kepuasan Mitra.</li>
                <li><span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>Menjalin Serta Menjaga Kemitraan</span> Yang Profesional, Berintegritas, Dan Berdaya Saing Tinggi.</li>
                <li><span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>Melakukan Inovasi Dan Pengembangan Berkelanjutan</span> Untuk Meningkatkan Kinerja Serta Nilai Layanan.</li>
                <li><span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>Dedikasi Tanpa Henti</span> Untuk Karya Terbaik.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative w-full font-jakarta overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_-10%_-10%,#C43131_0%,#8E1111_40%,#6F0B0B_70%,#5A0A0A_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%_65%,rgba(0,0,0,0.10)_100%)] mix-blend-overlay" />
        </div>
        <img src={group89} alt="" aria-hidden="true" className="pointer-events-none select-none absolute -left-36 -top-36 w-[900px] opacity-95 transform -scale-x-100" />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">Mengapa Memilih Kami?</h2>
          <div className="flex justify-center mt-5">
            <div className="border border-white/60 rounded-full px-5 sm:px-6 py-2 text-white/90 text-xs sm:text-sm backdrop-blur-[2px]">Keunggulan Yang Membuat Kami Menjadi Pilihan Utama Untuk Proyek Konstruksi Anda</div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#4A4A4A] border-[6px] border-neutral-200 flex items-center justify-center z-10 text-white"><img src={iconMedal} alt="Medal" className="w-7 h-7" /></div>
              <div className="rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-6 py-10 pt-12"><div className="text-[#8C8C8C] text-xs font-semibold tracking-wider text-center">SEJAK 2009</div><h3 className="mt-2 text-[#A20000] text-2xl font-extrabold text-center">15+ Tahun Pengalaman</h3><p className="mt-3 text-[#4B4B4B] text-sm text-center">Pengalaman Dalam Menangani Proyek-Proyek Besar BUMN Dan Swasta Dengan Track Record Yang Terpercaya Sejak 2009.</p></div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#4A4A4A] border-[6px] border-neutral-200 flex items-center justify-center z-10 text-white"><img src={iconLab} alt="Laboratory" className="w-7 h-7" /></div>
              <div className="rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-6 py-10 pt-12"><div className="text-[#8C8C8C] text-xs font-semibold tracking-wider text-center">LAB TRISAKTI</div><h3 className="mt-2 text-[#A20000] text-2xl font-extrabold text-center">Kualitas Teruji Lab</h3><p className="mt-3 text-[#4B4B4B] text-sm text-center">Semua Material Alam Telah Melalui Uji Kualitas Di Laboratorium Universitas Trisakti Untuk Menjamin Standar Terbaik.</p></div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#4A4A4A] border-[6px] border-neutral-200 flex items-center justify-center z-10 text-white"><img src={iconWorld} alt="World" className="w-7 h-7" /></div>
              <div className="rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-6 py-10 pt-12"><div className="text-[#8C8C8C] text-xs font-semibold tracking-wider text-center">SELURUH INDONESIA</div><h3 className="mt-2 text-[#A20000] text-2xl font-extrabold text-center">Jaringan Distribusi Luas</h3><p className="mt-3 text-[#4B4B4B] text-sm text-center">Melayani JABODETABEK Hingga Seluruh Indonesia: Jawa, Sumatera, Kalimantan, Dan Sulawesi Dengan Logistik Terpadu.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* (Mitra & Klien section removed per request) */}

  {/* Mitra & Klien (digabung di halaman About) */}
  <PartnersClients />

      {/* Floating Buttons */}
  <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-row items-center gap-2 sm:gap-3">
        {/* Hubungi Kami - now white with gray border, on the left */}
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-semibold opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none transition-opacity select-none">
            ADMIN
          </div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-neutral-300 hover:border-neutral-400 text-[#383737] hover:bg-neutral-50 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
            aria-label="Hubungi kami via WhatsApp"
          >
            {/* Phone icon (black) */}
            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a1.5 1.5 0 012.121-1.342l3.029 1.514a1.5 1.5 0 01.8.86l.929 2.23c.192.463.087 1.004-.273 1.364l-.759.759a12.75 12.75 0 006.364 6.364l.759-.759c.36-.36.901-.465 1.364-.273l2.23.93c.365.152.651.438.803.803l1.514 3.029A1.5 1.5 0 0119.5 22.5h-1.125c-8.284 0-15-6.716-15-15V6A1.5 1.5 0 011.5 4.5z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">HUBUNGI KAMI</span>
          </a>
        </div>

        {/* Scroll to Top - rounded rectangle on the right */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#383737] hover:bg-[#2a2a2a] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-lg transition-all duration-300 group flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      </div>
    </>
  );
}
