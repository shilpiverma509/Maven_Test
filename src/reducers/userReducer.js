import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, CREATE_POST } from "../actions";

/**
 * Converting the array of posts into object of posts where the
 * key is the id of the posts and value is the whole post for
 * a simple id lookup
 */

export default function(state = {}, action) {
  //console.log("action", action);
  switch (action.type) {
    case FETCH_POSTS:
      //console.log(action.payload.data);
      return _.mapKeys(action.payload.data, "id");
    case CREATE_POST:
      return Object.assign({}, state, action.payload.user);

    case FETCH_POST:
    //const post = action.payload.data;
    //console.log("post", post);
    //return { ...state, [action.payload.data]: action.payload.data };
    default:
      return state;
  }
}
