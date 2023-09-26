import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <header>
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/order/${query}`);
          setQuery("");
        }}
      >
        <input
          type="search"
          placeholder="search order by id"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
