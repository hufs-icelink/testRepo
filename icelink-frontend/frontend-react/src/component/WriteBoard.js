import "../style/WriteBoard.css";
import "../style/Main.css";
import React, { useState } from "react";

function WriteBoard() {
  const checkBoxList = [
    "HTML",
    "CSS",
    "Javascript",
    "Java",
    "Python",
    "C",
    "React",
  ];
  const [writeType, setBoardType] = useState("모집중"); //BoardType
  const [userId, setId] = useState(""); //작성자
  const [stack, setStack] = useState({
    //기술
    HTML: "unCheck",
    CSS: "unCheck",
    Javascript: "unCheck",
    Python: "unCheck",
    C: "unCheck",
    React: "unCheck",
  });
  const [title, setTitle] = useState(""); //board 제목
  const [desc, setDesc] = useState(""); //board 내용

  function returnDate() {
    //board짝성 날짜
    const today = new Date();
    const time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
      hours: today.getHours(), //현재 시간
      minutes: today.getMinutes(), //현재 분
    };
    const timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;

    return timestring;
  }
  const writeDate = returnDate();

  const board = { writeType, userId, title, desc, writeDate }; //port 대상 -> axios 연결시 post때리기

  const handleWriteSubmit = (e) => {
    e.preventDefault();
    console.log(board);
    alert("작성완료");
    // axios.post(url, { Id, name, user_pw, mail }).then((response) => {
    //   console.log(response);
    // });
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
              value="모집중"
              checked={writeType === "모집중"}
              onChange={(e) => setBoardType(e.target.value)}
            />
            모집중
            <input
              type="radio"
              name="writeType"
              id="writeType-doing"
              value="진행중"
              checked={writeType === "진행중"}
              onChange={(e) => setBoardType(e.target.value)}
            />
            진행중
            <input
              type="radio"
              name="writeType"
              id="writeType-done"
              value="완료"
              checked={writeType === "완료"}
              onChange={(e) => setBoardType(e.target.value)}
            />
            완료
          </div>
        </div>
        <div className="Write-ID">
          <div id="writeID">작성자</div>
          <input
            required
            maxLength="10"
            id="writeID-Input"
            placeholder=""
            type="text"
            onChange={(e) => setId(e.target.value)}
          ></input>
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
        <div className="Write-Stack">
          <div id="writeStack">언어</div>
          <div id="writeStack-Input">
            {checkBoxList.map((item, idx) => (
              <div className="checkbox" key={idx}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={(e) => {
                    console.log(e.target.id);
                  }}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="Write-Text">
          <div id="writeText">내용</div>
          <textarea
            required
            maxLength="20"
            id="writeText-Input"
            placeholder=""
            type="text"
            onChange={(e) => setDesc(e.target.value)}
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
