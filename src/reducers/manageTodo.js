//import uuid node package to generate an id each time a todo is created
import uuid from "uuid";

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = { id: uuid(), text: action.payload.text }
      return { todos: state.todos.concat(todo) }
    // return { todos: state.todos.concat(action.payload.text) };

    // the filter returns every todo that doesn't match what is contained in action.payload
    case 'DELETE_TODO':
      // return { todos: state.todos.filter(todo => todo !== action.payload) }
      // now that todo is an ovject and we're passing the id as the payload, match todo.id with the payload instead of todo
      return { todos: state.todos.filter(todo => todo.id !== action.payload) }

    default:
      return state;
  }
}
