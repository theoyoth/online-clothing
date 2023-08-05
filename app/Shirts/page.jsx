import { GridClothing } from "@/components/Reuse";
import { ShirtCollection } from "@/lib/assets";

import Image from "next/legacy/image";
import Link from "next/link";

const Shirts = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Shirts</h1>
        <GridClothing>
          {ShirtCollection.map((shirt, i) => (
            <Link key={i} href={`/Shirts/${shirt.id}`}>
              <div className="group">
                <div className="overflow-hidden relative">
                  <Image
                    src={shirt?.url}
                    alt={shirt?.name}
                    width={400}
                    height={400}
                    priority={true}
                    className="group-hover:scale-125 duration-200 ease-in"
                  />
                </div>
                <div>
                  <h2 className="underline font-semibold">{shirt?.name}</h2>
                  <p className="text-sm">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumSignificantDigits: 3,
                    }).format(shirt?.price)}
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

export default Shirts;
