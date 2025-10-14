import { useEffect, useRef, useState, useCallback } from "react";
import { ReactComponent as LogoLockup } from "../../assets/brand/logo-lockup.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { id: "home", label: "BERANDA", href: "#home" },
  { id: "about", label: "TENTANG KAMI", href: "#about" },
  { id: "services", label: "LAYANAN", href: "#services" },
  { id: "projects", label: "PROYEK", href: "#projects" },
  { id: "gallery", label: "GALERI", href: "#gallery" },
];

const COMPANY_PROFILE_URL = "/company-profile.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // --- refs untuk underline indicator
  const innerNavRef = useRef(null);
  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  // helper: update posisi & lebar underline berdasarkan item aktif
  const updateIndicator = useCallback(() => {
    const idx = NAV_ITEMS.findIndex((it) => it.id === active);
    const el = itemRefs.current[idx];
    const container = innerNavRef.current;
    if (!el || !container) return;
    const crect = container.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({ left: rect.left - crect.left, width: rect.width });
  }, [active]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // hitung underline saat aktif berubah / resize
  useEffect(() => {
    // tunggu layout settle (font render) biar ukuran akurat
    const r1 = requestAnimationFrame(updateIndicator);
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(r1);
      window.removeEventListener("resize", onResize);
    };
  }, [active, updateIndicator]);

  const handleClick = (id) => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* container 1400px (relative supaya panel mobile bisa absolute di dalamnya) */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* bar utama */}
        <div className="relative h-16 flex items-center">
          {/* LEFT: Logo */}
          <a href="#home" className="flex items-center" aria-label="Yudha Pratama">
            {/* base: 42px, sm: 44px, lg: 46px, xl: 55px */}
            <LogoLockup className="h-[42px] sm:h-[44px] lg:h-[46px] xl:h-[55px] w-auto" />
          </a>

          {/* CENTER: NAV (desktop ≥ lg) */}
          <nav
            className="hidden lg:block absolute left-1/2 -translate-x-1/2"
            aria-label="Primary"
          >
            <div
              ref={innerNavRef}
              className="relative flex items-center w-[590px] h-[34px] px-[40px] gap-[58px]"
            >
              {/* underline bergerak */}
              <span
                className="pointer-events-none absolute -bottom-1 h-[3px] rounded-full bg-[#A20000] transition-[left,width] duration-200 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
              {NAV_ITEMS.map((item, i) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    ref={(el) => (itemRefs.current[i] = el)}
                    href={item.href}
                    onClick={() => handleClick(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className="group relative select-none grid place-items-center h-[16px] leading-[16px] text-[12px] whitespace-nowrap shrink-0 text-[#383737]"
                  >
                    {/* kunci lebar (anti-geser) */}
                    <span aria-hidden className="invisible font-bold pointer-events-none">
                      {item.label}
                    </span>
                    {/* Regular (default) */}
                    <span
                      className={`pointer-events-none absolute inset-0 grid place-items-center font-normal transition-opacity duration-150 ease-out ${
                        isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Hover (semibold) */}
                    <span
                      className={`pointer-events-none absolute inset-0 grid place-items-center font-semibold transition-opacity duration-150 ease-out ${
                        isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Active (bold) */}
                    <span
                      className={`pointer-events-none absolute inset-0 grid place-items-center font-bold transition-opacity duration-150 ease-out ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* RIGHT: CTA desktop (≥ lg) — COMPANY PROFILE */}
          <div className="ml-auto hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="
                inline-flex items-center justify-center
                bg-[#A20000] text-white rounded-[25px]
                px-6 py-[10px]
                text-[12px] font-bold leading-none
                transition-colors duration-200 ease-out
                hover:bg-[#8C0000]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A20000]/30
              "
              style={{ fontFamily: "'Segoe UI', sans-serif" }}
            >
              <a
                href={COMPANY_PROFILE_URL}
                download
                className="inline-flex items-center whitespace-nowrap"
              >
                <span className="inline-block">COMPANY PROFILE</span>
                <DownloadIcon className="ml-2 h-[16px] w-[16px] shrink-0 align-middle" aria-hidden />
              </a>
            </Button>
          </div>

          {/* RIGHT: Toggle mobile (< lg) — arrow kanan berputar ke bawah saat open */}
          <div className="ml-auto flex items-center gap-3 lg:hidden">
            <button
              type="button"
              aria-label="Buka menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 active:scale-[0.98] transition"
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 transition-transform duration-200 ease-out ${
                  mobileOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN PANEL (< lg) */}
        <div
          className={`
            lg:hidden absolute left-0 right-0 top-16
            overflow-hidden
            border-t border-gray-100 bg-white shadow-md
            transition-[max-height,opacity,transform] duration-200 ease-out
            ${mobileOpen ? "opacity-100 max-h-[70vh] translate-y-0" : "opacity-0 max-h-0 -translate-y-1"}
          `}
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="pt-3">
            <ul className="flex flex-col items-center gap-2 py-2 px-4">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="w-full">
                    <a
                      href={item.href}
                      onClick={() => handleClick(item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`
                        block w-full text-center rounded-md px-3 py-2 
                        text-[14px] font-semibold tracking-[0.02em] 
                        transition-colors duration-200
                        ${
                          isActive 
                            ? "text-[#A20000] bg-[#A20000]/5" 
                            : "text-[#454545] hover:text-[#A20000] hover:bg-[#A20000]/5"
                        }
                      `}
                      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA mobile: full width tanpa padding kanan kiri */}
            <div className="w-full">
              <Button
                asChild
                className="
                  w-full flex items-center justify-center
                  bg-[#A20000] text-white rounded-none
                  px-6 py-5
                  text-[12px] font-bold leading-none
                  transition-colors duration-200 ease-out
                  hover:bg-[#8C0000]
                "
                style={{ fontFamily: "'Segoe UI', sans-serif" }}
              >
                <a
                  href={COMPANY_PROFILE_URL}
                  download
                  className="flex items-center justify-center whitespace-nowrap"
                >
                  <span className="inline-block">DOWNLOAD COMPANY PROFILE</span>
                  <DownloadIcon className="ml-2 h-[16px] w-[16px] shrink-0 align-middle" aria-hidden />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
