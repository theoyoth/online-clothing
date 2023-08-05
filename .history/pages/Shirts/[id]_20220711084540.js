import { Shirts } from "../../lib/assets";
import Layout from "../../components/Layouts/LayoutAnimation";

import { useEffect } from "react";
import Image from "next/legacy/image";

export const getStaticPaths = async () => {
  const paths = Shirts.map((item) => ({ params: { id: item.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const dataDetail = Shirts.filter((d) => d.id.toString() === params.id);
  return {
    props: {
      data: dataDetail[0],
    },
  };
};

const Detail = ({ data }) => {
  return (
    <Layout title="Detail">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center">
        <div className="w-full h-[80%] bg-gray-200 flex justify-center">
          <Image src={data.url} alt={data.name} width="500" height="500" />
        </div>
        <div className="border border-1 border-black w-full">
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <h1>{data.price}</h1>
          <select
            name="size"
            id="size"
            className="px-4 py-2 focus:ring-1 focus:ring-black border border-1 border-black"
          >
            <option value="M">M</option>
            <option value="LG">LG</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
