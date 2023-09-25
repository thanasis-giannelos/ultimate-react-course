import Header from "../ui/Header";
// import Loader from '../ui/';
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* {isLoading && <Loader />} */}

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
