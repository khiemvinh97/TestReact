import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GetBlogsList, ResetState } from "../../action/blog";
import ListItem from "./ListItem";
import Paginate from "../../components/Paginate";
import { PER_PAGE } from "../../constants/Variable";
import Select from "../../components/common/Select";
import InputText from "../../components/common/InputText";

const Homepage = (props) => {
  const { getBlogs, blogs, resetState } = props;
  const data = blogs && blogs.data;
  const isLoading = blogs && blogs.isLoading;
  const total = blogs && blogs.length;
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState({
    current_page: page,
    per_page: PER_PAGE,
    total: total,
  });
  const [sort, setSort] = useState("id");
  const [typeSort, setTypeSort] = useState("asc");
  const [search, setSearch] = useState("");
  const sortBy = [
    { value: "id", text: "Id" },
    { value: "createdAt", text: "Created At" },
    { value: "title", text: "Title" },
  ];
  const sortType = [
    { value: "asc", text: "Ascending" },
    { value: "desc", text: "Decrease" },
  ];

  useEffect(() => {
    getBlogs(page, PER_PAGE, sort, typeSort, search);
    return resetState;
  }, []);

  const changePage = (pageNumber) => {
    if (pageNumber !== page) {
      getBlogs(pageNumber, PER_PAGE, sort, typeSort, search);
      setPage(pageNumber);
      setPaginate({
        current_page: pageNumber,
        per_page: PER_PAGE,
        total: total,
      });
    }
  };

  const sortBlogs = (e) => {
    getBlogs(1, PER_PAGE, e.target.value, typeSort, search);
    setSort(e.target.value);
    setPage(1);
    setPaginate({
      current_page: 1,
      per_page: PER_PAGE,
      total: total,
    });
  };

  const sortBlogsType = (e) => {
    getBlogs(1, PER_PAGE, sort, e.target.value, search);
    setTypeSort(e.target.value);
    setPage(1);
    setPaginate({
      current_page: 1,
      per_page: PER_PAGE,
      total: total,
    });
  };

  const searchText = (e) => {
    if (e.target.value === "") {
      setSearch(e.target.value);
      getBlogs(1, PER_PAGE, sort, typeSort, "");
      setPage(1);
      setPaginate({
        current_page: 1,
        per_page: PER_PAGE,
        total: 57,
      });
    } else {
      setSearch(e.target.value);
      getBlogs(1, PER_PAGE, sort, typeSort, e.target.value);
      setPage(1);
      setPaginate({
        current_page: 1,
        per_page: PER_PAGE,
        total: total,
      });
    }
  };
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-3">
          <Select
            className="form-control input-form"
            data={sortBy}
            label="Sort By"
            onChange={(e) => sortBlogs(e)}
          />
        </div>
        <div className="col-md-3">
          <Select
            className="form-control input-form"
            data={sortType}
            label="Sort Type"
            onChange={(e) => sortBlogsType(e)}
          />
        </div>
        <div className="col-md-6">
          <InputText
            label="Search Text"
            className="form-control input-form"
            onChange={(e) => searchText(e)}
            value={search}
          />
        </div>
      </div>
      <div className="row blogs mt-5">
        {!isLoading && (
          <ul className="list-unstyled blogs__list ">
            {data &&
              data.map((item, index) => <ListItem item={item} key={index} />)}
          </ul>
        )}
      </div>
      <div className="paginate-wrapper">
        <Paginate paginate={paginate} changePage={changePage} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.Blogs,
    isLoading: state.Blogs.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: (page, perPage, sort, typeSort, search) =>
      dispatch(GetBlogsList(page, perPage, sort, typeSort, search)),
    resetState: () => dispatch(ResetState()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Homepage));
