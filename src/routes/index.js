import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../containers/Home/index";
import BlogDetail from "../containers/BlogDetail";

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/blog/:id" component={BlogDetail} exact />
        </Switch>
      </>
    );
  }
}

export default Routes;
