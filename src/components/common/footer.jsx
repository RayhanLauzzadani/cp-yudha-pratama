import React from "react";
import { Link } from "react-router-dom";
// Menggunakan impor logo yang Anda sediakan
import logoFooter from "../../assets/brand/logo-footer.png";

// Konstanta URL
const INSTAGRAM_ACCOUNT = "@yudhapratama.construction";
const INSTAGRAM_URL = "https://instagram.com/yudhapratama.construction";
const TIKTOK_ACCOUNT = "@yp.construction";
const TIKTOK_URL = "https://www.tiktok.com/@yp.construction";
const WHATSAPP_NUMBER = "081220000408";
const WHATSAPP_URL = "https://wa.me/+6281220000408";

export default function Footer() {
  // Kelas hover yang akan digunakan pada semua tautan (hanya warna merah)
  const CONTACT_HOVER_CLASS = "hover:text-red-500 transition-colors duration-200";

  return (
    <footer className="text-white">
      {/* === BLOCK UTAMA === */}
      <div className="relative bg-[#2C2C2C]">
        <div className="relative mx-auto max-w-7xl px-4 py-10">
          
          {/* LAYOUT DESKTOP (md: ke atas): Grid 3 Kolom untuk Info, Logo, Kontak 
              Mobile (default): Flex Kolom (Tumpuk di tengah) 
          */}
          <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-10 md:gap-12">
            
            

            {/* ===== KOLOM 2: LOGO (Tengah di Desktop, Paling Atas di Mobile) ===== */}
            {/* Di desktop, LOGO di tengah. Di mobile, LOGO tumpuk dengan info/kontak ringkas */}
            <div className="flex items-start md:items-center justify-center">
              <div className="flex flex-col items-center space-y-4 md:space-y-6 w-full max-w-xs md:max-w-none">
                <img
                  src={logoFooter}
                  alt="Yudha Pratama — General Contractor & Supplier"
                  className="w-40 md:w-56 h-auto"
                  loading="lazy"
                />
                
                {/* Kontak dan Info Mobile (Tampil saat md:hidden) */}
                <div className="md:hidden text-center mt-6 w-full space-y-5">
                   {/* Info Mobile (Gabungan Jam Buka & Kantor) */}
                 
                   <div className="space-y-2 pt-4">
                     <h4 className="font-bold uppercase">Jam Buka</h4>
                      <p className="text-sm">Senin–Jumat, 08.00 – 20.00</p>
                   </div>
                   <div className="w-full h-px bg-white/20 mt-12 md:mt-16" />
                   <div className="space-y-2 pt-4">
                     <h4 className="font-bold uppercase">Kantor Utama</h4>
                      <p className="text-sm">Jl. Lebak RT.004/009, Kelapadua, Tugu, Cimanggis, Depok</p>
                   </div>
                   <div className="w-full h-px bg-white/20 mt-12 md:mt-16" />
                   {/* Kontak Mobile */}
                   <div className="space-y-2 pt-4">
                     <h4 className="font-bold uppercase">Kontak</h4>
                      <p className="text-sm">
                        Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={CONTACT_HOVER_CLASS}>{INSTAGRAM_ACCOUNT}</a>
                      </p>
                      <p className="text-sm">
                        TikTok: <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={CONTACT_HOVER_CLASS}>{TIKTOK_ACCOUNT}</a>
                      </p>
                      <p className="text-sm">
                        Email: <a href="mailto:yudhapratama_cv@yahoo.com" className={CONTACT_HOVER_CLASS}>yudhapratama_cv@yahoo.com</a>
                      </p>
                      <p className="text-sm">
                        WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={CONTACT_HOVER_CLASS}>{WHATSAPP_NUMBER}</a>
                      </p>
                   </div>
                </div>
              </div>
            </div>

            {/* ===== KOLOM 1: INFO (Hanya Desktop) ===== */}
            <div className="hidden md:block">
              {/* Gunakan grid 2 kolom di sini untuk INFO agar rapi */}
              <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-6 items-start">
                {/* BARIS 1: JAM BUKA */}
                <h4 className="row-start-1 col-start-1 font-bold uppercase tracking-wide whitespace-nowrap">
                  JAM BUKA
                </h4>
                <div className="row-start-1 col-start-2 text-sm leading-relaxed">
                  Senin–Jumat
                  <br />
                  Jam 08.00 – 20.00
                </div>

                {/* BARIS 2: KANTOR UTAMA */}
                <h4 className="row-start-2 col-start-1 font-bold uppercase tracking-wide whitespace-nowrap">
                  KANTOR
                  <br className="hidden sm:block" />
                  UTAMA
                </h4>
                <div className="row-start-2 col-start-2 text-sm leading-relaxed">
                  Jl. Lebak RT.004/009
                  <br />
                  Kelapadua, Kel. Tugu, Kec.
                  <br />
                  Cimanggis, Kota Depok
                </div>
              </div>
            </div>

            {/* ===== KOLOM 3: KONTAK (Hanya Desktop) ===== */}
            <div className="hidden md:block">
              {/* Gunakan grid 2 kolom di sini untuk KONTAK agar rapi */}
              <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-1 text-sm leading-relaxed">
                
                <h4 className="col-span-2 font-bold uppercase tracking-wide whitespace-nowrap mb-2">KONTAK</h4>

                {/* Instagram */}
                <span className="whitespace-nowrap font-semibold">Instagram:</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CONTACT_HOVER_CLASS} break-all`}
                >
                  {INSTAGRAM_ACCOUNT}
                </a>

                {/* Tiktok */}
                <span className="whitespace-nowrap font-semibold">TikTok:</span>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CONTACT_HOVER_CLASS} break-all`}
                >
                  {TIKTOK_ACCOUNT}
                </a>

                {/* Email (dua baris) */}
                <span className="whitespace-nowrap font-semibold mt-0.5">Email:</span>
                <div className="flex flex-col">
                  <a
                    href="mailto:yudhapratama_cv@yahoo.com"
                    className={CONTACT_HOVER_CLASS}
                  >
                    yudhapratama_cv@yahoo.com
                  </a>
                  <a
                    href="mailto:office.yudhapratama@gmail.com"
                    className={CONTACT_HOVER_CLASS}
                  >
                    office.yudhapratama@gmail.com
                  </a>
                </div>

                {/* Whatsapp */}
                <span className="whitespace-nowrap font-semibold">Whatsapp:</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CONTACT_HOVER_CLASS}
                >
                  {WHATSAPP_NUMBER}
                </a>
              </div>
            </div>
          </div>
          
          {/* GARIS PEMISAH NAVIGASI HORIZONTAL */}
          <div className="w-full h-px bg-white/20 mt-12 md:mt-16" />

          {/* ===== NAV MENU (Full Width) ===== */}
          <nav className="mt-6">
            <ul className="flex flex-wrap justify-center md:justify-center gap-x-10 gap-y-3 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors">BERANDA</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">TENTANG KAMI</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors">LAYANAN</Link></li>
              <li><Link to="/#projects" className="hover:text-red-500 transition-colors">PROYEK</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">KONTAK</Link></li> 
            </ul>
          </nav>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#2C2C2C] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center">
          <p className="uppercase italic tracking-wider text-white/80 text-xs">
            &copy; CV YUDHA PRATAMA 2025. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
