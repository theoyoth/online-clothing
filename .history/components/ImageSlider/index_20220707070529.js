import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ShirtBg } from "../lib/assets";

const ImageSlider = () => {
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
    <>
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
    </>
  );
};

export default ImageSlider;
