import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function Options({ options, correctOption, points }) {
  const { answerCorrect, answerWrong } = useContext(GameContext);
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <button
            onClick={() =>
              index === correctOption ? answerCorrect(points) : answerWrong()
            }
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
