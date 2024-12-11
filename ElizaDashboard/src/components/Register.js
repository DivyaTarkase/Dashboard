import React, { useState } from "react";
import Image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import './Login.css';

const Register = () => {
  const navigate = useNavigate();  // Initialize navigate
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate user registration success (replace with actual backend API)
    alert("Registration Successful!");
    setError("");

    // Navigate to login or other page upon successful registration
    navigate("/login");
  };

  return (
    <div className="register-main">
      <div className="register-left">
        <img src={Image} alt="Registration Visual" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="register-center">
            <h2>Create an Account</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleRegister}>
              {/* Email Input */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password Input */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password Input */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* Error Message */}
              {error && <p className="error-message">{error}</p>}

              <div className="register-center-buttons">
                {/* Register Button */}
                <button type="submit" className="register-button">
                  Sign Up
                </button>

                {/* Google Register Button */}
                <button type="button" className="google-register-btn">
                  <img src={GoogleSvg} alt="Google" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>

          <p className="register-bottom-p">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")}>
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
