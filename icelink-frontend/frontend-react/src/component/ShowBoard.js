import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "../style/Main.css";
import "../style/ShowBoard.css";
import BoardItem from "./BoardItem";

const BoardListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  margin-top: 2rem;
  margin-left: 2%;
  margin-right: 2%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function ShowBoard({ props }) {
  const [boards, setBoard] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    axios.get("http://localhost:8081/api/boards").then((response) => {
      console.log(response.data);
    });
  };
  // fetchData();

  // 대기중일 때

  // if (loading) {
  //   return <BoardListBlock>대기중...</BoardListBlock>;
  // }

  // if (!boards) {
  //   return null;
  // }
  // const onClickDiv = () => {
  //   history.push("/board/mine");
  // };

  return (
    // <BoardListBlock>
    //   {boards.map((board) => (
    //     <BoardItem key={board.BoardID} board={board} onClick={onClickDiv} />
    //   ))}
    // </BoardListBlock>
    <div>아직 안됨</div>
  );
}

export default ShowBoard;
