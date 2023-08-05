import React from "react";
import { data } from "../dataumkm.js";
import Navbar from "../components/navbar.jsx";
import Infografis from "../assets/infografis.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Data UMKM Desa Reco
        </h1>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-2 border py-2">No</th>
              <th className="px-4 border py-2">Nama Usaha</th>
              <th className="px-4 border py-2">Pemilik</th>
              <th className="px-4 border py-2">Dusun</th>
              <th className="px-4 border py-2">Produk</th>
              <th className="px-4 border py-2">Kegiatan Usaha</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{item.nomor}</td>
                <td className="border px-4 py-2">{item.namaUsaha}</td>
                <td className="border px-4 py-2">{item.pemilik}</td>
                <td className="border px-4 py-2">{item.dusun}</td>
                <td className="border px-4 py-2">{item.produk}</td>
                <td className="border px-4 py-2">{item.kegiatanUsaha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-[640px] mx-auto justify-center items-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Infografis Data UMKM Desa Reco
        </h1>
        <img src={Infografis} alt="Infografis Data UMKM"></img>
      </div>
    </div>
  );
}

export default App;
