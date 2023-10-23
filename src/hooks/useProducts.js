import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return {
    products,
    isLoading,
    categories,
    error,
  };
};

export default useProducts;
