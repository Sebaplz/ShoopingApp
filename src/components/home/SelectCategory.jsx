import { useContext } from "react";
import { ProductsContext } from "../../context/ProductProvider";

/* eslint-disable react/prop-types */
export default function SelectCategory() {
  const { category, setCategory, categories } = useContext(ProductsContext);
  return (
    <section className="w-64 px-8 py-2">
      <label
        htmlFor="categories"
        className="mb-2 block font-semibold text-gray-900"
      >
        Filter by Category
      </label>
      <select
        id="categories"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">all</option>
        {categories.map((categorie) => (
          <option key={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
    </section>
  );
}
