import { Shirts } from "../../lib/assets";

export const getStaticProps = async ({ params }) => {
  const dataDetail = Shirts.filter((d) => d.id === params.id);
  return {
    props: {
      dataDetail,
      fallback: false,
    },
  };
};

const Detail = ({ dataDetail }) => {
  return <div>Detail</div>;
};

export default Detail;
