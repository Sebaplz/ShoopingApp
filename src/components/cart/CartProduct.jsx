import { Decrease, Increase } from "../../util/Icons";
/* eslint-disable react/prop-types */
export default function CartProduct({
  item,
  decreseFromCart,
  addToCart,
  removeFromCart,
}) {
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
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
            type="button"
            onClick={() => decreseFromCart(item)}
          >
            <Decrease />
          </button>
          <button
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
            type="button"
            onClick={() => addToCart(item)}
          >
            <Increase />
          </button>
          <button
            className="rounded-full bg-[#495867] p-2 font-semibold text-white"
            onClick={() => removeFromCart(item)}
          >
            Remove
          </button>
        </div>
      </div>
      <h2 className="flex gap-2 font-semibold">
        Qty: <span>{item.quantity}</span>
      </h2>
    </div>
  );
}
