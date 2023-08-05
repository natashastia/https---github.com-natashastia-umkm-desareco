import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillHome,
  AiFillInfoCircle,
} from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillClipboardDataFill } from "react-icons/bs";

const Navbar = () => {
  const [side, setSide] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSide(!side)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Portal UMKM <span className="font-bold">Desa Reco</span>
        </h1>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Cari UMKM"
        />
      </div>
      {/* Mobile menu*/}
      {/* Overlay*/}
      {side ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Side drawer menu*/}
      <div
        className={
          side
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSide(!side)}
          size={20}
          className="absolute right-0 top-cursor-pointer "
        />
        <h2 className="text-2xl px-4 pt-6">
          Portal UMKM <span className="font-bold">Desa Reco</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 gap-2">
            <li className="text-xl py-4 flex">
              <a href="/" className="flex">
                <AiFillHome size={25} className="mr-2" />
                Beranda
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/data" className="flex">
                <BsFillClipboardDataFill size={25} className="mr-2" />
                Data UMKM
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/aboutus" className="flex">
                <AiFillInfoCircle size={25} className="mr-2" />
                Tentang Kami
              </a>
            </li>
            <li className="text-xl py-4 flex">
              <a href="/contactus" className="flex">
                <BiSolidPhoneCall size={25} className="mr-2" />
                Kontak Kami
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
