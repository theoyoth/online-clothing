export const getStaticPaths = async () => {
  return {
    fallback: false,
  };
};

const Detail = () => {
  return <div>Detail</div>;
};

export default Detail;
