import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../api"; // Adjust the import based on your setup

const Results = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await apiClient.get(`/results/quiz/${id}`);
        setResults(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching results:", error);
        setError("Failed to load results. Please try again.");
        setLoading(false);
      }
    };
    fetchResults();
  }, [id]);

  const handleHomeClick = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 bg-gray-100">
      <div className="w-full max-w-3xl p-8 space-y-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Quiz Results
        </h1>
        {results.length === 0 ? (
          <p className="text-lg text-center text-gray-600">
            No results found for this quiz.
          </p>
        ) : (
          <ul className="space-y-4">
            {results.map((result) => (
              <li
                key={result.id}
                className="p-4 bg-gray-200 rounded-md shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  User Name: {result.user.name}
                </h2>
                <p className="text-lg text-gray-600">
                  Score: {result.score} out of  {result.quiz.questions.length}{" "}
                  {/* Assuming totalQuestions is available */}
                </p>
                <p className="text-sm text-gray-500">
                  Date Taken: {new Date(result.dateTaken).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleHomeClick}
            className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
