import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";
import NewArrival from "../components/NewArrivalCome";

const Home = () => {
  return (
    <div className="slide-container text-center h-screen bg-gray-600">
      <ImageSlider />
      <NewArrival />
      <TshirtColleges />
    </div>
  );
};

export default Home;
