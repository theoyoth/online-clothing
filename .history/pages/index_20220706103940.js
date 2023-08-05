import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const Properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  const colorBg = [
    "bg-blue-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-indigo-500",
  ];

  return (
    <div className="slide-container text-center h-screen bg-orange-400">
      <Slide {...Properties}>
        {ShirtBg.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full h-screen ${
              colorBg[Math.floor(Math.random() * colorBg.length)]
            }`}
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
