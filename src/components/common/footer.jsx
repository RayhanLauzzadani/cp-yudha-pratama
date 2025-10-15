import { Link } from "react-router-dom";
import logoFooter from "../../assets/brand/logo-footer.png";

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

            {/* KANAN: INFO (2 subkolom) + KONTAK (bawah) + NAV (di bawah info & kontak) */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {/* ===== KOLOM INFO (grid 2 kolom x 2 baris) ===== */}
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

              {/* ===== KOLOM KONTAK (heading kiri, isi kanan, ditempel ke bawah) ===== */}
              <div
                className="
                  h-full sm:pl-8 flex flex-col
                  sm:relative
                  sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-0 sm:before:bottom-0
                  sm:before:w-[2.5px] sm:before:bg-white/20
                "
              >
                <div className="mt-auto grid grid-cols-[auto,1fr] gap-x-6 items-start">
                  <h4 className="font-bold uppercase tracking-wide whitespace-nowrap">
                    KONTAK
                  </h4>
                  <ul className="text-sm leading-relaxed space-y-1">
                    <li>
                      Email:&nbsp;
                      <a
                        href="mailto:yudhapratama_cv@yahoo.com"
                        className="hover:underline"
                      >
                        yudhapratama_cv@yahoo.com
                      </a>
                    </li>
                    <li>Whatsapp:</li>
                    <li>
                      <a
                        href="https://wa.me/081220000408"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        081220000408
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===== NAV MENU =====
                  Ditaruh DI DALAM kolom kanan dan span ke 2 subkolom,
                  jadi mulai di bawah "KANTOR UTAMA" dan memanjang sampai bawah "KONTAK". */}
              <nav className="sm:col-span-2 mt-6 md:mt-8">
                <ul className="flex flex-wrap justify-start gap-x-10 gap-y-3 text-sm">
                  <li><Link to="/" className="hover:opacity-80">BERANDA</Link></li>
                  <li><Link to="/about" className="hover:opacity-80">TENTANG KAMI</Link></li>
                  <li><Link to="/services" className="hover:opacity-80">LAYANAN</Link></li>
                  <li><Link to="/#projects" className="hover:opacity-80">PROYEK</Link></li>
                  {/* kalau ada menu lain, tinggal tambah di sini */}
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
