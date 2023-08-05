import Image from "next/legacy/image";
import { ShirtBg } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen bg-orange-400">
      <Image
        src={ShirtBg[0].tshirt0}
        width="600px"
        height="700px"
        alt={ShirtBg[0].name}
      />
      <div className="bg"></div>
    </div>
  );
};

export default Home;
