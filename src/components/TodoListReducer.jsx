// sukurti komponenta
import { v4 as uuid } from 'uuid';
import { useReducer, useState } from 'react';
// turi antraste
// turi saraso el su li
const initTodos = [
  { id: 1, title: 'Go to park', doneStatus: false },
  { id: 2, title: 'Go to mall', doneStatus: false },
];

function todoReducer(todos, action) {
  console.log('action ===', action);
  switch (action?.type) {
    case 'addTodo':
      return todos.concat(action.payload);
    default:
      throw new Error('todoReducer.No action type found');
  }
}

function TodoListReducer() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);
  // sukurti state todoTitle
  const [todoTitle, setTodoTitle] = useState('Do 100 pushups');
  // sujungti todoTitle state su  input el

  function submitHandler(e) {
    e.preventDefault();
    console.log('react is in controll');
    // sukurti naujo todo obj
    //{ id: 2, title: 'Go to mall', doneStatus: false }
    const newTodoObj = { id: uuid(), title: todoTitle, doneStatus: false };
    // prideti prie esamu
    dispatch({ type: 'addTodo', payload: newTodoObj });
  }
  return (
    <div className='counter'>
      <h2>Todo list</h2>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTodoTitle(e.target.value)}
          value={todoTitle}
          type='text'
          placeholder='Title'
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((tObj) => (
          <li key={tObj.id}>{tObj.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListReducer;
