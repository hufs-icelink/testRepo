import React from "react";
import { useState } from "react";
import "../style/Main.css";
import "../style/Check.css";

function Check() {
  const checkBoxList = [
    "전체",
    "Python",
    "Java",
    "C",
    "C++",
    "HTML",
    "CSS",
    "Javascript",
    "React",
  ];

  const [checkList, setCheckedlist] = useState();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div class="middle">
      <div class="searchLink">
        <div class="check-category">카테고리*</div>
        <div class="checkbox-group">
          {checkBoxList.map((item, idx) => (
            <div class="checkbox" key={idx}>
              <input class="checkbox-box" type="checkbox" id={item} />
              <div class="checkboxText">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Check;
