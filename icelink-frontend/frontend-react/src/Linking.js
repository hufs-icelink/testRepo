import React from "react";
import Miniprofile from "./component/MiniProfile";
import RankList from "./component/RankList";
import Check from "./component/Check";

import "./style/MiniProfile.css";
import "./style/Main.css";

function Link() {
  return (
    <div class="top-container">
      <Miniprofile />
      <Check />
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
