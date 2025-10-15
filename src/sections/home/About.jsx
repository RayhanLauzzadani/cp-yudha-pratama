// src/sections/About.jsx
import { useRef, useState, useEffect } from "react";
import teamPhoto from "../../assets/images/team-photo.png";

const DURATION_STAGE1 = 650; // pink moveShrink & grayMoveMorphStage1
const DURATION_POP = 500;    // dipakai utk grayThickenStick (match pink popRaiseHold)
const HOLD_MS = 140;         // jeda kecil sebelum slideNudge — DISAMAKAN utk gray sweep
const DURATION_STAGE2 = 2200;// pink slideNudge — sinkron utk gray sweep

// balik & reveal pink (TIDAK DIUBAH) — juga dipakai utk gray collapse+return & grow
const HOLD_BEFORE_RETURN_MS = 120;
const DURATION_RETURN_SMALL = 700;
const DURATION_GROW_BEHIND = 600;

const EASE_STAGE1 = "cubic-bezier(0.22,0.61,0.36,1)";
const EASE_RETURN = "cubic-bezier(0.25,0.8,0.25,1)";
const EASE_GROW = "cubic-bezier(0.22,0.7,0.2,1)";

// === Abu-abu (pilar) ===
const PILLAR_TARGET_PX = 20;   // final lebar pilar 20px
const PILLAR_MARGIN_L  = 0;   // jarak dari sisi kiri deskripsi
const EXTRA_SWEEP_PX   = 10;   // selimut: lebar deskripsi + 10px
const THICKEN_SHRINK_PX = 20;  // tinggi dikurangi 20px saat tiba (napas awal)

