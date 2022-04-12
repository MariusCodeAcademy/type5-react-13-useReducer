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
    // setCount((prevState) => prevState + x);
    dispatch({ type: 'addAmount', payload: x });
  }

  function handleIncrement() {
    dispatch({ type: 'add' });
    // console.log('+');
    // kei state priklauso nuo pries tai state tai atnaujinam su funkcija
    // setCount((prevState) => prevState + 1);
    // setCount(count + 1); // no no
  }
  function handleDecrement() {
    dispatch({ type: 'minus' });
    // console.log('-');
    // setCount((prevState) => prevState - 1);
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
