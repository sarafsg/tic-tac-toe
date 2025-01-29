import React from "react"; 

// Square component represents a single cell in the Tic-Tac-Toe board
const Square = ({ value, onClickEvent }) => {
  return (
    <button className="square" onClick={onClickEvent}>
      {value} 
    </button>
  );
};

export default Square; 
