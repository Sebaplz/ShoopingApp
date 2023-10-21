import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState();
  const [error, setError] = useState(null);
  const urlBase = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    try {
      const response = await fetch(urlBase);
      if (!response.ok) {
        throw new Error("Failed to retrieve the list of products!");
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
      console.log("cuantas veces se ejecuta");
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );

  const filteredProducts = category
    ? products.filter((product) => {
        if (category && product.category !== category) {
          return false;
        }
        return true;
      })
    : products;

  return {
    products: filteredProducts,
    isLoading,
    category,
    setCategory,
    categories,
    error,
  };
};

export default useProducts;
