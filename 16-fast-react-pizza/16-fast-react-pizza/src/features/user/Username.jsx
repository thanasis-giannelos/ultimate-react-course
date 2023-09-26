import { useSelector } from "react-redux";

function Username() {
  const user = useSelector((state) => state.user.username);
  console.log(user);
  return <div>{user}</div>;
}

export default Username;
