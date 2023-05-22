import styled from "styled-components";
import "../style/Rank.css";

const RankItemBlock = styled.div`
  display: flex;
  .memberItem {
    border-radius: 0.5rem;
    border: 1px solid gray;
    padding: 5px;
    width: 150px;
    background-color: skyblue;
    div {
      text-align: center;
    }
  }
`;
const RankItem = ({ rank }) => {
  const { userName, points } = rank;
  return (
    <div className="memberBlock">
      <RankItemBlock>
        <div className="memberItem">
          <div id="memberContent">
            {userName}, 포인트: {points}
          </div>
        </div>
      </RankItemBlock>
    </div>
  );
};

export default RankItem;
