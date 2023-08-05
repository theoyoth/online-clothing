import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ShirtBg, ModelClothing } from "../../lib/assets";

const ImageSlider = () => {
  const Properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 400,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <>
      <Slide {...Properties}>
        {ModelClothing.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-full h-screen`}
          >
            <img src={item.url} alt={item.name} className="object-contain" />
          </div>
        ))}
      </Slide>
    </>
  );
};

export default ImageSlider;
