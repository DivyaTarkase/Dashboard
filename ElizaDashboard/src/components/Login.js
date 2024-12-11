import React, { useState } from "react";
import Image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import './Login.css'

const Login = ({ onLogin }) => {
  const navigate = useNavigate();  // Initialize navigate
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    
     // Static login credentials
     const staticEmail = "user@example.com";  // Static email
     const staticPassword = "password123";  

    // Placeholder login logic (replace with actual authentication)
    if (email === staticEmail && password === staticPassword)  {
      setError("");
      alert("Login Successful!");

      // if (onLogin) {
      //   onLogin(); // You can pass the user info or ID if needed
      // }

     // Mock user ID for navigation (you can keep this static or fetch dynamically if needed)
     const userId = "12345"; // Static user ID

     onLogin(userId);

     // Navigate to the Dashboard page with the static userId
     navigate(`/dashboard/${userId}`)

    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Login Visual" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
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
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {/* Error Message */}
              {error && <p className="error-message">{error}</p>}

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <button type="button" className="forgot-pass-link" onClick={() => alert("Password reset feature not implemented")}>
                  Forgot password?
                </button>
              </div>

              <div className="login-center-buttons">
                {/* Login Button */}
                <button type="submit" className="login-button">Log In</button>

                {/* Google Login Button */}
                <button type="button" className="google-login-btn">
                  <img src={GoogleSvg} alt="Google" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account?{" "}
            <button onClick={() => navigate("/register")}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
