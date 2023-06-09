import React from "react";
import { useState } from "react";
import Square from "./Square/Square";
import CalculateWinner from "./CalculateWinner";
import "./index.css";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function refresh ()  {
    // setSquares(Array(9).fill(null));
    // setXIsNext(true)
    window.location.reload(true)

  }

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = CalculateWinner(squares);
  let status;
  winner
    ? (status = "Winner: " + winner)
    : (status = "Next player: " + ( xIsNext ? "X" : "O"));
  return (
    <>
      <p>{status}</p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button style={{marginTop: 20 }} onClick={refresh}>Start again!</button>
    </>
  );
}
