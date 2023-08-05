import { Beanies, Hats } from "../lib/assets";
import { GridClothing } from "../components/Reuse";
import Image from "next/legacy/image";

const Accesories = () => {
  return (
    <div className="relative">
      <GridClothing>
        {Beanies.map((beanie, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={beanie?.url}
              alt={beanie?.name}
              width="400"
              height="400"
            />
            <div>
              <h2 className="underline font-semibold">{beanie?.name}</h2>
              <p className="text-sm">{beanie?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
    </div>
  );
};

export default Accesories;
