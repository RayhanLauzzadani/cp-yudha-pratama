// src/sections/home/Services.jsx
import bgLayanan from "../../assets/images/bg-layanan.png";
import bgLayananMobile from "../../assets/images/bg-layanan_mobile.png";
import layanan1 from "../../assets/images/layanan-1.png";
import layanan2 from "../../assets/images/layanan-2.png";
import layanan3 from "../../assets/images/layanan-3.png";
import buildingIcon from "../../assets/icons/building.svg";
import rockIcon from "../../assets/icons/rock.svg";
import truckIcon from "../../assets/icons/truck.svg";

export default function Services() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image - Mobile & SM (< 768px) */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLayananMobile})` }}
      />

      {/* Background Image - MD & Desktop (≥ 768px) */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgLayanan})` }}
      />

      {/* Gradient overlay: tengah #232121 → samping #434343 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #434343 0%, #232121 50%, #434343 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center pt-5 lg:pt-[11px] px-4">
        {/* Title "BIDANG USAHA" */}
        <h2
          className="text-[#FAFAFA] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[40px] font-extrabold"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Bidang Usaha
        </h2>

        {/* Garis tipis di bawah title */}
        <div className="mt-2 h-[3px] lg:h-[4px] w-[100px] lg:w-[120px] bg-[#FAFAFA]/80 rounded-full" />

        {/* Description */}
        <p
          className="mt-4 text-[#FAFAFA] text-[10px] sm:text-[13px] md:text-[15px] lg:text-[20px] leading-relaxed max-w-[90%] lg:max-w-[600px]"
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: 400,
          }}
        >
          Kami Menyediakan Solusi Konstruksi Lengkap Dengan Kualitas Terbaik Dan
          Layanan Profesional
        </p>

        {/* Global Style untuk semua cards */}
        <style>{`
          /* 320px – 375px */
          @media (min-width: 320px) and (max-width: 327px) {
            .services-tags { margin-top: 90px !important; }
          }
            @media (min-width: 327px) and (max-width: 375px) {
            .services-tags { margin-top: 70px !important; }
          }
          /* 376px – 392px */
          @media (min-width: 376px) and (max-width: 392px) {
            .services-tags { margin-top: 55px !important; }
          }
          /* 393px – 498px */
          @media (min-width: 393px) and (max-width: 498px) {
            .services-tags { margin-top: 40px !important; }
          }
          /* 499px – 767px */
          @media (min-width: 499px) and (max-width: 767px) {
            .services-tags { margin-top: 15px !important; }
          }
          /* 768px – 785px */
          @media (min-width: 768px) and (max-width: 785px) {
            .services-tags { margin-top: 105px !important; }
          }
          /* 786px – 918px */
          @media (min-width: 786px) and (max-width: 918px) {
            .services-tags { margin-top: 100px !important; }
          }
          /* 919px – 1023px */
          @media (min-width: 919px) and (max-width: 1023px) {
            .services-tags { margin-top: 55px !important; }
          }
        `}</style>

        {/* Card Section - 3 Cards Grid */}
        <div
          className="
            mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-8 relative z-10
            mt-12 pb-[70px]
          "
        >
          {/* Grid Container - 1 column mobile, 3 columns desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* CARD 1: KONTRAKTOR UMUM */}
            <div className="flex">
              <div
                className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow w-full flex flex-col"
                style={{ border: "2px solid #DFDFDF" }}
              >
                {/* === HEADER (gambar + gradient) === */}
                <div
                  className="
                  relative
                  h-[240px] sm:h-[250px] md:h-[260px] lg:h-[280px] xl:h-[300px]
                  bg-cover bg-center
                "
                  style={{
                    backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(255,255,255,0) 10%,
                      rgba(255,255,255,0.92) 56%,
                      #fff 100%
                    ),
                    url(${layanan1})
                  `,
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-white z-10" />

                  {/* Lingkaran merah */}
                  <div
                    className="
                    absolute left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    top-[30%] sm:top-[40%] md:top-[38%] lg:top-[30%]
                    w-[72px] h-[72px]
                    sm:w-[80px] sm:h-[80px]
                    md:w-[88px] md:h-[88px]
                    lg:w-[96px] lg:h-[96px]
                    rounded-full bg-[#A20000]
                    flex items-center justify-center shadow-md
                    z-30
                  "
                  >
                    <img
                      src={buildingIcon}
                      alt="Ikon bangunan"
                      className="
                      w-[28px] h-[28px]
                      sm:w-[32px] sm:h-[32px]
                      md:w-[36px] md:h-[36px]
                      lg:w-[40px] lg:h-[40px]
                      filter invert brightness-0
                    "
                    />
                  </div>

                  {/* Judul + deskripsi di bawah lingkaran */}
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2 text-center w-full px-6
                    z-40
                  "
                    style={{
                      top: "calc(42% + 42px)", // anchor teks dari lingkaran
                    }}
                  >
                    <h3
                      className="text-[#383737] font-extrabold tracking-tight"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(18px, 1.6vw, 20px)",
                        lineHeight: "1.3",
                      }}
                    >
                      KONTRAKTOR UMUM
                    </h3>
                    <p
                      className="text-[#383737]/85 leading-relaxed mx-auto mt-[18px]"
                      style={{
                        fontSize: "clamp(14px, 1.1vw, 15px)",
                        maxWidth: "min(92%, 460px)",
                      }}
                    >
                      Melayani Pekerjaan Galian Tanah, Pekerjaan Taman, Kolam
                      Ditensi, Dan Saluran Air Dengan Standar Kualitas Tinggi
                    </p>
                  </div>
                </div>

                {/* === BODY (tags) === */}
                <div className="px-6 pb-7 text-center">
                  <div
                    className="services-tags flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full"
                    style={{
                      marginTop: "24px",
                    }}
                  >
                    <span
                      className="
                      px-[9px] py-[3px]
                      text-[12px]
                      rounded-full
                      bg-[#F6F6F6]
                      text-[#383737]/85
                      border border-[#E5E5E5]
                      font-[400]
                      whitespace-nowrap
                    "
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Desain & Konstruksi Taman
                    </span>
                    <span
                      className="
                      px-[9px] py-[3px]
                      text-[12px]
                      rounded-full
                      bg-[#F6F6F6]
                      text-[#383737]/85
                      border border-[#E5E5E5]
                      font-[400]
                      whitespace-nowrap
                    "
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Sistem Saluran Air
                    </span>
                    <span
                      className="
                      px-[9px] py-[3px]
                      text-[12px]
                      rounded-full
                      bg-[#F6F6F6]
                      text-[#383737]/85
                      border border-[#E5E5E5]
                      font-[400]
                      whitespace-nowrap
                    "
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Pembangunan Kolam
                    </span>
                    <span
                      className="
                      px-[9px] py-[3px]
                      text-[12px]
                      rounded-full
                      bg-[#F6F6F6]
                      text-[#383737]/85
                      border border-[#E5E5E5]
                      font-[400]
                      whitespace-nowrap
                    "
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Renovasi & Pemeliharaan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: SUPPLIER MATERIAL ALAM */}
            <div className="flex">
              <div
                className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow w-full flex flex-col"
                style={{ border: "2px solid #DFDFDF" }}
              >
                {/* === HEADER (gambar + gradient) === */}
                <div
                  className="
                  relative
                  h-[240px] sm:h-[250px] md:h-[260px] lg:h-[280px] xl:h-[300px]
                  bg-cover bg-center
                "
                  style={{
                    backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(255,255,255,0) 10%,
                      rgba(255,255,255,0.92) 56%,
                      #fff 100%
                    ),
                    url(${layanan2})
                  `,
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-white z-10" />

                  {/* Lingkaran merah */}
                  <div
                    className="
                    absolute left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    top-[30%] sm:top-[40%] md:top-[38%] lg:top-[30%]
                    w-[72px] h-[72px]
                    sm:w-[80px] sm:h-[80px]
                    md:w-[88px] md:h-[88px]
                    lg:w-[96px] lg:h-[96px]
                    rounded-full bg-[#A20000]
                    flex items-center justify-center shadow-md
                    z-30
                  "
                  >
                    <img
                      src={rockIcon}
                      alt="Ikon batu"
                      className="
                      w-[28px] h-[28px]
                      sm:w-[32px] sm:h-[32px]
                      md:w-[36px] md:h-[36px]
                      lg:w-[40px] lg:h-[40px]
                      filter invert brightness-0
                    "
                    />
                  </div>

                  {/* Judul + deskripsi */}
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2 text-center w-full px-6
                    z-40
                  "
                    style={{
                      top: "calc(42% + 42px)",
                    }}
                  >
                    <h3
                      className="text-[#383737] font-extrabold tracking-tight"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(18px, 1.6vw, 20px)",
                        lineHeight: "1.3",
                      }}
                    >
                      SUPPLIER MATERIAL ALAM
                    </h3>
                    <p
                      className="text-[#383737]/85 leading-relaxed mx-auto mt-[18px]"
                      style={{
                        fontSize: "clamp(14px, 1.1vw, 15px)",
                        maxWidth: "min(92%, 460px)",
                      }}
                    >
                      Menyediakan Pasir (Ayak, Abu Batu, Urug), Batu Belah, Dan
                      Split Dengan Kualitas Teruji Laboratorium.
                    </p>
                  </div>
                </div>

                {/* === BODY (tags) === */}
                <div className="px-6 pb-7 text-center">
                  <div
                    className="services-tags flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full"
                    style={{
                      marginTop: "24px",
                    }}
                  >
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Pasir Ayak & Abu Batu
                    </span>
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Uji Lab Trisakti
                    </span>
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Pasir Urug Berkualitas
                    </span>
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Batu Belah & Split
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: PENYEWAAN ALAT BERAT */}
            <div className="flex">
              <div
                className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow w-full flex flex-col"
                style={{ border: "2px solid #DFDFDF" }}
              >
                {/* === HEADER (gambar + gradient) === */}
                <div
                  className="
                  relative
                  h-[240px] sm:h-[250px] md:h-[260px] lg:h-[280px] xl:h-[300px]
                  bg-cover bg-center
                "
                  style={{
                    backgroundImage: `
                    linear-gradient(
                      to bottom,
                      rgba(255,255,255,0) 10%,
                      rgba(255,255,255,0.92) 56%,
                      #fff 100%
                    ),
                    url(${layanan3})
                  `,
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-white z-10" />

                  {/* Lingkaran merah */}
                  <div
                    className="
                    absolute left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    top-[30%] sm:top-[40%] md:top-[38%] lg:top-[30%]
                    w-[72px] h-[72px]
                    sm:w-[80px] sm:h-[80px]
                    md:w-[88px] md:h-[88px]
                    lg:w-[96px] lg:h-[96px]
                    rounded-full bg-[#A20000]
                    flex items-center justify-center shadow-md
                    z-30
                  "
                  >
                    <img
                      src={truckIcon}
                      alt="Ikon truk"
                      className="
                      w-[28px] h-[28px]
                      sm:w-[32px] sm:h-[32px]
                      md:w-[36px] md:h-[36px]
                      lg:w-[40px] lg:h-[40px]
                      filter invert brightness-0
                    "
                    />
                  </div>

                  {/* Judul + deskripsi */}
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2 text-center w-full px-6
                    z-40
                  "
                    style={{
                      top: "calc(42% + 42px)",
                    }}
                  >
                    <h3
                      className="text-[#383737] font-extrabold tracking-tight"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(18px, 1.6vw, 20px)",
                        lineHeight: "1.3",
                      }}
                    >
                      PENYEWAAN ALAT BERAT
                    </h3>
                    <p
                      className="text-[#383737]/85 leading-relaxed mx-auto mt-[18px]"
                      style={{
                        fontSize: "clamp(14px, 1.1vw, 15px)",
                        maxWidth: "min(92%, 460px)",
                      }}
                    >
                      Layanan Sewa Mobil Truk, Pickup, Dan Excavator Dengan
                      Operator Berpengalaman Dan Maintenance Rutin.
                    </p>
                  </div>
                </div>

                {/* === BODY (tags) === */}
                <div className="px-6 pb-7 text-center">
                  <div
                    className="services-tags flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full"
                    style={{
                      marginTop: "24px",
                    }}
                  >
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Excavator Komatsu PC 78
                    </span>
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Mobil Truk & Pickup
                    </span>
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Operator Berpengalaman
                    </span>
                    <span
                      className="px-[9px] py-[3px] text-[12px] rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] font-[400] whitespace-nowrap"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      }}
                    >
                      Maintenance Terjamin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
