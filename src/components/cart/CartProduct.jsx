import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Decrease, Increase } from "../../util/Icons";
/* eslint-disable react/prop-types */
export default function CartProduct({ item }) {
  const { increaseQuantity, decreaseQuantity, deletePurchase } =
    useContext(CartContext);
  return (
    <div className="col-span-4 flex justify-between rounded-lg bg-white p-2 lg:col-span-3">
      <div className="w-40">
        <img
          src={item.image}
          alt={item.title}
          className="h-32 w-32 object-contain"
        />
      </div>
      <div className="flex w-full flex-col justify-center px-2">
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-lg font-semibold text-[#717171]">${item.price}</p>
        <div className="flex items-center justify-start space-x-3 pt-4">
          <button
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:opacity-0"
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            disabled={item.quantity == 1}
          >
            <Decrease />
          </button>
          <button
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
            type="button"
            onClick={() => increaseQuantity(item.id)}
          >
            <Increase />
          </button>
          <button
            className="rounded-full bg-[#495867] p-2 font-semibold text-white"
            onClick={() => deletePurchase(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <h2>{item.quantity}</h2>
    </div>
  );
}
