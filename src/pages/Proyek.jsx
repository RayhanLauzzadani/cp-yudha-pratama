// src/pages/Proyek.jsx
import { useEffect } from 'react';
import Proyek from '../sections/proyek/Proyek';

export default function ProyekPage() {
  useEffect(() => {
    // Scroll ke atas saat halaman dimount
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      {/* Spacer untuk navbar */}
      <div className="h-16" />
      <Proyek />
    </>
  );
}
