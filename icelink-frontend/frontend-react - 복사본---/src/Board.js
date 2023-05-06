import React from "react";
import "./style/Main.css";
import "./style/Header.css";
import "./style/ButtonBoard.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import End from "./boardlist/End";
import Continue from "./boardlist/Continue";
import Gathering from "./boardlist/Gathering";

import profileimg from "./img/profileimg.png";
function Board({ props }) {
  return (
    <div>
      <div class="profile-container">
        <div class="profile">
          <img id="image" src={profileimg} height="200" />
        </div>
        <p>김정통</p>
      </div>
      <BrowserRouter>
        <div>
          <div class="midBoard">
            <div class="searchBoard">
              <div class="gather">
                <Link to="/Gathering" style={{ textDecoration: "none" }}>
                  모집중
                </Link>
              </div>
              <div class="doing">
                <Link to="/Continue" style={{ textDecoration: "none" }}>
                  진행중
                </Link>
              </div>
              <div class="done">
                <Link to="/End" style={{ textDecoration: "none" }}>
                  완료
                </Link>
              </div>
            </div>
            <div class="searchResult">
              <br />
              <Switch>
                {" "}
                <Route exact path="/" component={Gathering} />
                <Route path="/Gathering" component={Gathering} />
                <Route path="/Continue" component={Continue} />
                <Route path="/End" component={End} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <div class="right">
        <div class="recommand">
          <p>추천</p>
        </div>
        <div class="record">
          <p>랭킹 1~10등</p>
          <div class="recordList">
            <p>1등: 노현아</p>
            <p>2등: 현아아님</p>
            <p>3등: gusdksepdy</p>
            <p>4등: 뿌링클</p>
            <p>5등: 레드윙</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Board;
