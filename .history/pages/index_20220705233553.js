import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const Images = [
    "../public/img/clothing/t-shirt-0.png",
    "../public/img/clothing/t-shirt-1.png",
    "../public/img/clothing/t-shirt-2.png",
    "../public/img/clothing/jacket.png",
  ];

  const zoomProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };

  return (
    <div className="text-center h-screen">
      <Zoom {...zoomProperties}>
        {Images.map((item, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              src={item}
              alt="cover"
              className="w-3/4 object-cover rounded-lg shadow-xl"
            />
          </div>
        ))}
      </Zoom>
      {/* <Image
        src={ShirtBg[0].tshirt0}
        width="600px"
        height="600px"
        alt={ShirtBg[0].name}
      /> */}
      <div className="bg"></div>
    </div>
  );
};

export default Home;
