import React from "react";
import "./style/Main.css";
import "./style/Header.css"
import "./style/ButtonBoard.css"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import End from "./boardlist/End";
import Continue from "./boardlist/Continue";
import Gathering from "./boardlist/Gathering";

import profileimg from "./img/profileimg.png";
function Board({ props }) {
  return (
    <div>
      <div class="container">
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
              <Link to="/Gathering" style={{ textDecoration: "none" }}>모집중</Link>
              </div>
              <div class="doing">
              <Link to="/Continue" style={{ textDecoration: "none" }}>진행중</Link>
              </div>
              <div class="done">
              <Link to="/End" style={{ textDecoration: "none" }}>End</Link>
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
      </div>


  );
}
export default Board;
