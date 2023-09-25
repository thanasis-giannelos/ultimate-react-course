import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

/* eslint-disable react/prop-types */

function ProtectedRoute({ children }) {
  const { auth } = useContext(AuthContext);

  return auth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
