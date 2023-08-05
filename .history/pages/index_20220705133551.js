import Image from "next/legacy/image";
import { Slide } from "react-slideshow-image";
import SimpleImageSlider from "react-simple-image-slider";

// import { ShirtBg } from "../lib/assets";

// "../public/img/clothing/t-shirt-0.png";
// "../public/img/clothing/t-shirt-1.png";
// "../public/img/clothing/t-shirt-2.png";
// "../public/img/clothing/jacket.png";
import tshirt0 from "../public/img/clothing/t-shirt-0.png";
import tshirt1 from "../public/img/clothing/t-shirt-1.png";
import tshirt2 from "../public/img/clothing/t-shirt-2.png";
import jacket from "../public/img/clothing/jacket.png";

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
        width={800}
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
