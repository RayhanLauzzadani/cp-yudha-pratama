// src/components/sections/Layanan.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// === Import aset (desktop) ===
import bgFull from "../../assets/images/layanan/bg-layanan-full.png";
import bgMobile from "../../assets/images/layanan/bg-layanan-mobile.png";
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
  const [bgImage, setBgImage] = useState(bgFull);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImage(bgMobile);
      } else {
        setBgImage(bgFull);
      }
    };

    handleResize(); // jalankan sekali saat mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 min-[992px]:py-20">
        {/* Header */}
        <div className="text-center mb-8 min-[320px]:mt-7 min-[992px]:mt-4 min-[992px]:mb-10 md:mt-10">
          <div className="relative inline-block">
            {/* Teks bayangan (hitam di belakang) */}
            <h2 className="absolute top-[3px] text-2xl sm:text-3xl font-extrabold text-black transform -skew-x-1">
              Bidang Usaha
            </h2>
            {/* Teks utama (putih di depan) */}
            <h2 className="relative text-2xl sm:text-3xl font-extrabold text-white">
              Bidang Usaha
            </h2>
          </div>
          <div className="mx-auto mt-4 mb-4 h-[3px] w-16  bg-white"></div>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            {/* Versi untuk layar >400px */}
            <span className="hidden min-[401px]:block">
              Kami Menyediakan Solusi Konstruksi Lengkap Dengan Kualitas
              <br />
              Terbaik Dan Layanan Profesional
            </span>

            {/* Versi untuk layar <=400px */}
            <span className="block min-[401px]:hidden">
              Kami Menyediakan Solusi Konstruksi Lengkap
              <br />
              Dengan Kualitas Terbaik Dan Layanan Profesional
            </span>
          </p>

          {/* Konten 3 row × 2 kolom */}
          <div className="mt-8 grid grid-cols-12 gap-6">
            {/* === Baris 1 === */}
            <div className="col-span-12 xl:col-span-4 xl:[margin-left:calc((100vw-1200px)/-1)] ">
              <img
                src={img1}
                alt="Kontraktor Umum"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            {/* pertahankan proporsi desktop seperti kode kamu (6/12) */}
            <div className="col-span-12 xl:col-span-8 flex flex-col justify-center xl:pl-8">
              <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-wide uppercase text-left">
                KONTRAKTOR UMUM
              </h3>

              {/* Bubble deskripsi (punya background) */}
              <div className="mt-3 inline-block max-w-[760px] rounded-2xl bg-white/10 px-6 py-4 text-white/80 text-left">
                Menyediakan persiapan lahan, pembangunan saluran air, pekerjaan
                kolam detensi, pekerjaan galian tanah, serta
                pembangunan/pembuatan jalan.
              </div>
            </div>

            {/* === Baris 2 === */}
            {/* di mobile: tampilkan gambar dulu → order-1; di xl kembali normal */}
            <div className="col-span-12 xl:col-span-8 flex flex-col justify-center xl:pl-8">
              <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-wide uppercase text-right">
                SUPPLIER BAHAN ALAM
              </h3>
              <div className="mt-3 inline-block max-w-[760px] rounded-2xl bg-white/10 px-6 py-4 text-white/80 text-justify">
                Menyediakan berbagai material konstruksi berbasis sumber daya
                alam dengan kualitas terjamin untuk mendukung kelancaran proyek
                pembangunan.
              </div>
            </div>
            <div className="col-span-12 xl:col-span-4 xl:[margin-right:calc((100vw-1175px)/-2)]">
              <img
                src={img2}
                alt="Kontraktor Umum"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* === Baris 3 === */}
            <div className="col-span-12 xl:col-span-4 xl:[margin-left:calc((100vw-1200px)/-1)]">
              <img
                src={img3}
                alt="Kontraktor Umum"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <div className="col-span-12 xl:col-span-8 flex flex-col justify-center xl:pl-8">
              <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-wide uppercase text-left">
                HEAVY EQUIPMENT RENTAL
              </h3>

              {/* Bubble deskripsi (punya background) */}
              <div className="mt-3 inline-block max-w-[760px] rounded-2xl bg-white/10 px-6 py-4 text-white/80 text-justify">
                Kami menyediakan layanan penyewaan alat berat yang handal dan
                terawat untuk mendukung kelancaran proyek konstruksi maupun
                infrastruktur. Dengan armada yang lengkap, harga kompetitif,
                serta pelayanan yang profesional, kami siap menjadi mitra
                terpercaya bagi setiap kebutuhan proyek Anda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
