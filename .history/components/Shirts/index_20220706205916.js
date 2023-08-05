import { GridClothing } from "../Reuse";
import { ClothingProducts } from "../../lib/assets";
import Image from "next/legacy/image";

const Shirt = () => {
  return (
    <>
      <GridClothing>
        {ClothingProducts[2].map((tshirt, i) => (
          <div key={i}>
            <Image src={tshirt.url} alt={tshirt.name} layout="responsive" />
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default Shirt;
