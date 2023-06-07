import "../style/WriteBoard.css";
import "../style/Main.css";
import axios from "axios";
import React, { useState } from "react";

function WriteBoard() {
  // const checkBoxList = [
  //   "HTML",
  //   "CSS",
  //   "Javascript",
  //   "Java",
  //   "Python",
  //   "C",
  //   "React",
  // ];
  const [boardType, setBoardType] = useState("PART"); //BoardType
  const [userName, setName] = useState("");
  // const [stack, setStack] = useState({
  //   //기술
  //   HTML: "unCheck",
  //   CSS: "unCheck",
  //   Javascript: "unCheck",
  //   Python: "unCheck",
  //   C: "unCheck",
  //   React: "unCheck",
  // });
  const [title, setTitle] = useState(""); //board 제목
  const [content, setContent] = useState(""); //board 내용

  const board = { boardType, title, content }; //port 대상 -> axios 연결시 post때리기
  const userId = sessionStorage.getItem("id");
  const name = sessionStorage.getItem("name");

  const handleWriteSubmit = (e) => {
    e.preventDefault();
    console.log(board);
    alert("작성완료");
    axios
      .post("http://localhost:8081/api/board/boardWrite", {
        userId,
        name,
        title,
        content,
        boardType,
      })
      .then((response) => {
        console.log(response);
      });
  };
  // let maxChecked = 3;
  // let totalChecked = 0;
  // function checked(field) {
  //   if (field.checked) {
  //     totalChecked += 1;
  //   } else {
  //     totalChecked -= 1;
  //   }

  //   if (totalChecked > maxChecked) {
  //     alert(
  //       "최대 3개 까지만 선택가능합니다. 3개 이상일 경우 내용에다가 써주세요",
  //     );
  //   }
  //   field.checked = false;
  //   totalChecked -= 1;
  // }

  // function ResetCount() {
  //   totalChecked = 0;
  // }

  return (
    <div className="Write-container">
      <form
        className="Write-form"
        action=""
        id="writeBoard"
        method="post"
        onSubmit={handleWriteSubmit}
      >
        <div className="Write-BoardType">
          <div id="wirteBoardType">유형</div>
          <div id="writeBoardType-radio">
            <input
              type="radio"
              name="writeType"
              id="writeType-gather"
              value="PART"
              checked={boardType === "PART"}
              onChange={(e) => setBoardType(e.target.value)}
            />
            모집중
            <input
              type="radio"
              name="writeType"
              id="writeType-doing"
              value="REC"
              checked={boardType === "REC"}
              onChange={(e) => setBoardType(e.target.value)}
            />
            진행중
            <input
              type="radio"
              name="writeType"
              id="writeType-done"
              value="COMP"
              checked={boardType === "COMP"}
              onChange={(e) => setBoardType(e.target.value)}
            />
            완료
          </div>
        </div>

        <div className="Write-Title">
          <div id="writeTitle">제목</div>
          <input
            required
            maxLength="20"
            id="writeTitle-Input"
            placeholder=""
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="Write-Text">
          <div id="writeText">내용</div>
          <textarea
            required
            maxLength="20"
            id="writeText-Input"
            placeholder=""
            type="text"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="write-button-wrap">
          <button onClick={handleWriteSubmit}>완료</button>
        </div>
      </form>
    </div>
  );
}

export default WriteBoard;
