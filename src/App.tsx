import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGameBoard } from "./hooks/useGameBoard";
import path from "./lib/gamePath";
import Board from "./components/GameBoard";

function App() {
  const { board, createBoard, removePair } = useGameBoard(10, 4);
  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="App">
      <div>
        <button>시작하기</button>
      </div>
      {!board ? <p>loading...</p> : <Board board={board} />}
    </div>
  );
}

export default App;
