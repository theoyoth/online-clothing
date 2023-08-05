import { OuterwearCollection } from "../lib/assets";
import { GridClothing } from "../components/Reuse";
import Layout from "../components/Layouts/LayoutAnimation";

import Image from "next/legacy/image";

const Outerwears = () => {
  return (
    <Layout title="Outerwears">
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Outerwears</h1>
        <GridClothing>
          {OuterwearCollection.map((outerwear, i) => (
            <div key={i} className="group cursor-pointer">
              <Image
                src={outerwear?.url}
                alt={outerwear?.name}
                width="400"
                height="400"
                className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
              />
              <div>
                <h2 className="underline font-semibold">{outerwear?.name}</h2>
                <p className="text-sm">{outerwear?.price}</p>
              </div>
            </div>
          ))}
        </GridClothing>
      </div>
    </Layout>
  );
};

export default Outerwears;
