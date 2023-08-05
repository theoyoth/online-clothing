import { useEffect } from "react";

const BasketList = () => {
  const basketList = usesStore((state) => state.basket);
  return <div>BasketList</div>;
};

export default BasketList;
