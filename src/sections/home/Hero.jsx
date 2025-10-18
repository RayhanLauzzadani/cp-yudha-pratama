// src/sections/hero/Hero.jsx
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { SkeletonBlock, SkeletonLine } from "../../components/common/Skeleton";

import carousel1 from "../../assets/images/carousel_1.png";
import carousel2 from "../../assets/images/carousel_2.png";
import carousel3 from "../../assets/images/carousel_3.png";
import carousel4 from "../../assets/images/carousel_4.png";

// versi mobile untuk semua slide
import carouselMobile1 from "../../assets/images/carousel_mobile_1.png";
import carouselMobile2 from "../../assets/images/carousel_mobile_2.png";
import carouselMobile3 from "../../assets/images/carousel_mobile_3.png";
import carouselMobile4 from "../../assets/images/carousel_mobile_4.png";

// vector untuk mobile
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";

const SLIDES = [carousel1, carousel2, carousel3, carousel4];
const SLIDES_MOBILE = [carouselMobile1, carouselMobile2, carouselMobile3, carouselMobile4];

const DURATION = 5000; // ms
const TEXT_ANIM_MS = 700; // selaraskan dengan fade gambar

// ---- konten teks per-slide
const SLIDE_CONTENT = [
  { title: "Mengutamakan \nHasil Kerja", subtitle: "Berkualitas Sesuai Standar, Kebutuhan, Dan Kepuasan Mitra." },
  { title: "Menjalin Serta \nMenjaga Kemitraan", subtitle: "Yang Profesional, Berintegritas,\nDan Berdaya Saing Tinggi." },
  { title: "Melakukan Inovasi \nDan Pengembangan \nBerkelanjutan", subtitle: "Untuk Meningkatkan Kinerja \nSerta Nilai Layanan." },
  { title: "Dedikasi \nTanpa Henti", subtitle: "Untuk Karya Terbaik" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const [imgHeight, setImgHeight] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1
  const [belowLg, setBelowLg] = useState(false); // < 992px

  // loading state untuk setiap slide (desktop & mobile)
  const [loadedDesk, setLoadedDesk] = useState(Array(SLIDES.length).fill(false));
  const [loadedMob, setLoadedMob] = useState(Array(SLIDES_MOBILE.length).fill(false));

  // ukuran segmen mobile (px) = lebar kontainer / jumlah slide
  const mobileBarRef = useRef(null);
  const [mobileSegWidth, setMobileSegWidth] = useState(0);

  const prevIndexRef = useRef(index);
  const imgRef = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  const segmentPct = 100 / SLIDES.length;

  const measure = () => {
    if (imgRef.current) setImgHeight(imgRef.current.clientHeight);
  };

  const cancelAnimation = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // deteksi viewport < lg (992px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 991.98px)");
    const update = () => setBelowLg(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  // ukur ulang lebar segmen mobile saat resize / perubahan mode
  const measureMobileSeg = useCallback(() => {
    if (!mobileBarRef.current) return;
    const w = mobileBarRef.current.clientWidth;
    setMobileSegWidth(w / SLIDES.length);
  }, []);

  useEffect(() => {
    if (belowLg) {
      measureMobileSeg();
      window.addEventListener("resize", measureMobileSeg);
      return () => window.removeEventListener("resize", measureMobileSeg);
    }
  }, [belowLg, measureMobileSeg]);

  // loop animasi progress
  const runAnimation = useCallback(() => {
    const frame = (time) => {
      if (startTimeRef.current == null) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      setProgress(raw);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        setIndex((i) => (i + 1) % SLIDES.length);
      }
    };
    rafRef.current = requestAnimationFrame(frame);
  }, []);

  // animasi keluar teks (desktop)
  useEffect(() => {
    const prev = prevIndexRef.current;
    if (prev !== index) {
      setLeavingIndex(prev);
      const t = setTimeout(() => setLeavingIndex(null), TEXT_ANIM_MS);
      prevIndexRef.current = index;
      return () => clearTimeout(t);
    }
  }, [index]);

  useEffect(() => {
    cancelAnimation();
    setProgress(0);
    startTimeRef.current = null;
    runAnimation();
    return () => cancelAnimation();
  }, [index, runAnimation]);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  const goToPrevSlide = () => {
    cancelAnimation();
    setProgress(0);
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNextSlideManual = () => {
    cancelAnimation();
    setProgress(0);
    setIndex((i) => (i + 1) % SLIDES.length);
  };

  const activeContent = SLIDE_CONTENT[index];
  const leavingContent = leavingIndex !== null ? SLIDE_CONTENT[leavingIndex] : null;

  // pilih sumber gambar: mobile vs desktop
  const IMAGES_TO_USE = belowLg ? SLIDES_MOBILE : SLIDES;
  const loadedArray = belowLg ? loadedMob : loadedDesk;
  const setLoadedArray = belowLg ? setLoadedMob : setLoadedDesk;

  // helper onLoad per index slide
  const markLoaded = useCallback(
    (i) => {
      setLoadedArray((prev) => {
        if (prev[i]) return prev;
        const next = [...prev];
        next[i] = true;
        return next;
      });
    },
    [setLoadedArray]
  );

  // preloading opsional: muat next image di background agar transisi mulus
  useEffect(() => {
    const nextIdx = (index + 1) % IMAGES_TO_USE.length;
    const src = IMAGES_TO_USE[nextIdx];
    const img = new Image();
    img.src = src;
    // tidak perlu set state saat load di sini; cukup browser cache
  }, [index, IMAGES_TO_USE]);

  return (
    <section
      className="relative w-full overflow-hidden bg-white font-jakarta leading-none"
      style={{ height: belowLg ? "auto" : imgHeight || "auto" }}
    >
      <div className="relative w-full flex flex-col items-center justify-start">
        {/* Gambar Carousel (fade) */}
        <div className="relative w-full flex items-center justify-center">
          {IMAGES_TO_USE.map((src, i) => {
            const isActive = i === index;
            const isLoaded = loadedArray[i];
            return (
              <div
                key={`slide-wrap-${i}`}
                className={`w-full ${isActive ? "z-10" : "z-0"} ${!isActive ? "absolute inset-0" : ""}`}
              >
                {/* Skeleton overlay absolute sampai image siap */}
                {!isLoaded && (
                  <div className="relative" style={{ paddingTop: belowLg ? "56.25%" : "35%" }}>
                    <SkeletonBlock h="h-full absolute inset-0" />
                  </div>
                )}

                <img
                  ref={isActive ? imgRef : null}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className={`block w-full h-auto object-contain transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                  onLoad={() => {
                    markLoaded(i);
                    if (isActive && imgRef.current) {
                      setImgHeight(imgRef.current.clientHeight);
                    }
                  }}
                  onError={() => markLoaded(i)}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* === MOBILE CONTENT (< lg): teks bawah + progress dinamis === */}
        {belowLg && (
          <>
            {/* Vector Top */}
            <div className="relative w-full h-0">
              <img
                src={vectorTop}
                alt="Decoration"
                className="absolute left-0 w-[150px] sm:w-[190px] md:w-[220px] top-[-70px] sm:top-[-90px] md:top-[-104px] z-0"
              />
            </div>

            <div className="w-full px-4 pt-5 pb-4 sm:pb-5">
              <div className="text-center text-[#383737] relative z-10 min-h-[280px] sm:min-h-[260px] md:min-h-[240px] flex flex-col justify-start">
                {leavingContent && (
                  <MobileTextBlock
                    key={`leaving-mobile-${leavingIndex}`}
                    content={leavingContent}
                    state="out"
                    duration={TEXT_ANIM_MS}
                  />
                )}

                {activeContent && (
                  <MobileTextBlock
                    key={`active-mobile-${index}`}
                    content={activeContent}
                    state="in"
                    duration={TEXT_ANIM_MS}
                  />
                )}
              </div>

              {/* progress bar mobile */}
              <div className="mt-[-50px] sm:mt-[-20px] md:mt-8 flex justify-center">
                <div
                  ref={mobileBarRef}
                  className="relative h-[12px] w-full max-w-[460px] rounded-full bg-[#E2E2E2] overflow-hidden"
                >
                  {Array.from({ length: SLIDES.length }).map((_, i) => (
                    <div
                      key={`msep-${i}`}
                      className="absolute top-0 h-full border-r border-white/30"
                      style={{
                        left: `${(i * 100) / SLIDES.length}%`,
                        width: `${100 / SLIDES.length}%`,
                      }}
                    />
                  ))}

                  <div
                    className="absolute top-0 h-full rounded-full bg-[#A20000] shadow-[0_0_8px_rgba(162,0,0,0.5)]"
                    style={{
                      left: `${index * mobileSegWidth}px`,
                      width: `${progress * mobileSegWidth}px`,
                      transformOrigin: "left center",
                      transition: "none",
                      willChange: "width,left",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Vector Bottom */}
            <div className="relative w-full mt-6 sm:mt-8">
              <img
                src={vectorBot}
                alt="Decoration Bottom"
                className="absolute right-0 w-[150px] sm:w-[190px] md:w-[220px] bottom-0 z-0"
              />
            </div>
          </>
        )}

        {/* === DESKTOP CONTENT (≥ lg) === */}
        {!belowLg && (
          <>
            {/* TEKS: leaving + active */}
            {leavingContent && (
              <TextBlock
                key={`leaving-${leavingIndex}`}
                content={leavingContent}
                styleBase={{ left: "clamp(120px, 9vw, 180px)", width: "min(38%, 520px)" }}
                state="out"
                duration={TEXT_ANIM_MS}
              />
            )}
            {activeContent && (
              <TextBlock
                key={`active-${index}`}
                content={activeContent}
                styleBase={{ left: "clamp(120px, 9vw, 180px)", width: "min(38%, 520px)" }}
                state="in"
                duration={TEXT_ANIM_MS}
              />
            )}

            {/* Arrow kiri */}
            <button
              onClick={goToPrevSlide}
              aria-label="Sebelumnya"
              className="absolute left-4 sm:left-6 xl:left-10 w-11 h-11 rounded-full bg-[#E2E2E2] text-[#383737]
                         hover:bg-[#d6d6d6] transition-colors duration-200 flex items-center justify-center z-20 shadow-md"
              style={{
                top: imgHeight ? `${imgHeight / 2}px` : "50%",
                transform: "translateY(-50%)",
              }}
            >
              <span className="text-lg font-bold">❮</span>
            </button>

            {/* Arrow kanan */}
            <button
              onClick={goToNextSlideManual}
              aria-label="Berikutnya"
              className="absolute right-4 sm:right-6 xl:right-10 w-11 h-11 rounded-full bg-[#E2E2E2] text-[#383737]
                         hover:bg-[#d6d6d6] transition-colors duration-200 flex items-center justify-center z-20 shadow-md"
              style={{
                top: imgHeight ? `${imgHeight / 2}px` : "50%",
                transform: "translateY(-50%)",
              }}
            >
              <span className="text-lg font-bold">❯</span>
            </button>

            {/* Progress bar desktop */}
            <div className="absolute left-0 right-0 px-4 sm:px-6 xl:px-10 z-20" style={{ bottom: "10px" }}>
              <div className="relative h-[14px] w-full rounded-full bg-[#E2E2E2] overflow-hidden">
                {SLIDES.map((_, i) => (
                  <div
                    key={`dseg-${i}`}
                    className="absolute top-0 h-full border-r border-white/30"
                    style={{ left: `${i * segmentPct}%`, width: `${segmentPct}%` }}
                  />
                ))}
                <div
                  className="absolute top-0 h-full rounded-full bg-[#A20000] shadow-[0_0_10px_rgba(162,0,0,0.6)]"
                  style={{
                    left: `${index * segmentPct}%`,
                    width: `${segmentPct * progress}%`,
                    transformOrigin: "left center",
                    transition: "none",
                    willChange: "width",
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Keyframes untuk animasi teks (desktop) */}
      <style>{`
        @keyframes textIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes textOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}

/** Komponen kecil untuk blok teks + stagger animasi (desktop) */
function TextBlock({ content, styleBase, state, duration }) {
  const easing = "cubic-bezier(0.22, 0.61, 0.36, 1)";
  const baseAnim =
    state === "in" ? `textIn ${duration}ms ${easing} both` : `textOut ${duration}ms ${easing} both`;

  return (
    <div className="absolute top-1/2 -translate-y-1/2 z-20 text-left pointer-events-none" style={styleBase}>
      <h1
        className="font-[800] leading-tight"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#454545",
          fontSize: "40px",
          letterSpacing: "0em",
          animation: baseAnim,
          animationDelay: "0ms",
        }}
      >
        {content.title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < content.title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h1>

      {content.subtitle && (
        <p
          className="mt-4 leading-snug whitespace-pre-line"
          style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 400,
            color: "#474747",
            fontSize: "20px",
            animation: baseAnim,
            animationDelay: "60ms",
          }}
        >
          {content.subtitle}
        </p>
      )}

      <div className="pointer-events-auto">
        <Link to="/about">
          <button
            className="mt-8 border border-[#A20000] rounded-[45px] text-[#A20000] font-bold transition-colors duration-300 ease-out hover:bg-[#A20000] hover:text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(12px, 1.3vw, 14px)",
              padding: "clamp(10px, 1.2vw, 12px) clamp(22px, 2vw, 32px)",
              letterSpacing: "0.01em",
              animation: baseAnim,
              animationDelay: "120ms",
            }}
          >
            SELENGKAPNYA
          </button>
        </Link>
      </div>
    </div>
  );
}

/** Komponen untuk animasi text mobile - fade + slide vertikal */
function MobileTextBlock({ content, state, duration }) {
  const easing = "cubic-bezier(0.22, 0.61, 0.36, 1)";
  const baseAnim =
    state === "in" ? `textIn ${duration}ms ${easing} both` : `textOut ${duration}ms ${easing} both`;

  return (
    <div className="absolute inset-x-0 top-0 pointer-events-none px-4">
      <h1
        className="font-[800] leading-tight"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#454545",
          fontSize: "clamp(22px, 6vw, 28px)",
          letterSpacing: "0em",
          animation: baseAnim,
          animationDelay: "0ms",
        }}
      >
        {content.title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < content.title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h1>

      {content.subtitle && (
        <p
          className="mt-3 leading-snug whitespace-pre-line"
          style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 400,
            color: "#474747",
            fontSize: "clamp(13px, 3.6vw, 16px)",
            animation: baseAnim,
            animationDelay: "60ms",
          }}
        >
          {content.subtitle}
        </p>
      )}

      <div className="pointer-events-auto flex justify-center">
        <Link to="/about">
          <button
            className="mt-5 inline-flex items-center justify-center border border-[#A20000] rounded-[45px] text-[#A20000] font-bold transition-colors duration-300 ease-out hover:bg-[#A20000] hover:text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              padding: "10px 22px",
              letterSpacing: "0.01em",
              animation: baseAnim,
              animationDelay: "120ms",
            }}
          >
            SELENGKAPNYA
          </button>
        </Link>
      </div>
    </div>
  );
}
