import { connect } from 'react-redux';
import React, { Component } from 'react';
import { VisibilityFilters, toggleTodo, addTodo } from './actions';
import styles from './styles.css';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todoName: '',
    };
  }

  render() {
    return (
      <div className={ styles.wrap }>
        <input ref={ node => this.todoNode = node }/>
        <button className={styles.addButton} onClick={ () => {
          if (!this.todoNode.value.trim()) {
            return;
          }
          this.props.addTodo(this.todoNode.value);
        } }>
          Add Todo
        </button>
        <div>{
          this.props.todos.map((todo, index) => (
            <p key={index + 'k'}>{ todo.text }</p>
          ))
        }</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: value => dispatch(addTodo(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);