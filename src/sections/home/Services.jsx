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
    <section className="relative w-full">
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
      <div className="relative z-10 flex flex-col items-center text-center pt-5 lg:pt-[11px] px-4 pb-0">
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

        {/* Card Section - 3 Cards Grid */}
        <div
          className="
            mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-8 relative z-10
            mt-12 pb-4 sm:pb-9 md:pb-9 lg:pb-6 xl:pb-6
          "
        >
          {/* Grid Container - 1 column mobile, 3 columns desktop - EQUAL HEIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* ========== CARD 1: KONTRAKTOR UMUM ========== */}
            <div className="flex h-full">
              <div
                className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow w-full flex flex-col"
                style={{ border: "2px solid #DFDFDF" }}
              >
                {/* === HEADER (gambar + gradient) - DYNAMIC HEIGHT === */}
                <div
                  className="
                  relative
                  min-h-[300px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px] xl:min-h-[380px]
                  bg-cover bg-center
                  flex items-end pb-6
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
                  {/* Lingkaran merah - ADJUSTED SIZE & POSITION */}
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2
                    top-[18%] sm:top-[20%] md:top-[10%] lg:top-[24%]
                    w-[80px] h-[80px]
                    sm:w-[88px] sm:h-[88px]
                    md:w-[88px] md:h-[88px]
                    lg:w-[104px] lg:h-[104px]
                    xl:w-[112px] xl:h-[112px]
                    rounded-full bg-[#A20000]
                    flex items-center justify-center shadow-lg
                    z-30
                  "
                  >
                    <img
                      src={buildingIcon}
                      alt="Ikon bangunan"
                      className="
                      w-[32px] h-[32px]
                      sm:w-[36px] sm:h-[36px]
                      md:w-[40px] md:h-[40px]
                      lg:w-[44px] lg:h-[44px]
                      xl:w-[48px] xl:h-[48px]
                      filter invert brightness-0
                    "
                    />
                  </div>

                  {/* Judul + deskripsi - RELATIVE FLOW */}
                  <div className="w-full px-6 text-center relative z-40 mt-auto pt-[80px] sm:pt-[90px]">
                    <h3
                      className="text-[#383737] font-extrabold tracking-tight"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(17px, 1.6vw, 20px)",
                        lineHeight: "1.3",
                      }}
                    >
                      KONTRAKTOR UMUM
                    </h3>
                    <p
                      className="text-[#383737]/85 leading-[1.4] mx-auto mt-3"
                      style={{
                        fontSize: "clamp(13px, 1.1vw, 15px)",
                        maxWidth: "min(95%, 460px)",
                      }}
                    >
                      Melayani Pekerjaan Galian Tanah, Pekerjaan Taman, Kolam Ditensi, Pembuatan Jalan, Pekerjaan Timbunan, Dan Saluran Air Dengan Standar Kualitas Tinggi
                    </p>
                  </div>
                </div>

                {/* === BODY (tags) === */}
                <div className="px-6 pb-7 pt-6 text-center">
                  <div className="flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full">
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

            {/* ========== CARD 2: SUPPLIER MATERIAL ALAM ========== */}
            <div className="flex h-full">
              <div
                className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow w-full flex flex-col"
                style={{ border: "2px solid #DFDFDF" }}
              >
                {/* === HEADER (gambar + gradient) - DYNAMIC HEIGHT === */}
                <div
                  className="
                  relative
                  min-h-[300px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px] xl:min-h-[380px]
                  bg-cover bg-center
                  flex items-end pb-6
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
                  {/* Lingkaran merah - ADJUSTED SIZE & POSITION */}
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2
                    top-[18%] sm:top-[20%] md:top-[10%] lg:top-[24%]
                    w-[80px] h-[80px]
                    sm:w-[88px] sm:h-[88px]
                    md:w-[88px] md:h-[88px]
                    lg:w-[104px] lg:h-[104px]
                    xl:w-[112px] xl:h-[112px]
                    rounded-full bg-[#A20000]
                    flex items-center justify-center shadow-lg
                    z-30
                  "
                  >
                    <img
                      src={rockIcon}
                      alt="Ikon batu"
                      className="
                      w-[32px] h-[32px]
                      sm:w-[36px] sm:h-[36px]
                      md:w-[40px] md:h-[40px]
                      lg:w-[44px] lg:h-[44px]
                      xl:w-[48px] xl:h-[48px]
                      filter invert brightness-0
                    "
                    />
                  </div>

                  {/* Judul + deskripsi - RELATIVE FLOW */}
                  <div className="w-full px-6 text-center relative z-40 mt-auto pt-[80px] sm:pt-[90px]">
                    <h3
                      className="text-[#383737] font-extrabold tracking-tight"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(17px, 1.6vw, 20px)",
                        lineHeight: "1.3",
                      }}
                    >
                      SUPPLIER MATERIAL ALAM
                    </h3>
                    <p
                      className="text-[#383737]/85 leading-[1.4] mx-auto mt-3"
                      style={{
                        fontSize: "clamp(13px, 1.1vw, 15px)",
                        maxWidth: "min(95%, 460px)",
                      }}
                    >
                      Menyediakan Pasir (Ayak, Abu Batu, Urug), Batu Belah, Dan Split Dengan Kualitas Teruji Laboratorium.
                    </p>
                  </div>
                </div>

                {/* === BODY (tags) === */}
                <div className="px-6 pb-7 pt-6 text-center">
                  <div className="flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full">
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

            {/* ========== CARD 3: PENYEWAAN ALAT BERAT ========== */}
            <div className="flex h-full">
              <div
                className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow w-full flex flex-col"
                style={{ border: "2px solid #DFDFDF" }}
              >
                {/* === HEADER (gambar + gradient) - DYNAMIC HEIGHT === */}
                <div
                  className="
                  relative
                  min-h-[300px] sm:min-h-[320px] md:min-h-[340px] lg:min-h-[360px] xl:min-h-[380px]
                  bg-cover bg-center
                  flex items-end pb-6
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
                  {/* Lingkaran merah - ADJUSTED SIZE & POSITION */}
                  <div
                    className="
                    absolute left-1/2 -translate-x-1/2
                    top-[18%] sm:top-[20%] md:top-[10%] lg:top-[24%]
                    w-[80px] h-[80px]
                    sm:w-[88px] sm:h-[88px]
                    md:w-[88px] md:h-[88px]
                    lg:w-[104px] lg:h-[104px]
                    xl:w-[112px] xl:h-[112px]
                    rounded-full bg-[#A20000]
                    flex items-center justify-center shadow-lg
                    z-30
                  "
                  >
                    <img
                      src={truckIcon}
                      alt="Ikon truk"
                      className="
                      w-[32px] h-[32px]
                      sm:w-[36px] sm:h-[36px]
                      md:w-[40px] md:h-[40px]
                      lg:w-[44px] lg:h-[44px]
                      xl:w-[48px] xl:h-[48px]
                      filter invert brightness-0
                    "
                    />
                  </div>

                  {/* Judul + deskripsi - RELATIVE FLOW */}
                  <div className="w-full px-6 text-center relative z-40 mt-auto pt-[80px] sm:pt-[90px]">
                    <h3
                      className="text-[#383737] font-extrabold tracking-tight"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(17px, 1.6vw, 20px)",
                        lineHeight: "1.3",
                      }}
                    >
                      PENYEWAAN ALAT BERAT
                    </h3>
                    <p
                      className="text-[#383737]/85 leading-[1.4] mx-auto mt-3"
                      style={{
                        fontSize: "clamp(13px, 1.1vw, 15px)",
                        maxWidth: "min(95%, 460px)",
                      }}
                    >
                      Layanan Sewa Mobil Truk, Pickup, Dan Excavator Dengan Operator Berpengalaman Dan Maintenance Rutin.
                    </p>
                  </div>
                </div>

                {/* === BODY (tags) === */}
                <div className="px-6 pb-7 pt-6 text-center">
                  <div className="flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full">
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
