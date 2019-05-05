import axios from 'axios';

let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const setCaptcha = (data) => ({
  type: 'SET_CAPTCHA',
  data,
});

export const startCaptcha = () => ({
  type: 'START_GET_CAPTCHA'
});

export const sendRequest = () => {
  return (dispatch) => {
    dispatch(startCaptcha());
    axios.get('https://account-staging.hashnest.com/client/api/v1/captcha').then((res) => {
      const { captcha_id, data } = res.data;
      console.log(res);
      dispatch(setCaptcha(data));
    });
  };
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
