import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UsersList";

export default () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserList} />
    </Fragment>
  );
};
