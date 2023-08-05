import { GridClothing } from "../Reuse";
import { Benies, ClothingProducts } from "../../lib/assets";
import Image from "next/legacy/image";

const Shirt = () => {
  return (
    <>
      <GridClothing>
        {Benies.map((tshirt, i) => (
          <div key={i}>
            <Image
              src={tshirt.url}
              alt={tshirt.name}
              width="400"
              height="400"
            />
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default Shirt;
