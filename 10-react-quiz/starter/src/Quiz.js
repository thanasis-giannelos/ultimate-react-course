import Options from "./Options";
import Progress from "./Progress";
import Question from "./Question";

export default function Quiz({ quizState }) {
  const { questionIndex, totalPoints, questions } = quizState;

  if (questions !== undefined) {
    const { question, options, correctOption, points } =
      questions[questionIndex];

    return (
      <div>
        <Progress
          index={questionIndex}
          totalPoints={totalPoints}
          totalQuestions={questions.length}
        />
        <Question question={question} />
        <Options
          options={options}
          correctOption={correctOption}
          points={points}
        />
        {/* <Timer /> */}
      </div>
    );
  } else {
    return undefined;
  }
}
