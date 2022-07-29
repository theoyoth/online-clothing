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
        <div className="grid place-items-center w-full border border-1 border-black">
          <table className="table-auto divide-y divide-gray-200">
            <thead>
              <tr className="text-left">
                <th className="p-4">Product</th>
                <th className="w-40">Price</th>
                <th className="w-32">Quantity</th>
                <th className="w-40">Subtotal</th>
              </tr>
            </thead>
            <tbody className="text-left text-sm text-gray-600 divide-y divide-gray-200">
              <tr>
                <td className="p-4">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
              </tr>
              <tr>
                <td className="p-4">Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                <td>1972</td>
              </tr>
              <tr>
                <td className="p-4">Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default BasketList;
