import React from "react";
import Navbar from "../../components/navbar";
import foto from "../../assets/foto.png";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[700px] mt-10 mx-auto text-center text-3xl items-center">
        <img
          src={foto}
          alt="Foto KKN Kertek UGM"
          className="max-w-[700px] max-h-[500px]"
        />
        <div className="mt-5">
          Website Katalog UMKM ini dikembangkan oleh Tim KKN PPM UGM Kertek
          Sub-unit Reco Periode II Pada bulan Juni - Agustus 2023.
        </div>
      </div>
    </div>
  );
}

export default Homepage;
