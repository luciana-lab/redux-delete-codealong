import React from 'react';

const Todo = props => {
  return (
    <li>
      {/* <span>{props.text}</span> */}
      {/* modify the Todo component to work with the todo object */}
      <span>{props.todo.text}</span>

      {/* add a delete button. When clicked, remove that specific todo */}
      {/* When the delete btn is clicked, back in the connected TodosContainer the value of props.text is passed into the dispatch action as the payload */}
      {/* <button onClick={() => props.delete(props.text)}>DELETE</button> */}
      {/* now when props.delete is called, an action is dispatched that contains the id as its payload rathen than text */}
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </li>
  );
};

export default Todo;