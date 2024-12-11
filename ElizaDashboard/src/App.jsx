import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import StartupRegistration from "./components/StartupRegistration";
import InvestorRegistration from './components/InvestorRegistration';
import MentorRegistration from './components/MentorRegistration';
import ResearcherRegistration from './components/ResearcherRegistration';
import ResearchProjectRegistration from "./components/ResearchProjectRegistration";
import Register from "./components/Register";
import Admin from './components/Admin';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div className="App">
      <Routes>
        {/* Login route */}
        <Route
          path="/"
          element={<Login onLogin={(userId) => { 
            setIsLoggedIn(true);
            setUserId(userId); 
          }} />}
        />
        {/* Dynamically pass userId to the Dashboard route */}
        <Route
          path="/dashboard/:userId"
          element={isLoggedIn && userId ? <Dashboard /> : <Login />}
        />
        <Route path="/startups" element={<StartupRegistration />} />
        <Route path="/investors" element={<InvestorRegistration />} />
        <Route path="/mentors" element={<MentorRegistration />} />
        <Route path="/reserchers" element={<ResearcherRegistration />} />
        <Route path="/reserchproject" element={<ResearchProjectRegistration />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
