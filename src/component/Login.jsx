import React from 'react'
import './Landingpage.css'
import './Login.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // check if both fields are filled
    const isFormValid = email.trim() !== "" && password.trim() !== "";

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Email: ${email}\nPassword: ${password}`);
    };

  return (
    <>
      <div className="login-page landing-page">
        <div className="welcome-heading font">
          <h2>Signin to your PopX account</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="input-tags">
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="candidateEmail" className="label font">
                Email
              </label>
              <input
                type="email"
                id="candidateEmail"
                name="candidateEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="candidatePassword" className="label font">
                Password
              </label>
              <input
                type="password"
                id="candidatePassword"
                name="candidatePassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <NavLink to="/account">
              <button
                type="submit"
                className="btn gray-btn font"
                disabled={!isFormValid}>
                Login
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
