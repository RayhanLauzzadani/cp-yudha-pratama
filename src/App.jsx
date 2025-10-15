<<<<<<< HEAD
// src/App.jsx
import Navbar from "./components/common/Navbar";
import Hero from "./sections/home/Hero";
import About from "./sections/home/AboutClean";
import Services from "./sections/home/Services"; // ⬅️ tambahkan import baru
=======
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicesPage from "./pages/Layanan.jsx";
// import ProjectsPage from "./pages/ProjectsPage.jsx";
// import GalleryPage from "./pages/GalleryPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";
>>>>>>> 44151cc7660bcb785978e8edf1cfdfa1fb5cea8e

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Halaman terpisah */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}

        {/* Opsional: redirect lama ke baru */}
        {/* <Route path="/home" element={<Navigate to="/" replace />} /> */}

<<<<<<< HEAD
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
=======
        {/* 404 */}
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
>>>>>>> 44151cc7660bcb785978e8edf1cfdfa1fb5cea8e
  );
}
