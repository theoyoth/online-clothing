import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ShirtBg } from "../lib/assets";
import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";

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
      <ImageSlider />
      <TshirtColleges />
    </div>
  );
};

export default Home;
