import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicesPage from "./pages/Layanan.jsx";
import NotFound from "./pages/NotFound.jsx";

// App router: all pages go under MainLayout; keep optional redirects commented for now
export default function App() {
  return (
    <Routes>
      {/* Layout untuk semua halaman */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
<<<<<<< HEAD
        {/* <Route path="/home" element={<Navigate to="/" replace />} /> */}
      </Route>
=======
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Route>

      {/* 404 Route */}
>>>>>>> 8e9a09f5bf3bf65fd98112e757aedc5e4d4c6add
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
