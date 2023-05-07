import React, { useEffect, useState } from "react";
import "./style/Main.css";
import Miniprofile from "./component/MiniProfile";
import RankList from "./component/RankList";
//import Rolling from "./Rolling";
import axios from "axios";

function Home(props) {
  const [message, setHello] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1819/api/xx")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div class="top-container">
      <Miniprofile />
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
          <ul>
            {message.map((v, idx) => (
              <li key={`${idx}-${v}`}>{v}</li>
            ))}
          </ul>
        </div>
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

export default Home;
