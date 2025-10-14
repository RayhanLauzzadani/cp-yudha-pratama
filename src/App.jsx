// src/App.jsx
import Navbar from "./components/common/Navbar";
import Pembatas from "./components/common/Pembatas";
import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
import Services from "./sections/home/Services";
import Projects from "./sections/home/Projects";
import Whyme from "./sections/home/Whyme";

export default function App() {
  return (
    <>
      {/* Navbar tetap (fixed di atas) */}
      <Navbar />

      {/* Spacer agar konten tidak ketutup navbar (tinggi ≈ 64px / h-16) */}
      <div className="h-16" />

      <main className="overflow-x-hidden">
        {/* === HERO / HOME === */}
        <section id="home" aria-label="Beranda">
          <Hero />
        </section>

        {/* === ABOUT === */}
        <section id="about" aria-label="Tentang Kami" className="scroll-mt-20">
          <About />
        </section>

        {/* === PEMBATAS 1 === */}
        <Pembatas text="MENGUTAMAKAN HASIL KERJA" />

        {/* === SERVICES === */}
        <section id="services" aria-label="Layanan / Bidang Usaha" className="scroll-mt-20">
          <Services />
        </section>

        {/* === PEMBATAS 2 === */}
        <Pembatas text="DEDIKASI TANPA HENTI" />

        {/* === PROJECTS === */}
        <Projects />

        {/* === PEMBATAS 3 === */}
        <Pembatas 
          text="INOVASI DAN PENGEMBANGAN BERKELANJUTAN" 
          mobileWidth="380px" 
        />

        {/* === PEMBATAS 4 === */}
        <Pembatas 
          text="MENJALIN SERTA MENJAGA KEMITRAAN" 
          gradientFrom="#393939" 
          gradientTo="#1A1A1A"
          mobileWidth="270px" 
        />

        {/* === MENGAPA KAMI / WHY ME === */}
        <Whyme />

        {/* === GALLERY === */}
        <section
          id="gallery"
          aria-label="Galeri"
          className="min-h-[40vh] flex items-center justify-center text-[#383737]/60"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
            <p className="text-center">Section Galeri — coming soon.</p>
          </div>
        </section>

        {/* === CONTACT === */}
        <section
          id="contact"
          aria-label="Kontak"
          className="min-h-[40vh] flex items-center justify-center text-[#383737]/60"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
            <p className="text-center">Section Kontak — coming soon.</p>
          </div>
        </section>
      </main>
    </>
  );
}
