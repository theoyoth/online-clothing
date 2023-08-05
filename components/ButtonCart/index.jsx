"use client"

import { useState } from "react";
import { useStateContext } from "@/lib/Context";

const ButtonCart = ({ data, type="cloths" }) => {
  const [size, setSize] = useState("M")
  const { qty, incQty, decQty, onAdd } = useStateContext();

  return (
    <>
      <div className="flex space-x-4 mb-4">
        {type !== "accesories" ? (
            <select
              name="size"
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="px-4 focus:outline-none border border-1 border-black"
            >
              <option disabled value="SELECT SIZE">
                SELECT SIZE
              </option>
              <option value="M">M</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
            </select>
          
        ) : null}
       
        <div className="flex justify-between items-center w-[150px]">
          <div
            onClick={decQty}
            className="px-4 py-2 bg-gray-900 hover:bg-black text-white cursor-pointer"
          >
            -
          </div>
          <div className="border-t-[1px] border-b-[1px] border-gray-900 w-full text-center py-[6.8px]">
            <p>{qty}</p>
          </div>
          <div
            onClick={incQty}
            className="px-4 py-2 bg-gray-900 hover:bg-black text-white cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
      <button
        className="bg-gray-900 text-white px-4 py-2 hover:bg-black"
        onClick={() => onAdd(data, qty, size)}
      >
        Add to Cart
      </button>
    </>
  )
}

export default ButtonCart