import { GridClothing } from "../Reuse";
import { Shoes } from "../../lib/assets";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

const Shirt = () => {
  const [newShoes, setNewShoes] = useState([]);

  useEffect(() => {
    const NewOb = Shoes.splice(4, 5);
    return setNewShoes(NewOb);
  }, []);

  return (
    <div className="mt-4">
      <h1 className="text-center text-3xl font-bold">New Arrivals</h1>
      <GridClothing>
        {Shoes?.map((tshirt, i) => (
          <div key={i} className="group cursor-pointer">
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
    </div>
  );
};

export default Shirt;
