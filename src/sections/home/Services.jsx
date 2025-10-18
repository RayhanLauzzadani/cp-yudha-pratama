// src/sections/home/Services.jsx
import bgLayanan from "../../assets/images/bg-layanan.png";
import bgLayananMobile from "../../assets/images/bg-layanan_mobile.png";
import layanan1 from "../../assets/images/layanan-1.png";
import layanan2 from "../../assets/images/layanan-2.png";
import layanan3 from "../../assets/images/layanan-3.png";
import buildingIcon from "../../assets/icons/building.svg";
import rockIcon from "../../assets/icons/rock.svg";
import truckIcon from "../../assets/icons/truck.svg";

// ========== CLEAN SERVICE CARD COMPONENT ==========
const ServiceCard = ({ image, icon, iconAlt, title, description, tags }) => (
  <div className="bg-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-[#DFDFDF] flex flex-col h-full">
    
    {/* Image Header with Gradient Overlay */}
    <div className="relative h-[200px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
      
      {/* Icon Circle */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#A20000] flex items-center justify-center shadow-lg z-10">
        <img
          src={icon}
          alt={iconAlt}
          className="w-9 h-9 md:w-11 md:h-11 brightness-0 invert"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="flex flex-col flex-grow px-6 pt-4 pb-6">
      {/* Title */}
      <h3 className="text-[#383737] font-extrabold text-lg md:text-xl text-center mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#383737]/85 text-sm md:text-base leading-relaxed text-center mb-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-xs rounded-full bg-[#F6F6F6] text-[#383737]/85 border border-[#E5E5E5] whitespace-nowrap hover:bg-[#ECECEC] transition-colors"
            style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// ========== SERVICES DATA ==========
const SERVICES_DATA = [
  {
    image: layanan1,
    icon: buildingIcon,
    iconAlt: "Ikon bangunan",
    title: "KONTRAKTOR UMUM",
    description:
      "Melayani Pekerjaan Galian Tanah, Pekerjaan Taman, Kolam Ditensi, Pembuatan Jalan, Pekerjaan Timbunan, Dan Saluran Air Dengan Standar Kualitas Tinggi",
    tags: [
      "Desain & Konstruksi Taman",
      "Sistem Saluran Air",
      "Pembangunan Kolam",
      "Renovasi & Pemeliharaan",
    ],
  },
  {
    image: layanan2,
    icon: rockIcon,
    iconAlt: "Ikon batu",
    title: "SUPPLIER MATERIAL ALAM",
    description:
      "Menyediakan Pasir (Ayak, Abu Batu, Urug), Batu Belah, Split Dengan Kualitas Teruji Laboratorium, Dan Masih Banyak Lagi.",
    tags: [
      "Pasir Ayak & Abu Batu",
      "Uji Lab Universitas Terkemuka",
      "Pasir Urug Berkualitas",
      "Batu Belah & Split",
    ],
  },
  {
    image: layanan3,
    icon: truckIcon,
    iconAlt: "Ikon truk",
    title: "PENYEWAAN ALAT BERAT",
    description:
      "Layanan Sewa Mobil Truk, Pickup, Dan Excavator Dengan Operator Berpengalaman Dan Maintenance Rutin.",
    tags: [
      "Excavator PC 78, PC 100, PC 200",
      "Mobil Truk & Pickup",
      "Operator Berpengalaman",
      "Maintenance Terjamin",
    ],
  },
];

// ========== MAIN COMPONENT ==========
export default function Services() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background - Mobile */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLayananMobile})` }}
      />

      {/* Background - Desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLayanan})` }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #434343 0%, #232121 50%, #434343 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-[#FAFAFA] text-3xl sm:text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Bidang Usaha
            </h2>
            
            <div className="mt-3 h-1 w-24 md:w-32 bg-[#FAFAFA]/80 rounded-full mx-auto" />
            
            <p
              className="mt-5 text-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
            >
              Kami Menyediakan Solusi Konstruksi Lengkap Dengan Kualitas Terbaik Dan Layanan Profesional
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
