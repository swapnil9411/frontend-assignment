import React from "react";
import "./Pagination.css";

const Pagination = ({
  projectsPerPage,
  totalProjects,
  paginate,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const pageNumbers = [];

  const showPagesAroundCurrent = 2;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - showPagesAroundCurrent &&
        i <= currentPage + showPagesAroundCurrent)
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="pagination-container">
      <button
        className="pagination-button prev-next"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination-button ${
            currentPage === number ? "active" : ""
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="pagination-button prev-next"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
