export const getStaticPaths = async () => {
  const res = await fs.readFile("../../lib/assets.js");
  const data = await res.json();
  return {
    paths: { params: id },
    fallback: false,
  };
};

const Detail = () => {
  return <div>Detail</div>;
};

export default Detail;
