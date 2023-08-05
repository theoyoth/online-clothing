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
      data: dataDetail,
    },
  };
};

const Detail = ({ data }) => {
  useEffect(() => {
    console.log(data.name);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center">
        <div className="border border-1 border-black">
          <h1 className="border border-1 border-black">{data.name}</h1>
        </div>
        <div className="border border-1 border-black">
          {/* <h1>{data.price}</h1> */}
        </div>
      </div>
    </>
  );
};

export default Detail;
