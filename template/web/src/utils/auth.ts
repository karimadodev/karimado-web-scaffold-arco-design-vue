interface Token {
  access_token: string;
  refresh_token: string;
}

const TOKEN_KEY = 'karimado.user.token';

export function isLoggedIn() {
  return !!localStorage.getItem(TOKEN_KEY);
}

export function getAccessToken() {
  const item = localStorage.getItem(TOKEN_KEY);
  if (item) {
    return (JSON.parse(item) as Token).access_token;
  }
  return null;
}

export function getRefreshToken() {
  const item = localStorage.getItem(TOKEN_KEY);
  if (item) {
    return (JSON.parse(item) as Token).refresh_token;
  }
  return null;
}

export function setToken(token: Token) {
  const item = JSON.stringify(token);
  localStorage.setItem(TOKEN_KEY, item);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}
