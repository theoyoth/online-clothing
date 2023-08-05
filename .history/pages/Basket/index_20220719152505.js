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
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Basket</h1>
        <div className="grid place-items-center w-3/4 border border-1 border-black">
          <div className="border border-1 border-black">afsadsad</div>
          <div className="border border-1 border-black">adsadsa</div>
        </div>
      </div>
    </Layout>
  );
};

export default BasketList;
