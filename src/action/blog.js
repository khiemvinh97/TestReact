import {
  getTakenData,
  getLength,
  getDataByID,
} from "../services/base_services";
import * as types from "../constants/BlogsConstants";
import { BLOG_LIST } from "../constants/Config";

const BlogRequest = (status) => {
  return {
    type: types.BLOGS_REQUEST,
    status,
  };
};

const GetBlogs = (data) => {
  return {
    type: types.GET_LIST_BLOGS,
    data,
  };
};

const GetLength = (length) => {
  return {
    type: types.LENGTH_BLOGS,
    length,
  };
};

export const GetBlogsList = (page, Perpage, sort, typeSort, search) => (
  dispatch
) => {
  dispatch(BlogRequest(true));
  getLength(BLOG_LIST, search).then((res) => {
    dispatch(GetLength(res.data.length));
  });
  getTakenData(BLOG_LIST, page, Perpage, sort, typeSort, search)
    .then((res) => {
      dispatch(GetBlogs(res.data));
      dispatch(BlogRequest(false));
    })
    .catch((error) => {
      dispatch(BlogRequest(false));
      return Promise.reject(error);
    });
};

const getDetail = (data) => {
  return {
    type: types.GET_BLOG_DETAIL,
    data,
  };
};

export const getBlogDetail = (id) => (dispatch) => {
  dispatch(BlogRequest(true));
  getDataByID(BLOG_LIST, id)
    .then((res) => {
      dispatch(getDetail(res.data));
      dispatch(BlogRequest(false));
    })
    .catch((error) => {
      dispatch(BlogRequest(false));
      return Promise.reject(error);
    });
};

export const ResetState = () => {
  return {
    type: types.RESET_BLOGS,
  };
};
