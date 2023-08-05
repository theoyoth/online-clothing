import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    return () => {
      setImages(ShirtBg);
    };
  }, []);

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
        {ShirtBg.map((item, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              src={item.url}
              alt={item.name}
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
