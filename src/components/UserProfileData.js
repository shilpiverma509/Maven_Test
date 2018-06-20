import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import { Icon, Card, Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HeaderComp from "./HeaderComp";

class UserProfileData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return <div />;
    }
    return (
      <Container>
        <Segment raised>
          <HeaderComp />
          <h3>{user.username}</h3>
          <h4>
            <Icon name="mail" />
            {user.email}
          </h4>
          <h4>
            <Icon name="phone" />
            {user.mobile}
          </h4>
        </Segment>
        <Link to="/"> Back</Link>
      </Container>
    );
  }
}

export default UserProfileData;
