import React from "react";
import "./style/Main.css";
import "./style/Board.css";
import { useState, useCallback } from "react";
import Miniprofile from "./component/MiniProfile";
import Categories from "./component/Categories"; // 컴포넌트 두개를 추가
import BoardList from "./component/BoardList";
import RankList from "./component/RankList";

function Board({ props }) {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div class="top-container">
      <Miniprofile />{" "}
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
