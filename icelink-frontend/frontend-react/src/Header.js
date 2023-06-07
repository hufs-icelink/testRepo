import React from "react";
import "./style/Header.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logoimg from "./img/logo.png";
import Home from "./Intro";
import Mainpage from "./Home";
import MyPage from "./MyPage";
import Linking from "./Linking";
import Board from "./Board";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";

function Header(props) {
  const id = sessionStorage.getItem("id");
  return <div>{id === null ? outLog() : onLog()}</div>;
}

const onLog = () => {
  return (
    <BrowserRouter>
      <div className="header-container">
        <div className="logoLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="intro-logo" src={logoimg} />
          </Link>
        </div>
        <div className="header-inside">
          <div className="signin">
            <Link to="/signOut" style={{ textDecoration: "none" }}>
              로그아웃
            </Link>
          </div>
          <div className="boardLink">
            <Link to="/board" style={{ textDecoration: "none" }}>
              공모전
            </Link>
          </div>
          <div className="search">
            <Link to="/link" style={{ textDecoration: "none" }}>
              링크
            </Link>
          </div>
          <div className="myPageLink">
            <Link to="/myPage" style={{ textDecoration: "none" }}>
              {" "}
              마이페이지
            </Link>
          </div>
          <div className="home">
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
        <Route path="/link" component={Linking} />
        <Route path="/board" component={Board} />
        <Route path="/signOut" component={SignOut} />
      </Switch>
    </BrowserRouter>
  );
};

const outLog = () => {
  return (
    <BrowserRouter>
      <div className="header-container">
        <div className="logoLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="intro-logo" src={logoimg} />
          </Link>
        </div>
        <div className="header-inside">
          <div className="signup">
            <Link to="/signUp" style={{ textDecoration: "none" }}>
              회원가입
            </Link>
          </div>
          <div className="signin">
            <Link to="/signIn" style={{ textDecoration: "none" }}>
              로그인
            </Link>
          </div>
          <div className="boardLink">
            <Link to="/board" style={{ textDecoration: "none" }}>
              공모전
            </Link>
          </div>
          <div className="search">
            <Link to="/link" style={{ textDecoration: "none" }}>
              링크
            </Link>
          </div>
          <div className="home">
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
        <Route path="/link" component={Linking} />
        <Route path="/board" component={Board} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Header;
