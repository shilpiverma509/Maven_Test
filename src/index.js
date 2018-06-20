import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import { Segment, Container } from "semantic-ui-react";

//import "semantic-ui-css/semantic.min.css";

import "./index.css";
import Blog from "./components/Blog";
import PostsNew from "./components/PostsNew";
import UserProfileData from "./components/UserProfileData";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Container>
        <HeaderComp />
        <Route path="/" exact component={Blog} />
        <Route path="/posts" exact component={PostsNew} />
      </Container>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

//        <Route path="/posts/:id" exact component={UserProfileData} />
