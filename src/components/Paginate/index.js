import React from "react";
import Pagination from "react-js-pagination";
import leftArrow from "../../assets/images/left-ar.png";
import rightArrow from "../../assets/images/right-ar.png";

const Paginate = (props) => {
  const { paginate, changePage } = props;
  const changePageAction = (page) => {
    changePage(page);
  };

  if (!paginate.total) {
    return "";
  }

  return (
    <Pagination
      activePage={paginate.current_page}
      itemsCountPerPage={paginate.per_page}
      totalItemsCount={paginate.total}
      pageRangeDisplayed={3}
      onChange={changePageAction}
      prevPageText={<img src={leftArrow} alt="left" />}
      nextPageText={<img src={rightArrow} alt="right" />}
      hideFirstLastPages
      itemClassPrev="paginate-nav"
      itemClassNext="paginate-nav"
    />
  );
};

export default Paginate;
