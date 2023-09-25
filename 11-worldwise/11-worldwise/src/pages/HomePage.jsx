import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <h3>
          <Link to="/login">Start tracking now</Link>
        </h3>
      </section>
    </main>
  );
}
