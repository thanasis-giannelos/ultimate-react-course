import { useReducer, useEffect } from "react";

const initialState = {
  questionIndex: 0,
  totalPoints: 0,
  quizStarted: false,
  questions: [],
};

function quizReducer(quizState, action) {
  if (action.type === "correct-answer") {
    console.log(action);
    return {
      ...quizState,
      questionIndex: quizState.questionIndex + 1,
      totalPoints: quizState.totalPoints + action.payload,
    };
  }
  if (action.type === "wrong-answer") {
    return { ...quizState, questionIndex: quizState.questionIndex + 1 };
  }

  if (action.type === "start-game") {
    return { ...quizState, quizStarted: true };
  }

  if (action.type === "game-over") {
    return { ...quizState, gameOver: true };
  }
  if (action.type === "data") {
    return { ...quizState, questions: action.payload };
  }
}

export default function useGameStats() {
  const [quizState, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "data", payload: data });
      });
  }, []);

  function answerCorrect(points) {
    dispatch({ type: "correct-answer", payload: points });
  }

  function answerWrong() {
    dispatch({ type: "wrong-answer" });
  }

  function setGameOver() {
    dispatch({ type: "game-over" });
  }
  function startGame() {
    dispatch({ type: "start-game" });
  }

  return {
    answerCorrect,
    answerWrong,
    setGameOver,
    quizState,
    startGame,
  };
}
