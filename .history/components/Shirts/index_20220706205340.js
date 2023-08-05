import { GridClothing } from "../Reuse";
import { Tshirts } from "../../lib/assets";
import Image from "next/legacy/image";

const Shirt = () => {
  return (
    <>
      <GridClothing>
        {Tshirts.map((tshirt, i) => {
          return (
            <div>
              <Image src={tshirt.url} alt={tshirt.name} layout="responsive" />
            </div>
          );
        })}
      </GridClothing>
    </>
  );
};

export default Shirt;
