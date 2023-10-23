import CartProduct from "../components/cart/CartProduct";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, decreseFromCart, addToCart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  return (
    <main className="mx-auto mb-32 max-w-screen-xl p-4 md:p-8 lg:mb-0">
      {cart.length < 1 ? (
        <div className="flex flex-col items-center gap-8 rounded-lg bg-white p-8 text-black">
          <h1 className="text-2xl font-semibold">Your cart is empty!</h1>
          <NavLink
            to={"/"}
            className={
              "rounded-full bg-[#ee5601] p-2 font-semibold text-white hover:opacity-80"
            }
          >
            Back to shop
          </NavLink>
        </div>
      ) : (
        <>
          <div className="w-10">
            <NavLink to={"/"}>
              <svg
                className="h-10 w-10 rounded-full bg-[#ee5601] p-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                ></path>
              </svg>
            </NavLink>
          </div>
          <h1 className="text-3xl text-black">
            Product in the cart{" "}
            {cart.reduce((total, item) => total + item.quantity, 0)}{" "}
          </h1>
          <section className="grid grid-cols-4 gap-2 pt-4 text-black">
            {cart.map((item) => (
              <CartProduct
                item={item}
                key={item.id}
                decreseFromCart={decreseFromCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
            <div className="fixed bottom-0 left-0 flex w-full flex-col justify-center gap-4 rounded-t-lg bg-white p-4 lg:static lg:col-span-1 lg:col-end-5 lg:row-end-2 lg:rounded-lg">
              <div className="flex justify-between ">
                <h2 className="text-xl font-semibold">Total:</h2>
                <h2 className="font-medium">${calculateTotal()}</h2>
              </div>
              <button
                className="rounded-full bg-[#ee5601] p-2 font-semibold text-white hover:opacity-80 disabled:opacity-40"
                onClick={handleImpresion}
                disabled={cart.length < 1}
              >
                Continue shopping
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
