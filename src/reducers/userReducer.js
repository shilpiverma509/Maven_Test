import _ from "lodash";
import { FETCH_POSTS, CREATE_POST } from "../actions";

/**
 * Converting the array of posts into object of posts where the
 * key is the id of the posts and value is the whole post for
 * a simple id lookup
 */

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //console.log(action.payload.data);
      return _.mapKeys(action.payload.data, "id");
    case CREATE_POST:
      return Object.assign({}, state, action.payload.user);
    default:
      return state;
  }
}
