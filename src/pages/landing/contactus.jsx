import React from "react";
import Navbar from "../../components/navbar";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[400px] border rounded-lg p-10 mx-auto text-center text-3xl items-center">
        <div className="mt-5">
          Tim KKN PPM UGM Kertek Sub-unit Reco Periode II Pada bulan Juni -
          Agustus 2023.
        </div>
        <ul className="flex flex-col p-4 text-gray-800 gap-2">
          <li className="text-2xl py-4 flex">
            <a href="https://www.instagram.com/kknkertek.ugm/" className="flex">
              <AiFillInstagram size={30} className="mr-2" />
              @kknkertek.ugm
            </a>
          </li>
          <li className="text-2xl py-4 flex">
            <a href="https://www.tiktok.com/@kaharsayankertek" className="flex">
              <BiLogoTiktok size={30} className="mr-2" />
              @kaharsayankertek
            </a>
          </li>
          <li className="text-2xl py-4 flex">
            <a href="https://www.tiktok.com/@kaharsayankertek" className="flex">
              <AiOutlineMail size={30} className="mr-2" />
              kknppm.kertek@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
