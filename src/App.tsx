import React, { useState } from "react";
import Board from "./Board";
import Guide from "./Guide";
import StartButton from "./StartButton";
import { AnswerArrayProvider, useAnswerArray } from "./AnswerArrayContext";

const App: React.FC = () => {
  return (
    <AnswerArrayProvider>
      <GameWrapper />
    </AnswerArrayProvider>
  );
};

const GameWrapper: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);

  const { generateAnswerArray } = useAnswerArray();

  const handleStartGame = () => {
    setGameStarted(true);
    setGameOver(false);
  };

  const handleRestartGame = () => {
    generateAnswerArray();
    setGameStarted(false);
    setGameOver(false);
    setResetCounter((c) => c + 1);
  };

  return (
    <div className="App">
      <Guide />
      <StartButton
        text={gameStarted ? "Restart" : "Start"}
        onClick={gameStarted ? handleRestartGame : handleStartGame}
      />
      <Board
        gameStarted={gameStarted}
        gameOver={gameOver}
        setGameOver={setGameOver}
        resetCounter={resetCounter}
      />
    </div>
  );
};

export default App;