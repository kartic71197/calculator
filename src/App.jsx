import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const appendValue = (val) => {
    setInput((prevInput) => prevInput + val);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const evaluated = eval(input);
      if (isNaN(evaluated)) {
        setResult('Error');
      }
      else if (!isFinite(evaluated)) {
        setResult('Infinity');
      }
      else {
        setResult(evaluated);
      }
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 px-3 py-6">
      <input className="bg-black text-white rounded-lg p-3 my-1" type="text" value={input} readOnly />
      <div className="bg-black text-white rounded-lg px-3 py-2 mb-2" id="result">{result}</div>
      <div className="grid grid-cols-4 gap-3">
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('7')}>7</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('8')}>8</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('9')}>9</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('/')}>/</button>

        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('4')}>4</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('5')}>5</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('6')}>6</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('*')}>*</button>

        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('1')}>1</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('2')}>2</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('3')}>3</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('-')}>-</button>

        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('0')}>0</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={clearInput}>C</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={calculateResult}>=</button>
        <button className="cursor-pointer bg-black text-white rounded-lg col-span-1" onClick={() => appendValue('+')}>+</button>
      </div>
     
      </div>
      
    </div>
  );
};

export default App;
