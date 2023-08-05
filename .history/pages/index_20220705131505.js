import Image from "next/legacy/image";
import SimpleImageSlider from "react-simple-image-slider";

import { ShirtBg } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen bg-orange-400">
      {ShirtBg.map(item, (i) => {
        <div key={i}>
          <SimpleImageSlider
            images={item.clothes}
            width={600}
            height={600}
            autoPlay={true}
            showBullets={true}
            showNavs={true}
          />
        </div>;
      })}
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
