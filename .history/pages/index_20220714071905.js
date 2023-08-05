import TshirtColleges from "../components/Shirts";
import ImageSlider from "../components/ImageSlider";
import NewArrivalCome from "../components/NewArrivalCome";

import Layout from "../components/Layouts/LayoutAnimation";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="slide-container text-center bg-white">
        {/* <ImageSlider /> */}
        <NewArrivalCome />
        <TshirtColleges />
      </div>
    </Layout>
  );
};

export default Home;
