import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "../ui/Header";
import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log("navigation: ", navigation);
  const isLoading = navigation.state === "loading";
  console.log(isLoading);

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
