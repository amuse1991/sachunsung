import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGameBoard } from "./hooks/useGameBoard";

function App() {
  const { board, createBoard, removeCards } = useGameBoard(10, 4);
  useEffect(() => {
    createBoard();
  }, []);
  removeCards({ x: 0, y: 0 }, { x: 1, y: 1 });
  return (
    <div className="App">
      <div>
        <button>시작하기</button>
      </div>
      {!board ? <p>loading...</p> : <div></div>}
    </div>
  );
}

export default App;
