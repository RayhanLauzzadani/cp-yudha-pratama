// src/components/sections/Layanan.jsx
import { Link } from "react-router-dom";

// === Import aset (desktop) ===
import bgFull from "../../assets/images/layanan/bg-layanan-full.png";
import img1 from "../../assets/images/layanan/layanan_1.png";
import img2 from "../../assets/images/layanan/layanan_2.png";
import img3 from "../../assets/images/layanan/layanan_3.png";
import ic1 from "../../assets/images/layanan/icon_1.png";
import ic2 from "../../assets/images/layanan/icon_2.png";
import ic3 from "../../assets/images/layanan/icon_3.png";

// === Import aset (mobile) ===
import img1m from "../../assets/images/layanan/layanan_1-mobile.png";
import img2m from "../../assets/images/layanan/layanan_2-mobile.png";
import img3m from "../../assets/images/layanan/layanan_3-mobile.png";
import ic1m from "../../assets/images/layanan/icon_1-mobile.png";
import ic2m from "../../assets/images/layanan/icon_2-mobile.png";
import ic3m from "../../assets/images/layanan/icon_3-mobile.png";

const SERVICES = [
  {
    id: 1,
    title: "KONTRAKTOR UMUM",
    desc: "Menyediakan persiapan lahan, pembangunan saluran air, pekerjaan kolom detensi, pekerjaan galian tanah, serta pembangunan/pembuatan jalan.",
    img: { desktop: img1, mobile: img1m, alt: "Kontraktor umum" },
    icon: { desktop: ic1, mobile: ic1m, alt: "Ikon kontraktor" },
    cta: null,
  },
  {
    id: 2,
    title: "SUPPLIER BAHAN ALAM",
    desc: "Menyediakan berbagai material konstruksi berbasis sumber daya alam dengan kualitas terjamin untuk mendukung kelancaran proyek pembangunan.",
    chips: [
      "Pasir Cuci",
      "Pasir Urug",
      "Pasir Abu Batu",
      "Pasir Ayak",
      "Batu Belah",
      "Split",
      "Bahan Material Lainnya",
    ],
    img: { desktop: img2, mobile: img2m, alt: "Supplier bahan alam" },
    icon: { desktop: ic2, mobile: ic2m, alt: "Ikon supplier" },
    cta: { label: "Bukti Uji Lab", to: "/dokumen/uji-lab" },
  },
  {
    id: 3,
    title: "HEAVY EQUIPMENT RENTAL",
    desc: "Kami menyediakan layanan penyewaan alat berat yang handal dan terawat untuk mendukung kelancaran proyek konstruksi maupun infrastruktur. Dengan armada yang lengkap, harga kompetitif, serta pelayanan yang profesional, kami siap menjadi mitra terpercaya bagi setiap kebutuhan proyek Anda.",
    chips: ["Truk", "Excavator", "Pickup", "Peralatan Pendukung Lainnya"],
    img: { desktop: img3, mobile: img3m, alt: "Sewa alat berat" },
    icon: { desktop: ic3, mobile: ic3m, alt: "Ikon rental alat berat" },
    cta: null,
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
      {children}
    </span>
  );
}

export default function Layanan() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bgFull})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 min-[992px]:py-20">
        {/* Header */}
        <div className="text-center mb-8 min-[992px]:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Bidang Usaha
          </h2>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Kami Menyediakan Solusi Konstruksi Lengkap Dengan Kualitas Terbaik
            Dan Layanan Profesional
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10 min-[992px]:space-y-16">
          {SERVICES.map((s, idx) => {
            const zigRight = idx % 2 === 1; // baris 2 gambar di kanan
            return (
              <article
                key={s.id}
                className="grid gap-5 min-[992px]:grid-cols-12 min-[992px]:items-center"
              >
                {/* IMG */}
                <div
                  className={[
                    "relative min-[992px]:col-span-6",
                    zigRight ? "min-[992px]:order-3" : "min-[992px]:order-1",
                  ].join(" ")}
                >
                  <div>
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcSet={s.img.desktop}
                      />
                      <img
                        src={s.img.mobile}
                        alt={s.img.alt}
                        className="h-[190px] sm:h-[240px] min-[992px]:h-[280px] object-cover"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  {/* Icon bulat merah menempel di tepi antara gambar & teks */}
                  <div
                    className={[
                      "hidden min-[992px]:flex absolute top-1/2 -translate-y-1/2 z-10",
                      zigRight ? "-left-9" : "-right-9",
                    ].join(" ")}
                    aria-hidden
                  >
                    <picture>
                      <source
                        media="(min-width: 992px)"
                        srcSet={s.icon.desktop}
                      />
                      <img
                        src={s.icon.mobile}
                        alt={s.icon.alt}
                        className="h-14 w-14"
                      />
                    </picture>
                  </div>
                </div>

                {/* TEXT: Judul di luar card + card konten */}
                <div
                  className={[
                    "min-[992px]:col-span-6",
                    zigRight ? "min-[992px]:order-1" : "min-[992px]:order-2",
                  ].join(" ")}
                >
                  {/* === Judul di luar kotak abu-abu === */}
                  <div className="mb-3 sm:mb-4">
                    <h3
                      className={`text-base sm:text-lg font-extrabold tracking-wide text-white ${
                        zigRight ? "text-right" : ""
                      }`}
                    >
                      {s.title}
                    </h3>

                  </div>

                  {/* === Kotak abu-abu (tanpa judul di dalamnya) === */}
                  <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-4 sm:p-5 text-white shadow-[0_8px_30px_rgba(0,0,0,.25)]">
                    <p className="text-sm sm:text-[15px] text-white/85">
                      {s.desc}
                    </p>

                    {/* Chips */}
                    {s.chips?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.chips.map((c) => (
                          <Chip key={c}>{c}</Chip>
                        ))}
                      </div>
                    )}

                    {/* CTA (opsional) */}
                    {s.cta && (
                      <div className="mt-4">
                        <Link
                          to={s.cta.to}
                          className="inline-flex items-center rounded-full bg-[#A20000] px-4 py-2 text-xs font-bold text-white hover:bg-[#8C0000] transition"
                        >
                          {s.cta.label}
                          <svg
                            className="ml-2 h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
