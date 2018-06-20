import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderComp = () => (
  <div className="App-header">
    <Header as="h3" floated="left">
      <Link to="/">A Big Ol'Blog</Link>
    </Header>
    <Header as="h4" floated="right">
      <Link to="/posts">
        <Icon name="write" />
        create Post
      </Link>
    </Header>
  </div>
);
export default HeaderComp;
