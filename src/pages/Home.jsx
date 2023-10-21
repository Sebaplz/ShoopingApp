import Product from "../components/home/Product";
import Loading from "../util/Loading";
import SelectCategory from "../components/home/SelectCategory";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductProvider";
import { CartContext } from "../context/CartProvider";

export default function Home() {
  const { products, isLoading, error } = useContext(ProductsContext);

  const { addPurchase, deletePurchase } = useContext(CartContext);

  const handleAddPurchase = (product) => {
    addPurchase(product);
  };

  const handleRemovePurchase = (id) => {
    deletePurchase(id);
  };

  return (
    <>
      {error ? (
        <div className="pt-8 text-center font-semibold text-red-500">
          {error.message}
        </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <main className="mx-auto max-w-screen-xl">
          <SelectCategory />
          <section className="grid gap-4 px-8 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleAddPurchase={() => handleAddPurchase(product)}
                handleRemovePurchase={() => handleRemovePurchase(product.id)}
              />
            ))}
          </section>
        </main>
      )}
    </>
  );
}
