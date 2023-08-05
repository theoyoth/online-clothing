import { GridClothing } from "../Reuse";
import { Benies, Shoes } from "../../lib/assets";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const Shirt = () => {
  const [newShoes, setNewShoes] = useState([]);

  useEffect(() => {
    const NewOb = Shoes.splice(8, 1);
    return setNewShoes(NewOb);
  }, []);

  return (
    <>
      <GridClothing>
        {Shoes.map((tshirt, i) => (
          <div key={i} className="group">
            <Image
              src={tshirt.url}
              alt={tshirt.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
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
