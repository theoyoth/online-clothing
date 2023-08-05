import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";
import NewArrivalCome from "../components/NewArrivalCome";

const Home = () => {
  return (
    <div className="slide-container text-center bg-gray-100">
      <ImageSlider />
      <NewArrivalCome />
      <TshirtColleges />
    </div>
  );
};

export default Home;
