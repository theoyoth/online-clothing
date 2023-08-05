import { GridClothing } from "@/components/Reuse";
import { ShoesCatalog } from "@/lib/assets";
import Layout from "@/components/Layouts/LayoutAnimation";

import Image from "next/legacy/image";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      ShoesCatalog,
    },
    revalidate: 50,
  };
};

const Shoes = ({ ShoesCatalog }) => {
  return (
    <Layout title="Shoes">
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Shoes</h1>
        <GridClothing>
          {ShoesCatalog.map((shoe, i) => (
            <Link href={`/Shoes/${shoe.id}`} key={i}>
              <a>
                <div className="group cursor-pointer">
                  <Image
                    src={shoe?.url}
                    alt={shoe?.name}
                    width="400"
                    height="400"
                    className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
                  />
                  <div>
                    <h2 className="underline font-semibold">{shoe?.name}</h2>
                    <p className="text-sm">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                      }).format(shoe?.price)}
                    </p>
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

export default Shoes;
