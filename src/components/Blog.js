import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import _ from "lodash";
import { Grid } from "semantic-ui-react";

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
    let grid = _.map(this.props.posts, (post, index) => {
      let i = parseInt(index);
      let itemColor = colors[i % 13];

      return (
        <Grid.Column className="grid-colors" key={index}>
          <div style={{ backgroundColor: itemColor }} className="colorBox" />
          <div>
            <h3 className="truncate">{post.title}</h3>
            <p className="truncate">{post.body}</p>
          </div>
        </Grid.Column>
      );
    });
    return <Grid columns={3}> {grid} </Grid>;
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
