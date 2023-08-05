import Image from "next/legacy/image";
import { ShirtBg } from "../lib/assets";

const Home = () => {
  return (
    <div className="text-center h-screen">
      <Image
        src={ShirtBg[0].tshirt0}
        width="800px"
        height="800px"
        alt={ShirtBg[0].name}
      />
      <div className="bg"></div>
    </div>
  );
};

export default Home;