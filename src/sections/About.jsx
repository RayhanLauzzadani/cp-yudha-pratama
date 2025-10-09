// src/sections/About.jsx
import teamPhoto from "../assets/images/team-photo.png"; // pastikan nama file sesuai

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-20 font-jakarta"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-10">
        {/* Foto tim */}
        <div className="flex-shrink-0 flex justify-center w-full lg:w-1/2">
          <img
            src={teamPhoto}
            alt="Tim CV. Yudha Pratama"
            className="w-[360px] sm:w-[420px] md:w-[480px] lg:w-[520px] xl:w-[560px] object-contain drop-shadow-md"
          />
        </div>

        {/* Konten teks */}
        <div className="text-[#383737] lg:w-1/2 text-left">
          <h2 className="text-[40px] sm:text-[44px] md:text-[48px] font-extrabold leading-tight">
            TENTANG
          </h2>
          <h3 className="text-[#A20000] text-[26px] sm:text-[28px] md:text-[30px] font-extrabold tracking-wide mt-1">
            CV. YUDHA PRATAMA
          </h3>

          <p className="mt-6 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#383737]/80">
            CV. Yudha Pratama merupakan hasil pengembangan dari perusahaan
            sebelumnya, Mitra Keluarga Sejahtera (MKS), yang berdiri sejak tahun
            2008. Seiring dengan perluasan ruang lingkup usaha dan peningkatan
            kebutuhan mitra, perusahaan kemudian melakukan pergantian nama
            menjadi CV. Yudha Pratama pada tanggal 30 April 2009, yang resmi
            berdomisili di Kelapadua Tugu, Cimanggis, Depok.
          </p>

          <button
            className="mt-8 px-8 py-3 border border-[#A20000] rounded-full text-[#A20000] font-semibold tracking-wide hover:bg-[#A20000] hover:text-white transition-all duration-300 ease-out"
          >
            BACA LEBIH LANJUT
          </button>
        </div>
      </div>
    </section>
  );
}
