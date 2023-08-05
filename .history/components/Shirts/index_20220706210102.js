import { GridClothing } from "../Reuse";
import { Benies } from "../../lib/assets";
import Image from "next/legacy/image";

const Shirt = () => {
  return (
    <>
      <GridClothing>
        {Benies.map((tshirt, i) => (
          <div key={i}>
            <Image src={tshirt.url} alt={tshirt.name} layout="fill" />
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default Shirt;
