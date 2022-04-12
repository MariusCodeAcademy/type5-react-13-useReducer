// sukurti komponenta
// komponente yra reiksme kuria galim didinti ir mazinti vienetu
// useState()
// atvaizduoti komponenta App.js

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrementBy(x) {
    setCount((prevState) => prevState + x);
  }

  function handleIncrement() {
    // console.log('+');
    // kei state priklauso nuo pries tai state tai atnaujinam su funkcija
    setCount((prevState) => prevState + 1);
    // setCount(count + 1); // no no
  }
  function handleDecrement() {
    // console.log('-');
    setCount((prevState) => prevState - 1);
  }

  return (
    <div className='counter'>
      <h2>{count}</h2>
      <div className='control'>
        <button onClick={() => handleIncrementBy(5)}>+5</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
