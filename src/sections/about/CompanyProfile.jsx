// src/sections/about/CompanyProfile.jsx
import teamPhoto from "../../assets/images/team-photo.png";
import vectorTop from "../../assets/icons/vector_top.png";
import vectorBot from "../../assets/icons/vector_bot.png";

export default function CompanyProfile() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 font-jakarta">
      {/* Vector decorations */}
      <div className="absolute inset-y-0 left-0 w-[220px] sm:w-[300px] md:w-[340px] opacity-25 pointer-events-none">
        <img src={vectorTop} alt="" className="w-full h-full object-cover object-left" aria-hidden="true" />
      </div>
      <div className="absolute inset-y-0 right-0 w-[220px] sm:w-[300px] md:w-[340px] opacity-25 pointer-events-none">
        <img src={vectorBot} alt="" className="w-full h-full object-cover object-right" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-10">
        {/* Team Photo with circular design */}
        <div className="flex-shrink-0 flex lg:justify-center justify-end w-full lg:w-1/2">
          <div className="relative w-[240px] sm:w-[460px] md:w-[520px] lg:w-[560px]">
            {/* Outer circle border */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[96%] sm:w-[98%] aspect-square rounded-full border-[14px] sm:border-[16px] border-[#E5E5E5] z-0" />
            {/* Red circle background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] sm:w-[86%] aspect-square rounded-full bg-[#A20000] z-10" />
            {/* Team photo */}
            <img 
              src={teamPhoto} 
              alt="Tim CV. Yudha Pratama" 
              className="relative z-20 block w-full h-auto object-contain drop-shadow-md" 
              draggable={false} 
            />
          </div>
        </div>

        {/* Company description */}
        <div className="relative text-[#383737] lg:w-1/2 text-left">
          <h2 className="text-[30px] sm:text-[44px] md:text-[48px] font-extrabold leading-tight">
            CV. Yudha Pratama
          </h2>
          
          {/* Red line separator */}
          <div className="mt-4">
            <span className="block h-[4px] bg-[#A20000] rounded-full w-full max-w-[200px]" />
          </div>

          {/* Company description */}
          <p className="mt-6 text-[10px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#383737]/80">
            Perusahaan Kontraktor Yang Berkomitmen Untuk Selalu Aktif Dalam Mendukung Pembangunan Nasional Maupun Swasta. Kami Bergerak Di Bidang Konstruksi, Penyediaan Material (Supplier), Persiapan Lahan, Pekerjaan Galian Tanah, Pembangunan Saluran Air, Pekerjaan Kolam Detensi, Pekerjaan Taman, Serta Penyewaan Alat Berat.
          </p>

          {/* Company motto */}
          <div className="mt-8">
            <h3 className="text-[#A20000] text-[18px] sm:text-[24px] font-bold mb-4">
              MOTTO PERUSAHAAN
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[10px] sm:text-[16px] md:text-[17px]">
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>
                  Mengutamakan Hasil Kerja Berkualitas
                </span> 
                {' '}Sesuai Standar, Kebutuhan, Dan Kepuasan Mitra.
              </li>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>
                  Menjalin Serta Menjaga Kemitraan
                </span> 
                {' '}Yang Profesional, Berintegritas, Dan Berdaya Saing Tinggi.
              </li>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>
                  Melakukan Inovasi Dan Pengembangan Berkelanjutan
                </span> 
                {' '}Untuk Meningkatkan Kinerja Serta Nilai Layanan.
              </li>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '0 4px' }}>
                  Dedikasi Tanpa Henti
                </span> 
                {' '}Untuk Karya Terbaik.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
