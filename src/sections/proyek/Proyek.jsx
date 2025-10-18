// src/sections/proyek/Proyek.jsx
import { useState, useEffect, useMemo, useRef } from "react";
import Masonry from "react-masonry-css";

// Skeleton components
import { SkeletonBlock, SkeletonLine, SkeletonChip } from "../../components/common/Skeleton";

// === Import background ===
import jaringBg from "../../assets/icons/jaring.png";
import jaringMobileBg from "../../assets/icons/jaring_mobile.png";

// === Import data ===
import { projects, projectCategories } from "../../data/projects";

// Cache rasio di memori (bertahan sepanjang sesi)
const ratioCache = new Map(); // key: image src, value: number (persentase paddingTop)

export default function Proyek() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [activeCategory, setActiveCategory] = useState("semua");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingHeader, setLoadingHeader] = useState(true);
  const [loadingGrid, setLoadingGrid] = useState(true); // loading awal + saat ganti filter

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Header shimmer singkat saat mount
  useEffect(() => {
    const t1 = setTimeout(() => setLoadingHeader(false), 300);
    const t2 = setTimeout(() => setLoadingGrid(false), 400); // grid siap sedikit setelah header
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Filter proyek berdasarkan kategori dengan logic khusus
  const filteredProjects = useMemo(() => {
    if (activeCategory === "semua") return projects;
    return projects.filter((project) => {
      if (activeCategory === "mega-proyek") {
        return (
          project.category === "mega-proyek" ||
          (project.tags && project.tags.includes("FasUm"))
        );
      } else if (activeCategory === "fasilitas-umum") {
        return project.tags && project.tags.includes("FasUm");
      }
      return project.category === activeCategory;
    });
  }, [activeCategory]);

  // Handle category change dengan smooth transition + skeleton grid
  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setIsTransitioning(true);
    setLoadingGrid(true);
    // kecilkan delay agar responsif
    setTimeout(() => setActiveCategory(categoryId), 50);
    // beri waktu singkat untuk grid skeleton tampil, lalu nonaktifkan
    setTimeout(() => {
      setIsTransitioning(false);
      setLoadingGrid(false);
    }, 420);
  };

  // Breakpoints untuk masonry grid
  const breakpointColumns = {
    default: 5,
    1280: 4,
    992: 3,
    768: 3,
    640: 2,
  };

  return (
    <section
      id="proyek"
      className="relative min-h-screen pt-10 pb-10 bg-[#FAFAFA] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${isMobile ? jaringMobileBg : jaringBg})`,
      }}
    >
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {loadingHeader ? (
            <div className="max-w-3xl mx-auto space-y-3">
              <SkeletonLine w="w-1/3 mx-auto" />
              <SkeletonLine w="w-2/3 mx-auto" />
              <SkeletonLine w="w-1/2 mx-auto" />
            </div>
          ) : (
            <>
              <h2
                className="font-extrabold text-[#A20000] mb-4 
                           text-[30px] sm:text-[32px] md:text-[34px] lg:text-[40px] lg:mt-1.5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-4px",
                }}
              >
                Proyek
              </h2>

              <p
                className="max-w-2xl mx-auto
                           text-[15px] sm:text-[16px] md:text-[17px] lg:text-[20px]"
                style={{
                  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  fontWeight: 400,
                  color: "#393939",
                }}
              >
                Lihat koleksi proyek konstruksi yang telah kami selesaikan dengan
                kualitas terbaik
              </p>
            </>
          )}
        </div>

        {/* White Rectangle Container */}
        <div
          className="bg-white rounded-2xl shadow-2xl mx-[14px] lg:mx-[100px] py-8 lg:py-12 px-6 lg:px-10 transition-[min-height] duration-200"
          style={{ minHeight: 480 }}
        >
          {/* Tab Filter */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`
                  rounded-[5px] text-[11px] sm:text-[12px] lg:text-[14px] transition-all duration-300 ease-in-out
                  ${
                    activeCategory === cat.id
                      ? "border border-[#C4C4C4] bg-[#FAFAFA] px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] lg:py-[6px]"
                      : "border border-transparent px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] lg:py-[6px] hover:opacity-70"
                  }
                `}
                style={{
                  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  fontWeight: 450,
                  color: "#454545",
                  textShadow:
                    activeCategory === cat.id ? "0 0 0.5px #454545" : "none",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid: tampilkan skeleton saat loadingGrid */}
          {loadingGrid ? (
            <GridSkeleton />
          ) : (
            <div
              className="transition-opacity duration-150"
              style={{ opacity: isTransitioning ? 0.6 : 1 }}
            >
              <Masonry
                key={activeCategory}
                breakpointCols={breakpointColumns}
                className="flex gap-4 lg:gap-6"
                columnClassName="flex flex-col gap-4 lg:gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <CardProject key={project.id} project={project} index={index} />
                ))}
              </Masonry>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Grid Skeleton: placeholder saat loading awal/ubah filter ---------- */
