import { Shirts } from "../../lib/assets";

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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen border border-1 border-black">
        <h1 className="border border-1 border-black mt-[20px]">
          {dataDetail.name}
        </h1>
        <h1>{dataDetail.price}</h1>
      </div>
    </>
  );
};

export default Detail;
