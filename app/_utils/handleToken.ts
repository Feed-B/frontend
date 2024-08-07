const ACCESS_TOKEN = "accessToken";
const TOKEN_TIMESTAMP = "tokenTimestamp";
const REDIRECT_URL = "redirectUrl";
const TOKEN_EXPIRY_TIME = 6000000; // 토큰 만료 시간

export const setToken = (accessToken: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    return { accessToken };
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(TOKEN_TIMESTAMP);
  }
};

export const checkTokenExpiry = () => {
  const tokenTimestamp = localStorage.getItem("tokenTimestamp");
  if (tokenTimestamp) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - parseInt(tokenTimestamp, 10);
    if (elapsedTime >= TOKEN_EXPIRY_TIME) {
      removeToken();
      console.log("Access token has expired and has been removed.");
    }
  }
};

export const setRedirectUrl = (url: string) => {
  localStorage.setItem(REDIRECT_URL, url);
};

export const getRedirectUrl = () => {
  return localStorage.getItem(REDIRECT_URL);
};

export const removeRedirectUrl = () => {
  localStorage.removeItem(REDIRECT_URL);
};
