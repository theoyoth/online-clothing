import { OuterwearCollection } from "@/lib/assets";
import { GridClothing } from "@/components/Reuse";

import Image from "next/legacy/image";
import Link from "next/link";

const Outerwears = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-center text-3xl font-semibold mt-16">Outerwears</h1>
        <GridClothing>
          {OuterwearCollection.map((outerwear) => (
            <Link href={`/Outerwears/${outerwear.id}`} key={outerwear.id}>
                <div className="group">
                  <div className="overflow-hidden relative">
                    <Image
                      src={outerwear?.url}
                      alt={outerwear?.name}
                      width={400}
                      height={400}
                      priority={true}
                      className="group-hover:scale-125 duration-200 ease-in"
                    />
                  </div>
                  <div>
                    <h2 className="underline font-semibold">
                      {outerwear?.name}
                    </h2>
                    <p className="text-sm">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                      }).format(outerwear?.price)}
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

export default Outerwears;
