import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";
import NewArrivalCome from "../components/NewArrival";

const Home = () => {
  return (
    <div className="slide-container text-center h-screen bg-gray-600">
      <NewArrivalCome />
      <ImageSlider />
      <TshirtColleges />
    </div>
  );
};

export default Home;
