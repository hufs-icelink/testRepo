import { React, useState } from "react";
import Miniprofile from "./component/MiniProfile";
import RankList from "./component/RankList";
import CheckBoard from "./component/CheckBoard";

import "./style/MiniProfile.css";
import "./style/Main.css";

function Link() {
  return (
    <div class="top-container">
      <Miniprofile />
      <div class="middle">
        <CheckBoard />
      </div>

      <div class="right">
        <div class="recommand">
          <p>추천</p>
        </div>
        <div class="record">
          <p>랭킹 1~5등</p>
          <div class="recordList">
            <RankList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Link;
