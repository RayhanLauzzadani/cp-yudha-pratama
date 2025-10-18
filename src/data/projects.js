// src/data/projects.js
// Data proyek-proyek konstruksi

// === Import gambar 1-10 (existing) ===
import gambar1 from '../assets/images/projects/gambar-1.png';
import gambar2 from '../assets/images/projects/gambar-2.png';
import gambar3 from '../assets/images/projects/gambar-3.png';
import gambar4 from '../assets/images/projects/gambar-4.png';
import gambar5 from '../assets/images/projects/gambar-5.png';
import gambar6 from '../assets/images/projects/gambar-6.png';
import gambar7 from '../assets/images/projects/gambar-7.png';
import gambar8 from '../assets/images/projects/gambar-8.png';
import gambar9 from '../assets/images/projects/gambar-9.png';
import gambar10 from '../assets/images/projects/gambar-10.png';

// === Import gambar 11-32 (NEW) ===
import gambar11 from '../assets/images/projects/gambar-11.png';
import gambar12 from '../assets/images/projects/gambar-12.png';
import gambar13 from '../assets/images/projects/gambar-13.png';
import gambar14 from '../assets/images/projects/gambar-14.png';
import gambar15 from '../assets/images/projects/gambar-15.png';
import gambar16 from '../assets/images/projects/gambar-16.png';
import gambar17 from '../assets/images/projects/gambar-17.png';
import gambar18 from '../assets/images/projects/gambar-18.png';
import gambar19 from '../assets/images/projects/gambar-19.png';
import gambar20 from '../assets/images/projects/gambar-20.png';
import gambar21 from '../assets/images/projects/gambar-21.png';
import gambar22 from '../assets/images/projects/gambar-22.png';
import gambar23 from '../assets/images/projects/gambar-23.png';
import gambar24 from '../assets/images/projects/gambar-24.png';
import gambar25 from '../assets/images/projects/gambar-25.png';
import gambar26 from '../assets/images/projects/gambar-26.png';
import gambar27 from '../assets/images/projects/gambar-27.png';
import gambar28 from '../assets/images/projects/gambar-28.png';
import gambar29 from '../assets/images/projects/gambar-29.png';
import gambar30 from '../assets/images/projects/gambar-30.png';
import gambar31 from '../assets/images/projects/gambar-31.png';
import gambar32 from '../assets/images/projects/gambar-32.png';
import gambar33 from '../assets/images/projects/gambar-33.png';

export const projectCategories = [
  { id: 'semua', label: 'SEMUA' },
  { id: 'mega-proyek', label: 'MEGA PROYEK' },
  { id: 'proyek-kecil', label: 'PROYEK KECIL' },
  { id: 'fasilitas-umum', label: 'FASILITAS UMUM' }
];

