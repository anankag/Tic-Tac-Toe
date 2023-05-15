import React from "react";
import { useState } from "react";
import "./style.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      <p className="value">{value}</p>
    </button>
  );
}

export default Square;
