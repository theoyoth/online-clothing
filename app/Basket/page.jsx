"use client"

import { useStateContext } from "@/lib/Context";
import { AiOutlineShopping } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const BasketList = () => {
  const { cartItems, onRemove, totalPrice } = useStateContext();

  return (
    <>
      <div className="min-h-screen">
        <h1 className="mt-16 text-center text-3xl font-semibold">Basket</h1>
        <div className="grid place-items-center w-full mt-6">
          {cartItems.length >= 1 && (
            <table className="table-auto divide-y divide-gray-200 border border-1 border-black">
              <thead>
                <tr className="text-left">
                  <th className="p-4 w-56">Product</th>
                  <th className="w-48">Price</th>
                  <th className="w-24 text-center">Size</th>
                  <th className="w-28 text-center">Quantity</th>
                  <th className="w-20 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-left text-sm text-gray-600 divide-y divide-gray-200">
                {cartItems &&
                  cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4">{item?.name}</td>
                      <td className="py-4">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          maximumSignificantDigits: 3,
                        }).format(item?.price)}
                      </td>
                      <td className="py-4 text-center">{item?.size}</td>
                      <td className="py-4 text-center">{item?.quantity}</td>
                      <td className="py-4 flex justify-center">
                        <button onClick={() => onRemove(item)}>
                          <ImCross />
                        </button>
                      </td>
                    </tr>
                  ))}
                {cartItems.length >= 1 && (
                  <tr>
                    <td className="p-4 font-bold">Total prices :</td>
                    <td className="py-4 font-bold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                      }).format(totalPrice)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
          {cartItems.length < 1 && (
            <div className="mt-6">
              <AiOutlineShopping size={150} />
              <h3>Your basket is empty</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BasketList;
