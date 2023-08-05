import { GridClothing } from "../Reuse";
import { Tshirts } from "../../lib/assets";
import Image from "next/legacy/image";

const Shirt = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-3xl font-bold">Shirts</h1>
      <GridClothing>
        {Tshirts?.map((tshirt, i) => (
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
