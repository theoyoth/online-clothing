import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";
// import NewArrivalCome from "../components/NewArrivalCome";
import Arrival from "../components/Arrival";

const Home = () => {
  return (
    <div className="slide-container text-center h-screen bg-gray-600">
      <ImageSlider />
      <Arrival />
      {/* <NewArrivalCome /> */}
      <TshirtColleges />
    </div>
  );
};

export default Home;
