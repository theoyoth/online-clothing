import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const Images = [
    { url: "img/clothing/t-shirt-0.png", name: "shirt 1" },
    { url: "img/clothing/t-shirt-1.png", name: "shirt 2" },
    { url: "img/clothing/t-shirt-2.png", name: "shirt 3" },
    { url: "img/clothing/jacket.png", name: "jacket" },
  ];

  const Properties = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <div className="slide-container text-center h-screen bg-orange-400">
      <Slide {...Properties}>
        {ShirtBg.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-full"
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-[45%] object-cover rounded-lg"
            />
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
