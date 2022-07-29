import { useEffect } from "react";
import Layout from "../../components/Layouts/LayoutAnimation";
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
        <div className="grid md:grid-rows-2 place-items-center">
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default BasketList;
