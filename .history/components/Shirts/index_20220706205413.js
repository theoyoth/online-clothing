import { GridClothing } from "../Reuse";
import { Tshirts } from "../../lib/assets";
import Image from "next/image";

const Shirt = () => {
  return (
    <>
      <GridClothing>
        {Tshirts.map((tshirt, i) => (
          <div>
            <Image src={tshirt.url} alt={tshirt.name} layout="responsive" />
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default Shirt;
