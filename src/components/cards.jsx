import React from "react";

const Cards = () => {
  return (
    <div className="max-q-[1640px] mx-auto p-4 py-2 grid md:grid-cols-3 gap-6">
      {/*Cards */}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl pt-14 lg:pt-16 text-center">
            Makanan Khas
          </p>
          <p className="px-2 pt-2 text-center">di bawah kaki gunung Sindoro</p>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/6401669/pexels-photo-6401669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl pt-14 lg:pt-16 text-center">
            Hasil Pertanian
          </p>
          <p className="px-2 pt-2 text-center">oleh Kelompok Tani Desa Reco</p>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/7494170/pexels-photo-7494170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl pt-14 lg:pt-16 text-center">
            Berbagai Kerajinan
          </p>
          <p className="px-2 pt-2 text-center">oleh Pengrajin Desa Reco</p>
        </div>
        <img
          className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Cards;
