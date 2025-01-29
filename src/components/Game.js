import React from "react"; 
import Board from "./Board";

// Game component wraps the Board component
const Game = () => {
  return (
    <div className="game"> 
      <Board /> 
    </div>
  );
};

export default Game; 
