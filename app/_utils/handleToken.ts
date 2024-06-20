const ACCESS_TOKEN = "accessToken";

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
