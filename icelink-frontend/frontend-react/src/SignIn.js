import { React, useState } from "react";
import "./style/SignIn.css";
import axios from "axios";
// import FindPW from "./FindPW";

/* const loginID = document.getElementById("userID");
const loginButton = document.getElementById("loginBtn");
const loginPW = document.getElementById("loginPW");
 */

const SignIn = ({ history }) => {
  const [id, setId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/api/user/login", {
        id,
        userPassword,
      })
      .then((response) => {
        //console.log(response);
        console.log(response.data.id);
        console.log(response.data.name);

        sessionStorage.setItem("id", id);
        sessionStorage.setItem("name", response.data.name);
        window.location.replace("/mainHome");
      })
      .catch((error) => {
        alert("아이디 또는 비밀번호가 틀렸습니다. 다시 입력해주세요.");
        console.log(error);
        window.location.reload(true);
      });
  };

  return (
    <div className="main-container">
      <div className="main-wrap">
        <section className="login-input-section-wrap">
          <form className="login-input-wrap">
            <input
              required
              maxLength="10"
              id="userID"
              placeholder="User ID"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
            <div className="login-input-wrap password-wrap">
              <input
                id="userPass"
                placeholder="Password"
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              ></input>
            </div>
            <div className="login-button-wrap">
              <button
                id="loginBtn"
                type="submit"
                value="Login"
                onClick={handleLoginSubmit}
              >
                Sign in
              </button>
            </div>
          </form>
          <br />
        </section>
      </div>
    </div>
  );
};

export default SignIn;
