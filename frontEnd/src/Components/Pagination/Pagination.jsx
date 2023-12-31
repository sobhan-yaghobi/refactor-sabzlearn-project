import React, { useEffect, useRef, useState } from "react";
import "./Pagination.css";
import CourseBox from "../CourseBox/CourseBox";
import CommentBox from "../CommentBox/CommentBox";
import ArticleBox from "../ArticleBox/ArticleBox";

function PaginationCustom({
  typeFor,
  CurentPage,
  pageItemCount,
  arrays,
  parentClassNameHolder,
}) {
  const [paginatedArray, setPaginatedArray] = useState([]);
  const [curentPage, setCurentPage] = useState(CurentPage);
  const [pageNumber, setPageNumber] = useState([]);

  const updatePagination = () => {
    const endIndex = curentPage * pageItemCount;
    const startIndex = endIndex - pageItemCount;
    const mainArray = arrays.slice(startIndex, endIndex);

    if (mainArray.length === 0 && arrays.length) {
      setCurentPage(CurentPage);
    }

    let pageNum = Math.ceil(arrays.length / pageItemCount);
    let pageNumebrArr = Array.from(Array(pageNum).keys());

    setPaginatedArray(mainArray);
    setPageNumber(pageNumebrArr);
  };

  const chnageCountPageHandler = (e) => {
    const countValue = e.target.dataset.btnPagination;
    if (countValue) {
      setCurentPage(parseInt(countValue));
    }
  };

  const prevPageHandler = () => {
    setCurentPage((prev) => {
      return prev - 1 === 0 ? pageNumber.length : prev - 1;
    });
  };

  const nextPageHandler = () => {
    setCurentPage((prev) => {
      return prev + 1 > pageNumber.length ? 1 : prev + 1;
    });
  };

  useEffect(() => {
    updatePagination();
  }, [arrays, curentPage]);

  return (
    <>
      {typeFor === "comment"
        ? paginatedArray.map((item) => (
            <CommentBox key={item._id} {...item}></CommentBox>
          ))
        : typeFor === "article"
        ? paginatedArray.map((item) => (
            <div
              key={item._id}
              className={`${
                parentClassNameHolder ? parentClassNameHolder : ""
              }`}
            >
              <ArticleBox size={"smal"} {...item}></ArticleBox>
            </div>
          ))
        : paginatedArray.map((item) => (
            <div
              key={item._id}
              className={`${
                parentClassNameHolder ? parentClassNameHolder : ""
              }`}
            >
              <CourseBox {...item}></CourseBox>
            </div>
          ))}
      {pageNumber.length > 1 && (
        <div className="global-pagination col-span-12 d-flex justify-content-center">
          <ul
            id="pagination-wrapper"
            className="global__pagination-list d-flex align-items-center"
            onClick={(e) => chnageCountPageHandler(e)}
          >
            <li className="global__pagination-item">
              <button
                onClick={prevPageHandler}
                className="global__pagination-link"
              >
                <i className="fa-solid fa-long-arrow-right"></i>
              </button>
            </li>
            {pageNumber.map((numBtn) => (
              <li key={numBtn + 1} className="global__pagination-item">
                <button
                  data-btn-pagination={numBtn + 1}
                  className={`global__pagination-link ${
                    numBtn + 1 === curentPage ? "active" : ""
                  }`}
                >
                  {numBtn + 1}
                </button>
              </li>
            ))}

            <li className="global__pagination-item">
              <button
                onClick={nextPageHandler}
                className="global__pagination-link"
              >
                <i className="fa-solid fa-long-arrow-left"></i>
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="my-2"></div>
    </>
  );
}

export default PaginationCustom;
