import { Shirts } from "../../lib/assets";
import { useEffect } from "react";

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
      dataDetail,
    },
  };
};

const Detail = ({ dataDetail }) => {
  useEffect(() => {
    console.log(dataDetail);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center">
        <div className="border border-1 border-black">
          <h1 className="border border-1 border-black">{dataDetail.name}</h1>
        </div>
        <div className="border border-1 border-black">
          <h1>{dataDetail.price}</h1>
        </div>
      </div>
    </>
  );
};

export default Detail;
