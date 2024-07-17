const ACCESS_TOKEN = "accessToken";
const TOKEN_EXPIRY_TIME = 10000; // 토큰 만료 시간

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
  }
};

export const checkTokenExpiry = () => {
  const tokenTimestamp = localStorage.getItem("tokenTimestamp");
  if (tokenTimestamp) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - parseInt(tokenTimestamp, 10);
    if (elapsedTime >= TOKEN_EXPIRY_TIME) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenTimestamp");
      console.log("Access token has expired and has been removed.");
    }
  }
};
