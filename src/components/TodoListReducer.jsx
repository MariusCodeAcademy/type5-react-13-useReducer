// sukurti komponenta
import { v4 as uuid } from 'uuid';
import { useReducer, useState } from 'react';
import SingleTodo from './SingleTodo';
// turi antraste
// turi saraso el su li
const initTodos = [
  { id: 1, title: 'Go to park', doneStatus: true },
  { id: 2, title: 'Go to mall', doneStatus: false },
];

function todoReducer(todos, action) {
  console.log('action ===', action);
  switch (action?.type) {
    case 'addTodo':
      return [...todos, action.payload];
    case 'checkTodo':
      const todoCopy = [...todos];
      const found = todoCopy.find((tObj) => tObj.id === action.payload);
      console.log('found ===', found);
      found.doneStatus = !found.doneStatus;
      return todoCopy;
    default:
      throw new Error('todoReducer.No action type found');
  }
}

function TodoListReducer() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);
  // sukurti state todoTitle
  const [todoTitle, setTodoTitle] = useState('Do 100 pushups');
  // sujungti todoTitle state su  input el

  function checkHandler(todoId) {
    dispatch({ type: 'checkTodo', payload: todoId });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!todoTitle.length) return;
    // sukurti naujo todo obj
    //{ id: 2, title: 'Go to mall', doneStatus: false }
    const newTodoObj = { id: uuid(), title: todoTitle, doneStatus: false };
    // prideti prie esamu
    dispatch({ type: 'addTodo', payload: newTodoObj });
    setTodoTitle('');
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
          <SingleTodo
            onCheck={checkHandler}
            isDone={tObj.doneStatus}
            title={tObj.title}
            id={tObj.id}
            key={tObj.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoListReducer;
