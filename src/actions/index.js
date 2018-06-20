import axios from "axios";

export const CREATE_POST = "createPost";
export const FETCH_POSTS = "fetchPosts";

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export function createPost(values) {
  return {
    type: CREATE_POST,
    payload: {
      user: values.data
    }
  };
}

export function fetchPosts() {
  const req = axios.get(`${ROOT_URL}/posts`);
  console.log("fetchpost", req);
  return {
    type: FETCH_POSTS,
    payload: req
  };
}
