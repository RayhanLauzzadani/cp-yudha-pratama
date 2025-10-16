// src/sections/about/CompanyProfile.jsx
import React from "react";
import teamPhoto from "../../assets/images/team-photo.png";
import vectorRight from "../../assets/icons/vector_right.png";
import vectorLeft from "../../assets/icons/vector_left.png";

export default function CompanyProfile() {
  return (
    <section className="relative w-full bg-white pb-6 sm:py-10 lg:py-12 overflow-hidden">
      {/* Vector kanan atas */}
      <img
        src={vectorRight}
        alt="Vector Right"
        className="absolute top-[-10px] right-[-5px] w-[150px] sm:w-[140px] lg:w-[280px] xl:w-[320px] h-auto select-none pointer-events-none opacity-30"
        draggable="false"
      />

      {/* Vector kiri bawah */}
      <img
        src={vectorLeft}
        alt="Vector Left"
        className="absolute bottom-0 left-0 w-[120px] sm:w-[140px] lg:w-[280px] xl:w-[320px] h-auto select-none pointer-events-none opacity-30"
        draggable="false"
      />

      {/* Container untuk konten */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col lg:flex-row lg:items-center lg:gap-9">
        
        {/* LEFT: Team Photo */}
        <div className="flex justify-center w-full lg:w-auto lg:justify-start lg:flex-shrink-0">
          <div className="relative w-[200px] sm:w-[270px] md:w-[360px] lg:w-[420px] xl:w-[480px] 2xl:w-[540px]">
            {/* Lingkaran abu-abu (outer border) */}
            <div className="absolute left-[46%] top-[56%] -translate-x-1/2 -translate-y-1/2 w-[95%] aspect-square rounded-full bg-[#E6E6E6] opacity-95 z-10" />
            
            {/* Lingkaran pink (inner circle) */}
            <div className="absolute left-[53%] top-[49%] -translate-x-1/2 -translate-y-1/2 w-[96%] aspect-square rounded-full bg-[#EBD1D1] opacity-95 z-20" />
            
            {/* Team Photo */}
            <img
              src={teamPhoto}
              alt="Tim CV. Yudha Pratama"
              className="relative z-30 block w-full h-auto object-contain drop-shadow-md select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="mt-8 sm:mt-10 lg:mt-0 lg:flex-1 text-center lg:text-left">
          {/* CV. YUDHA PRATAMA dengan garis merah */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[44px] font-extrabold text-[#454545]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              CV. Yudha Pratama
            </h2>
            
            {/* Garis merah di bawah title */}
            <div className="mt-2 lg:mt-3">
              <span className="block h-[3px] lg:h-[4px] bg-[#A20000] rounded-full w-[120px] sm:w-[160px] md:w-[200px] lg:w-[220px] xl:w-[260px]" />
            </div>
          </div>

          {/* Deskripsi panjang - SegoeUI */}
          <div className="mt-6 lg:mt-8">
            <p 
              className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-[#474747] text-center lg:text-left"
              style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
              Perusahaan Kontraktor Yang Berkomitmen Untuk Selalu Aktif Dalam Mendukung Pembangunan Nasional Maupun Swasta. Kami Bergerak Di Bidang Konstruksi, Penyediaan Material (Supplier), Persiapan Lahan, Pekerjaan Galian Tanah, Pembangunan Saluran Air, Pekerjaan Kolam Detensi, Pekerjaan Taman, Serta Penyewaan Alat Berat. Dengan Pengalaman Lebih Dari 15 Tahun, Kami Senantiasa Memberikan Hasil Kerja Terbaik Yang Sesuai Dengan Kebutuhan Dan Harapan Mitra.
            </p>
          </div>

          {/* MOTTO PERUSAHAAN Section */}
          <div className="mt-3 lg:mt-6 xl:mt-8">
            {/* Title MOTTO PERUSAHAAN - CENTER di mobile, LEFT di desktop */}
            <h3 
              className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-extrabold text-[#A20000] uppercase text-center lg:text-left"
              style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
              Motto Perusahaan
            </h3>

            {/* List dengan highlight merah - CENTER di mobile, LEFT di desktop */}
            <ul 
              className="mt-4 lg:mt-5 xl:mt-6 space-y-2 lg:space-y-2.5 xl:space-y-3 text-center lg:text-left text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] leading-relaxed text-[#474747]"
              style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '2px 6px' }}>
                  Mengutamakan Hasil Kerja Berkualitas
                </span> 
                {' '}Sesuai Standar, Kebutuhan, Dan Kepuasan Mitra.
              </li>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '2px 6px' }}>
                  Menjalin Serta Menjaga Kemitraan
                </span> 
                {' '}Yang Profesional, Berintegritas, Dan Berdaya Saing Tinggi.
              </li>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '2px 6px' }}>
                  Melakukan Inovasi Dan Pengembangan Berkelanjutan
                </span> 
                {' '}Untuk Meningkatkan Kinerja Serta Nilai Layanan.
              </li>
              <li>
                <span style={{ backgroundColor: 'rgba(162,0,0,0.16)', borderRadius: '4px', padding: '2px 6px' }}>
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
