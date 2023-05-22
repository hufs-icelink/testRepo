import { React } from "react";
import Miniprofile from "./component/MiniProfile";
import RankList from "./component/RankList";
import CheckBoard from "./component/CheckBoard";

import "./style/MiniProfile.css";
import "./style/Main.css";

function Link() {
  return (
    <div className="top-container">
      <Miniprofile />
      <div className="middle">
        <CheckBoard />
      </div>

      <div className="right">
        <div className="recommand">
          <p>추천</p>
        </div>
        <div className="record">
          <p>랭킹 1~5등</p>
          <div className="recordList">
            <RankList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Link;
