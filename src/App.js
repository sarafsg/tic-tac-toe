import React from "react"; 
import "./App.css"; 
import Game from "./components/Game";

// Main application component
function App() {
  return (
    <div className="App"> 
      <h1>Tic-Tac-Toe</h1> 
      <Game /> 
    </div>
  );
}

export default App; 
