import React, { useState } from 'react'
import './Create.css'
import { NavLink} from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [company, setCompany] = useState("")

    const [isAgency, setIsAgency] = useState(""); 

   
  return (
    <>
      <div className="login-page landing-page">
        <div className="welcome-heading font">
          <h2>Create your PopX Account</h2>
        </div>

        <div>
          <form action="">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="candidateName font" className="label">
                Full Name<span className="red">*</span>
              </label>
              <input
                type="text"
                id="candidateName"
                name="candidateName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Enter your Full Name"
              />
            </div>

            {/* number Field */}
            <div className="form-group">
              <label htmlFor="candidateNumber font" className="label">
                Phone Number<span className="red">*</span>
              </label>
              <input
                type="number"
                id="candidateNumber"
                name="candidateNumber"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="input"
                placeholder="Enter your Phone number"
              />
            </div>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="candidateEmail font" className="label">
                Email Address<span className="red">*</span>
              </label>
              <input
                type="email"
                id="candidateEmail"
                name="candidateEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Enter your Email"
              />
            </div>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="candidatePassword font" className="label">
                Password<span className="red">*</span>
              </label>
              <input
                type="text"
                id="candidatePassword"
                name="candidatePassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter your Password"
              />
            </div>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="candidateCompany font" className="label">
                Company Name
              </label>
              <input
                type="text"
                id="candidateCompany"
                name="candidateCompany"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="input"
                placeholder="Enter your Company Name"
              />
            </div>

            <div className="selection-head">
              {/* Radio Buttons for Agency */}
              <div className="form-group-radio">
                <h4 className="radio-question font">Are you an agency?</h4>
                <label>
                  <input
                    type="radio"
                    name="agency"
                    value="Yes"
                    checked={isAgency === "Yes"}
                    onChange={(e) => setIsAgency(e.target.value)}
                  />
                  <span className="font">Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="agency"
                    value="No"
                    checked={isAgency === "No"}
                    onChange={(e) => setIsAgency(e.target.value)}
                  />
                  <span className="font">No</span>
                </label>
              </div>
            </div>
            <NavLink to="/account">
              <button type="submit" className="create-btn font">
                Create Account
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create