import React from "react";
import './Landingpage.css'
import { Navigate, NavLink} from "react-router-dom";


const Landingpage = () => {
  return (
    <>
      <div className="landing-page page">
        <div className="welcome-heading font">
          <h2>Welcome to PopX</h2>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="buttons">
          <div className="create-acc">
            <NavLink to="/signup">
              <button
                onClick={() => Navigate("/about")}
                className="create btn font dark-purple">
                Create Account
              </button>
            </NavLink>
          </div>
          <div className="login-acc">
            <NavLink to="/login">
              <button className="login btn font">
                Already Registered? Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
