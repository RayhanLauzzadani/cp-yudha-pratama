// src/components/sections/Layanan.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// === Import aset background ===
import bgFull from "../../assets/images/layanan/bg-layanan-full.png";
import bgMobile from "../../assets/images/layanan/bg-layanan-mobile.png";

// === Import gambar layanan ===
import layanan1Desktop from "../../assets/images/layanan/layanan_1.png";
import layanan1Mobile from "../../assets/images/layanan/layanan_1-mobile.png";
import layanan2Desktop from "../../assets/images/layanan/layanan_2.png";
import layanan2Mobile from "../../assets/images/layanan/layanan_2-mobile.png";
import layanan3Desktop from "../../assets/images/layanan/layanan_3.png";
import layanan3Mobile from "../../assets/images/layanan/layanan_3-mobile.png";

// === Import icon ===
import buildingIcon from "../../assets/icons/building.svg";
import rockIcon from "../../assets/icons/rock.svg";
import truckIcon from "../../assets/icons/truck.svg";

export default function Layanan() {
  const [setBgImage] = useState(bgFull);

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
    <section className="relative min-h-screen pb-12 md:pb-16 lg:pb-20">
      {/* Background Mobile & MD */}
      <div
        className="lg:hidden absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bgMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Background Desktop (LG+) */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bgFull})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Container dengan max-width 1440px */}
      <div className="relative z-10 mx-auto max-w-[1200px] lg:max-w-[1440px]">
        {/* Header - Spacer untuk navbar */}
        <div className="h-16" />
        
        {/* Text Section - Dengan padding horizontal */}
        <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-center px-4 sm:px-6">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Bidang Usaha
          </h2>
          
          <div className="h-1 w-24 md:w-32 bg-white/80 rounded-full mx-auto mb-5" />
          
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
          >
            Kami Menyediakan Solusi Konstruksi Lengkap Dengan Kualitas Terbaik Dan Layanan Profesional
          </p>
        </div>

        {/* ========== LAYANAN 1: KONTRAKTOR UMUM (KIRI) ========== */}
        <div className="mt-7 md:mt-10 lg:mt-16">
          {/* Mobile & MD */}
          <div className="lg:hidden">
            <div className="relative w-[250px] md:w-[370px]">
              <img
                src={layanan1Mobile}
                alt="Kontraktor Umum"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 left-[15%] sm:left-[8%] md:left-[20%] -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10 border-2 border-white">
                <img src={buildingIcon} alt="Ikon bangunan" className="w-5 h-5 brightness-0 invert" />
              </div>
            </div>

            <div className="mt-6 md:mt-8 px-4">
              <h3 
                className="text-[#FAFAFA] font-extrabold mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', lineHeight: '1.3' }}
              >
                KONTRAKTOR UMUM
              </h3>

              <div className="bg-[#4C4C4C]/50 backdrop-blur-sm p-4 md:p-5" style={{ borderRadius: '15px' }}>
                <p 
                  className="text-[#FAFAFA] leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 400 }}
                >
                  Menyediakan persiapan lahan, pembangunan saluran air, pekerjaan kolam detensi, pekerjaan galian tanah, serta pembangunan pembuatan jalan.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop LG+ */}
          <div className="hidden lg:flex items-center gap-[62px]">
            {/* Gambar Kiri - Rounded + Border di 2XL */}
            <div className="relative shrink-0">
              <img 
                src={layanan1Desktop} 
                alt="Kontraktor Umum" 
                className="w-[450px] xl:w-[500px] h-auto object-cover 2xl:rounded-3xl 2xl:border-2 2xl:border-white" 
                loading="lazy" 
              />
              
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10 border-2 border-white">
                <img src={buildingIcon} alt="Ikon bangunan" className="w-7 h-7 xl:w-9 xl:h-9 brightness-0 invert" />
              </div>
            </div>

            {/* Text Kanan */}
            <div className="flex-1 pr-6">
              <h3 
                className="text-[#FAFAFA] font-extrabold mb-4 text-2xl xl:text-3xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                KONTRAKTOR UMUM
              </h3>

              <div className="bg-[#4C4C4C]/60 backdrop-blur-sm p-6 xl:p-7 rounded-2xl">
                <p 
                  className="text-[#FAFAFA] leading-relaxed text-lg xl:text-xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400 }}
                >
                  Menyediakan persiapan lahan, pembangunan saluran air, pekerjaan kolam detensi, pekerjaan galian tanah, serta pembangunan pembuatan jalan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== LAYANAN 2: SUPPLIER MATERIAL ALAM (KANAN) ========== */}
        <div className="mt-7 md:mt-10 lg:mt-16">
          {/* Mobile & MD */}
          <div className="lg:hidden">
            <div className="relative flex justify-end">
              <div className="w-[250px] md:w-[370px] relative">
                <img src={layanan2Mobile} alt="Supplier Material Alam" className="w-full h-auto object-cover" loading="lazy" />
                
                <div className="absolute bottom-0 right-[15%] sm:right-[8%] md:right-[20%] translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10 border-2 border-white">
                  <img src={rockIcon} alt="Ikon batu" className="w-5 h-5 brightness-0 invert" />
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 px-4">
              <h3 
                className="text-[#FAFAFA] font-extrabold mb-3 text-right"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', lineHeight: '1.3' }}
              >
                SUPPLIER MATERIAL ALAM
              </h3>

              <div className="bg-[#4C4C4C]/50 backdrop-blur-sm p-4 md:p-5" style={{ borderRadius: '15px' }}>
                <p 
                  className="text-[#FAFAFA] leading-relaxed mb-3 md:mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 400 }}
                >
                  Menyediakan berbagai material konstruksi berbasis sumber daya alam dengan kualitas terjamin untuk mendukung kelancaran proyek pembangunan.
                </p>

                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {['Pasir Cuci', 'Pasir Urug', 'Pasir Abu Batu', 'Batu Belah', 'Split', 'Bahan Material Lainnya'].map((tag) => (
                    <span key={tag} className="border border-[#4C4C4C] text-white/50" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px', paddingTop: '3.5px', paddingBottom: '3.5px', paddingLeft: '11px', paddingRight: '11px', borderRadius: '45px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to="/dokumen/uji-lab" className="inline-flex items-center gap-2 bg-[#782525] text-white hover:bg-[#5f1e1e] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', padding: '10px 20px', borderRadius: '15px' }}>
                  Bukti Uji Lab
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop LG+ */}
          <div className="hidden lg:flex items-center gap-[62px]">
            {/* Text Kiri */}
            <div className="flex-1 pl-6">
              <h3 
                className="text-[#FAFAFA] font-extrabold mb-4 text-2xl xl:text-3xl text-right"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                SUPPLIER MATERIAL ALAM
              </h3>

              <div className="bg-[#4C4C4C]/60 backdrop-blur-sm p-6 xl:p-7 rounded-2xl">
                <p 
                  className="text-[#FAFAFA] leading-relaxed text-lg xl:text-xl mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400 }}
                >
                  Menyediakan berbagai material konstruksi berbasis sumber daya alam dengan kualitas terjamin untuk mendukung kelancaran proyek pembangunan.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['Pasir Cuci', 'Pasir Urug', 'Pasir Abu Batu', 'Batu Belah', 'Split', 'Bahan Material Lainnya'].map((tag) => (
                    <span key={tag} className="border border-[#4C4C4C] text-white/50 text-sm xl:text-base" style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '12px', paddingRight: '12px', borderRadius: '45px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to="/dokumen/uji-lab" className="inline-flex items-center gap-2 bg-[#782525] text-white hover:bg-[#5f1e1e] transition-colors px-5 py-2.5 rounded-xl text-base xl:text-lg">
                  Bukti Uji Lab
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 7h10v10" />
                    <path d="M7 17L17 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Gambar Kanan - Rounded + Border di 2XL */}
            <div className="relative shrink-0">
              <img 
                src={layanan2Desktop} 
                alt="Supplier Material Alam" 
                className="w-[450px] xl:w-[500px] h-auto object-cover 2xl:rounded-3xl 2xl:border-2 2xl:border-white" 
                loading="lazy" 
              />
              
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10 border-2 border-white">
                <img src={rockIcon} alt="Ikon batu" className="w-7 h-7 xl:w-9 xl:h-9 brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>

        {/* ========== LAYANAN 3: HEAVY EQUIPMENT RENTAL (KIRI) ========== */}
        <div className="mt-7 md:mt-10 lg:mt-16 pb-8">
          {/* Mobile & MD */}
          <div className="lg:hidden">
            <div className="relative w-[250px] md:w-[370px]">
              <img src={layanan3Mobile} alt="Heavy Equipment Rental" className="w-full h-auto object-cover" loading="lazy" />
              
              <div className="absolute bottom-0 left-[15%] sm:left-[8%] md:left-[20%] -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10 border-2 border-white">
                <img src={truckIcon} alt="Ikon truk" className="w-5 h-5 brightness-0 invert" />
              </div>
            </div>

            <div className="mt-6 md:mt-8 px-4">
              <h3 
                className="text-[#FAFAFA] font-extrabold mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', lineHeight: '1.3' }}
              >
                HEAVY EQUIPMENT RENTAL
              </h3>

              <div className="bg-[#4C4C4C]/50 backdrop-blur-sm p-4 md:p-5" style={{ borderRadius: '15px' }}>
                <p 
                  className="text-[#FAFAFA] leading-relaxed mb-3 md:mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '15px', fontWeight: 400 }}
                >
                  Kami menyediakan layanan penyewaan alat berat yang handal dan terawat untuk mendukung kelancaran proyek konstruksi maupun infrastruktur. Dengan armada yang lengkap, harga kompetitif, serta pelayanan yang profesional, kami siap menjadi mitra terpercaya bagi setiap kebutuhan proyek Anda.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Excavator', 'Truk', 'Pickup', 'Peralatan Pendukung Lainnya'].map((tag) => (
                    <span key={tag} className="border border-[#4C4C4C] text-white/50" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px', paddingTop: '3.5px', paddingBottom: '3.5px', paddingLeft: '11px', paddingRight: '11px', borderRadius: '45px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop LG+ */}
          <div className="hidden lg:flex items-center gap-[62px]">
            {/* Gambar Kiri - Rounded + Border di 2XL */}
            <div className="relative shrink-0">
              <img 
                src={layanan3Desktop} 
                alt="Heavy Equipment Rental" 
                className="w-[450px] xl:w-[500px] h-auto object-cover 2xl:rounded-3xl 2xl:border-2 2xl:border-white" 
                loading="lazy" 
              />
              
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10 border-2 border-white">
                <img src={truckIcon} alt="Ikon truk" className="w-7 h-7 xl:w-9 xl:h-9 brightness-0 invert" />
              </div>
            </div>

            {/* Text Kanan */}
            <div className="flex-1 pr-6">
              <h3 
                className="text-[#FAFAFA] font-extrabold mb-4 text-2xl xl:text-3xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                HEAVY EQUIPMENT RENTAL
              </h3>

              <div className="bg-[#4C4C4C]/60 backdrop-blur-sm p-6 xl:p-7 rounded-2xl">
                <p 
                  className="text-[#FAFAFA] leading-relaxed text-lg xl:text-xl mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400 }}
                >
                  Kami menyediakan layanan penyewaan alat berat yang handal dan terawat untuk mendukung kelancaran proyek konstruksi maupun infrastruktur. Dengan armada yang lengkap, harga kompetitif, serta pelayanan yang profesional, kami siap menjadi mitra terpercaya bagi setiap kebutuhan proyek Anda.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Excavator', 'Truk', 'Pickup', 'Peralatan Pendukung Lainnya'].map((tag) => (
                    <span key={tag} className="border border-[#4C4C4C] text-white/50 text-sm xl:text-base" style={{ paddingTop: '4px', paddingBottom: '4px', paddingLeft: '12px', paddingRight: '12px', borderRadius: '45px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
