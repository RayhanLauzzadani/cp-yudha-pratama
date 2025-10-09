import { useEffect, useRef, useState, useCallback } from "react";
import carousel1 from "../assets/images/carousel_1.png";
import carousel2 from "../assets/images/carousel_2.png";
import carousel3 from "../assets/images/carousel_3.png";
import carousel4 from "../assets/images/carousel_4.png";

const SLIDES = [carousel1, carousel2, carousel3, carousel4];
const DURATION = 5000; // ms

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1

  const imgRef = useRef(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  const segmentPct = 100 / SLIDES.length;

  // Easing: lambat -> cepat
  const easeIn = (t) => t * t * t;

  const measure = () => {
    if (imgRef.current) setImgHeight(imgRef.current.clientHeight);
  };

  const cancelAnimation = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  // --- Animasi progress loop (tanpa glitch)
  const runAnimation = useCallback(() => {
    const frame = (time) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const raw = Math.min(elapsed / DURATION, 1); // 0..1 linear clock
      const eased = easeIn(raw);                    // 0..1 lambat -> cepat

      setProgress(eased);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        // Selesai: langsung ganti slide. Progress tidak direset di sini
        // supaya tidak muncul flash "full->0". Reset dilakukan setelah index berubah.
        setIndex((i) => (i + 1) % SLIDES.length);
      }
    };

    rafRef.current = requestAnimationFrame(frame);
  }, []);

  // Re-run animasi tiap kali index berubah (reset clock & progress di sini)
  useEffect(() => {
    cancelAnimation();
    setProgress(0);
    startTimeRef.current = null;
    runAnimation();

    return () => cancelAnimation();
  }, [index, runAnimation]);

  // Hitung tinggi gambar agar arrow tetap center
  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  // Navigasi manual (aman, tanpa glitch)
  const goToPrevSlide = () => {
    cancelAnimation();
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNextSlideManual = () => {
    cancelAnimation();
    setIndex((i) => (i + 1) % SLIDES.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white font-jakarta leading-none"
      style={{ height: imgHeight || "auto" }}
    >
      <div className="relative w-full flex items-center justify-center">
        {/* Gambar Carousel (fade) */}
        {SLIDES.map((src, i) => (
          <img
            key={`slide-${i}`}
            ref={i === index ? imgRef : null}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`block w-full h-auto object-contain transition-opacity duration-700 ease-in-out
              ${i === index ? "opacity-100 z-10" : "opacity-0 z-0 absolute"}`}
            onLoad={() => {
              if (i === index && imgRef.current) {
                setImgHeight(imgRef.current.clientHeight);
              }
            }}
            draggable={false}
          />
        ))}

        {/* Container teks kiri (responsif) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-20 text-[#383737] text-left"
          style={{
            left: "clamp(120px, 9vw, 180px)",
            width: "min(38%, 520px)",
          }}
        >
          <h1
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Mengutamakan <br /> Hasil Kerja
          </h1>

          <p
            className="mt-4 text-[#383737]/80 leading-snug"
            style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
          >
            Berkualitas Sesuai Standar, Kebutuhan, Dan Kepuasan Mitra.
          </p>

          <button
            className="mt-8 border border-[#A20000] rounded-[45px] text-[#A20000] font-bold transition-colors duration-300 ease-out hover:bg-[#A20000] hover:text-white"
            style={{
              fontSize: "clamp(12px, 1.3vw, 14px)",
              padding: "clamp(10px, 1.2vw, 12px) clamp(22px, 2vw, 32px)",
              letterSpacing: "0.01em",
            }}
          >
            SELENGKAPNYA
          </button>
        </div>

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

        {/* Progress bar (tanpa CSS transition di width) */}
        <div
          className="absolute left-0 right-0 px-4 sm:px-6 xl:px-10 z-20"
          style={{ bottom: "10px" }}
        >
          <div className="relative h-[14px] w-full rounded-full bg-[#E2E2E2] overflow-hidden">
            {SLIDES.map((_, i) => (
              <div
                key={`segment-${i}`}
                className="absolute top-0 h-full border-r border-white/30"
                style={{ left: `${i * segmentPct}%`, width: `${segmentPct}%` }}
              />
            ))}
            <div
              className="absolute top-0 h-full rounded-full bg-[#A20000]"
              style={{
                left: `${index * segmentPct}%`,
                width: `${segmentPct * progress}%`,
                transformOrigin: "left center",
                transition: "none",        // <- penting: biar nggak dobel animasi
                willChange: "width",       // hint performa
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
