import { GridClothing } from "../Reuse";
import { Benies, Shoes } from "../../lib/assets";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const Shirt = () => {
  const [newShoes, setNewShoes] = useState([]);

  useEffect(() => {
    const NewOb = Shoes.splice(0, 9);
    return setNewShoes(NewOb);
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
