import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api"; // Adjust the import based on your setup
import { useAuth } from "../context/AuthContext";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user; // Ensure userId is correctly accessed
 console.log(" user id is "+userId);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/categories");
        setCategories(response.data);
      } catch (error) {
        setError("Failed to load categories. Please try again.");
      }
    };
    fetchCategories();
  }, []);

  const handleQuestionChange = (index, event) => {
    const newQuestions = questions.map((question, qIndex) => {
      if (index !== qIndex) return question;
      return { ...question, text: event.target.value };
    });
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, event) => {
    const newQuestions = questions.map((question, questionIndex) => {
      if (qIndex !== questionIndex) return question;
      const newOptions = question.options.map((option, optionIndex) => {
        if (oIndex !== optionIndex) return option;
        return event.target.value;
      });
      return { ...question, options: newOptions };
    });
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (index, event) => {
    const newQuestions = questions.map((question, qIndex) => {
      if (index !== qIndex) return question;
      return { ...question, correctAnswer: event.target.value };
    });
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, qIndex) => index !== qIndex));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the quiz data to be sent
    const quizData = {
      title,
      category: { id: categoryId }, // Wrap categoryId in an object
      user: { id: userId }, // Wrap userId in an object
      questions: questions.map((q) => ({
        questionText: q.text,
        option1: q.options[0],
        option2: q.options[1],
        option3: q.options[2],
        option4: q.options[3],
        correctAnswer: q.correctAnswer,
      })),
    };

    // Log the quiz data to the console
    console.log("Quiz Data to be sent:", JSON.stringify(quizData, null, 2));

    try {
      const response = await apiClient.post("/quizzes", quizData);
      if (response.data) {
        navigate("/quizzes");
      }
    } catch (error) {
      setError("Failed to create quiz. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-3 bg-gray-100">
      <div className="w-full max-w-xl p-7 space-y-10 rounded-xl bg-white shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Create a New Quiz
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Quiz Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter quiz title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName} {/* Ensure this is a string */}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="questions"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Questions
            </label>
            {questions.map((question, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={question.text}
                  onChange={(event) => handleQuestionChange(index, event)}
                  className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Question ${index + 1}`}
                  required
                />
                {question.options.map((option, oIndex) => (
                  <input
                    key={oIndex}
                    type="text"
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(index, oIndex, event)
                    }
                    className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Option ${oIndex + 1}`}
                    required
                  />
                ))}
                <select
                  value={question.correctAnswer}
                  onChange={(event) => handleCorrectAnswerChange(index, event)}
                  className="w-full bg-gray-50 text-gray-900 text-lg py-3 px-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select the correct answer</option>
                  {question.options.map((option, oIndex) => (
                    <option key={oIndex} value={option}>
                      {`Option ${oIndex + 1}`}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(index)}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove Question
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQuestion}
              className="text-blue-500 hover:text-blue-700"
            >
              Add Question
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-lg py-3 mt-4 rounded-lg shadow-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;
