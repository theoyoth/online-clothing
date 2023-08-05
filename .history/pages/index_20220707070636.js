import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ShirtBg } from "../lib/assets";
import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div className="slide-container text-center h-screen bg-orange-400">
      <ImageSlider />
      <TshirtColleges />
    </div>
  );
};

export default Home;
