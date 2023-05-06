import React from "react";
import styled from "styled-components";
import axios from "axios";

const BoardItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const BoardItem = ({ writing }) => {
  const { type, title, description, participants, url, writer } = writing;
  return (
    <BoardItemBlock>
      <div class="write con1">
        <div class="sign continueSign">{type}</div>
        <div class="title">{title}</div>
        <div class="content">{description}</div>
        <div class="people">{participants}</div>
        <div class="writer">{writer}</div>
        <div class="moreButton">더보기</div>
      </div>
    </BoardItemBlock>
  );
};

export default BoardItem;
