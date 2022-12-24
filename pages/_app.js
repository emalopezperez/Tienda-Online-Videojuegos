import React, { useMemo, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/globals.css";
import jwtDecode from "jwt-decode";
import { setToken, getToken } from "./api/Tokens";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false)

  useEffect(() => {
    const token = getToken();

    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false)
  }, [reloadUser]);

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
    [auth]
  );

  if (auth === undefined) {
    return null;
  }
  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
