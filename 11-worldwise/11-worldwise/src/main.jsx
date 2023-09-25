import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import { CitiesProvider } from "./components/CitiesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CitiesProvider>
      <App />
    </CitiesProvider>
  </AuthProvider>
);
