import { Jackets, Crewnecks } from "../lib/assets";
import { GridClothing } from "../components/Reuse";
import Image from "next/legacy/image";

const Outerwears = () => {
  return (
    <div className="min-h-screen">
      <h1 className="mt-16 text-center text-3xl font-semibold">Jackets</h1>
      <GridClothing>
        {Jackets.map((shirt, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={shirt?.url}
              alt={shirt?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline font-semibold">{shirt?.name}</h2>
              <p className="text-sm">{shirt?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
      <h1 className="text-center text-3xl font-semibold">Crewnecks</h1>
      <GridClothing>
        {Crewnecks.map((tshirt, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={tshirt?.url}
              alt={tshirt?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline font-semibold">{tshirt?.name}</h2>
              <p className="text-sm">{tshirt?.price}</p>
            </div>
          </div>
        ))}
      </GridClothing>
    </div>
  );
};

export default Outerwears;
