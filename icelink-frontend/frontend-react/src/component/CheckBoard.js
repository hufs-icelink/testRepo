import { React, useState } from "react";
import SearchBar from "./searchBar";
import JSONDATA from "../MOCK_DATA.json";
import userImage from "../img/profileimg.png";
import "../style/CheckBox.css";

function CheckBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="CheckBoard">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <SearchBar />
      <div class="SearchList">
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.last_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div id="SearchData-Box" className="user" key={key}>
              <img id="SearchData-Image" src={userImage} />
              <p id="SearchData-Name">{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckBoard;
