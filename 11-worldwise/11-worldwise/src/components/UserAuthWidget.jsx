import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function UserAuthWidget() {
  const { logOutUser } = useContext(AuthContext);
  return (
    <div>
      UserAuthWidget
      <button onClick={() => logOutUser()}>logout</button>
    </div>
  );
}

export default UserAuthWidget;
