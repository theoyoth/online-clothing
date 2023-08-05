import Image from "next/legacy/image";
import { Slide, Zoom } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  const zoomProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };

  return (
    <div className="text-center h-screen">
      <SimpleImageSlider
        images={ShirtBg}
        width={600}
        height={600}
        showBullets={true}
        showNavs={true}
      />
      {/* <Zoom></Zoom> */}
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
