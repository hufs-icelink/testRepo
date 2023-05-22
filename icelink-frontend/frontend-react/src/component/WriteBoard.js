import "../style/WriteBoard.css";
import "../style/Main.css";

function WriteBoard() {
  const checkBoxList = [
    "HTML",
    "CSS",
    "Javascript",
    "Java",
    "Python",
    "C",
    "C++",
    "React",
  ];

  let maxChecked = 3;
  let totalChecked = 0;

  function checked(field) {
    if (field.checked) {
      totalChecked += 1;
    } else {
      totalChecked -= 1;
    }

    if (totalChecked > maxChecked) {
      alert(
        "최대 3개 까지만 선택가능합니다. 3개 이상일 경우 내용에다가 써주세요",
      );
    }
    field.checked = false;
    totalChecked -= 1;
  }

  function ResetCount() {
    totalChecked = 0;
  }

  return (
    <div className="Write-container">
      <form className="Write-form">
        <div className="Write-ID">
          <div id="writeID">작성자</div>
          <input
            required
            maxLength="10"
            id="writeID-Input"
            placeholder=""
            type="text"
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
          ></input>
        </div>
        <div className="Write-Stack">
          <div id="writeStack">개발</div>
          <div id="writeStack-Input">
            {checkBoxList.map((item, idx) => (
              <div className="checkbox" key={idx}>
                <input type="checkbox" id={item} />
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
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default WriteBoard;
