import Image from "next/legacy/image";
import { Shirt } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <Image src={Shirt[0].shirt1} layout="cover" alt="cover" />
      <div className="bg"></div>
    </div>
  );
};

export default Home;
