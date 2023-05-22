import React from "react";
import { useState } from "react";
import "./style/SignUp.css";
import axios from "axios";

function createBtnHandle() {
  /* 
  const userId = document.getElementById("userID");
  const userName = document.getElementById("userName");
  const userPass = document.getElementById("userPass");
  const userEmail = document.getElementById("userEmail");
  alert("회원가입 되셨습니다. 로그인 하십시오.");
  axios.post("/newMemFile", {
    name: userName,
    Id: userId,
    user_pw: userPass,
    mail: userEmail,
  }); */
}

function SignUp(props) {
  const url = "/user/.json";
  const [Id, setId] = useState();
  const [name, setName] = useState();
  const [user_pw, setPW] = useState();
  const [mail, setMail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, { Id, name, user_pw, mail }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="main-container">
      <div className="main-wrap">
        <form
          className="signUp-input-section-wrap"
          action=""
          id="login"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="signUp-input-wrap">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="signUp-input-wrap padding-wrap">
            <input
              type="text"
              name="userId"
              id="userId"
              placeholder="User ID"
              value={Id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="signUp-input-wrap padding-wrap">
            <input
              type="password"
              name="userPass"
              id="userPass"
              placeholder="Password"
              value={user_pw}
              onChange={(e) => setPW(e.target.value)}
            />
          </div>
          <div className="signUp-input-wrap padding-wrap">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          {/*           <div class="signUp-input-wrap padding-wrap">
            <input
              type="text"
              name="userGithub"
              id="userGithub"
              placeholder="Github address"
            />
          </div> */}
        </form>

        <div className="signUp-button-wrap">
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
