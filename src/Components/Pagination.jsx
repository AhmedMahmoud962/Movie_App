import React from 'react'
import './style.css'
import ReactPaginate from 'react-paginate'

const Pagination = ({ getPage }) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1)
    getPage(data.selected + 1)
  }
  const pageCount = 500
  return (
    <div className="pagination-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=" < السابق"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="selected"
        previousClassName="previous"
        nextClassName="next"
        disabledClassName="disabled"
      />
    </div>
  )
}

export default Pagination
