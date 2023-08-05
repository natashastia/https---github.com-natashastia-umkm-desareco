import React, { useState } from "react";
import { data } from "../data.js";
import { Link } from "react-router-dom";

const Product = () => {
  //  console.log(data);
  const [product, setProduct] = useState(data);
  const filterType = (category) => {
    setProduct(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-ww-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Produk UMKM Desa Reco
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <p className="font-bold text-gray-700 text-xl">Filter</p>
        <div className="flex flex-wrap">
          <button
            onClick={() => setProduct(data)}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterType("makanan")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Makanan
          </button>
          <button
            onClick={() => filterType("minuman")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Minuman
          </button>
          <button
            onClick={() => filterType("kerajinan")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Kerajinan
          </button>
          <button
            onClick={() => filterType("pertanian")}
            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Pertanian
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {product.map((item, index) => (
          <Link key={index} to={`/details/${item.id}`}>
            <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
              <img
                src={item.image1}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between font-medium px-2 py-4">
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
