import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

    useEffect(()=>{
        
    },
    [count]);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        if(count > 0)
         setCount(count - 1);
    }
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
