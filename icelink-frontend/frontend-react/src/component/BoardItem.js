import styled from "styled-components";
import "../style/Board.css";

const BoardItemBlock = styled.div`
  .boardItem {
    box-shadow: 2px 2px 2px 2px lightgrey;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-bottom: 30px;
  }

  .boardContent {
    margin-left: 15px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  /*
  #boardID {
    width: 30px;
    height: 30px;
    background: lightgrey;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
    border-radius: 1rem;
  }
  */
`;
const BoardItem = ({ board }) => {
  const {
    BoardID,
    BoardType,
    BoardTitle,
    NeedStack1,
    NeedStack2,
    NeedStack3,
    Write,
    WriterName,
    Description,
  } = board;
  let BoardIDColor = null;
  let BoardTypeInfo = null;

  if (BoardType === "PART") {
    BoardIDColor = (
      <div id="boardID" style={{ backgroundColor: "#F6CECE" }}></div>
    );
  } else if (BoardType === "REC") {
    BoardIDColor = (
      <div id="boardID" style={{ backgroundColor: "#F3E2A9" }}></div>
    );
  } else if (BoardType === "COMP") {
    BoardIDColor = (
      <div id="boardID" style={{ backgroundColor: "#D0F5A9" }}></div>
    );
  }

  if (BoardType === "PART") {
    BoardTypeInfo = (
      <div id="boardType" style={{ backgroundColor: "#F6CECE" }}>
        모집중
      </div>
    );
  } else if (BoardType === "REC") {
    BoardTypeInfo = (
      <div id="boardType" style={{ backgroundColor: "#F3E2A9" }}>
        진행중
      </div>
    );
  } else if (BoardType === "COMP") {
    BoardTypeInfo = (
      <div id="boardType" style={{ backgroundColor: "#D0F5A9" }}>
        완료
      </div>
    );
  }

  return (
    <BoardItemBlock>
      <div className="boardItem">
        <div className="boardContent">
          <div id="boardFirstInfo">
            {BoardIDColor}
            <div id="boardTitle">{BoardTitle}</div>
          </div>
          <div id="needStack">
            <div id="need">개발</div>
            <div className="stack" id="needStackInfo1">
              #{NeedStack1}
            </div>
            <div className="stack" id="needStackInfo2">
              #{NeedStack2}
            </div>
            <div className="stack" id="needStackInfo2">
              #{NeedStack3}
            </div>
          </div>
          <div id="boardWrite_day">작성일: {Write}</div>
          <div id="boardWriter">작성자: {WriterName}</div>
          {BoardTypeInfo}
        </div>
      </div>
    </BoardItemBlock>
  );
};

export default BoardItem;
