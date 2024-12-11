import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import StartupRegistration from "./components/StartupRegistration";
import InvestorRegistration from "./components/InvestorRegistration";
import MentorRegistration from "./components/MentorRegistration";
import ResearcherRegistration from "./components/ResearcherRegistration";
import ResearchProjectRegistration from "./components/ResearchProjectRegistration";
import Register from "./components/Register";
import Admin from "./components/Admin";
import { SignIn, useAuth } from "@clerk/clerk-react";

function App() {
    const { isSignedIn, userId } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSignedIn) {
            navigate("/dashboard");
        }else{
            navigate("/login");
        }
    }, [isSignedIn]);
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard userId={userId} />}
                />
                <Route path="/startups" element={<StartupRegistration />} />
                <Route path="/investors" element={<InvestorRegistration />} />
                <Route path="/mentors" element={<MentorRegistration />} />
                <Route
                    path="/reserchers"
                    element={<ResearcherRegistration />}
                />
                <Route
                    path="/reserchproject"
                    element={<ResearchProjectRegistration />}
                />
                <Route path="/Admin" element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
