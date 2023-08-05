import { OuterwearCollection } from "../../lib/assets";
import Layout from "../../components/Layouts/LayoutAnimation";

import { useEffect, useState } from "react";
import Image from "next/legacy/image";

export const getStaticPaths = async () => {
  const paths = ShirtCollection.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const dataDetail = ShirtCollection.filter(
    (d) => d.id.toString() === params.id
  );
  return {
    props: {
      data: dataDetail[0],
    },
  };
};

const Detail = () => {
  return <div>Detail</div>;
};

export default Detail;
