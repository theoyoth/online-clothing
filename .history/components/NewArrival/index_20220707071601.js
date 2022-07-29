import { Newarrival } from "../../lib/assets";
import { GridClothing } from "../Reuse";
import { Image } from "next/image";

const NewArrival = () => {
  return (
    <>
      <GridClothing>
        {NewArrival.map((item, i) => (
          <div key={i} className="overflow-hidden">
            <Image src={item.url} alt={item.name} width="400" height="400" />
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default NewArrival;
