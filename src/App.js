import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import Square from "./components/Square/square";

function App() {
  //creating a variable to pass a prop
  // const propVar = 'this is a prop string'
  //use useState hook to create a state
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleReset = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }
const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

const handleWinner = (arr) => {
  for(let i = 0;i < lines.length;i++){
    const [a,b,c] = lines[i]
    if(
      arr[a] &&
      arr[a] === arr[b] &&
      arr[a] === arr[c]
    ) return `${arr[a]} won the game` 
  }
  return 'Who will win'
}


  //render
  return (
    <div className="App">
      <span>{handleWinner(squares)}</span>
      <div className="container">
        {squares.map((el,index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              key={index}
              index={index}
              squareVal={el}
              setPlayer={setPlayer}
            />
          )
        })}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
