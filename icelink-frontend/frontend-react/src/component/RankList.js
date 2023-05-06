import { useState, useEffect } from "react";
import styled from "styled-components";
import RankItem from "./RankItem";
import axios from "axios";

const RankListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const RankList = () => {
  const [loading, setLoading] = useState(false);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/member.json");
        let response_sort = response.data.members.sort(
          (a, b) => a.points - b.points
        );
        response_sort = response_sort.reverse().slice(0, 5);
        setRank(response_sort);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  // 대기중일 때
  if (loading) {
    return <RankListBlock>대기중...</RankListBlock>;
  }

  if (!rank) {
    return null;
  }

  return (
    <RankListBlock>
      {rank.map((rank) => (
        <RankItem key={rank.userName} rank={rank} />
      ))}
    </RankListBlock>
  );
};

export default RankList;
