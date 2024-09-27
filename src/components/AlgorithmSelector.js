// src/components/AlgorithmSelector.js
import React from 'react';

const AlgorithmSelector = () => {
  return (
    <div className="flex justify-center mt-4">
      <select className="px-4 py-2 border border-gray-300 rounded-md">
        <option value="bubbleSort">Bubble Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
      </select>
    </div>
  );
};

export default AlgorithmSelector;
