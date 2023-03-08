import { TOKEN } from "../../utils/Constants";
import jwtDecode from "jwt-decode";
import { date } from "yup/lib/locale";

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function removeToken() {
  localStorage.removeItem(TOKEN);
}

export function expiredToken(token) {
  const tokendDecode = jwtDecode(token);
  const expireDate = tokendDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true;
  }
  return false;
}
