import React from "react";
import "./style/Main.css";
import "./style/Header.css";
import profileimg from "./img/profileimg.png";
function Home(props) {
  return (
    <div>
      <div class="profile-container">
        <div class="profile">
          <img id="image" src={profileimg} height="200" />
        </div>
        <p>김정통</p>
      </div>
      <div class="middle">
        <div class="hotboard">
          <div class="gathering">
            <p>HOT 모집중</p>
          </div>
          <div class="finished">
            <p>HOT 프로젝트</p>
          </div>
        </div>
        <div class="mainboard">
          <p>메인 게시판</p>
        </div>
      </div>
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

export default Home;
