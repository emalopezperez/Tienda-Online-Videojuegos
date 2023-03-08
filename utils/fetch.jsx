import { getToken, expiredToken } from "../pages/api/Tokens";

export async function authFetch(url, params, logout) {
  const token = getToken();

  if (!token) {
    console.log("usuario no logeado");
  } else {
    if (expiredToken(token)) {
      logout();
    } else {
    }
  }
}
