// src/pages/Quizzes.jsx

import React from "react";
import { Link } from "react-router-dom";

const quizzes = [
  {
    id: 1,
    name: "Math Quiz",
    numberOfQuestions: 10,
    category: "Math",
    user: "John Doe",
  },
  {
    id: 2,
    name: "General Knowledge",
    numberOfQuestions: 15,
    category: "General Knowledge",
    user: "Jane Smith",
  },
  {
    id: 3,
    name: "Science Quiz",
    numberOfQuestions: 12,
    category: "Science",
    user: "Alice Johnson",
  },
  {
    id: 4,
    name: "History Quiz",
    numberOfQuestions: 8,
    category: "History",
    user: "Robert Brown",
  },
  {
    id: 5,
    name: "Literature Quiz",
    numberOfQuestions: 20,
    category: "Literature",
    user: "Emily Davis",
  },
  {
    id: 6,
    name: "Geography Quiz",
    numberOfQuestions: 14,
    category: "Geography",
    user: "Michael Wilson",
  },
  // Add more quiz objects here
];

const Quizzes = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Available Quizzes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-8 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {quiz.name}
              </h2>
              <div className="flex-grow space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 text-lg">
                    Questions:
                  </span>
                  <span className="text-gray-700 text-lg">
                    {quiz.numberOfQuestions}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 text-lg">
                    Category:
                  </span>
                  <span className="text-gray-700 text-lg">{quiz.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 text-lg">
                    Creator:
                  </span>
                  <span className="text-gray-700 text-lg">{quiz.user}</span>
                </div>
              </div>
              <Link
                to={`/quizzes/${quiz.id}`}
                className="inline-block bg-blue-600 text-white text-lg py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
