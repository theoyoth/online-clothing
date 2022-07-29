import Image from "next/image";
import { Shirt } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <Image src={Shirt[0].tshirt0} layout="responsive" alt="cover" />
      <div className="bg"></div>
    </div>
  );
};

export default Home;
