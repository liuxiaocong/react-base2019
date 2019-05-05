import { connect } from 'react-redux';
import React, { Component } from 'react';
import { VisibilityFilters, toggleTodo, addTodo, sendRequest } from './actions';
import styles from './styles.css';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todoName: '',
    };
  }

  render() {
    console.log(this.props.captcha.loading);
    return (
      <div className={ styles.wrap }>
        {
          this.props.captcha.loading ? <p>Loading ...</p>
            : this.props.captcha.data &&
            <img className={ styles.capImage } src={ `data:image/gif;base64,${this.props.captcha.data}` }></img>

        }

        <input ref={ node => this.todoNode = node }/>
        <button className={ styles.addButton } onClick={ () => {
          if (!this.todoNode.value.trim()) {
            return;
          }
          this.props.addTodo(this.todoNode.value);
        } }>
          Add Todo
        </button>

        <button className={ styles.addButton } onClick={ () => {
          this.props.sendRequest();
        } }>
          sendRequest
        </button>

        <div>{
          this.props.todos.map((todo, index) => (
            <p key={ index + 'k' }>{ todo.text }</p>
          ))
        }</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  captcha: state.captcha,
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: value => dispatch(addTodo(value)),
  sendRequest: () => dispatch(sendRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);