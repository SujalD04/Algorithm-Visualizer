import React from "react";

const HeroText = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#123456]">
      <h1 className="text-white text-6xl font-bold relative">
        Visualization
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent to-gray-900 mt-2"></span>
      </h1>
    </div>
  );
};

export default HeroText;
