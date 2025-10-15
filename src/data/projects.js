// Data proyek-proyek konstruksi
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

export const projectCategories = [
  { id: 'semua', label: 'SEMUA' },
  { id: 'mega-proyek', label: 'MEGA PROYEK' },
  { id: 'proyek-kecil', label: 'PROYEK KECIL' },
  { id: 'fasilitas-umum', label: 'FASILITAS UMUM' }
];

export const projects = [
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
  }
];
