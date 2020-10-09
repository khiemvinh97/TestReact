import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { ResetState, getBlogDetail } from "../../action/blog";

const BlogDetail = (props) => {
  const { getBlog, blogs, resetState } = props;
  const data = blogs && blogs.blog;
  const isLoading = blogs && blogs.isLoading;
  const id = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getBlog(id);
    }
    return resetState;
  }, []);

  return (
    !isLoading && (
      <>
        <div className="container">
          <div className="row blog__detail">
            <div className="col-12 text-center mt-3 blog__detail__id">
              Blog No.{data && data.id}
            </div>
            <div className="col-12 text-center mt-3">
              <img src={data && data.image} alt={data && data.title} />
            </div>
            <div className="col-12 text-center mt-3 blog__detail__title">
              {data && data.title}
            </div>

            <div className="col-12 text-center mt-3 blog__detail__content">
              {data && data.content}
            </div>
            <div className="col-12 text-center mt-3 blog__detail__button">
              <button
                onClick={() => {
                  history.goBack();
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.Blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetState: () => dispatch(ResetState()),
    getBlog: (id) => dispatch(getBlogDetail(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BlogDetail));
