import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
/* import PublicRouter from "./PublicRouter"
import PrivateRouter from "./PrivateRouter" */
import Home from "../containers/Home";

const Routers = () => {
  
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
  );
};

export default Routers;
