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
      <div className="min-h-screener">
        <h1 className="mt-16 text-center text-3xl font-semibold">Basket</h1>
      </div>
    </Layout>
  );
};

export default BasketList;
