import { OuterwearCollection } from "../../lib/assets";
import Layout from "../../components/Layouts/LayoutAnimation";

import { useEffect, useState } from "react";
import Image from "next/legacy/image";

export const getStaticPaths = async () => {
  const paths = OuterwearCollection.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const dataDetail = OuterwearCollection.filter(
    (d) => d.id.toString() === params.id
  );
  return {
    props: {
      data: dataDetail[0],
    },
  };
};

const Detail = ({ data }) => {
  const [amount, setAmount] = useState(1);

  return (
    <Layout title="Detail">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-14">
        <div className="w-full h-[100%]">
          <Image
            src={data?.url}
            alt={data?.name}
            width="500"
            height="500"
            layout="fixed"
          />
        </div>
        <div className="px-4 w-full mt-2">
          <h1 className="text-3xl font-semibold">{data?.name}</h1>
          <h1 className="my-4">{data?.price}</h1>
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
          <div className="flex justify-between items-center w-[150px] my-6">
            <div
              onClick={() => setAmount(amount - 1)}
              className="px-4 py-2 bg-gray-900 hover:bg-black text-white cursor-pointer"
            >
              -
            </div>
            <p className="">{amount}</p>
            <div
              onClick={() => setAmount(amount + 1)}
              className="px-4 py-2 bg-gray-900 hover:bg-black text-white cursor-pointer"
            >
              +
            </div>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 hover:bg-black">
            Add to Cart
          </button>
          <div className="my-4">
            <h2 className="font-semibold">Details</h2>
            <p className="text-justify">{data?.details}</p>
          </div>
          <div>
            <h2 className="font-semibold">Size chart</h2>
            <Image
              src="/img/clothing/diagram-size.png"
              alt="size-chart"
              width="450"
              height="180"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
