import { useState } from "react";
import "./Game.css";
import ResultList from "./ResultList";
import { AnimatePresence, motion } from "framer-motion";

export default function Game() {
  const [inputValue, setInputValue] = useState("");
  const [showResults, setResultShow] = useState(false);
  // const showResults = inputValue.trim() !== "";

  function handleChange(input) {
    setInputValue(input);
    setResultShow(input.trim() !== "");
  }

  function handleClick(name) {
    setInputValue(name);
    setResultShow(false);
  }

  return (
    <>
      <section className="game-section">
        <div className="search-header">
          <div className="searchbar-tools">
            <p className="num-guesses">מס' ניחושים: 8</p>
            <p className="time-remaine">00:00:00</p>
          </div>
          <div className="searchbar-container">
            {inputValue ? (
              <i
                className="fa-solid fa-xmark"
                id="closed-icon"
                onClick={() => {
                  setInputValue("");
                  setResultShow(false);
                }}
              ></i>
            ) : (
              <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
            )}
            <input
              type="text"
              className="input-palyer-name"
              placeholder="הכנס שם שחקן "
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="result-list-container"
            >
              <ResultList value={inputValue} onResultClick={handleClick} />
            </motion.div>
          )}
        </AnimatePresence>

        <h3>this is the guessing component</h3>
      </section>
    </>
  );
}
