import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import CoursesStub from "../pages/CoursesStub";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/courses" component={CoursesStub} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
