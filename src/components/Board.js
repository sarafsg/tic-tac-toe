import React, { useState } from "react"; 
import Square from "./Square"; 
import calculateWinner from "../utils/calculateWinner";

// Board component represents the Tic-Tac-Toe board with 9 squares
const Board = () => {
  // Initializing the squares as an array of 9 null values
  const initialSquares = Array(9).fill(null); 
  // State for tracking the squares' values
  const [squares, setSquares] = useState(initialSquares); 
  // State for tracking whose turn it is (X or O)
  const [xIsNext, setXIsNext] = useState(true); 

  // Handles the click event on a square
  const handleClickEvent = (i) => {
    // Copying the current squares array
    const newSquares = [...squares]; 
    // Check if there's a winner
    const winnerDeclared = Boolean(calculateWinner(newSquares)); 
    // Check if the clicked square is already filled
    const squareFilled = Boolean(newSquares[i]); 

    // If there's already a winner or the square is filled, return
    if (winnerDeclared || squareFilled) { 
      return;
    }

    // Assign 'X' or 'O' to the clicked square
    newSquares[i] = xIsNext ? "X" : "O"; 
    // Update the squares state with the new board
    setSquares(newSquares); 
    // Switch turns between 'X' and 'O'
    setXIsNext(!xIsNext); 
  };

  // Renders a single square, passing the value and click handler
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />;
  };

  // Check for the winner based on the current squares
  const winner = calculateWinner(squares); 
  // Determine the game status message
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`; 

  // Rendering the board rows with three squares per row
  return (
    <div>
      <div className="status">{status}</div> 
      <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </div>
  );
};

export default Board; 
