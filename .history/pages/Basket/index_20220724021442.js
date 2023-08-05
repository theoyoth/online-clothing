import { useEffect } from "react";
import Layout from "../../components/Layouts/LayoutAnimation";
import usesStore from "../../lib/store";

const BasketList = () => {
  const basketList = usesStore((state) => state.basket);

  return (
    <Layout title="Basket">
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Basket</h1>
        <div className="grid place-items-center w-full mt-6">
          <table className="table-auto divide-y divide-gray-200 border border-1 border-black">
            <thead>
              <tr className="text-left">
                <th className="p-4 w-52">Product</th>
                <th className="w-48">Price</th>
                <th className="w-32">Quantity</th>
                <th className="w-48">Subtotal</th>
                <th className="w-24">Action</th>
              </tr>
            </thead>
            <tbody className="text-left text-sm text-gray-600 divide-y divide-gray-200">
              {basketList?.map((item, i) => (
                <tr key={i}>
                  <td className="p-4">{item.name}</td>
                  <td className="py-4">{item.price}</td>
                  <td className="py-4">{item.price}</td>
                  <td className="py-4">{item.price}</td>
                  <td className="py-4">
                    <button>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default BasketList;
