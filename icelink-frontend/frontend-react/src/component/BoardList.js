import { useState, useEffect } from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import WriteBoard from "./WriteBoard";
import ShowBoard from "./ShowBoard";
import axios from "axios";

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

const BoardList = ({ category }) => {
  const url = "/test.json";
  const [boards, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        let boards_filter = response.data.boards.filter(
          (data) => data.BoardType === category,
        );
        if (category === "all") {
          boards_filter = response.data.boards;
        }
        setBoard(boards_filter);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  // 대기중일 때
  if (loading) {
    return <BoardListBlock>대기중...</BoardListBlock>;
  }

  if (!boards) {
    return null;
  }
  if (category === "mine") {
    return <ShowBoard />;
  }
  if (category === "write") {
    return <WriteBoard />;
  }
  return (
    <BoardListBlock>
      <div></div>
      {boards.map((board) => (
        <BoardItem key={board.BoardID} board={board} />
      ))}
    </BoardListBlock>
  );
};

export default BoardList;
