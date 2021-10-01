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
import Pokemon from "../containers/Pokemon";

const Routers = () => {
  
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:name" component={Pokemon} />
          <Redirect to="/" />
        </Switch>
      </Router>
  );
};

export default Routers;
