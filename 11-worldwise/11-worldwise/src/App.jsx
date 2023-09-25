import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ProductPage from "./pages/ProductPage";
import LogInPage from "./pages/LogInPage";
import AppLayout from "./pages/AppLayout";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import ProtectedRoute from "./pages/ProtectedRoute";
import CityDescription from "./components/CityDescription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "product", element: <ProductPage /> },
      { path: "login", element: <LogInPage /> },
      {
        path: "/app",
        element: (
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Navigate replace to="cities" /> },
          {
            path: "cities",
            element: <Cities />,
          },
          {
            path: "cities/:id",
            element: <CityDescription />,
          },
          { path: "countries", element: <Countries /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
