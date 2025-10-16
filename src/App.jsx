import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicesPage from "./pages/Layanan.jsx";
// import ProjectsPage from "./pages/ProjectsPage.jsx";
// import GalleryPage from "./pages/GalleryPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Layout untuk semua halaman */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Halaman terpisah */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
