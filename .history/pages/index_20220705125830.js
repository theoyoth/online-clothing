import Image from "next/legacy/image";
import { ShirtBg } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen bg-orange-500">
      <Image
        src={ShirtBg[0].tshirt0}
        width="700px"
        height="700px"
        alt={ShirtBg[0].name}
      />
      <div className="bg"></div>
    </div>
  );
};

export default Home;
