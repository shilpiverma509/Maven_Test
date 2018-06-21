import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createPost } from "../actions/index";
import axios from "axios";
import UserProfileData from "./UserProfileData";

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false
    };
  }
  renderFields({ input, type, label, meta: { error, touched } }) {
    return (
      <Form.Field>
        <label>{label}</label>
        <input
          style={{ marginBottom: "5px" }}
          type={type}
          {...input}
          placeholder={label}
        />
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched && error}
        </div>
      </Form.Field>
    );
  }
  onSubmit(values) {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then(res => this.props.createPost(res));
    this.setState({
      submit: true
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return this.state.submit ? (
      <UserProfileData id="userData" user={this.props.user} />
    ) : (
      <div>
        <Form id="userForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Username"
            name="username"
            type="text"
            component={this.renderFields}
          />
          <Field
            label="Email"
            type="email"
            name="email"
            component={this.renderFields}
          />
          <Field
            label="Password"
            type="password"
            name="password"
            component={this.renderFields}
          />
          <Field
            label="Mobile"
            name="mobile"
            type="number"
            component={this.renderFields}
          />
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  const required = "required";
  const errors = {};
  if (!values.username) {
    errors.username = required;
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 charachters or less";
  }
  if (!values.email) {
    errors.email = required;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())
  ) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = required;
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "password should be between 8 to 16 characters";
  } else if (/[\W_]/.test(values.password)) {
    errors.password = "Only letters and numbers allowed";
  }
  if (!values.mobile) {
    errors.mobile = required;
  } else if (
    !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(values.mobile)
  ) {
    errors.mobile = "Enter a valid mobile number";
  }
  return errors;
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default reduxForm({
  validate,
  form: "UserProfileForm"
})(
  connect(
    mapStateToProps,
    { createPost }
  )(NewUserForm)
);
//        <UserProfileData id="userData" user={this.props.user} />
