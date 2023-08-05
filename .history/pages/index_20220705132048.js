import Image from "next/legacy/image";
import { Slide } from "react-slideshow-image";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen bg-orange-400">
      <Slide>
        {ShirtBg.map((slideImage, index) => (
          <div key={index}>
            <div style={{ backgroundImage: `url(${slideImage.clothes})` }}>
              <span>{slideImage.name}</span>
            </div>
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
