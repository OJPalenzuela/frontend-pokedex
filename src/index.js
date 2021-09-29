import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers/Router';

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);

