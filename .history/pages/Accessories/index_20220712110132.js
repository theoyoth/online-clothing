import { AccessoriesCollection } from "../../lib/assets";
import { GridClothing } from "../../components/Reuse";
import Layout from "../../components/Layouts/LayoutAnimation";

import Image from "next/legacy/image";
import Link from "next/link";

const Accesories = () => {
  return (
    <Layout title="Accesories">
      <div className="relative">
        <h1 className="mt-16 text-center text-3xl font-semibold">
          Accessories
        </h1>
        <GridClothing>
          {AccessoriesCollection.map((accessory, i) => (
            <Link href={`/Accesories/${accessory.id}`} key={i}>
              <a>
                <div className="group">
                  <Image
                    src={accessory?.url}
                    alt={accessory?.name}
                    width="400"
                    height="400"
                    className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
                  />
                  <div>
                    <h2 className="underline font-semibold">
                      {accessory?.name}
                    </h2>
                    <p className="text-sm">{accessory?.price}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </GridClothing>
      </div>
    </Layout>
  );
};

export default Accesories;
