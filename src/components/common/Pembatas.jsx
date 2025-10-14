// src/components/common/Pembatas.jsx
import pembatas1 from "../../assets/icons/pembatas_1.png";

export default function Pembatas({ 
  text = "MENGUTAMAKAN HASIL KERJA",
  gradientFrom = "#A20000",
  gradientTo = "#800000",
  mobileWidth = "260px" // Custom width untuk mobile
}) {
  return (
    <div className="w-full flex justify-center bg-white relative">
      <img 
        src={pembatas1} 
        alt="Pembatas" 
        className="w-full h-[56px] lg:h-[75px] object-cover"
      />
      {/* Gradient overlay: custom colors */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${gradientFrom} 0%, ${gradientTo} 50%, ${gradientFrom} 100%)`,
          mixBlendMode: 'multiply'
        }}
      />
      {/* Text di tengah - Mobile: custom width + 40% spacing, Desktop: auto width + 88% spacing */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        {/* Mobile text (< 992px) */}
        <p 
          className="lg:hidden text-white text-[12px] font-extrabold italic text-center"
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: '0.4em',
            minWidth: mobileWidth
          }}
        >
          {text}
        </p>
        
        {/* Desktop text (≥ 992px) */}
        <p 
          className="hidden lg:block text-white text-[15px] font-extrabold italic text-center"
          style={{ 
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: '0.88em'
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
