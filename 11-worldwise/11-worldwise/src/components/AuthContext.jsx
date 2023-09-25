import { createContext, useState } from "react";

/* eslint-disable react/prop-types */

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  function logInUser(username, password) {
    if (username === FAKE_USER.email && password === FAKE_USER.password) {
      setAuth(true);
      console.log("user logged in");
    }
  }

  function logOutUser() {
    if (auth) {
      setAuth(false);
      console.log("user logged out");
    }
  }

  return (
    <AuthContext.Provider value={{ auth, logInUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
