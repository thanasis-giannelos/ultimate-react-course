import { createContext } from "react";
import useGameStats from "./useGameStats";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const { answerCorrect, answerWrong, setGameOver, startGame, quizState } =
    useGameStats();

  return (
    <GameContext.Provider
      value={{ answerCorrect, answerWrong, setGameOver, quizState, startGame }}
    >
      {children}
    </GameContext.Provider>
  );
}
