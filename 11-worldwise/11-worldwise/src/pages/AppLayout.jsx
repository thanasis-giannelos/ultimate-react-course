import { NavLink, Outlet } from "react-router-dom";
import Map from "../components/Map";
import UserAuthWidget from "../components/UserAuthWidget";

function AppLayout() {
  return (
    <main>
      <UserAuthWidget />
      <section>
        <NavLink to="cities">cities</NavLink>
        <span> </span>
        <NavLink to="countries">countries</NavLink>
        <Outlet />
      </section>
      <section>
        <Map />
      </section>
    </main>
  );
}

export default AppLayout;
