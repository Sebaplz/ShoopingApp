/* eslint-disable react/prop-types */
import { createContext } from "react";
import useProducts from "../hooks/useProducts";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { products, isLoading, category, setCategory, categories, error } =
    useProducts();
  return (
    <ProductsContext.Provider
      value={{ products, isLoading, category, setCategory, categories, error }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
