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
        <div className="px-4 w-full flex flex-col">
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <h1>{data.price}</h1>
          <select
            name="size"
            id="size"
            className="px-4 py-2 focus:outline-none border border-1 border-black"
          >
            <option disabled value="SELECT SIZE">
              SELECT SIZE
            </option>
            <option value="M">M</option>
            <option value="LG">LG</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
          </select>
          <button className="bg-gray-900 text-white px-4 py-2 hover:bg-black">
            Add to Cart
          </button>
          <div>
            <h2>Details</h2>
          </div>
          <div>
            <h2>Size</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
