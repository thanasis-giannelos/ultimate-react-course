export default function WelcomeScreen({ onQuizStart }) {
  return (
    <div>
      <h3>Welcome to quiz</h3>
      <button onClick={() => onQuizStart(true)}>Lets Start</button>
    </div>
  );
}
