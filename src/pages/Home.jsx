import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaTrophy,
  FaUserFriends,
  FaQuestionCircle,
  FaComments,
  FaStar,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // Import your AuthContext

const HomePage = () => {
  const { user } = useAuth(); // Access user from AuthContext

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-12 rounded-2xl bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to QuizMaster
          </h1>
          <p className="text-xl mb-6">
            Discover, create, and share quizzes with ease. Challenge yourself
            and others in a variety of categories.
          </p>
          <Link
            to="/quizzes"
            className="bg-white text-blue-600 text-lg py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Explore Quizzes
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <FaBookOpen className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Diverse Quiz Categories
            </h3>
            <p className="text-gray-700">
              Choose from a wide range of categories to challenge yourself or
              test your friends.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <FaTrophy className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Achievements and Scores
            </h3>
            <p className="text-gray-700">
              Track your progress and compete for high scores. Earn achievements
              as you play.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <FaUserFriends className="text-green-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Connect and Compete</h3>
            <p className="text-gray-700">
              Challenge friends or join public quizzes to compete with people
              from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <FaQuestionCircle className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Explore Quizzes</h3>
            <p className="text-gray-700">
              Browse a variety of quizzes and select one to start your
              challenge.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <FaComments className="text-purple-600 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Create and Share</h3>
            <p className="text-gray-700">
              Create your own quizzes and share them with friends or the
              community.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <FaStar className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Earn Rewards</h3>
            <p className="text-gray-700">
              Earn rewards and recognition based on your performance and quiz
              participation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          What Users Are Saying
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <p className="text-lg text-gray-700 mb-4">
              "QuizMaster has been a game changer for our trivia nights! The
              wide range of quizzes keeps everyone entertained."
            </p>
            <p className="font-semibold text-gray-800">Alice Johnson</p>
            <p className="text-gray-600">Trivia Enthusiast</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
            <p className="text-lg text-gray-700 mb-4">
              "Creating and sharing quizzes has never been easier. The platform
              is user-friendly and fun!"
            </p>
            <p className="font-semibold text-gray-800">Michael Wilson</p>
            <p className="text-gray-600">Quiz Creator</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {!user && (
        <section className="py-12 bg-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8">
              Sign up now and start creating or exploring quizzes. It's fun and
              easy!
            </p>
            <Link
              to="/signup"
              className="bg-blue-600 text-white text-lg py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
