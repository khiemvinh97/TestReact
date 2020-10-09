import * as types from "./../constants/BlogsConstants";

const initialState = {
  data: [],
  isLoading: true,
  length: 57,
  blog: [],
};

const Blogs = (state = initialState, action) => {
  switch (action.type) {
    case types.BLOGS_REQUEST:
      return {
        ...state,
        isLoading: action.status,
      };
    case types.GET_LIST_BLOGS:
      return {
        ...state,
        data: [...action.data],
        isLoading: false,
      };
    case types.RESET_BLOGS:
      return initialState;
    case types.LENGTH_BLOGS: {
      return {
        ...state,
        length: action.length,
      };
    }
    case types.GET_BLOG_DETAIL: {
      return {
        ...state,
        blog: action.data,
        isLoading: false,
      };
    }

    default:
      return { ...state };
  }
};

export default Blogs;
