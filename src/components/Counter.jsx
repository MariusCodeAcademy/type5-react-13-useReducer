import { useState, useReducer } from 'react';

const initCounterValue = { count: 0 };

function countReducer(state, action) {
  console.log('action ===', action);
  console.log('state ===', state);

  switch (action?.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count - 1 };
    case 'addAmount':
      return { count: state.count + action.payload };
    default:
      return { count: 1000 };
  }
}

function Counter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initCounterValue);

  function handleIncrementBy(x) {
    dispatch({ type: 'addAmount', payload: x });
  }

  function handleIncrement() {
    dispatch({ type: 'add' });
  }
  function handleDecrement() {
    dispatch({ type: 'minus' });
  }

  return (
    <div className='counter'>
      <h2>{state.count}</h2>
      <div className='control'>
        <button onClick={() => handleIncrementBy(10)}>+5</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
