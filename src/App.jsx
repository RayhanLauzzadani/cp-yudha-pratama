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
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/home" element={<Navigate to="/" replace />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
