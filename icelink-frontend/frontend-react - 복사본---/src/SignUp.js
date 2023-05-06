import React from "react";
import "./style/SignUp.css";

function SignUp(props) {
  return (
    <div class="main-container">
      <div class="main-wrap">
        <form class="signUp-input-section-wrap">
          <div class="signUp-input-wrap">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Name"
            />
          </div>
          <div class="signUp-input-wrap padding-wrap">
            <input
              type="text"
              name="userId"
              id="userId"
              placeholder="User ID"
            />
          </div>
          <div class="signUp-input-wrap padding-wrap">
            <input
              type="password"
              name="userPass"
              id="userPass"
              placeholder="Password"
            />
          </div>
          <div class="signUp-input-wrap padding-wrap">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email"
            />
          </div>
          <div class="signUp-input-wrap padding-wrap">
            <input
              type="text"
              name="userGithub"
              id="userGithub"
              placeholder="Github address"
            />
          </div>
        </form>
        <div class="signUp-button-wrap">
          <button /*onClick={}*/>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
