import React, { useState } from "react";
import Check from "./Check";

function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div>
      <button onClick={toggleVisibility}>select language</button>
      {isVisible && (
        <div>
          <Check />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
