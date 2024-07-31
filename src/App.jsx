// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Quizzes from "./pages/Quizzes";
import { AuthProvider } from "./context/AuthContext";
import CreateQuiz from "./pages/CreateQuiz";
import QuizView from "./pages/QuizView";
import Results from "./pages/Results";
import UserResults from "./pages/UserResults";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <div className="min-h-screen     flex items-center justify-center bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/quizzes/:id" element={<QuizView />} />
              <Route path="/results/:id" element={<Results />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/user-results" element={<UserResults />} />
              {/* Add the new route */}
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
