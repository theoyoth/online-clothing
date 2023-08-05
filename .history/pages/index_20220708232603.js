import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";
import NewArrivalCome from "../components/NewArrivalCome";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="slide-container text-center bg-white">
      <ImageSlider />
      <NewArrivalCome />
      <TshirtColleges />
    </div>
  );
};

export default Home;
