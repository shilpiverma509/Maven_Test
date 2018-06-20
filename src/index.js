import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import { Container } from "semantic-ui-react";
import Blog from "./components/Blog";
import NewUserForm from "./components/NewUserForm";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Container>
        <HeaderComp />
        <Route path="/" exact component={Blog} />
        <Route path="/posts" exact component={NewUserForm} />
      </Container>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
