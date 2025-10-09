import { useEffect, useState } from "react";
import { ReactComponent as LogoLockup } from "../../assets/brand/logo-lockup.svg";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";

const NAV_ITEMS = [
  { id: "home", label: "BERANDA", href: "#home" },
  { id: "about", label: "TENTANG KAMI", href: "#about" },
  { id: "services", label: "LAYANAN", href: "#services" },
  { id: "projects", label: "PROYEK", href: "#projects" },
  { id: "gallery", label: "GALERI", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => setActive(id);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* container 1400px */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* layout: relative + absolute-center untuk blok menu */}
        <div className="relative h-16 flex items-center">
          {/* LEFT: Logo (lockup only) */}
          <a href="#home" className="flex items-center" aria-label="Yudha Pratama">
            <LogoLockup className="h-[55px] w-auto" />
          </a>

          {/* CENTER: NAV (desktop ≥ lg) — ukuran & spacing sesuai Figma */}
          <nav
            className="hidden lg:block absolute left-1/2 -translate-x-1/2"
            aria-label="Primary"
          >
            <div className="flex items-center w-[590px] h-[34px] px-[40px] gap-[58px]">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
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
                      className={`pointer-events-none absolute inset-0 grid place-items-center
                                  font-normal
                                  transition-opacity duration-150 ease-out
                                  ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}
                    >
                      {item.label}
                    </span>

                    {/* Hover (semibold) */}
                    <span
                      className={`pointer-events-none absolute inset-0 grid place-items-center
                                  font-semibold
                                  transition-opacity duration-150 ease-out
                                  ${isActive ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}
                    >
                      {item.label}
                    </span>

                    {/* Active (bold) */}
                    <span
                      className={`pointer-events-none absolute inset-0 grid place-items-center
                                  font-bold
                                  transition-opacity duration-150 ease-out
                                  ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* RIGHT: CTA + trigger sidebar */}
          <div className="ml-auto flex items-center gap-3">
            {/* CTA desktop (≥ lg) */}
            <Button
              asChild
              className="
                hidden lg:inline-flex
                w-[136px] h-[34px]
                items-center justify-center
                rounded-[45px]
                bg-[#A20000] text-white
                text-[12px] font-semibold tracking-[0.02em] leading-none
                transition-colors duration-200 ease-out
                hover:bg-[#8C0000]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A20000]/30
              "
            >
              <a href="#contact">HUBUNGI KAMI</a>
            </Button>

            {/* Sidebar untuk < lg */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Buka menu">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <nav className="mt-4 space-y-1" aria-label="Mobile">
                  {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <SheetClose asChild key={item.id}>
                        <a
                          href={item.href}
                          onClick={() => handleClick(item.id)}
                          aria-current={isActive ? "page" : undefined}
                          className={`block rounded-md px-3 py-2 text-sm
                                      ${isActive ? "font-semibold text-[#383737] bg-gray-50" : "text-[#383737] hover:bg-gray-50"}`}
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* CTA mobile */}
                <SheetClose asChild>
                  <Button
                    className="mt-4 w-full h-[40px] rounded-[45px] bg-[#A20000] text-white text-[13px] font-semibold tracking-[0.02em] leading-none transition-colors duration-200 ease-out hover:bg-[#8C0000]"
                  >
                    HUBUNGI KAMI
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
