import React, { useState } from 'react';
import Pagination from "react-js-pagination";

const Paginate = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const totalRecords = 10;
  const pageRange = 5;
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="pagination">
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        activePage={currentPage}
        itemsCountPerPage={recordPerPage}
        totalItemsCount={totalRecords}
        pageRangeDisplayed={pageRange}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Paginate;