import React from "react";
import { useState } from "react";
import { useParams , useNavigate  } from "react-router-dom";
// import axios from "axios";

const Dashboard = () => {
  const { userId } = useParams();  // Get userId from URL
  const navigate = useNavigate();

  // State for the modal and input
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [adminCode, setAdminCode] = useState(""); // Input field value
  const [error, setError] = useState(""); // Error message
  const predefinedAdminCode = "SECRET123"; // Replace with your secret code

  const handleNavigate = (path) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };
  


  const handleOpenModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
    setError(""); // Reset error on opening modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAdminCode(""); // Clear the input field
  };

  const handleAdminAccess = () => {
    console.log("Admin code entered:", adminCode); 
    if (adminCode === predefinedAdminCode) {
      console.log("Navigating to /Admin");
      handleNavigate("/Admin"); // Navigate to collaborators page
      handleCloseModal(); // Close the modal
    } else {
      setError("Incorrect code. Please try again.");
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#2e1e77] text-white p-8 w-full flex justify-between items-center text-center">
        <h1 className="text-4xl font-semibold text-center">Welcome to the Platform</h1>
      </header>

      <div className="flex flex-1">

        {/* Main Content */}
        <div  className="main">
          <div>
          <section className="text-center p-8 mb-8 bg-gray-200">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  Explore the Ecosystem
                </h2>
                <p className="text-lg text-gray-600">
                  Our platform connects startups, investors, mentors, incubators, and collaborators. Each of these categories is a vital part of the innovation ecosystem, and we invite you to explore and get involved.
                </p>
              </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Startups */}
              <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
                  Startups
                </h2>
                <p className="text-center mb-6 text-gray-600">
                  Explore innovative startups from around the world. Join a community of entrepreneurs!
                </p>
                <button
                  onClick={() => handleNavigate("/startups")}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Go to Startups
                </button>
              </div>

              {/* Card 2: Investors */}
              <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
                  Investors
                </h2>
                <p className="text-center mb-6 text-gray-600">
                  Find investors who are ready to support your next big idea and help you grow!
                </p>
                <button
                   onClick={() => {
                    console.log("Navigating to /investors");
                    handleNavigate("/investors")}}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Go to Investors
                </button>
              </div>

              {/* Card 3: Incubators */}
              <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
                  Research Institute
                </h2>
                <p className="text-center mb-6 text-gray-600">
                  Join an incubator and accelerate your startup's growth with expert mentorship!
                </p>
                <button
                  onClick={() => handleNavigate("/reserchers")}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Go to Incubators
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {/* Card 4: Mentors */}
              <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
                  Research Project
                </h2>
                <p className="text-center mb-6 text-gray-600">
                  Get guidance from experienced mentors who will help you navigate your entrepreneurial journey!
                </p>
                <button
                   onClick={() => handleNavigate("/reserchproject")}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Go to Reserchproject
                </button>
              </div>

              {/* Card 5: Admin */}
              <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
                  Admin
                </h2>
                <p className="text-center mb-6 text-gray-600">
                  Connect with potential collaborators and expand your network to scale your project.
                </p>
                <button
                   onClick={handleOpenModal}
                  // onClick={() => handleNavigate("/collaborators")}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Go to Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Admin Access */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-80 p-6">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
              Admin Access
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Please enter the secret admin code to proceed.
            </p>
            <input
              type="password"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter admin code"
            />
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAdminAccess}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-8 w-full">
        <div className="text-center">
          <p>&copy; 2024 All Rights Reserved. Your Company Name</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
