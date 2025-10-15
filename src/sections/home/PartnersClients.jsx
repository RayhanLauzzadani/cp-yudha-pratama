import { useEffect, useMemo, useRef, useState } from "react";
import brandMark from "../../assets/brand/logo-mark.png";

// Helper: akses semua ikon di folder icons (level 1)
function useIconsContext() {
  return useMemo(() => {
    try {
      return require.context("../../assets/icons", false, /\.(png|jpe?g|svg)$/i);
    } catch (e) {
      return null;
    }
  }, []);
}

// Pastikan modul asset dari webpack dikonversi menjadi URL string
function toUrl(mod) {
  if (!mod) return null;
  if (typeof mod === "string") return mod;
  if (typeof mod === "object" && typeof mod.default === "string") return mod.default;
  return null;
}

// Ambil satu file pertama yang mengandung salah satu kata kunci
function firstMatch(req, keywords) {
  if (!req) return null;
  const keys = req.keys();
  // exclude ikon UI internal apapun yang memuat kata kunci berikut
  const EXCLUDE = /(^(group_|vector_|download|building|medal|laboratory|world|rock|truck))|\b(icon|ic|ui)\b/i;
  const found = keys.find((k) => {
    const base = k.replace("./", "").toLowerCase();
    if (EXCLUDE.test(base)) return false;
    return keywords.some((kw) => base.includes(kw));
  });
  return found ? toUrl(req(found)) : null;
}

// Definisikan urutan persis seperti desain
const MITRA_ORDER = [
  { label: "Waskita", keys: ["waskita"] },
  { label: "Waskita Precast", keys: ["waskita_precast", "precast"] },
  { label: "WIKA", keys: ["wika"] },
  { label: "Nindya", keys: ["nindya"] },
  { label: "PP", keys: ["pp"] },
  { label: "Hutama Karya", keys: ["hutama", "hk"] },
  { label: "Abipraya", keys: ["abipraya"] },
  { label: "Archiprada", keys: ["archiprada"] },
  { label: "AKA", keys: ["aka"] },
];

const KLIEN_ORDER = [
  { label: "Lotus SG Lestari", keys: ["lotus", "lotus_sg"], public: "/assets/clients/clients_lotus_sg.png" },
  { label: "IKM", keys: ["ikm"], public: "/assets/clients/clients_ikm.png" },
  { label: "Selo Group", keys: ["selogrup", "selo", "selogroup", "selo_group"], public: "/assets/clients/clients_selogroup.png" },
  { label: "SWB", keys: ["sw3", "swb"], public: "/assets/clients/clients_swb.png" },
];

function resolveLogo(req, item) {
  const url = firstMatch(req, item.keys);
  if (url) return url;
  if (item.public) return item.public;
  return null;
}

// Pencarian yang lebih ketat berbasis token untuk file gabungan
function normalizeBase(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, " ");
}
function findByTokens(req, tokens) {
  if (!req) return null;
  const keys = req.keys();
  for (const k of keys) {
    const base = normalizeBase(k.replace("./", "").replace(/\.(png|jpe?g|svg)$/i, ""));
    if (tokens.every((t) => base.includes(t))) {
      return toUrl(req(k));
    }
  }
  return null;
}
function findByCandidates(req, candidateTokenSets) {
  for (const tokens of candidateTokenSets) {
    const hit = findByTokens(req, tokens);
    if (hit) return hit;
  }
  return null;
}

function makeSpriteItems(src, parts, labels) {
  return new Array(parts).fill(0).map((_, i) => ({
    src,
    alt: labels?.[i] || `Logo ${i + 1}`,
    sprite: { parts, index: i },
  }));
}

