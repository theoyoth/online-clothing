import Image from "next/legacy/image";
import { Slide } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";

// import { ShirtBg } from "../lib/assets";

const ShirtBg = [
  { url: tshirt0 },
  { url: tshirt1 },
  { url: tshirt2 },
  { url: jacket },
];

const Home = () => {
  return (
    <div className="text-center h-screen bg-orange-400">
      {/* <Slide>
        {ShirtBg.map((item, index) => (
          <div key={index}>
            <div style={{ backgroundImage: `url(${item.clothes})` }}></div>
          </div>
        ))}
      </Slide> */}
      <SimpleImageSlider
        images={ShirtBg}
        width={600}
        height={600}
        showBullets={true}
        showNavs={true}
      />
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
