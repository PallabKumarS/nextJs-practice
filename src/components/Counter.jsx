"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-600">
          Simple Counter
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setCounter(counter - 1)}
            className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-700 hover:drop-shadow-lg"
          >
            -
          </button>
          <span className="text-3xl font-bold text-gray-800">{counter}</span>
          <button
            onClick={() => setCounter(counter + 1)}
            className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-700 hover:drop-shadow-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
