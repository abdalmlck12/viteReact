// src/pages/UserResults.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import apiClient from "../api"; // Adjust the import based on your setup

const UserResults = () => {
  const { user } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserResults = async () => {
      try {
        if (user ) {
          const response = await apiClient.get(`/results/user/${user}`);
          setResults(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user results:", error);
        setError("Failed to load results. Please try again.");
        setLoading(false);
      }
    };

    fetchUserResults();
  }, [user]);

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
          My Previous Results
        </h1>
        {results.length === 0 ? (
          <p className="text-lg text-center text-gray-600">
            No previous results found.
          </p>
        ) : (
          <ul className="space-y-4">
            {results.map((result) => (
              <li
                key={result.id}
                className="p-4 bg-gray-200 rounded-md shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  Quiz Title: {result.quiz.title}
                </h2>
                <p className="text-lg text-gray-600">
                  Score: {result.score} / {result.quiz.questions?.length}{" "}
                  {/* Adjust if needed */}
                </p>
                <p className="text-sm text-gray-500">
                  Date Taken: {new Date(result.dateTaken).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserResults;
