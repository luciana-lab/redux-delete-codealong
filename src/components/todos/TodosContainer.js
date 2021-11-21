import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  // pass this.props.delete down to Todo, so that each Todo component rendered will have access to the 'DELETE_TODO' action
  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} delete={this.props.delete} />)
  // update the renderTodos() after insert the uuid in manageTodos (before the id was based on the index. Now we're also passing the todo object as a prop rather than just text)
  renderTodos = () => this.props.todos.map(todo => <Todo key={todo.id} todo={todo} delete={this.props.delete} />)

  render() {
    return (
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// this function will return a delect action
// the component now have access to this.props.delete, which takes in the todo text as an argument and sends it as the action's payload
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({ type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);