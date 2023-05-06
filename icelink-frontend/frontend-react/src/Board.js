import React from "react";
import "./style/Main.css";
import "./style/Board.css";
import { useState, useCallback } from "react";
import profileimg from "./img/profileimg.png";
import Categories from "./component/Categories"; // 컴포넌트 두개를 추가
import BoardList from "./component/BoardList";
import RankList from "./component/RankList";

function Board({ props }) {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div class="top-container">
      <div class="profile-container">
        <div class="profile">
          <img id="image" src={profileimg} height="200" />
        </div>
        <p>김정통</p>
      </div>{" "}
      <div class="middle">
        <div class="board-category">
          <div class="category-list">
            <Categories
              category={category}
              onSelect={onSelect}
              class="category-select"
            />
          </div>
        </div>
        <div className="App">
          <BoardList category={category} />
        </div>
      </div>
      <div class="right">
        <div class="recommand">
          <p>추천</p>
        </div>
        <div class="record">
          <p>랭킹 1~10등</p>
          <RankList />
        </div>
      </div>
    </div>
  );
}
export default Board;
