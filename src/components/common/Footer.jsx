import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/brand/logo-footer.png";

// Konstanta URL
const INSTAGRAM_ACCOUNT = "@yudhapratama.construction";
const INSTAGRAM_URL = "https://instagram.com/yudhapratama.construction";
const TIKTOK_ACCOUNT = "@yp.construction";
const TIKTOK_URL = "https://www.tiktok.com/@yp.construction";
const WHATSAPP_NUMBER = "081220000408";
const WHATSAPP_URL = "https://wa.me/+6281220000408";

export default function Footer() {
  const CONTACT_HOVER_CLASS = "hover:text-red-500 transition-colors duration-200";

  // Handler untuk scroll to top saat navigasi diklik
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white">
      {/* === BLOCK UTAMA === */}
      <div className="relative bg-[#2C2C2C]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
          
          {/* LAYOUT: Mobile Stack | Tablet 2 Cols | Desktop 3 Columns */}
          <div className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-12 xl:gap-16">
            
            {/* ===== KOLOM 2: LOGO (Center - Show First on Mobile & Tablet) ===== */}
            <div className="flex items-center justify-center order-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-xs md:max-w-sm lg:max-w-none">
                <img
                  src={logoFooter}
                  alt="Yudha Pratama — General Contractor & Supplier"
                  className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-60 h-auto"
                  loading="lazy"
                />
                
                {/* Mobile Info & Contact (lg:hidden) */}
                <div className="lg:hidden text-center mt-6 sm:mt-8 w-full space-y-6 sm:space-y-7 max-w-sm mx-auto px-2">
                  
                  {/* Jam Buka - Mobile */}
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase text-sm sm:text-base tracking-wide">Jam Buka</h4>
                    <p className="text-xs sm:text-sm text-white/90">Senin–Jumat, 08.00 – 20.00</p>
                  </div>
                  
                  <div className="w-full h-px bg-white/20" />
                  
                  {/* Kantor Utama - Mobile */}
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase text-sm sm:text-base tracking-wide">Kantor Utama</h4>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      Jl. Lebak RT.004/009, Kelapadua, Tugu, Cimanggis, Depok
                    </p>
                  </div>
                  
                  <div className="w-full h-px bg-white/20" />
                  
                  {/* Kontak - Mobile */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <h4 className="font-bold uppercase text-sm sm:text-base tracking-wide">Kontak</h4>
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      <p className="break-words">
                        <span className="font-semibold">Instagram:</span>{" "}
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={CONTACT_HOVER_CLASS}>
                          {INSTAGRAM_ACCOUNT}
                        </a>
                      </p>
                      <p className="break-words">
                        <span className="font-semibold">TikTok:</span>{" "}
                        <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={CONTACT_HOVER_CLASS}>
                          {TIKTOK_ACCOUNT}
                        </a>
                      </p>
                      <p className="break-words">
                        <span className="font-semibold">Email:</span>{" "}
                        <a href="mailto:yudhapratama_cv@yahoo.com" className={CONTACT_HOVER_CLASS}>
                          yudhapratama_cv@yahoo.com
                        </a>
                      </p>
                      <p className="break-words">
                        <span className="font-semibold">WhatsApp:</span>{" "}
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={CONTACT_HOVER_CLASS}>
                          {WHATSAPP_NUMBER}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== KOLOM 1: INFO (Desktop Only) ===== */}
            <div className="hidden lg:block order-2 lg:order-1">
              <div className="space-y-5 lg:space-y-6 xl:space-y-7">
                
                {/* JAM BUKA */}
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm lg:text-base xl:text-lg mb-2">
                    JAM BUKA
                  </h4>
                  <div className="text-sm lg:text-base leading-relaxed text-white/90">
                    Senin–Jumat<br />Jam 08.00 – 20.00
                  </div>
                </div>

                {/* KANTOR UTAMA */}
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm lg:text-base xl:text-lg mb-2">
                    KANTOR UTAMA
                  </h4>
                  <div className="text-sm lg:text-base leading-relaxed text-white/90">
                    Jl. Lebak RT.004/009<br />
                    Kelapadua, Kel. Tugu, Kec.<br />
                    Cimanggis, Kota Depok
                  </div>
                </div>
              </div>
            </div>

            {/* ===== KOLOM 3: KONTAK (Desktop Only) ===== */}
            <div className="hidden lg:block order-3">
              <h4 className="font-bold uppercase tracking-wide text-sm lg:text-base xl:text-lg mb-3 lg:mb-4">KONTAK</h4>
              
              <div className="space-y-2 lg:space-y-2.5 text-sm lg:text-base leading-relaxed">
                
                {/* Instagram */}
                <div>
                  <span className="font-semibold text-white/90">Instagram:</span>
                  <br className="lg:hidden" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${CONTACT_HOVER_CLASS} lg:ml-1 break-all`}
                  >
                    {INSTAGRAM_ACCOUNT}
                  </a>
                </div>

                {/* TikTok */}
                <div>
                  <span className="font-semibold text-white/90">TikTok:</span>
                  <br className="lg:hidden" />
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${CONTACT_HOVER_CLASS} lg:ml-1 break-all`}
                  >
                    {TIKTOK_ACCOUNT}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <span className="font-semibold text-white/90">Email:</span>
                  <div className="flex flex-col mt-1 lg:mt-0">
                    <a
                      href="mailto:yudhapratama_cv@yahoo.com"
                      className={`${CONTACT_HOVER_CLASS} lg:ml-1 break-words`}
                    >
                      yudhapratama_cv@yahoo.com
                    </a>
                    <a
                      href="mailto:office.yudhapratama@gmail.com"
                      className={`${CONTACT_HOVER_CLASS} lg:ml-1 break-words`}
                    >
                      office.yudhapratama@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <span className="font-semibold text-white/90">WhatsApp:</span>
                  <br className="lg:hidden" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${CONTACT_HOVER_CLASS} lg:ml-1`}
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* DIVIDER */}
          <div className="w-full h-px bg-white/20 mt-10 sm:mt-12 md:mt-14 lg:mt-16" />

          {/* ===== NAVIGATION MENU ===== */}
          <nav className="mt-5 sm:mt-6 md:mt-7">
            <ul className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-2 sm:gap-y-3 text-xs sm:text-sm md:text-base">
              <li>
                <Link to="/" onClick={handleNavClick} className="hover:text-red-500 transition-colors font-medium">
                  BERANDA
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavClick} className="hover:text-red-500 transition-colors font-medium">
                  TENTANG KAMI
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="hover:text-red-500 transition-colors font-medium">
                  LAYANAN
                </Link>
              </li>
              <li>
                <Link to="/proyek" onClick={handleNavClick} className="hover:text-red-500 transition-colors font-medium">
                  PROYEK
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#2C2C2C] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-center">
          <p className="uppercase italic tracking-wider text-white/80 text-[10px] sm:text-xs md:text-sm">
            &copy; CV YUDHA PRATAMA 2025. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