export const projects = [
  // === EXISTING 1-10 ===
  {
    id: 1,
    image: gambar1,
    category: 'mega-proyek',
    title: 'Sewa Alat Excavator',
    subtitle: 'Proyek LRT Jakarta Zona 1',
    tags: ['Mega Proyek', 'FasUm']
  },
  {
    id: 2,
    image: gambar2,
    category: 'mega-proyek',
    title: 'Supply Pasir',
    subtitle: 'Proyek LRT Zona General',
    tags: ['Mega Proyek', 'FasUm']
  },
  {
    id: 3,
    image: gambar3,
    category: 'mega-proyek',
    title: 'Supply Batako',
    subtitle: 'Proyek LRT Zona General',
    tags: ['Mega Proyek', 'FasUm']
  },
  {
    id: 4,
    image: gambar4,
    category: 'mega-proyek',
    title: 'Sewa Alat Excavator',
    subtitle: 'Proyek LRT (2) Zona 1',
    tags: ['Mega Proyek', 'FasUm']
  },
  {
    id: 5,
    image: gambar5,
    category: 'mega-proyek',
    title: 'Menko Paspampres',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 6,
    image: gambar6,
    category: 'mega-proyek',
    title: 'Proyek Benteng Pendem Ambarawa',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 7,
    image: gambar7,
    category: 'proyek-kecil',
    title: 'Row House Kemang',
    subtitle: '-',
    tags: ['Proyek Kecil']
  },
  {
    id: 8,
    image: gambar8,
    category: 'mega-proyek',
    title: 'Proyek RSUD Tigaraksa',
    subtitle: 'Kabupaten Tangerang',
    tags: ['Mega Proyek']
  },
  {
    id: 9,
    image: gambar9,
    category: 'proyek-kecil',
    title: 'PT. Archiprada Cipta Persada',
    subtitle: 'Proyek SD Millenia Word Ciputat (2)',
    tags: ['Proyek Kecil']
  },
  {
    id: 10,
    image: gambar10,
    category: 'proyek-kecil',
    title: 'PT. Archiprada Cipta Persada',
    subtitle: 'Proyek SD Millenia Word Ciputat (1)',
    tags: ['Proyek Kecil']
  },

  // === NEW 11-32 ===
  {
    id: 11,
    image: gambar11,
    category: 'mega-proyek',
    title: 'Proyek RSUD Kubur Raya (1)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 12,
    image: gambar12,
    category: 'mega-proyek',
    title: 'Proyek RSUD Kubur Raya (3)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 13,
    image: gambar13,
    category: 'mega-proyek',
    title: 'Proyek RSUD Kubur Raya (4)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 14,
    image: gambar14,
    category: 'mega-proyek',
    title: 'Proyek RSUD Tigaraksa',
    subtitle: 'Kabupaten Tangerang - Supply Material Buis Beton',
    tags: ['Mega Proyek']
  },
  {
    id: 15,
    image: gambar15,
    category: 'mega-proyek',
    title: 'Proyek RSUD Kubur Raya (6)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 16,
    image: gambar16,
    category: 'mega-proyek',
    title: 'Proyek Gedung C FIB UGM',
    subtitle: 'Pekerjaan Galian Tanah',
    tags: ['Mega Proyek']
  },
  {
    id: 17,
    image: gambar17,
    category: 'mega-proyek',
    title: 'Proyek Gedung C FIB UGM (2)',
    subtitle: 'PT. Waskita Karya Persero (Tbk)',
    tags: ['Mega Proyek']
  },
  {
    id: 18,
    image: gambar18,
    category: 'mega-proyek',
    title: 'Proyek Benteng Pendem Ambarawa (1)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 19,
    image: gambar19,
    category: 'mega-proyek',
    title: 'Proyek RSUD Tigaraksa',
    subtitle: 'Kabupaten Tangerang - Sewa Mobil & Supply Semen',
    tags: ['Mega Proyek']
  },
  {
    id: 20,
    image: gambar20,
    category: 'mega-proyek',
    title: 'Proyek Benteng Pendem Ambarawa (2)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 21,
    image: gambar21,
    category: 'mega-proyek',
    title: 'Proyek Benteng Pendem Ambarawa (3)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 22,
    image: gambar22,
    category: 'proyek-kecil',
    title: 'Proyek Ruma Antasari',
    subtitle: 'PT. Archiprada Cipta Persada',
    tags: ['Proyek Kecil']
  },
  {
    id: 23,
    image: gambar23,
    category: 'mega-proyek',
    title: 'Proyek Benteng Pendem Ambarawa (4)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 24,
    image: gambar24,
    category: 'proyek-kecil',
    title: 'Row House Kemang (2)',
    subtitle: '-',
    tags: ['Proyek Kecil']
  },
  {
    id: 25,
    image: gambar25,
    category: 'mega-proyek',
    title: 'Proyek RSUD Tigaraksa',
    subtitle: 'Kabupaten Tanggerang - Supply Batu Belah',
    tags: ['Mega Proyek']
  },
  {
    id: 26,
    image: gambar26,
    category: 'mega-proyek',
    title: 'Proyek RSUD Kubur Raya (5)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 27,
    image: gambar27,
    category: 'proyek-kecil',
    title: 'Row House Kemang (3)',
    subtitle: '-',
    tags: ['Proyek Kecil']
  },
  {
    id: 28,
    image: gambar28,
    category: 'mega-proyek',
    title: 'Proyek Benteng Pendem Ambarawa (6)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 29,
    image: gambar29,
    category: 'mega-proyek',
    title: 'Proyek LRT (1)',
    subtitle: 'Zona 1 - LRS KSO',
    tags: ['Mega Proyek', 'FasUm']
  },
  {
    id: 30,
    image: gambar30,
    category: 'mega-proyek',
    title: 'Proyek RSUD Kubur Raya (2)',
    subtitle: '-',
    tags: ['Mega Proyek']
  },
  {
    id: 31,
    image: gambar31,
    category: 'mega-proyek',
    title: 'Proyek Gedung C FIB UGM (1)',
    subtitle: 'PT. Waskita Karya Persero (Tbk)',
    tags: ['Mega Proyek']
  },
  {
    id: 32,
    image: gambar32,
    category: 'mega-proyek',
    title: 'Proyek LRT (2)',
    subtitle: 'Zona 1 - LRS KSO',
    tags: ['Mega Proyek', 'FasUm']
  },
  {
    id: 33,
    image: gambar33, // Note: Anda tulis "gambar-32" tapi ada 2 entri terakhir, saya asumsikan typo
    category: 'proyek-kecil',
    title: 'Proyek Ruma Cila',
    subtitle: 'PT. Archiprada Cipta Persada',
    tags: ['Proyek Kecil']
  }
];
