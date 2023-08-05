import { GridClothing } from "../components/Reuse";
import { Shirts } from "../lib/assets";
import Image from "next/legacy/image";

const shirts = () => {
  return (
    <div className="h-screen">
      <GridClothing>
        {Shirts.map((shirt, i) => (
          <div key={i} className="relative">
            <Image
              src={shirt?.url}
              alt={shirt?.name}
              width="400"
              height="400"
            />
            <div>
              <h1>{shirt.name}</h1>
              <p>{shirt?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
    </div>
  );
};

export default shirts;
