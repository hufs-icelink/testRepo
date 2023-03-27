import React from "react";
import "./style/SignUp.css"

function SignUp(props) {
  return (
    	<div class="main-container">
        <div class="main-wrap">
          <section class="signUp-input-section-wrap">
            <div class="signUp-input-wrap">
              <input type="text" name="userName" id="userName" placeholder="닉네임" />
            </div>
            <div class="signUp-input-wrap padding-wrap">
              <input type="text" name="userId" id="userId" placeholder="아이디" />
            </div>
            <div class="signUp-input-wrap padding-wrap">
                <input type="password" name="userPass" id="userPass" placeholder="비밀번호" />
            </div>
            <div class="signUp-input-wrap padding-wrap">
              <input type="email" name="userEmail" id="userEmail" placeholder="이메일" />
            </div>
            <div class="signUp-input-wrap padding-wrap">
              <input type="text" name="userGithub" id="userGithub" placeholder="Github 주소" />
            </div>			
          </section>
         </div>
        <div class="signUp-button-wrap">
            <button>Sign Up</button>
        </div>
      </div>
  );
}

export default SignUp;
