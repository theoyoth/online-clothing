import Image from "next/legacy/image";
import { NewComing } from "../../lib/assets";
import { GridClothing } from "../Reuse";

const NewArrivalCome = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-3xl font-bold">New Arrivals</h1>
      <GridClothing>
        {NewComing.map((newcome, i) => (
          <div key={i} className="group cursor-pointer">
            <Image
              src={newcome?.url}
              alt={newcome?.name}
              width="400"
              height="400"
              className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
            />
            <div>
              <h2 className="underline">{newcome?.name}</h2>
            </div>
          </div>
        ))}
      </GridClothing>
    </div>
  );
};

export default NewArrivalCome;
