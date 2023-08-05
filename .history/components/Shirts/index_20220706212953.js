import { GridClothing } from "../Reuse";
import { Benies, Shoes } from "../../lib/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const Shirt = () => {
  const [newShoes, setNewShoes] = useState([]);

  useEffect(() => {
    return(
    Shoes.slice(Shoes.slice(0, Shoes.length - 1))
    setNewShoes(Shoes));
  }, []);

  return (
    <>
      <GridClothing>
        {newShoes.map((tshirt, i) => (
          <div key={i}>
            <Image
              src={tshirt.url}
              alt={tshirt.name}
              width="400"
              height="400"
            />
            <div>
              <h2 className="underline">{tshirt?.name}</h2>
              <p className="font-semibold text-sm text-gray-700">
                {tshirt?.harga}
              </p>
            </div>
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default Shirt;
