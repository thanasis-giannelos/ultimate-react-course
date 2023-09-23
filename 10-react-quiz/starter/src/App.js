import { useContext, useState } from "react";
import Header from "./Header";
import WelcomeScreen from "./WelcomeScreen";
import Quiz from "./Quiz";
import { GameContext } from "./GameContext";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const { quizState } = useContext(GameContext);

  return (
    <>
      <Header />
      {!quizStarted && <WelcomeScreen onQuizStart={setQuizStarted} />}
      {quizStarted &&
        quizState.questionIndex !== quizState.questions.length && (
          <Quiz quizState={quizState} />
        )}
      {quizStarted &&
        quizState.questionIndex === quizState.questions.length && (
          <p>game over</p>
        )}
    </>
  );
}

export default App;
