import { GridClothing } from "../Reuse";
import { Benies, Shoes } from "../../lib/assets";
import Image from "next/legacy/image";

const Shirt = () => {
  return (
    <>
      <GridClothing>
        {Shoes.map((tshirt, i) => (
          <div key={i}>
            <Image
              src={tshirt.url}
              alt={tshirt.name}
              width="400"
              height="400"
            />
            <div>
              <h2>{tshirt?.name}</h2>
              <span>{tshirt?.harga}</span>
            </div>
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default Shirt;
