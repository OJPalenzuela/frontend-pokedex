import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Edit from "../containers/Edit";
import Favorites from "../containers/Favorites";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Pokemon from "../containers/Pokemon";
import Register from "../containers/Register";
import { firebase } from "../firebase/firebaseConfig";
import { login } from "../redux/actions/authActions";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const Routers = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }
    })
  }, [dispatch])

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/:name" component={Pokemon} />
        <PrivateRouter exact path="/edit/:uid" component={Edit} />
        <PrivateRouter exact path="/favorites" component={Favorites} />
        <PublicRouter exact path="/auth/login" component={Login} />
        <PublicRouter exact path="/auth/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routers;
