import { Link } from "react-router-dom";

// === Import aset ===
import iconBg from "../assets/icons/icon_bg.png";
import vectorTop from "../assets/icons/vector_top.png";
import vectorBot from "../assets/icons/vector_bot.png";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white font-jakarta">
      {/* Dekorasi atas dan bawah */}
      <img
        src={vectorTop}
        alt=""
        className="pointer-events-none absolute top-0 left-0 w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 opacity-60 select-none"
      />
      <img
        src={vectorBot}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 opacity-60 select-none"
      />

      {/* Logo latar belakang */}
      <img
        src={iconBg}
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[10rem] sm:w-[15vw] md:w-[32vw] lg:w-[35vw] xl:w-[30vw] select-none"
      />

      {/* Konten utama */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          {/* Angka 404 */}
          <h1
            className="font-bold text-red-700 leading-none 
                       text-[30px] sm:text-[90px] md:text-[3rem] lg:text-[4rem]"
          >
            404
          </h1>

          {/* Garis merah */}
          <div className="mx-auto my-3 h-[3px] sm:h-[4px] md:h-[5px] w-16 sm:w-20 md:w-24 lg:w-28 bg-red-700 rounded-full" />

          {/* Teks deskripsi */}
          <p className="text-gray-600 leading-none text-[12px] sm:text-[60px] md:text-[1.2rem] lg:text-[1.6rem]  ">
            PAGE NOT FOUND
          </p>



          {/* Tombol kembali */}
          <Link
            to="/"
            className="mt-2 sm:mt-6 md:mt-6 lg:mt-9 inline-flex items-center justify-center rounded-full bg-red-700 
                       px-4 py-2 sm:px-6 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-6
                       text-[10px] sm:text-base md:text-[1rem] lg:text-[1.5rem] font-medium text-white 
                       shadow transition hover:bg-red-800 focus-visible:outline focus-visible:outline-2 
                       focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
