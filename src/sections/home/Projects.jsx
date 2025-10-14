import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import jaringBg from '../../assets/icons/jaring.png';
import jaringMobileBg from '../../assets/icons/jaring_mobile.png';
import { projects, projectCategories } from '../../data/projects';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [activeCategory, setActiveCategory] = useState('semua');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter proyek berdasarkan kategori dengan logic khusus
  const filteredProjects = activeCategory === 'semua' 
    ? projects 
    : projects.filter(project => {
        // Logic: FasUm otomatis masuk ke Mega Proyek
        if (activeCategory === 'mega-proyek') {
          // Tampilkan jika category mega-proyek ATAU punya tag FasUm
          return project.category === 'mega-proyek' || 
                 (project.tags && project.tags.includes('FasUm'));
        } else if (activeCategory === 'fasilitas-umum') {
          // Tampilkan hanya yang punya tag FasUm
          return project.tags && project.tags.includes('FasUm');
        } else {
          // Proyek Kecil normal
          return project.category === activeCategory;
        }
      });

  // Handle category change dengan smooth transition
  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return; // Prevent re-render jika tab sama
    
    setIsTransitioning(true);
    
    // Delay category change sedikit untuk smooth transition
    setTimeout(() => {
      setActiveCategory(categoryId);
    }, 150);
    
    // Reset transitioning setelah animasi selesai
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  // Breakpoints untuk masonry grid
  const breakpointColumns = {
    default: 5,  // 5 kolom untuk extra large desktop (≥1280px - xl, 2xl)
    1280: 4,     // 4 kolom untuk large desktop (992-1279px - lg)
    992: 3,      // 3 kolom untuk medium tablet (768-991px - md)
    768: 3,      // 3 kolom untuk medium tablet (md)
    640: 2       // 2 kolom untuk mobile & small (< 640px - sm & mobile)
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-10 bg-[#FAFAFA] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${isMobile ? jaringMobileBg : jaringBg})` 
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Title - Plus Jakarta Sans, ExtraBold, Letter Spacing -4 */}
          {/* Mobile: 30px, sm: 32px, md: 34px, lg: 40px, xl: 40px, 2xl: 40px */}
          <h2 
            className="font-jakarta font-extrabold text-[#A20000] mb-4 
                       text-[30px] sm:text-[32px] md:text-[34px] lg:text-[40px] lg:mt-1.5"
            style={{ 
              letterSpacing: '-4px'
            }}
          >
            Proyek
          </h2>
          {/* Description - Segoe UI, Regular/300 */}
          {/* Mobile: 15px, sm: 16px, md: 17px, lg: 20px, xl: 20px, 2xl: 20px */}
          <p 
            className="max-w-2xl mx-auto
                       text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px]"
            style={{ 
              fontFamily: '"Segoe UI", SegoeUI, sans-serif',
              fontWeight: 400,
              color: '#393939'
            }}
          >
            Lihat koleksi proyek konstruksi yang telah kami selesaikan dengan kualitas terbaik
          </p>
        </div>

        {/* White Rectangle Container - Wrapper untuk Tab, Gallery & Button */}
        <div className="bg-white rounded-2xl shadow-2xl mx-[14px] lg:mx-[100px] py-8 lg:py-12 px-6 lg:px-10">
          
          {/* Tab Filter */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`
                  rounded-[5px] text-[11px] sm:text-[12px] lg:text-[14px] transition-all duration-300 ease-in-out
                  ${activeCategory === cat.id 
                    ? 'border border-[#C4C4C4] bg-[#FAFAFA] px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] lg:py-[6px]' 
                    : 'border border-transparent px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] lg:py-[6px] hover:opacity-70'
                  }
                `}
                style={{ 
                  fontFamily: '"Segoe UI", SegoeUI, sans-serif',
                  fontWeight: 450,
                  color: '#454545',
                  textShadow: activeCategory === cat.id ? '0 0 0.5px #454545' : 'none',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Gallery Grid - Masonry Layout */}
          <div 
            className="transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0.3 : 1 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex gap-4 lg:gap-6 mb-8 lg:mb-12"
              columnClassName="flex flex-col gap-4 lg:gap-6"
            >
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeIn"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: 0,
                    animation: 'fadeIn 0.5s ease-in-out forwards'
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay hover dengan gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Text overlay - muncul saat hover */}
                  {project.subtitle ? (
                    // Layout untuk gambar dengan subtitle dan tags (seperti gambar-1)
                    <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 sm:p-4 md:p-6">
                      <div className="text-left">
                        {/* Title utama - Bold */}
                        <h3 
                          className={`font-jakarta font-bold text-white mb-1 ${
                            project.id === 9 || project.id === 10
                              ? 'text-[11px]' // Font kecil untuk gambar 9 & 10
                              : 'text-[11px] sm:text-[15px] lg:text-[11px] xl:text-[15px]'
                          }`}
                          style={{ lineHeight: '1.3' }}
                        >
                          {project.title}
                        </h3>
                        
                        {/* Subtitle - Regular (hanya tampil jika bukan "-" atau kosong) */}
                        {project.subtitle && project.subtitle !== '-' && (
                          <p 
                            className={`font-jakarta text-white mb-2 sm:mb-3 ${
                              project.id === 9 || project.id === 10
                                ? 'text-[10px]' // Font kecil untuk gambar 9 & 10
                                : 'text-[10px] sm:text-[14px] lg:text-[10px] xl:text-[14px]'
                            }`}
                            style={{ lineHeight: '1.3', fontWeight: 400 }}
                          >
                            {project.subtitle}
                          </p>
                        )}
                        
                        {/* Tags */}
                        {project.tags && (
                          <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                            {project.tags.map((tag, idx) => (
                              <div 
                                key={idx}
                                className={`bg-[#5A0606] rounded-full flex items-center ${
                                  project.id === 9 || project.id === 10
                                    ? 'px-2 py-1' // Padding kecil untuk gambar 9 & 10
                                    : 'px-2 py-1 sm:px-3 sm:py-2 lg:px-2 lg:py-1 xl:px-3 xl:py-2'
                                }`}
                              >
                                <span 
                                  className={`text-white font-normal italic leading-none ${
                                    project.id === 9 || project.id === 10
                                      ? 'text-[9px]' // Font kecil untuk gambar 9 & 10
                                      : 'text-[9px] sm:text-[12px] lg:text-[9px] xl:text-[12px]'
                                  }`}
                                  style={{ 
                                    fontFamily: '"Segoe UI", SegoeUI, sans-serif'
                                  }}
                                >
                                  {tag}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Layout simple untuk gambar lain (tanpa detail)
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-[#6B1F1F] px-8 py-3 rounded-full">
                        <span 
                          className="text-white text-lg font-medium italic"
                          style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
                        >
                          {project.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Masonry>
          </div>

          {/* Button Selengkapnya */}
          <div 
            className="flex justify-center transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            <button 
              className="flex items-center gap-1.5 sm:gap-2 px-5 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 
                         border-2 border-[#A20000] text-[#A20000] 
                         rounded-full font-semibold hover:bg-[#A20000] hover:text-white 
                         transition-all duration-300 text-[12px] sm:text-[13px] lg:text-[16px]"
              style={{ fontFamily: '"Segoe UI", SegoeUI, sans-serif' }}
            >
              SELENGKAPNYA
              <svg 
                className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
