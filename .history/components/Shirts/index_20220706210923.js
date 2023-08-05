import { GridClothing } from "../Reuse";
import { Benies, ClothingProducts } from "../../lib/assets";
import Image from "next/legacy/image";
import { useEffect } from "react";

const Shirt = () => {
  useEffect(() => {
    ClothingProducts[2].Tshirts?.map((item) => {
      console.log(item);
    });
  }, []);

  return (
    <>
      <GridClothing>
        {ClothingProducts[1].Tshirts?.map((tshirt, i) => (
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
