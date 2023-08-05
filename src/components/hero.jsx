import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center text-center items-center">
          {/*Overlay*/}
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Portal <span className="text-yellow-500">UMKM</span>
          </h1>
          <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-yellow-500"> Desa Reco </span> Wonosobo
          </h1>
          <h2 className="px-6 sm:px-5 md:px-6 font-medium pt-2 md:pt-4 lg:pt-7 text-center text-xs sm:text-base lg:text-xl lg:w-[700px] md:w-[500px]">
            Selamat datang di Portal UMKM Desa Reco! Temukan keindahan Desa
            Reco, Kertek, Wonosobo di ketinggian 1300 MDPL. Belanja produk unik
            dari pengusaha lokal dengan mudah dan aman. Dukung pertumbuhan
            ekonomi lokal dengan berbelanja produknya. Bergabunglah sekarang dan
            rasakan keajaiban Desa Reco dalam genggaman tangan Anda!
          </h2>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/17231384/pexels-photo-17231384/free-photo-of-mountain-valley-panorama-with-helderberg-escarpment-new-york-state-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
