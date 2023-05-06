import styled from "styled-components";

const BoardItemBlock = styled.div`
  .boardItem {
    box-shadow: 5px 5px 5px lightgrey;
    width: 100%;
    height: flex;
    border: 1px solid rgb(159, 159, 159);
    border-radius: 0.5rem;
    margin-bottom: 30px;
  }

  .boardContent {
    margin-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  boardID {
    width: 30px;
    height: 30px;
    background: blue;
  }
`;
const BoardItem = ({ board }) => {
  const { BoardID, BoardType, BoardTitle, Write, WriterName, Description } =
    board;
  return (
    <BoardItemBlock>
      <div class="boardItem">
        <div class="boardContent">
          <div id="boardID">{BoardID}</div>
          <div id="boardType">{BoardType}</div>
          <div id="boardTitle">{BoardTitle}</div>
          <div id="boardWrite_day">작성일: {Write}</div>
          <div id="boardWriter">작성자: {WriterName}</div>
          <div id="boardMessage">{Description}</div>
        </div>
      </div>
    </BoardItemBlock>
  );
};

export default BoardItem;
