import React from "react";
import "./Account.css";
import profile from '/profile.png'

const Account = () => {
  return (
    <>
      <div className="account-heading">Account Settings</div>
      <div className="account-page">
        <div className="profile">
          <div className="img-text">
            <div className="image">
              <img className="photo" src={profile} alt="" />
            </div>
            <div className="name-email">
              <div className="name">John Doe</div>
              <div className="emailid">john@gmail.com</div>
            </div>
          </div>

          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Account;
