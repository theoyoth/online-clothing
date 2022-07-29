export const getStaticPaths = async () => {
  const res = await fetch("../../lib/assets.js");
  const data = await res.json();
  return {
    paths: { id = data.id },
    fallback: false,
  };
};

const Detail = () => {
  return <div>Detail</div>;
};

export default Detail;
