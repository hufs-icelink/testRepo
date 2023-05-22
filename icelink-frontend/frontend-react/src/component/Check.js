import React from "react";
import JSONDATA from "../MOCK_DATA.json";
import { useState } from "react";
import userImage from "../img/profileimg.png";
import "../style/Main.css";
import "../style/Check.css";
import "../style/CheckBox.css";

function Check() {
  const [pythonChecked, setpythonChecked] = useState(false);
  const [javaChecked, setjavaChecked] = useState(false);

  // 체크박스 상태에 따라 필터링된 데이터 생성
  const filteredData = JSONDATA.filter((val) => {
    if (pythonChecked && val.last_name === "python") {
      return val;
    }
    if (javaChecked && val.last_name === "java") {
      return val;
    }
    return false;
  });

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    if (name === "python") {
      setpythonChecked(checked);
    } else if (name === "java") {
      setjavaChecked(checked);
    }
  };

  // 필터링된 데이터 표시
  const renderData = () => {
    if (filteredData.length === 0) {
      return (
        <div className="List">
          <p>No results found.</p>
          <div className="empty">
            <hr />
          </div>
        </div>
      );
    }
    return (
      <div className="List">
        checkbox를 사용하여 검색한 결과입니다.
        <div className="SearchList">
          {filteredData.map((val, key) => (
            <div id="SearchData-Box" className="user" key={key}>
              <img id="SearchData-Image" src={userImage} />
              <div id="SearchData-Set">
                <div id="SearchData-Name">{val.first_name}</div>
              </div>
              <div id="SearchData-Set2">
                <div id="SearchData-Email-text">e-mail</div>
                <div id="SearchData-Email">{val.email}</div>
              </div>
            </div>
          ))}
          <div className="empty">
            <hr />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            class="python-checkbox"
            name="python"
            checked={pythonChecked}
            onChange={handleCheckboxChange}
          />
          python
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            class="java-checkbox"
            name="java"
            checked={javaChecked}
            onChange={handleCheckboxChange}
          />
          java
        </label>
      </div>
      {renderData()}
    </div>
  );
}

export default Check;
