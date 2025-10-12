// src/sections/Services.jsx
import bgLayanan from "../../assets/images/bg-layanan.png";
import rumahImg from "../../assets/images/pt-rumah.png";
import buildingIcon from "../../assets/icons/building.svg";
import rockIcon from "../../assets/icons/rock.svg";
import truckIcon from "../../assets/icons/truck.svg";

const services = [
  {
    title: "KONTRAKTOR UMUM",
    description:
      "Melayani Pekerjaan Galian Tanah, Pekerjaan Taman, Kolam Ditensi, Dan Saluran Air Dengan Standar Kualitas Tinggi.",
    tags: [
      "Desain & Konstruksi Taman",
      "Sistem Saluran Air",
      "Pembangunan Kolam",
      "Renovasi & Pemeliharaan",
    ],
    icon: buildingIcon,
    alt: "Ikon bangunan",
  },
  {
    title: "SUPPLIER MATERIAL ALAM",
    description:
      "Menyediakan Pasir (Ayak, Abu Batu, Urug), Batu Belah, Dan Split Dengan Kualitas Teruji Laboratorium.",
    tags: [
      "Pasir Ayak & Abu Batu",
      "Uji Lab Trisakti",
      "Pasir Urug Berkualitas",
      "Batu Belah & Split",
    ],
    icon: rockIcon,
    alt: "Ikon batu",
  },
  {
    title: "PENYEWAAN ALAT BERAT",
    description:
      "Layanan Sewa Mobil Truk, Pickup, Dan Excavator Dengan Operator Berpengalaman Dan Maintenance Rutin.",
    tags: [
      "Excavator Komatsu PC 78",
      "Mobil Truk & Pickup",
      "Operator Berpengalaman",
      "Maintenance Terjamin",
    ],
    icon: truckIcon,
    alt: "Ikon truk",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white font-jakarta">
      {/* === BG STRIP === */}
      <div
        className="
          w-full
          h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[400px]
          bg-center bg-cover
          flex flex-col items-center text-center
          px-6 pt-[12px]
        "
        style={{ backgroundImage: `url(${bgLayanan})` }}
      >
        <h2
          className="text-white font-extrabold"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "40px",
            lineHeight: "48px",
          }}
        >
          BIDANG USAHA
        </h2>
        <div className="mt-2 h-[4px] w-[120px] bg-white/80 rounded-full" />
        <div className="mt-4 max-w-[560px] mx-auto px-4">
          <p
            className="text-white/85 leading-relaxed text-center"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "18px",
              lineHeight: "28px",
              fontWeight: 400,
            }}
          >
            Kami Menyediakan Solusi Konstruksi Lengkap Dengan Kualitas Terbaik
            Dan Layanan Profesional
          </p>
        </div>
      </div>

      {/* === CARD SECTION === */}
      <div
        className="
          mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 relative z-10
          -mt-[120px] sm:-mt-[130px] md:-mt-[180px] lg:-mt-[210px] xl:-mt-[230px]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-black/[0.04] hover:shadow-xl transition-shadow"
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
                    url(${rumahImg})
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
                    src={item.icon}
                    alt={item.alt}
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
                    {item.title}
                  </h3>
                  <p
                    className="text-[#383737]/85 leading-relaxed mx-auto mt-[18px]"
                    style={{
                      fontSize: "clamp(14px, 1.1vw, 15px)",
                      maxWidth: "min(92%, 460px)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {/* === BODY (tags) — dibedakan 320–374 & 768–1023) === */}
              <div className="px-6 pb-7 text-center">
                <div
                  className="services-tags flex flex-wrap justify-center gap-x-[5px] gap-y-[9px] max-w-full"
                  style={{
                    marginTop: "24px",
                  }}
                >
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
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
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Custom media query khusus 320–374 dan 768–1023 */}
                <style>{`
                  /* 320px – 374px */
                  @media (min-width: 320px) and (max-width: 375px) {
                    .services-tags { margin-top: 55px !important; }
                  }
                    /* 375px – 392px */
                  @media (min-width: 375px) and (max-width: 392px) {
                    .services-tags { margin-top: 55px !important; }
                  }
                    /* 375px – 392px */
                  @media (min-width: 499px) and (max-width: 767px) {
                    .services-tags { margin-top: 2px !important; }
                  }
                  /* 768px – 1023px */
                  @media (min-width: 768px) and (max-width: 785px) {
                    .services-tags { margin-top: 105px !important; }
                  }
                    /* 768px – 1023px */
                  @media (min-width: 786px) and (max-width: 918px) {
                    .services-tags { margin-top: 80px !important; }
                  }
                    /* 768px – 1023px */
                  @media (min-width: 919px) and (max-width: 1023px) {
                    .services-tags { margin-top: 36px !important; }
                  }
                `}</style>
              </div>
            </div>
          ))}
        </div>

        <div className="h-14 sm:h-16 md:h-20" />
      </div>
    </section>
  );
}
