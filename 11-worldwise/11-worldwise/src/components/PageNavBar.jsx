import { NavLink } from "react-router-dom";

function PageNavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/">Logo</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="product">product</NavLink>
        </li>
        <li>
          <NavLink to="login">login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavBar;
