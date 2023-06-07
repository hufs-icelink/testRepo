import React, { useEffect, useState } from "react";
import "./style/Main.css";
import Miniprofile from "./component/MiniProfile";
import RankList from "./component/RankList";
//import Rolling from "./Rolling";
import axios from "axios";

function Home(props) {
  const [message, setHello] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/member/getList")
  //     .then((response) => setHello(response.data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div className="top-container">
      <Miniprofile />
      <div className="middle">
        <div className="hotboard">
          <div className="gathering">
            <p>HOT 모집중</p>
          </div>
          <div className="finished">
            <p>HOT 프로젝트</p>
          </div>
        </div>
        <div className="mainboard">
          <p>메인 게시판</p>
        </div>
      </div>
      <div className="right">
        <div className="recommand">
          <p>추천</p>
        </div>
        <div className="record">
          <p>랭킹 1~5등</p>
          <div className="recordList">
            <ul>
              {message.map((v, idx) => (
                <li key={`${idx}-${v}`}>
                  {v.id} {v.points}
                </li>
              ))}
            </ul>
            <RankList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
