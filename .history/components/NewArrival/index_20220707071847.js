import { Image } from "next/legacy/image";
import { Newarrival } from "../../lib/assets";
import { GridClothing } from "../Reuse";

const NewArrival = () => {
  return (
    <>
      <h1 className="text-center">New Arrivals</h1>
      <GridClothing>
        {Newarrival?.map((item, i) => (
          <div key={i} className="overflow-hidden">
            <Image src={item.url} alt={item.name} width="400" height="400" />
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default NewArrival;
