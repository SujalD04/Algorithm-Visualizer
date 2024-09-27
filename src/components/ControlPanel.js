// src/components/ControlPanel.js
import React from 'react';

const ControlPanel = () => {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Start</button>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">Pause</button>
      <button className="px-4 py-2 bg-red-500 text-white rounded-md">Reset</button>
    </div>
  );
};

export default ControlPanel;
