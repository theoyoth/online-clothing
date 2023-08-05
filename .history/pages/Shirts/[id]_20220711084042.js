import { Shirts } from "../../lib/assets";
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center">
        <div className="w-full h-[80%] bg-gray-200 flex justify-center">
          <Image src={data.url} alt={data.name} width="500" height="500" />
        </div>
        <div className="border border-1 border-black flex align-start">
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <h1>{data.price}</h1>
        </div>
      </div>
    </>
  );
};

export default Detail;
