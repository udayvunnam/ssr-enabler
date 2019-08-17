import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import { UserList } from "./components/UserList";

export default () => {
  return (
    <Fragment>
      <Route component={Home} path="/" />
      <Route component={UserList} path="/users" />
    </Fragment>
  );
};
