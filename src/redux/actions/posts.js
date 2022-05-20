import axios from 'axios';

export const addPost = (fields) => ({
  type: 'ADD_POST',
  payload: fields,
});

export const removePost = (id) => ({
  type: 'REMOVE_POST',
  payload: id,
});

export const updatePost = (fields) => ({
  type: 'UPDATE_POST',
  payload: fields,
});

export const getPosts = () => (dispatch) => {
  axios
    .get('https://6245592d7701ec8f725097cb.mockapi.io/posts')
    .then((res) => {
      dispatch({
        type: 'ADD_START_POSTS',
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
