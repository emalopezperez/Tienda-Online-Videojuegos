import React, { useMemo, useState } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/globals.css";
import jwtDecode from "jwt-decode";
import { setToken } from "./api/Tokens";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const authData = useMemo(
    () => ({
      auth,
      login: login,
    }),
    []
  );

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
