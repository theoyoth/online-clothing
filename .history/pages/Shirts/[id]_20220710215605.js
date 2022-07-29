export const getStaticPaths = async () => {
  return {
    paths: { params: id },
    fallback: false,
  };
};

const Detail = () => {
  return <div>Detail</div>;
};

export default Detail;
