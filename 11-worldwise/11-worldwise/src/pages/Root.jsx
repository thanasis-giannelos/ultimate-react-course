import { Outlet } from "react-router-dom";
import PageNavBar from "../components/PageNavBar";

function Root() {
  return (
    <div>
      <PageNavBar />
      <Outlet />
    </div>
  );
}

export default Root;
