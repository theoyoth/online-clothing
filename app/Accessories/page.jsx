import { AccessoriesCollection } from "@/lib/assets";
import { GridClothing } from "@/components/Reuse";

import Image from "next/legacy/image";
import Link from "next/link";

const Accesories = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-center text-3xl font-semibold mt-16">
          Accessories
        </h1>
        <GridClothing>
          {AccessoriesCollection.map((accessory) => (
            <Link href={`/Accessories/${accessory.id}`} key={accessory.id}>
                <div className="group">
                  <div className="overflow-hidden">
                    <Image
                      src={accessory?.url}
                      alt={accessory?.name}
                      width={400}
                      height={400}
                      priority={true}
                      className="group-hover:scale-125 duration-200 ease-in"
                    />
                  </div>
                  <div>
                    <h2 className="underline font-semibold">
                      {accessory?.name}
                    </h2>
                    <p className="text-sm">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                      }).format(accessory?.price)}
                    </p>
                  </div>
                </div>
            </Link>
          ))}
        </GridClothing>
      </div>
    </>
  );
};

export default Accesories;
