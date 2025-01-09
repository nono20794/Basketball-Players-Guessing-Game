import { useState } from "react";
import "./Game.css";

export default function Game() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <section className="game-section">
        <div className="searchbar-container">
          {inputValue ? (
            <i
              className="fa-solid fa-xmark"
              id="closed-icon"
              onClick={() => setInputValue("")}
            ></i>
          ) : (
            <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
          )}
          <input
            type="text"
            className="input-palyer-name"
            placeholder="הכנס שם שחקן "
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <div className="results-container"></div>
      </section>
    </>
  );
}
