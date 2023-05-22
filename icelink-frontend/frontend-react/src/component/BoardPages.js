import { useParams } from "react-router-dom";
import Categories from "./Categories";
import BoardList from "./BoardList";
import "../style/Main.css";
import "../style/Board.css";

function BoardPages() {
  const params = useParams();
  const category = params.category || "all";

  return (
    <div>
      <div class="category-list">
        <Categories />
      </div>
      <div class="App">
        <BoardList category={category} />
      </div>
    </div>
  );
}

export default BoardPages;
