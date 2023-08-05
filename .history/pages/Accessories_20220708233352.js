import { Beanies, Hats, Watches } from "../lib/assets";
import { GridClothing } from "../components/Reuse";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const Accesories = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.div
      className="relative"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      <h1 className="mt-16 text-center text-3xl font-semibold">Beanies</h1>
      <GridClothing>
        {Beanies.map((beanie, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={beanie?.url}
              alt={beanie?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline font-semibold">{beanie?.name}</h2>
              <p className="text-sm">{beanie?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
      <h1 className="text-center text-3xl font-semibold">Hats</h1>
      <GridClothing>
        {Hats.map((hat, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={hat?.url}
              alt={hat?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline font-semibold">{hat?.name}</h2>
              <p className="text-sm">{hat?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
      <h1 className="text-center text-3xl font-semibold">Watches</h1>
      <GridClothing>
        {Watches.map((watch, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={watch?.url}
              alt={watch?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline font-semibold">{watch?.name}</h2>
              <p className="text-sm">{watch?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
    </motion.div>
  );
};

export default Accesories;
