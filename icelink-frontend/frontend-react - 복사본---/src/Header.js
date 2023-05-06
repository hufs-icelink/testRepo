import React from "react";
import "./style/Header.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import Board from "./Board";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./style/ButtonBoard.css";

function Header(props) {
  return (
    <BrowserRouter>
      <div class="menubar">
        {" "}
        <div class="logoLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            로고자리
          </Link>
        </div>
        <div class="myPageLink">
          <Link to="/myPage" style={{ textDecoration: "none" }}>
            {" "}
            마이페이지
          </Link>
        </div>
        <div class="boardLink">
          <Link to="/board" style={{ textDecoration: "none" }}>
            공모전
          </Link>
        </div>
        <div class="signin">
          <Link to="/signIn" style={{ textDecoration: "none" }}>
            로그인
          </Link>
        </div>
        <div class="signup">
          <Link to="/signUp" style={{ textDecoration: "none" }}>
            회원가입
          </Link>
        </div>
      </div>

      <br />
      <Switch>
        {" "}
        <Route exact path="/" component={Home} />
        <Route path="/myPage" component={MyPage} />
        <Route path="/board" component={Board} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
