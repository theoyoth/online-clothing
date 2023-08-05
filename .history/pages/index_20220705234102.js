import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const Images = [
    "img/clothing/t-shirt-0.png",
    "img/clothing/t-shirt-1.png",
    "img/clothing/t-shirt-2.png",
    "img/clothing/jacket.png",
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
      <Slide>
        {Images.map((item, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            {/* <img
              src={item}
              alt="cover"
              className="w-3/4 object-cover rounded-lg shadow-xl"
            /> */}
            <div style={{ backgroundImage: `url(${item})` }}></div>
          </div>
        ))}
      </Slide>
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
