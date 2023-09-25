import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, logInUser } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, " ", password);
    logInUser(email, password);
  }

  if (auth) return <Navigate to="/app" />;

  return (
    <main>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="login" />
        </form>
      </section>
    </main>
  );
}

export default LogInPage;
