"use client";

import React, { useState } from "react";

const Play = () => {
  const [targetNum, setTargetNum] = useState(0);
  const [userNum, setUserNum] = useState(0);
  const [message, setMessage] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStart = () => {
    setIsGameStarted(true);
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setTargetNum(randomNum);
    setMessage("Guess a number between 1 and 100");
  };

  const handleSubmit = () => {
    if (userNum === targetNum) {
      setMessage("Congratulations! You guessed the correct number.");
      setIsGameStarted(false);
    } else if (userNum < targetNum) {
      setMessage("Try a higher number.");
    } else {
      setMessage("Try a lower number.");
    }
  };
  return (
    <div className="flex text-center items-center justify-center h-screen text-3xl flex-col gap-4">
      <h1>Play</h1>
      <button
        onClick={handleStart}
        className="text-teal-600 bg-[whitesmoke] p-4"
      >
        Start Game
      </button>
      {isGameStarted && (
        <input
          className="text-black p-4"
          type="number"
          onChange={(e) => setUserNum(parseInt(e.target.value))}
          min={1}
          max={100}
          required
        />
      )}
      <button onClick={handleSubmit}>Submit number</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Play;