export default function About() {
  const sectionRef = useRef(null);
  const movingPinkRef = useRef(null); // pink
  const grayRef = useRef(null);       // abu-abu
  const descRef = useRef(null);       // kontainer deskripsi (ukur)
  const targetDotRef = useRef(null);  // anchor pink (hidden)

  // eslint-disable-next-line no-unused-vars
  const [finished, setFinished] = useState(false);

  const runAnimation = () => {
    const elPink = movingPinkRef.current;
    const elGray = grayRef.current;
    const descEl = descRef.current;
    const dot = targetDotRef.current;
    if (!elPink || !elGray || !descEl || !dot) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    // Detect mobile/desktop untuk adjust animasi
    const isMobile = window.innerWidth < 992;
    const isSm = window.innerWidth >= 640 && window.innerWidth < 768; // Breakpoint sm
    const isMd = window.innerWidth >= 768 && window.innerWidth < 992; // Breakpoint md

    // ====== RESET PINK (TIDAK DIUBAH) ======
    elPink.style.animation = "none";
    elPink.style.transform = "translate(-50%, -50%) translate(0px, 0px) scale(1)";
    elPink.style.zIndex = "20";
    setFinished(false);
    void elPink.offsetWidth;

    // ====== RESET GREY ======
    elGray.style.animation = "none";
    elGray.style.transform = "translate(-50%, -50%) translate(0px, 0px) scale(1)";
    elGray.style.zIndex = "10";
    void elGray.offsetWidth;

    // ====== HITUNG TARGET PINK (TIDAK DIUBAH) ======
    const srcRectPink = elPink.getBoundingClientRect();
    const dstRectPink = dot.getBoundingClientRect();
    const srcCxPink = srcRectPink.left + srcRectPink.width / 2;
    const srcCyPink = srcRectPink.top + srcRectPink.height / 2;
    const dstCxPink = dstRectPink.left + dstRectPink.width / 2;
    const dstCyPink = dstRectPink.top + dstRectPink.height / 2;
    const dxPink = dstCxPink - srcCxPink;
    const dyPink = dstCyPink - srcCyPink;

    // ====== HITUNG TARGET GREY (pilar kiri deskripsi) ======
    const srcRectGray = elGray.getBoundingClientRect();
    const descRect = descEl.getBoundingClientRect();

    // Stage-1 finish sebagai pilar tipis 1px di kiri deskripsi
    const PILLAR_START_PX = 1;
    // Mobile: margin lebih besar agar gray lebih ke kanan
    const pillarMargin = isMobile ? 0 : PILLAR_MARGIN_L; // Mobile: 25px, Desktop: 10px
    const dstCxGray = descRect.left - pillarMargin - PILLAR_START_PX / 2;
    const dstCyGray = descRect.top + descRect.height / 2;

    const srcCxGray = srcRectGray.left + srcRectGray.width / 2;
    const srcCyGray = srcRectGray.top + srcRectGray.height / 2;

    const dxGray = dstCxGray - srcCxGray;
    const dyGray = dstCyGray - srcCyGray;

    // ====== VAR ABU-ABU ======
    const H_FULL = Math.round(descRect.height);
    const H_ARRIVAL = Math.max(0, H_FULL - THICKEN_SHRINK_PX); // H - 20 saat TIBA

    // ukuran awal (lingkaran besar)
    elGray.style.setProperty("--gW0", `${srcRectGray.width}px`);
    elGray.style.setProperty("--gH0", `${srcRectGray.height}px`);
    // saat TIBA (Stage-1 akhir): tipis 1px & tinggi H-20
    elGray.style.setProperty("--gW1Start", `${PILLAR_START_PX}px`);
    elGray.style.setProperty("--gHArrival", `${H_ARRIVAL}px`);
    // nilai akhir setelah thicken
    elGray.style.setProperty("--gW1End", `${PILLAR_TARGET_PX}px`); // 20px
    elGray.style.setProperty("--gHFinal", `${H_FULL}px`);          // kembali ke H penuh
    // ukuran sweep akhir - Mobile: lebih lebar untuk sweep lebih ke kanan
    const extraSweep = isMobile ? 20 : EXTRA_SWEEP_PX; // Mobile: +50px, Desktop: +10px
    const gW2 = Math.round(descRect.width + extraSweep);
    elGray.style.setProperty("--gW2", `${gW2}px`);
    // translasi menuju posisi pilar
    elGray.style.setProperty("--gtx", `${dxGray}px`);
    elGray.style.setProperty("--gty", `${dyGray}px`);

    // ====== GREY Stage-1: bergerak + morph → pilar TIPIS 1px (tinggi H-20) ======
    const onGrayStage1End = () => {
      elGray.removeEventListener("animationend", onGrayStage1End);

      // ====== GREY Stage-1.5: THICKEN (match DURATION_POP) ======
      const onGrayThickenEnd = () => {
        elGray.removeEventListener("animationend", onGrayThickenEnd);

        // siapkan SWEEP (mulai dari lebar 20px; sisi kiri tetap nempel)
        const gW1End = PILLAR_TARGET_PX; // 20
        const adjust = (gW2 - gW1End) / 2; // geser pusat ke kanan setengah selisih
        elGray.style.setProperty("--gtxAdjust", `${adjust}px`);

        // posisi pusat akhir sweep (untuk anim gabungan balik)
        const finalX = dxGray + adjust;
        elGray.style.setProperty("--gtxFinal", `${finalX}px`);

        // ====== HOLD sama seperti pink sebelum mulai sweep ======
        setTimeout(() => {
          // ====== GREY Stage-2: SWEEP (match DURATION_STAGE2) ======
          const onGraySweepEnd = () => {
            elGray.removeEventListener("animationend", onGraySweepEnd);

            // jeda kecil sama seperti pink sebelum balik
            setTimeout(() => {
              elGray.style.zIndex = "20";

              // === Gabung: collapse kecil sambil balik ke area foto (match DURATION_RETURN_SMALL) ===
              const onGrayCollapseReturnEnd = () => {
                elGray.removeEventListener("animationend", onGrayCollapseReturnEnd);

                // Grow kembali (besar) di area foto = ukuran awal (match DURATION_GROW_BEHIND)
                const onGrayGrowEnd = () => {
                  elGray.removeEventListener("animationend", onGrayGrowEnd);
                };
                elGray.addEventListener("animationend", onGrayGrowEnd);
                elGray.style.animation = `grayGrowBehind ${DURATION_GROW_BEHIND}ms ${EASE_GROW} forwards`;
              };

              elGray.addEventListener("animationend", onGrayCollapseReturnEnd);
              elGray.style.animation = `grayCollapseAndReturnSmall ${DURATION_RETURN_SMALL}ms ${EASE_RETURN} forwards`;
            }, HOLD_BEFORE_RETURN_MS);
          };

          elGray.addEventListener("animationend", onGraySweepEnd);
          elGray.style.animation = `graySweepRight ${DURATION_STAGE2}ms ${EASE_STAGE1} forwards`;
        }, HOLD_MS); // << sinkron dengan pink
      };

      elGray.addEventListener("animationend", onGrayThickenEnd);
      elGray.style.animation = `grayThickenStick ${DURATION_POP}ms ${EASE_STAGE1} forwards`;
    };
    elGray.addEventListener("animationend", onGrayStage1End);
    elGray.style.animation = `grayMoveMorphStage1 ${DURATION_STAGE1}ms ${EASE_STAGE1} forwards`;

    // ====== PINK PIPELINE - Adjust untuk mobile ======
    // Responsive offset untuk semua breakpoint
    let OFFSET_X_INITIAL;
    if (isMd) {
      OFFSET_X_INITIAL = -280; // MD (768-991px): lebih ke kiri untuk gambar 360px
    } else if (isSm) {
      OFFSET_X_INITIAL = -240; // SM (640-767px): untuk gambar 270px
    } else if (isMobile) {
      OFFSET_X_INITIAL = -185; // Mobile kecil (<640px): untuk gambar 200px
    } else {
      OFFSET_X_INITIAL = -280; // Desktop (≥992px)
    }
    
    const OFFSET_Y_INITIAL = 0;
    elPink.style.setProperty("--tx", `${dxPink + OFFSET_X_INITIAL}px`);
    elPink.style.setProperty("--ty", `${dyPink + OFFSET_Y_INITIAL}px`);
    // Mobile: 0.12 & 0.15 (TIDAK BERUBAH!), Desktop: diperbesar jadi 0.10 & 0.12
    elPink.style.setProperty("--sEnd1", isMobile ? "0.12" : "0.07");
    elPink.style.setProperty("--sEnd2", isMobile ? "0.15" : "0.1");

    const onStage1End = () => {
      elPink.removeEventListener("animationend", onStage1End);
      elPink.style.zIndex = "15";

      const onPopEnd = () => {
        elPink.removeEventListener("animationend", onPopEnd);

        setTimeout(() => {
          // Responsive final position untuk semua breakpoint
          let OFFSET_X_FINAL;
          if (isMd) {
            OFFSET_X_FINAL = -28; // MD: disesuaikan dengan initial offset
          } else if (isSm) {
            OFFSET_X_FINAL = -25; // SM: disesuaikan dengan initial offset
          } else if (isMobile) {
            OFFSET_X_FINAL = -20; // Mobile kecil
          } else {
            OFFSET_X_FINAL = -28; // Desktop
          }
          
          const addX = OFFSET_X_FINAL - OFFSET_X_INITIAL;
          elPink.style.setProperty("--tx2", `${addX}px`);
          elPink.style.setProperty("--ty2", `0px`);

          const onStage2End = () => {
            elPink.removeEventListener("animationend", onStage2End);
            setFinished(true);

            setTimeout(() => {
              elPink.style.zIndex = "20";
              const onReturnSmallEnd = () => {
                elPink.removeEventListener("animationend", onReturnSmallEnd);
                const onGrowEnd = () => elPink.removeEventListener("animationend", onGrowEnd);
                elPink.addEventListener("animationend", onGrowEnd);
                elPink.style.animation = `growBehind ${DURATION_GROW_BEHIND}ms ${EASE_GROW} forwards`;
              };
              elPink.addEventListener("animationend", onReturnSmallEnd);
              elPink.style.animation = `returnHomeSmall ${DURATION_RETURN_SMALL}ms ${EASE_RETURN} forwards`;
            }, HOLD_BEFORE_RETURN_MS);
          };

          elPink.addEventListener("animationend", onStage2End);
          elPink.style.animation = `slideNudge ${DURATION_STAGE2}ms ${EASE_STAGE1} forwards`;
        }, HOLD_MS);
      };

      elPink.addEventListener("animationend", onPopEnd);
      elPink.style.animation = `popRaiseHold ${DURATION_POP}ms ${EASE_STAGE1} forwards`;
    };
    elPink.addEventListener("animationend", onStage1End);
    elPink.style.animation = `moveShrink ${DURATION_STAGE1}ms ${EASE_STAGE1} forwards`;
  };

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      runAnimation();
    }
  };

  useEffect(() => {
    const pinkEl = movingPinkRef.current;
    const grayEl = grayRef.current;
    
    return () => {
      if (pinkEl) pinkEl.style.animation = "none";
      if (grayEl) grayEl.style.animation = "none";
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-white pt-16 pb-5 lg:pb-16 font-jakarta">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-center items-start gap-10 px-6 sm:px-10">
        {/* FOTO + DEKOR - Mobile: seperti semula, Desktop: center vertikal */}
        <div className="flex-shrink-0 flex lg:justify-center justify-end w-full lg:w-1/2 lg:pr-0 -mt-20 lg:mt-0">
          <div
            role="button"
            tabIndex={0}
            onClick={runAnimation}
            onKeyDown={onKey}
            className="relative w-[200px] sm:w-[270px] md:w-[360px] lg:w-[520px] xl:w-[560px] outline-none"
            aria-label="Putar animasi"
          >
            {/* ABU-ABU */}
            <div
              ref={grayRef}
              aria-hidden="true"
              className="
                pointer-events-none absolute z-10
                left-[46%] top-[56%] -translate-x-1/2 -translate-y-1/2
                w-[95%] aspect-square rounded-full
                bg-[#E6E6E6] opacity-95
                will-change: transform, width, height, border-radius
              "
            />
            {/* PINK (tidak diubah) */}
            <div
              ref={movingPinkRef}
              aria-hidden="true"
              className="
                pointer-events-none absolute z-20
                left-[53%] top-[49%] -translate-x-1/2 -translate-y-1/2
                w-[96%] aspect-square rounded-full
                bg-[#EBD1D1] opacity-95
                will-change-transform
              "
            />
            {/* FOTO TIM */}
            <img
              src={teamPhoto}
              alt="Tim CV. Yudha Pratama"
              className="relative z-30 block w-full h-auto object-contain drop-shadow-md select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* TEKS - Mobile: geser sedikit ke atas */}
        <div className="text-[#383737] lg:w-1/2 text-left relative z-40 lg:mt-0 -mt-10">
          {/* Title TENTANG - Plus Jakarta Sans 30px Extra Bold */}
          <h2 
            className="text-[30px] sm:text-[36px] md:text-[42px] font-extrabold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Tentang
          </h2>

          {/* Subtitle CV. YUDHA PRATAMA dengan garis merah di bawah */}
          <div className="mt-1">
            <div className="inline-block">
              <h3 
                className="text-[#A20000] text-[15px] sm:text-[20px] md:text-[24px] font-extrabold tracking-wide inline-flex items-center"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                CV. YUDHA PRATAMA
                <span
                  ref={targetDotRef}
                  className="ml-3 inline-block w-3 h-3 rounded-full opacity-0 pointer-events-none"
                  aria-hidden="true"
                />
              </h3>
              
              {/* Garis merah di bawah text - jarak 5px, lebar 1/2 dari text merah */}
              <div className="mt-[5px] lg:hidden">
                <span className="block h-[3px] bg-[#A20000] rounded-full w-1/2" />
              </div>
            </div>
            
            {/* Garis panjang untuk desktop */}
            <div className="hidden lg:block mt-1">
              <span className="block h-[4px] bg-[#A20000] rounded-full w-full" />
            </div>
          </div>

          {/* wrapper deskripsi (ukur target abu-abu) */}
          <div ref={descRef}>
            <p 
              className="mt-6 text-[10px] sm:text-[13px] md:text-[15px] leading-relaxed text-[#383737]/80"
              style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 400 }}
            >
              CV. Yudha Pratama merupakan hasil pengembangan dari perusahaan
              sebelumnya, Mitra Keluarga Sejahtera (MKS), yang berdiri sejak
              tahun 2008. Seiring dengan perluasan ruang lingkup usaha dan
              peningkatan kebutuhan mitra, perusahaan kemudian melakukan
              pergantian nama menjadi CV. Yudha Pratama pada tanggal 30 April
              2009, yang resmi berdomisili di Kelapadua Tugu, Cimanggis, Depok. ...
            </p>
          </div>

          <button className="mt-6 px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 border border-[#A20000] rounded-full text-[#A20000] text-[11px] sm:text-[13px] md:text-[14px] font-semibold tracking-wide hover:bg-[#A20000] hover:text-white transition-all duration-300 ease-out">
            BACA LEBIH LANJUT
          </button>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [style*="moveShrink"], [style*="popRaiseHold"], [style*="slideNudge"],
          [style*="returnHomeSmall"], [style*="growBehind"],
          [style*="grayMoveMorphStage1"], [style*="grayThickenStick"], [style*="graySweepRight"],
          [style*="grayCollapseAndReturnSmall"], [style*="grayGrowBehind"] { animation: none !important; }
        }

        /* ABU-ABU: Stage-1 → ke kiri deskripsi + morph jadi pilar TIPIS (1px) dgn tinggi H-20 */
        @keyframes grayMoveMorphStage1 {
          from {
            transform: translate(-50%, -50%) translate(0px, 0px);
            width:  var(--gW0);
            height: var(--gH0);
            border-radius: 9999px;
          }
          to {
            transform: translate(-50%, -50%) translate(var(--gtx), var(--gty));
            width:  var(--gW1Start);  /* 1px saat tiba */
            height: var(--gHArrival); /* H - 20px */
            border-radius: calc(var(--gW1Start) / 2);
          }
        }

        /* ABU-ABU: Stage-1.5 → THICKEN MONOTON:
           width 1px → 20px, height (H-20) → H penuh. */
        @keyframes grayThickenStick {
          0% {
            transform-origin: center center;
            transform: translate(-50%, -50%) translate(var(--gtx), var(--gty));
            width:  var(--gW1Start);
            height: var(--gHArrival);
            border-radius: calc(var(--gW1Start) / 2);
          }
          100% {
            transform-origin: center center;
            transform: translate(-50%, -50%) translate(var(--gtx), var(--gty));
            width:  var(--gW1End);     /* 20px — dipertahankan */
            height: var(--gHFinal);    /* H penuh */
            border-radius: calc(var(--gW1End) / 2);
          }
        }

        /* ABU-ABU: Stage-2 → sweep ke kanan hingga selebar deskripsi (+10px) — sinkron dgn pink */
        @keyframes graySweepRight {
          from {
            transform-origin: left center;
            transform: translate(-50%, -50%) translate(var(--gtx), var(--gty));
            width:  var(--gW1End); /* mulai dari 20px */
            height: var(--gHFinal);
            border-radius: calc(var(--gW1End) / 2);
          }
          to {
            transform-origin: left center;
            transform: translate(-50%, -50%) translate(calc(var(--gtx) + var(--gtxAdjust)), var(--gty));
            width:  var(--gW2);  /* = lebar deskripsi + 10px */
            height: var(--gHFinal);
            border-radius: 6px;  /* bar halus */
          }
        }

        /* ABU-ABU: Gabungan — collapse kecil sambil balik ke area foto */
        @keyframes grayCollapseAndReturnSmall {
          from {
            transform: translate(-50%, -50%) translate(var(--gtxFinal), var(--gty)) scale(1);
            width:  var(--gW2);
            height: var(--gHFinal);
            border-radius: 6px;
          }
          to {
            transform: translate(-50%, -50%) translate(0px, 0px) scale(0.09);
            width:  var(--gW0);
            height: var(--gH0);
            border-radius: 9999px;
          }
        }

        /* ABU-ABU: Grow kembali (besar) di area foto */
        @keyframes grayGrowBehind {
          from { transform: translate(-50%, -50%) translate(0px, 0px) scale(0.09); }
          to   { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
        }

        /* PINK (TIDAK DIUBAH) */
        @keyframes moveShrink {
          from { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
          to   { transform: translate(-50%, -50%) translate(var(--tx, 0px), var(--ty, 0px)) scale(var(--sEnd1, 0.07)); }
        }
        @keyframes popRaiseHold {
          0%   { transform: translate(-50%, -50%) translate(var(--tx, 0px), var(--ty, 0px)) scale(var(--sEnd1, 0.07)); }
          100% { transform: translate(-50%, -50%) translate(var(--tx, 0px), var(--ty, 0px)) scale(var(--sEnd2, 0.09)); }
        }
        @keyframes slideNudge {
          from { transform: translate(-50%, -50%) translate(var(--tx, 0px), var(--ty, 0px)) scale(var(--sEnd2, 0.09)); }
          to   { transform: translate(-50%, -50%) translate(calc(var(--tx, 0px) + var(--tx2, 0px)),
                                                            calc(var(--ty, 0px) + var(--ty2, 0px))) scale(var(--sEnd2, 0.09)); }
        }
        @keyframes returnHomeSmall {
          from { transform: translate(-50%, -50%) translate(calc(var(--tx, 0px) + var(--tx2, 0px)),
                                                            calc(var(--ty, 0px) + var(--ty2, 0px))) scale(var(--sEnd2, 0.09)); }
          to   { transform: translate(-50%, -50%) translate(0px, 0px) scale(var(--sEnd2, 0.09)); }
        }
        @keyframes growBehind {
          from { transform: translate(-50%, -50%) translate(0px, 0px) scale(var(--sEnd2, 0.09)); }
          to   { transform: translate(-50%, -50%) translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
}
