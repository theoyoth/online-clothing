import { GridClothing } from "../Reuse";
import { Benies, ClothingProducts } from "../../lib/assets";
import Image from "next/legacy/image";
import { useEffect } from "react";

const Shirt = () => {
  useEffect(() => {
    console.log(ClothingProducts[2].Tshirts);
  }, []);

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
