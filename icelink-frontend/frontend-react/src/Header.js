import React from "react";
import "./style/Header.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logoimg from "./img/logo.png";
import Home from "./Intro";
import Mainpage from "./Home";
import MyPage from "./MyPage";
import Board from "./Board";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Header(props) {
  return (
    <BrowserRouter>
      <div class="header-container">
        <div class="logoLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img class="intro-logo" src={logoimg} />
          </Link>
        </div>
        <div class="header-inside">
          <div class="signup">
            <Link to="/signUp" style={{ textDecoration: "none" }}>
              회원가입
            </Link>
          </div>
          <div class="signin">
            <Link to="/signIn" style={{ textDecoration: "none" }}>
              로그인
            </Link>
          </div>
          <div class="boardLink">
            <Link to="/board" style={{ textDecoration: "none" }}>
              공모전
            </Link>
          </div>
          <div class="myPageLink">
            <Link to="/myPage" style={{ textDecoration: "none" }}>
              {" "}
              마이페이지
            </Link>
          </div>
          <div class="home">
            <Link to="/mainHome" style={{ textDecoration: "none" }}>
              메인페이지
            </Link>
          </div>
        </div>
      </div>

      <br />
      <Switch>
        {" "}
        <Route exact path="/" component={Home} />
        <Route path="/mainHome" component={Mainpage} />
        <Route path="/myPage" component={MyPage} />
        <Route path="/board" component={Board} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
