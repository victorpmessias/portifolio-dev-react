import React, { useState } from 'react';

const Home = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(parseFloat(num1 !== '' ? num1 : 0) + parseFloat(num2 !== '' ? num2 : 0));
  };

  return (
    <div>
      <h1>Calculadora de Soma</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="num1">Número 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num2">Número 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button type="submit">Somar</button>
      </form>
      {result !== null && (
        <h2>Resultado: {result}</h2>
      )}
    </div>
  );
};

export default Home;
