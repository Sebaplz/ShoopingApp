/* eslint-disable react/prop-types */
export default function Pagination({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <nav aria-label="Navigation" className="mb-4 flex justify-center">
        <ul className="inline-flex h-10 -space-x-px text-base">
          <li>
            <button
              onClick={onPreviusPage}
              className={`ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:bg-gray-100 disabled:text-gray-700`}
              disabled={currentPage <= 1}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((numPage) => (
            <li key={numPage}>
              <button
                onClick={() => onSpecificPage(numPage)}
                className={`flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500  ${
                  numPage === currentPage
                    ? "bg-blue-400 text-white"
                    : "hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {numPage}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={onNextPage}
              className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700
              disabled:bg-gray-100 disabled:text-gray-700"
              disabled={currentPage >= pageNumbers.length}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
