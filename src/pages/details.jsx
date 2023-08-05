import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data.js";
import Navbar from "../components/navbar.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Details = () => {
  const { id } = useParams(data);
  const [products] = useState(data);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  console.log(product);
  const {
    name,
    catimg,
    description,
    alamat,
    kontak,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  } = product;
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ].filter(Boolean);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[250px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[250px] bg-black/40 flex justify-between items-center">
            {/*Overlay*/}
            <div className="w-full text-center items-center">
              <h1 className="px-6 text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
                {name}
              </h1>
              <h1 className="px-6 text-base lg:text-xl font-medium mt-8 text-center">
                Alamat: {alamat}
              </h1>
            </div>
          </div>
          <img
            className="w-full max-h-[250px] object-cover"
            src={catimg}
            alt="/"
          />
        </div>
        <div className="flex h-[250px]">
          <div>
            {images.length > 1 ? (
              <div className="mt-8 items-center w-[320px]">
                <Slider {...settings}>
                  {images.map((images, index) => (
                    <div key={index}>
                      <img
                        className="w-[320px] max-h-[320px] object-cover"
                        src={images}
                        alt="/"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              images.length === 1 && (
                <div className="mt-8 items-center w-[350px]">
                  <img
                    className="w-[350px] max-h-[350px] object-cover"
                    src={image1}
                    alt="/"
                  />
                </div>
              )
            )}
          </div>
          <div className="w-3/4 items-center justify-center">
            <div>
              <h1 className="px-6 text-base md:text-xl lg:text-2xl font-medium mt-8 justify-center">
                {description}
              </h1>
            </div>
            <div className="mt-5">
              <h1 className="text-left px-6 font-medium text-base md:text-xl lg:text-2xl">
                Hubungi kami:
                <a href={`https://wa.me/${kontak}`} className="w-fit h-fit">
                  <button className="flex m-1 border-green-600 text-green-600">
                    <AiOutlineWhatsApp size={20} className="mr-2 mt-1" />
                    <h2 className="text-xl">{kontak}</h2>
                  </button>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
