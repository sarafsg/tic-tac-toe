// Function to determine if there is a winning combination
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  
  // Loop through each line (row, column, or diagonal)
  for (let line of lines) { 
    // Destructure the line into individual squares
    const [a, b, c] = line; 
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
      // If all three squares are the same, return the winner ('X' or 'O')
      return squares[a]; 
    }
  } 
  // Return null if there's no winner
  return null; 
};

export default calculateWinner; 
