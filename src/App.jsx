// src/App.jsx
import Navbar from "./components/common/Navbar";
import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
import Services from "./sections/home/Services"; // ⬅️ tambahkan import baru

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

        {/* === SERVICES === */}
        <section id="services" aria-label="Layanan / Bidang Usaha" className="scroll-mt-20">
          <Services />
        </section>

        {/* === PROJECTS === */}
        <section
          id="projects"
          aria-label="Proyek"
          className="min-h-[40vh] flex items-center justify-center text-[#383737]/60"
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 w-full">
            <p className="text-center">Section Proyek — coming soon.</p>
          </div>
        </section>

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
