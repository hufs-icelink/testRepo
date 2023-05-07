import styled, { css } from "styled-components";
import "../style/Board.css";
const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "gathering",
    text: "모집중",
  },
  {
    name: "doing",
    text: "진행중",
  },
  {
    name: "done",
    text: "완료",
  },
];

const CategoriesBlock = styled.div`\
  margin-top:6px;
  float:right;
  display: flex;
  overflow-x: auto;
`;

const Category = styled.div`
  font-size: 17px;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #000000;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 800;
      border-bottom: 2px solid #000000;
      color: #000000;
      &:hover {
        color: #000000;
      }
    `}
  &.active {
    font-weight: 800;
    border-bottom: 2px solid #000000;
    color: #22b8cf;
    &:hover {
      color: #000000;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
