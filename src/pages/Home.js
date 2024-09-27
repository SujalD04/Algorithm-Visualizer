// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container flex justify-evenly flex-wrap pt-4">
      {/* Card 1 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*_qUuB7vQ716KuLp6bx3-oQ.png"
              alt="Sorting Algorithms"
            />
            <div className="py-5 text-center">
              <span
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Sorting Algorithms
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Bubble, Merge, Quick Sort
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Card 2 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i0.wp.com/assignmentoverflow.com/wp-content/uploads/2022/07/Searching-Algorithms-Linear-and-Binary-Search.webp?fit=1024%2C642&ssl=1"
              alt="Searching Algorithms"
            />
            <div className="py-5 text-center">
              <span
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Searching Algorithms
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Linear and Binary Search
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Card 3 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://cs.lmu.edu/~ray/images/agraph.png"
              alt="Graph Algorithms"
            />
            <div className="py-5 text-center">
              <span
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Graph Algorithms
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Djikstra and A*
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Card 4 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://user-images.githubusercontent.com/53707300/167315572-28f04c06-4676-48c7-bc33-572bf4a270dc.png"
              alt="Dynamic Programming"
            />
            <div className="py-5 text-center">
              <span
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Dynamic Prog Algorithms
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Knapsack and Fibonacci
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Card 5 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#"></a>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://afteracademy.com/images/what-are-greedy-algorithms-banner-65494a5f98ad355e.png"
            alt="Greedy Algorithms"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Greedy Algorithm
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Kruskals and Huffman
            </span>
          </div>
        </div>
        <a/>
      </div>

      {/* Card 6 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://favtutor.com/resources/images/uploads/backtracking_algorithm_in_cpp.png"
            alt="Backtracking Algorithms"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Backtracking Algorithms
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              N-Queen and Sudoku
            </span>
          </div>
        </div>
        </a>
      </div>

      {/* Card 7 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://onelostsheep.net/wp-content/uploads/2018/06/divide-conquer.jpg"
            alt="Divide and Conquer"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Divide and Conquer Algorithms
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Strassen's and closest pair of points
            </span>
          </div>
        </div>
        </a>
      </div>

      {/* Card 8 */}
      <div className="card mb-4 transform transition-transform duration-300 hover:scale-105">
        <a href="#">
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src="https://miro.medium.com/v2/resize:fit:1400/1*ewOE1lcot5K92Se5X7X4dg.png"
            alt="Computational Geometry"
          />
          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabIndex="0"
              role="link"
            >
              Computational Geometry
            </a>
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Convex Hull and Line segment intersection
            </span>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
