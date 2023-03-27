import React from "react";
import "./style/SignIn.css"

function SignIn(props) {
  return (
  <div class="main-container">
    <div class="main-wrap">
      <section class="login-input-section-wrap">
        <div class="login-input-wrap">	
          <input placeholder="Username" type="text"></input>
        </div>
        <div class="login-input-wrap password-wrap">	
          <input placeholder="Password" type="password"></input>
        </div>
        <div class="login-button-wrap">
          <button>Sign in</button>
        </div>
      </section>
  </div>
</div>
  );
}

export default SignIn;
