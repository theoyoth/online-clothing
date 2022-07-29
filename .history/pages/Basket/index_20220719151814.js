import { useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import usesStore from "../../lib/store";

const BasketList = () => {
  const basketList = usesStore((state) => state.basket);

  useEffect(() => {
    console.log(basketList);
  }, []);

  return (
    <Layout title="Basket">
      <div className="min-h-screen"></div>
    </Layout>
  );
};

export default BasketList;
