import Product from "../components/home/Product";
import Loading from "../util/Loading";
import ProductFilters from "../components/home/ProductFilters";
import useProducts from "../hooks/useProducts";
import { useFilters } from "../hooks/useFilters";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function Home() {
  const { products, isLoading, error, categories } = useProducts();
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

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
          <ProductFilters
            categories={categories}
            setCurrentPage={setCurrentPage}
          />
          <section className="grid gap-4 px-8 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <h1 className="text-3xl font-semibold text-black lg:w-[600px]">
                Oops! No products to display!
              </h1>
            )}
          </section>
          {filteredProducts.length > 0 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              productsPerPage={productsPerPage}
              totalProducts={filteredProducts.length}
            />
          )}
        </main>
      )}
    </>
  );
}
