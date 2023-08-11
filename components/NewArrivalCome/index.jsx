import Image from "next/legacy/image";
import { NewComing } from "@/lib/assets";
import { GridClothing } from "@/components/Reuse";

const NewArrivalCome = () => {
  return (
    <div className="mt-2 lg:mt-4">
      <h1 className="text-center text-3xl font-bold">New Arrivals</h1>
      <GridClothing>
        {NewComing.map((newcome, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden relative">
              <Image
                src={newcome?.url}
                alt={newcome?.name}
                width={400}
                height={400}
                className="group-hover:scale-125 duration-200 ease-in"
              />
            </div>
            <div>
              <h2 className="underline font-semibold">{newcome?.name}</h2>
              <p className="text-sm">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(newcome?.price)}
              </p>
            </div>
          </div>
        ))}
      </GridClothing>
    </div>
  );
};

export default NewArrivalCome;
