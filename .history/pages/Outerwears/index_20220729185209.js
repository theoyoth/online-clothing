import { OuterwearCollection } from "@/lib/assets";
import { GridClothing } from "@/components/Reuse";
import Layout from "@/components/Layouts/LayoutAnimation";

import Image from "next/legacy/image";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      OuterwearCollection,
    },
    revalidate: 50,
  };
};

const Outerwears = ({ OuterwearCollection }) => {
  return (
    <Layout title="Outerwears">
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Outerwears</h1>
        <GridClothing>
          {OuterwearCollection.map((outerwear, i) => (
            <Link href={`/Outerwears/${outerwear.id}`} key={i}>
              <a>
                <div className="group">
                  <Image
                    src={outerwear?.url}
                    alt={outerwear?.name}
                    width="400"
                    height="400"
                    className="overflow-hidden group-hover:scale-125 duration-200 ease-in"
                  />
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
              </a>
            </Link>
          ))}
        </GridClothing>
      </div>
    </Layout>
  );
};

export default Outerwears;
