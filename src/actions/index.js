import axios from "axios";

export const CREATE_POST = "createPost";
export const FETCH_POSTS = "fetchPosts";
export const FETCH_POST = "fetchPost";

const ROOT_URL = "https://jsonplaceholder.typicode.com";

// const req = axios
// .post(`${ROOT_URL}/posts`, values)
// .then(response => callback(response));

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

export function fetchPost(id) {
  const req = axios.get(`${ROOT_URL}/posts/${id}`);
  return {
    type: FETCH_POST,
    payload: req
  };
}
