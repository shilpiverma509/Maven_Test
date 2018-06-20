import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom";
import { GridColumn, Grid, Segment } from "semantic-ui-react";

class Blog extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "grey",
      "black"
    ];
    return _.map(this.props.posts, post => {
      return (
        <Grid columns={3} divided>
          {colors.map(color => (
            <Grid.Row>
              <Grid.Column color={color} key={color} className="grid-colors" />
              <Grid.Column>
                <li className="ui segment" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      );
    });
  }

  render() {
    // console.log(this.props.posts);

    return (
      <div>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Blog);

// <div className="ui three coloumn grid">
//   <ul className=" three wide coloumn">
//     {posts.map(post => (
//       <li className="ui segment" key={post.id}>
//         <h1>{post.title}</h1>
//         <p>{post.body}</p>
//       </li>
//     ))}
//   </ul>
// </div>
