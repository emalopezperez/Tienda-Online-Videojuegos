import { TOKEN } from "../../utils/Constants";

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}
