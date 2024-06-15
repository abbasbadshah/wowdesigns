import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li key={i}>
        <button
          type="button"
          className={`relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none ${
            currentPage === i
              ? "bg-yellow-500/10 ring-2 ring-yellow-500 text-yellow-600 focus:underline"
              : "hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 focus:text-yellow-600 transition"
          }`}
          onClick={() => onPageChange(i)}
        >
          <span>{i}</span>
        </button>
      </li>
    );
  }

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="py-3 border rounded-lg">
        <ol className="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300">
          <li>
            <button
              type="button"
              className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 transition text-yellow-600"
              aria-label="Previous"
              rel="prev"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg
                className="w-5 h-5 rtl:scale-x-[-1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>

          {pageNumbers}

          <li>
            <button
              type="button"
              className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 transition text-yellow-600"
              aria-label="Next"
              rel="next"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg
                className="w-5 h-5 rtl:scale-x-[-1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};