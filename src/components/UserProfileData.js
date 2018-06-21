import React from "react";
import { Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UserProfileData extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>...Loading</div>;
    }
    return (
      <Container style={{ clear: "both" }}>
        <div>
          <h3>{user.username}</h3>
          <h4>
            <Icon name="mail" />
            {user.email}
          </h4>
          <h4>
            <Icon name="phone" />
            {user.mobile}
          </h4>

          <Link to="/"> Back</Link>
        </div>
      </Container>
    );
  }
}

export default UserProfileData;
