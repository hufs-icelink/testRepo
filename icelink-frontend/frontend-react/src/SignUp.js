import React from "react";
import { useState } from "react";
import "./style/SignUp.css";
import axios from "axios";

function SignUp(props) {
  const [Id, setId] = useState();
  const [name, setName] = useState();
  const [user_pw, setPW] = useState();
  const [mail, setMail] = useState();
  const [sex, setSex] = useState("남자");
  const [type, setType] = useState("개발자");

  const data = { Id, name, user_pw, mail, sex, type };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("회원가입 되셨습니다. 로그인 하십시오.");
    // axios.post(url, { Id, name, user_pw, mail }).then((response) => {
    //   console.log(response);
    // });
    console.log(data);
  };
  // function createBtnHandle(props) {
  //   alert("회원가입 되셨습니다. 로그인 하십시오.");
  //   axios.post("/newMemFile", data);
  // }
  return (
    <div className="main-container">
      <div className="main-wrap">
        <form
          className="signUp-input-section-wrap"
          action=""
          id="signUp"
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
          <div className="signUp-input-wrap padding-wrap ">
            <div className="radio-wrap-name">성별</div>
            <div className="radio-wrap">
              <input
                type="radio"
                name="userSex"
                id="userSex_M"
                value="남자"
                checked={sex === "남자"}
                onChange={(e) => setSex(e.target.value)}
              />
              남자
              <input
                type="radio"
                name="userSex"
                id="userSex_W"
                value="여자"
                checked={sex === "여자"}
                onChange={(e) => setSex(e.target.value)}
              />
              여자
            </div>
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
          <div className="signUp-input-wrap padding-wrap ">
            <div className="radio-wrap-type">유형</div>
            <div className="radio-wrap">
              <input
                type="radio"
                name="userType"
                id="userType_dev"
                value="개발자"
                checked={type === "개발자"}
                onChange={(e) => setType(e.target.value)}
              />
              개발자
              <input
                type="radio"
                name="userType"
                id="userType_com"
                value="회사"
                checked={type === "회사"}
                onChange={(e) => setType(e.target.value)}
              />
              회사
            </div>
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
