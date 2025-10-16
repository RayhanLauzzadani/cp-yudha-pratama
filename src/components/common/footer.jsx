import { Link } from "react-router-dom";
import logoFooter from "../../assets/brand/logo-footer.png";

// ganti sesuai akun kamu
const INSTAGRAM_URL = "https://instagram.com/yudhapratama.construction";
const TIKTOK_URL = "https://www.tiktok.com/@yp.construction";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* === BLOCK UTAMA + VIGNETTE === */}
      <div className="relative bg-[#2C2C2C]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_50%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_35%,rgba(0,0,0,0)_65%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-10">
          {/* KIRI: logo | KANAN: info & kontak */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 md:gap-12">
            {/* LOGO */}
            <div className="md:col-span-3 flex items-center">
              <img
                src={logoFooter}
                alt="Yudha Pratama — General Contractor & Supplier"
                className="w-72 max-w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* KANAN: INFO (2 subkolom) + KONTAK + NAV */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {/* ===== KOLOM INFO ===== */}
              <div className="sm:pl-8 sm:relative sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:bottom-0 sm:before:w-[2.5px] sm:before:bg-white/20">
                <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-6 items-start">
                  {/* BARIS 1 */}
                  <h4 className="row-start-1 col-start-1 font-bold uppercase tracking-wide whitespace-nowrap">
                    JAM BUKA
                  </h4>
                  <div className="row-start-1 col-start-2 text-sm leading-relaxed">
                    Senin–Jumat
                    <br />
                    Jam 08.00 – 21.00
                  </div>

                  {/* BARIS 2 */}
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

              {/* ===== KOLOM KONTAK (di-top, bukan ditempel bawah) ===== */}
              <div
                className="
                  h-full sm:pl-8
                  sm:relative
                  sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:bottom-0
                  sm:before:w-[2.5px] sm:before:bg-white/20
                "
              >
                <div className="grid grid-cols-[auto,1fr] gap-x-6 items-start">
                  <h4 className="font-bold uppercase tracking-wide whitespace-nowrap">
                    KONTAK
                  </h4>

                  {/* Kontak: grid 2 kolom agar label & isi top-aligned rapi */}
                  <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-1 text-sm leading-relaxed">
                    {/* Instagram */}
                    <span className="whitespace-nowrap">Instagram:</span>
                    <a
                      href="https://www.instagram.com/yudhapratama.construction?igsh=cDhmZHgyaHY5aWN3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline break-all"
                    >
                      {INSTAGRAM_URL.replace(/^https?:\/\//, "")}
                    </a>

                    {/* Tiktok */}
                    <span className="whitespace-nowrap">TikTok:</span>
                    <a
                      href="https://www.tiktok.com/@yp.construction?_t=ZS-90aMXMRx1uf&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline break-all"
                    >
                      {TIKTOK_URL.replace(/^https?:\/\//, "")}
                    </a>

                    {/* Email (dua baris) */}
                    <span className="whitespace-nowrap mt-0.5">Email:</span>
                    <div className="flex flex-col">
                      <a
                        href="mailto:yudhapratama_cv@yahoo.com"
                        className="hover:underline"
                      >
                        yudhapratama_cv@yahoo.com
                      </a>
                      <a
                        href="mailto:office.yudhapratama@gmail.com"
                        className="hover:underline"
                      >
                        office.yudhapratama@gmail.com
                      </a>
                    </div>

                    {/* Whatsapp */}
                    <span className="whitespace-nowrap">Whatsapp:</span>
                    <a
                      href="https://wa.me/081220000408"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      081220000408
                    </a>
                  </div>
                </div>
              </div>

              {/* ===== NAV MENU (span 2 kolom) ===== */}
              <nav className="sm:col-span-2 mt-6 md:mt-8">
                <ul className="flex flex-wrap justify-start gap-x-10 gap-y-3 text-sm">
                  <li><Link to="/" className="hover:opacity-80">BERANDA</Link></li>
                  <li><Link to="/about" className="hover:opacity-80">TENTANG KAMI</Link></li>
                  <li><Link to="/services" className="hover:opacity-80">LAYANAN</Link></li>
                  <li><Link to="/#projects" className="hover:opacity-80">PROYEK</Link></li>
                </ul>
              </nav>
            </div>
          </div>
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
