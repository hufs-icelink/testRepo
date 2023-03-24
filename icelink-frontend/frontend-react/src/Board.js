import React from "react";
import "./style/Main.css";

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
      <div class="midBoard">
        <div class="searchBoard">
          <div class="gather">
            <p>모집중</p>
          </div>
          <div class="doing">
            <p>진행중</p>
          </div>
          <div class="done">
            <p>완료</p>
          </div>
        </div>
        <div class="searchResult">
          <div class="result1">
            <p>게시판1</p>
          </div>
          <div class="result2">
            <p>게시판2</p>
          </div>
          <div class="result3">
            <p>게시판3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Board;
