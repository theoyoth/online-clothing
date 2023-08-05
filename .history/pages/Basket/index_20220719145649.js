import { useEffect } from "react";
import usesStore from "../../lib/store";

const BasketList = () => {
  const basketList = usesStore((state) => state.basket);

  useEffect(() => {
    console.log(basketList);
  }, []);

  return <div>BasketList</div>;
};

export default BasketList;
