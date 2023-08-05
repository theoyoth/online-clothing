import { Image } from "next/legacy/image";
import { NewComing } from "../../lib/assets";
import { GridClothing } from "../Reuse";

const NewArrivalCome = () => {
  return (
    <>
      {/* <h1 className="text-center">New Arrivals</h1> */}
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
          </div>
        ))}
      </GridClothing>
    </>
  );
};

export default NewArrivalCome;
