/* eslint-disable react/prop-types */
import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";

export default function ProductFilters({ categories }) {
  const { setFilters, filters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="flex flex-wrap items-center px-8 md:gap-4">
      <div className="flex items-center py-2">
        <label
          htmlFor={categoryFilterId}
          className="mb-2 block font-semibold text-gray-900"
        >
          Filter by Category
        </label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">all</option>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>
      <div className="w-64 md:px-8 md:py-2">
        <label
          htmlFor={minPriceFilterId}
          className="mb-2 block font-semibold text-gray-900"
        >
          Filter by Price
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="1000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span className="font-semibold text-black">${filters.minPrice}</span>
        </div>
      </div>
    </section>
  );
}
