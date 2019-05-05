const captcha = (state = {
  data: '',
  loading: false,
}, action) => {
  switch (action.type) {
    case 'START_GET_CAPTCHA':
      return Object.assign({}, state, { loading: true });
    case 'SET_CAPTCHA':
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    default:
      return state;
  }
};

export default captcha;
