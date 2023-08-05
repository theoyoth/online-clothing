import { GridClothing } from "../components/Reuse";
import { Shirts, Tshirts } from "../lib/assets";
import Image from "next/legacy/image";

const shirts = () => {
  return (
    <div className="min-h-screen">
      <GridClothing>
        {Shirts.map((shirt, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={shirt?.url}
              alt={shirt?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline">{shirt?.name}</h2>
              <p>{shirt?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
      <GridClothing>
        {Tshirts.map((tshirt, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={tshirt?.url}
              alt={tshirt?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline">{tshirt?.name}</h2>
              <p>{tshirt?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
    </div>
  );
};

export default shirts;