function GridSkeleton() {
  // Perkiraan 4 kolom skeleton agar tampak rapi di desktop
  const columns = 4;
  const rowsPerCol = 5;
  return (
    <div className="flex gap-4 lg:gap-6">
      {Array.from({ length: columns }).map((_, col) => (
        <div key={col} className="flex flex-col gap-4 lg:gap-6 w-full">
          {Array.from({ length: rowsPerCol }).map((__, i) => (
            <div key={i} className="w-full">
              <div className="w-full relative" style={{ paddingTop: "75%" }}>
                <SkeletonBlock h="h-full" />
              </div>
              <div className="mt-3 space-y-2">
                <SkeletonLine w="w-3/4" />
                <SkeletonLine w="w-1/2" />
                <div className="flex gap-2">
                  <SkeletonChip />
                  <SkeletonChip w="w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- Card Project: natural ratio via preload, anti glitch ---------- */
function CardProject({ project, index }) {
  const [loaded, setLoaded] = useState(false);
  const [paddingTop, setPaddingTop] = useState(() => {
    const cached = ratioCache.get(project.image);
    return typeof cached === "number" ? cached : null;
  });
  const preloadRef = useRef(null);

  useEffect(() => {
    if (paddingTop != null) return; // sudah ada ratio

    // Preload image untuk baca natural width/height (sekali per src)
    const img = new Image();
    preloadRef.current = img;
    img.src = project.image;
    img.decoding = "async";
    img.loading = "eager";
    img.onload = () => {
      const w = img.naturalWidth || 1;
      const h = img.naturalHeight || 1;
      const ratioPct = (h / w) * 100; // padding-top percentage
      ratioCache.set(project.image, ratioPct);
      setPaddingTop(ratioPct);
    };
    img.onerror = () => {
      const ratioPct = 75; // fallback rasio
      ratioCache.set(project.image, ratioPct);
      setPaddingTop(ratioPct);
    };

    return () => {
      preloadRef.current = null;
    };
  }, [project.image, paddingTop]);

  const wrapperStyle =
    paddingTop != null ? { paddingTop: `${paddingTop}%` } : { paddingTop: "75%" };

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
      style={{ animationDelay: `${index * 25}ms` }}
    >
      {/* Wrapper mengunci tinggi sesuai rasio natural */}
      <div className="w-full relative bg-[#f2f2f2]" style={wrapperStyle}>
        {/* Skeleton shimmer sementara */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
        )}

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            contentVisibility: "auto",
          }}
        />
      </div>

      {/* Overlay hover dengan gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text overlay */}
      {project.subtitle ? (
        <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 md:p-6">
          <div className="text-left">
            <h3
              className={`font-bold text-white mb-1 ${
                project.id === 9 || project.id === 10
                  ? "text-[11px]"
                  : "text-[11px] sm:text-[15px] lg:text-[11px] xl:text-[15px]"
              }`}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: "1.3",
              }}
            >
              {project.title}
            </h3>

            {project.subtitle && project.subtitle !== "-" && (
              <p
                className={`text-white mb-2 sm:mb-3 ${
                  project.id === 9 || project.id === 10
                    ? "text-[10px]"
                    : "text-[10px] sm:text-[14px] lg:text-[10px] xl:text-[14px]"
                }`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: "1.3",
                  fontWeight: 400,
                }}
              >
                {project.subtitle}
              </p>
            )}

            {project.tags && (
              <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                {project.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className={`bg-[#5A0606] rounded-full flex items-center ${
                      project.id === 9 || project.id === 10
                        ? "px-2 py-1"
                        : "px-2 py-1 sm:px-3 sm:py-2 lg:px-2 lg:py-1 xl:px-3 xl:py-2"
                    }`}
                  >
                    <span
                      className={`text-white font-normal italic leading-none ${
                        project.id === 9 || project.id === 10
                          ? "text-[9px]"
                          : "text-[9px] sm:text-[12px] lg:text-[9px] xl:text-[12px]"
                      }`}
                      style={{
                        fontFamily:
                          '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
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
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#6B1F1F] px-8 py-3 rounded-full">
            <span
              className="text-white text-lg font-medium italic"
              style={{
                fontFamily:
                  '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              {project.category.replace("-", " ")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
