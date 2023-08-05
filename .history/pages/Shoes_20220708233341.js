import { GridClothing } from "../components/Reuse";
import { ShoesCatalog } from "../lib/assets";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const Shoes = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <motion.div
      className="min-h-screen"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <h1 className="mt-16 text-center text-3xl font-semibold">Shoes</h1>
      <GridClothing>
        {ShoesCatalog.map((shoe, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={shoe?.url}
              alt={shoe?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline font-semibold">{shoe?.name}</h2>
              <p className="text-sm">{shoe?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
    </motion.div>
  );
};

export default Shoes;
