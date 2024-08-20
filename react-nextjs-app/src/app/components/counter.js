'use client'

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count
      + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-pastelPurple w-full">
      <h1 className="text-3xl">Counter: {count}</h1>

      <div className="flex justify-center gap-4">
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded-full hover:pastelDarkRed"
          onClick={increment}>+</button>
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded-full hover:pastelDarkRed"
          onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;