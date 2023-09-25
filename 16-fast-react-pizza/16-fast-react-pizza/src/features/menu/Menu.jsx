import { getMenu } from "../../services/apiRestaurant";

export async function loader() {
  const menu = await getMenu();
  return menu;
}

function Menu() {
  return <h1>Menu</h1>;
}

export default Menu;
