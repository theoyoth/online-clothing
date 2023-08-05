import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const Images = [
    { url: "img/clothing/t-shirt-0.png" },
    { url: "img/clothing/t-shirt-1.png" },
    { url: "img/clothing/t-shirt-2.png" },
    { url: "img/clothing/jacket.png" },
  ];

  const Properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className="indicator">{i + 1}</div>,
  };

  return (
    <div className="slide-container text-center h-screen">
      <Slide {...Properties}>
        {Images.map((item, index) => (
          <div key={index} className="each-slide">
            <img
              src={item.url}
              alt="cover"
              className="w-3/4 object-cover rounded-lg shadow-xl"
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
