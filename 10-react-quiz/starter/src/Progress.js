export default function Progress({ index, totalPoints, totalQuestions }) {
  return (
    <div>
      <p>
        Question {index + 1} / {totalQuestions}
      </p>
      <p>{totalPoints}/280 points</p>
    </div>
  );
}
