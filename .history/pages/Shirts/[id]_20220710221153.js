import { Shirts } from "../../lib/assets";

export const getStaticPaths = async () => {
  const paths = Shirts.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const dataDetail = Shirts.filter((d) => d.id === params.id);
  return {
    props: {
      dataDetail,
    },
  };
};

const Detail = ({ dataDetail }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2"></div>
    </div>
  );
};

export default Detail;
