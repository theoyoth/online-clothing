"use client"

import ButtonCart from "@/components/ButtonCart";
import { OuterwearCollection } from "@/lib/assets";
import Image from "next/legacy/image";

export async function generateStaticParams() {
  const paths = OuterwearCollection.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
  };
};

const getDataFromParams = (id) => {
  return OuterwearCollection.filter((outCollection) => outCollection.id == id)
}

const Detail = ({ params }) => {
  const data = getDataFromParams(params.id)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-14">
        <div className="w-full h-[100%] flex items-center justify-center">
          <Image
            src={data[0]?.url}
            alt={data[0]?.name}
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className="px-4 w-full mt-2">
          <h1 className="text-3xl font-semibold">{data[0]?.name}</h1>
          <h1 className="my-4">
            {" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data[0]?.price)}
          </h1>

          <ButtonCart data={data[0]} />

          <div className="my-4 md:w-3/4">
            <h2 className="font-semibold">Details</h2>
            <p className="text-justify">{data[0]?.details}</p>
          </div>
          <div>
            <h2 className="font-semibold">Size chart</h2>
            <Image
              src="/img/clothing/diagram-size.webp"
              alt="size-chart"
              width={450}
              height={180}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
