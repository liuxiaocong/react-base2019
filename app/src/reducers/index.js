import { combineReducers } from 'redux'
import todos from '../containers/Todo/todos'
import visibilityFilter from '../containers/Todo/visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