export default function PartnersClients() {
  const req = useIconsContext();

  // Kurasi dengan urutan pasti + label alt
  const mitraItems = useMemo(() => {
    // Deteksi file gabungan
    const sprWaskita = findByTokens(req, ["waskita", "precast"]) || findByTokens(req, ["waskita","waskitaprecast"]) || findByTokens(req, ["waskita"]);
    const sprNindyaPP = findByTokens(req, ["nindya"]) || findByTokens(req, ["pp", "cons"]) || findByTokens(req, ["nindya","pp"]);
    const sprHKAbiArchi = findByTokens(req, ["hutsms"]) || findByTokens(req, ["hut", "karya"]) || findByTokens(req, ["abipraya"]) || findByTokens(req, ["archiprada"]);

    const items = [];
    // Baris 1: Waskita, Waskita Precast, WIKA
    if (sprWaskita) items.push(...makeSpriteItems(sprWaskita, 2, ["Waskita","Waskita Precast"]).slice(0,2));
    else items.push({ src: resolveLogo(req, { keys: ["waskita"] }) }, { src: resolveLogo(req, { keys: ["waskita_precast","precast"] }) });
    items.push({ src: resolveLogo(req, { keys: ["wika"] }), alt: "WIKA" });
    // Baris 2: Nindya, PP, Hutama Karya, Abipraya, Archiprada
    if (sprNindyaPP) items.push(...makeSpriteItems(sprNindyaPP, 2, ["Nindya","PP"]).slice(0,2));
    else items.push({ src: resolveLogo(req, { keys: ["nindya"] }) }, { src: resolveLogo(req, { keys: ["pp"] }) });
    if (sprHKAbiArchi) items.push(...makeSpriteItems(sprHKAbiArchi, 3, ["Hutama Karya","Abipraya","Archiprada"]).slice(0,3));
    else items.push(
      { src: resolveLogo(req, { keys: ["hutama","hk"] }) },
      { src: resolveLogo(req, { keys: ["abipraya"] }) },
      { src: resolveLogo(req, { keys: ["archiprada"] }) }
    );
    // Tambah AKA (posisi 9)
    items.push({ src: resolveLogo(req, { keys: ["aka"] }), alt: "AKA" });

    return items.map((o,i) => ({ src: o.src || brandMark, alt: o.alt || `Mitra ${i+1}`, sprite: o.sprite }));
  }, [req]);

  const klienItems = useMemo(() => {
    return KLIEN_ORDER.map((k) => ({ src: resolveLogo(req, k), alt: k.label }));
  }, [req]);

  // Ambil semua ikon non-UI dari src/icons untuk fallback "baca isi folder"
  const allNonUiSrcs = useMemo(() => {
    if (!req) return [];
    const EXCLUDE = /(^(group_|vector_|download|building|medal|laboratory|world|rock|truck))|\b(icon|ic|ui)\b/i;
    return req
      .keys()
      .filter((k) => !EXCLUDE.test(k.replace("./", "").toLowerCase()))
      .map((k) => ({ src: toUrl(req(k)), alt: "Logo" }))
      .filter((o) => Boolean(o.src));
  }, [req]);

  const slides = useMemo(() => {
    let useMitra = mitraItems.filter((i) => !!i.src);
    let useKlien = klienItems.filter((i) => !!i.src);
    // Jika kedua kurasi kosong, pakai semua non-UI dari folder dan bagi dua
    if (useMitra.length === 0 && useKlien.length === 0 && allNonUiSrcs.length) {
      const half = Math.ceil(allNonUiSrcs.length / 2);
      useMitra = allNonUiSrcs.slice(0, half);
      useKlien = allNonUiSrcs.slice(half);
    }
    // Last resort: jangan pernah kosong
    if (!useMitra || useMitra.length === 0) useMitra = [{ src: brandMark, alt: "Brand" }];
    if (!useKlien || useKlien.length === 0) useKlien = [{ src: brandMark, alt: "Brand" }];
    return [useMitra, useKlien];
  }, [mitraItems, klienItems, allNonUiSrcs]);

  const [idx, setIdx] = useState(() => (slides[0]?.length ? 0 : slides[1]?.length ? 1 : 0)); // 0 = Mitra, 1 = Klien
  const total = slides.length || 1; // idealnya 2
  const timerRef = useRef(null);

  // Pastikan kita menampilkan slide yang tidak kosong terlebih dahulu
  useEffect(() => {
    if (slides[0] && slides[0].length === 0 && slides[1] && slides[1].length > 0) {
      setIdx(1);
    } else {
      setIdx(0);
    }
  }, [slides]);

  useEffect(() => {
    // auto-rotate tiap 4 detik
    if (total <= 1) return;
    timerRef.current = setInterval(() => setIdx((p) => (p + 1) % total), 4000);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const goTo = (i) => {
    setIdx(i);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <section id="partners" aria-label="Mitra & Klien" className="relative w-full font-jakarta overflow-hidden">
      {/* Background merah gradasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_-10%_-10%,#C43131_0%,#8E1111_40%,#6F0B0B_70%,#5A0A0A_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%_65%,rgba(0,0,0,0.10)_100%)] mix-blend-overlay" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Judul dengan underline dinamis */}
        <div className="flex items-end justify-center gap-2 text-center">
          <span className="relative inline-block">
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">Mitra</span>
            <span
              className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded-full transition-opacity duration-300 ${
                idx === 0 ? "bg-white opacity-100" : "opacity-0"
              }`}
            />
          </span>
          <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">&</span>
          <span className="relative inline-block">
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">Klien</span>
            <span
              className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded-full transition-opacity duration-300 ${
                idx === 1 ? "bg-white opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </div>

        {/* Kartu/Frame putih */}
        <div className="mt-10 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.20)] border border-white/80 p-4 sm:p-6 md:p-8">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${idx * 100}%)`, width: `${total * 100}%` }}
            >
              {Array.from({ length: total }).map((_, i) => (
                <div key={`slide-${i}`} className="w-full flex-shrink-0">
                  {/* Grid logo: Mitra (md: 5 kolom, 2 baris; baris kedua digeser agar 4 logo center), Klien (md: 4 kolom, 1 baris) */}
                  <div className={`grid gap-x-8 gap-y-10 place-items-center ${i === 0 ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"}`}>
                    {(slides[i] || []).map((item, j) => {
                      // Untuk slide Mitra (i===0) dengan 9 item: item ke-6 (index 5) mulai baris kedua, geser ke kolom ke-2 agar 4 logo center (kolom 2..5)
                      const shiftClass = i === 0 && j === 5 ? "md:col-start-2" : "";
                      // Jika item.sprite ada, gunakan background-position untuk menampilkan 1 bagian dari sprite secara proporsional
                      if (item.sprite && item.sprite.parts > 1) {
                        const cols = item.sprite.parts; // bagi rata horizontal
                        const partPct = 100 / cols;
                        const x = (item.sprite.index * partPct) + partPct / 2; // tengah bagian
                        const style = {
                          backgroundImage: `url(${item.src})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: `${cols * 100}% 100%`,
                          backgroundPosition: `${x}% 50%`,
                        };
                        return (
                          <div key={`logo-${i}-${j}`} className={`w-full h-20 sm:h-24 md:h-28 flex items-center justify-center ${shiftClass}`}>
                            <div aria-label={item.alt || `logo-${i}-${j}`} style={style} className="w-full max-w-[170px] md:max-w-[180px] h-full bg-contain bg-center" />
                          </div>
                        );
                      }
                      return (
                        <div key={`logo-${i}-${j}`} className={`w-full h-20 sm:h-24 md:h-28 flex items-center justify-center ${shiftClass}`}>
                          <img
                            src={item.src}
                            alt={item.alt || `logo-${i}-${j}`}
                            className="max-h-full max-w-[170px] md:max-w-[180px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            onError={(e) => {
                              if (e.currentTarget.src !== window.location.origin + brandMark) {
                                e.currentTarget.src = brandMark;
                              }
                            }}
                            draggable={false}
                          />
                        </div>
                      );
                    })}
                    {slides[i] && slides[i].length === 0 && (
                      <div className="col-span-full text-center text-[#383737]/70 py-10">Logo belum tersedia di folder icons.</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {total > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={`dot-${i}`}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-[#A20000]" : "w-2.5 bg-[#D4D4D4] hover:bg-[#BDBDBD]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

