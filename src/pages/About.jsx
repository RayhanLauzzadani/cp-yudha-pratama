import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutClean from "../sections/about/AboutClean.jsx";

export default function About() {
  const location = useLocation();

  // Smooth scroll to a hash target when present (e.g., #sejarah)
  useEffect(() => {
    if (!location?.hash) return;
    const id = location.hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      // Use smooth scrolling and align to top; scroll-margin on target handles fixed header
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      {/* Spacer to avoid fixed Navbar overlap */}
      <div className="h-16" />
      <AboutClean />
    </>
  );
}
