import React from "react";
import "./style/Header.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import Board from "./Board";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function Header(props) {
  return (
    <BrowserRouter>
      {" "}
      <Link to="/" style={{ textDecoration: "none" }}>
        로고자리
      </Link>
      <br />
      <Link to="/myPage" style={{ textDecoration: "none" }}>
        {" "}
        마이페이지
      </Link>
      <br />
      <Link to="/board" style={{ textDecoration: "none" }}>
        공모전
      </Link>
      <br />
      <Link to="/signIn" style={{ textDecoration: "none" }}>
        로그인
      </Link>
      <br />
      <Link to="/signUp" style={{ textDecoration: "none" }}>
        회원가입
      </Link>
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
