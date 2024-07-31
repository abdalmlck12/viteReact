import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../api"; // Adjust the import based on your setup
import { useAuth } from "../context/AuthContext"; // Adjust the import based on your setup

const QuizView = () => {
  const { id } = useParams();
  const { user } = useAuth(); // Use the useAuth hook
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(id + ": " + user);
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await apiClient.get(`/quizzes/${id}`);
        setQuiz(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        setError("Failed to load quiz. Please try again.");
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (quiz?.questions?.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (!allQuestionsAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }
    console.log(calculateScore());
    const resultData = {
      user: {
        id: user, // Use user id from the useAuth hook
      },
      quiz: {
        id: quiz?.id,
      },
      score: calculateScore(), // Implement calculateScore function to compute the user's score
      dateTaken: new Date().toISOString(),
    };

    try {
      await apiClient.post("/results", resultData);
      navigate(`/results/${id}`);
    } catch (error) {
      console.error("Error submitting answers:", error);
      setError("Failed to submit answers. Please try again.");
    }
  };

  const allQuestionsAnswered = quiz?.questions?.length === answers.length;

  const calculateScore = () => {
    // Implement your score calculation logic here
    // For example, you can compare answers to the correct answers and count the score
    return answers.reduce((score, answer, index) => {
      if (quiz.questions[index]?.correctAnswer === answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {error}
      </div>
    );
  }

  if (!quiz || !quiz.questions) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No quiz data found.
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-3xl p-8 space-y-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {quiz.title}
        </h1>
        <div>
          <h2 className="text-xl mb-2 text-gray-700">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </h2>
          <p className="text-lg mb-4 text-gray-600">
            {currentQuestion.questionText}
          </p>
          <div className="space-y-2">
            {currentQuestion.option1 && (
              <label className="flex items-center text-lg cursor-pointer text-gray-600">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={currentQuestion.option1}
                  checked={
                    answers[currentQuestionIndex] === currentQuestion.option1
                  }
                  onChange={handleAnswerChange}
                  className="hidden peer"
                />
                <span className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-blue-600"></span>
                {currentQuestion.option1}
              </label>
            )}
            {currentQuestion.option2 && (
              <label className="flex items-center text-lg cursor-pointer text-gray-600">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={currentQuestion.option2}
                  checked={
                    answers[currentQuestionIndex] === currentQuestion.option2
                  }
                  onChange={handleAnswerChange}
                  className="hidden peer"
                />
                <span className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-blue-600"></span>
                {currentQuestion.option2}
              </label>
            )}
            {currentQuestion.option3 && (
              <label className="flex items-center text-lg cursor-pointer text-gray-600">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={currentQuestion.option3}
                  checked={
                    answers[currentQuestionIndex] === currentQuestion.option3
                  }
                  onChange={handleAnswerChange}
                  className="hidden peer"
                />
                <span className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-blue-600"></span>
                {currentQuestion.option3}
              </label>
            )}
            {currentQuestion.option4 && (
              <label className="flex items-center text-lg cursor-pointer text-gray-600">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={currentQuestion.option4}
                  checked={
                    answers[currentQuestionIndex] === currentQuestion.option4
                  }
                  onChange={handleAnswerChange}
                  className="hidden peer"
                />
                <span className="w-4 h-4 mr-2 rounded-full border-2 border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:ring-2 peer-checked:ring-blue-600"></span>
                {currentQuestion.option4}
              </label>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 rounded-md text-white ${
              currentQuestionIndex === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          {currentQuestionIndex === quiz.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!allQuestionsAnswered}
              className={`px-4 py-2 rounded-md text-white ${
                allQuestionsAnswered
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;
