import { combineReducers } from 'redux'
import todos from '../containers/Todo/todos'
import captcha from '../containers/Todo/captcha'

export default combineReducers({
  todos,
  captcha
})
