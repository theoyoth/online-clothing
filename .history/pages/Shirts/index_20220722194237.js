import { GridClothing } from "../../components/Reuse";
import { ShirtCollection } from "../../lib/assets";
import Layout from "../../components/Layouts/LayoutAnimation";

import Image from "next/legacy/image";
import Link from "next/link";

const Shirts = () => {
  return (
    <Layout title="Shirts">
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Shirts</h1>
        <GridClothing>
          {ShirtCollection.map((shirt, i) => (
            <Link key={i} href={`/Shirts/${shirt.id}`}>
              <a>
                <div className="group cursor-pointer">
                  <Image
                    src={shirt?.url}
                    alt={shirt?.name}
                    width="400"
                    height="400"
                    className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
                  />
                  <div>
                    <h2 className="underline font-semibold">{shirt?.name}</h2>
                    <p className="text-sm">{shirt?.price}</p>
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

export default Shirts;
