import { useEffect, useState } from "react";
import { useLogin } from "../_context/LoginProvider";
import { getToken, removeToken } from "../_utils/handleToken";

const useCheckLogin = () => {
  const { type, setType } = useLogin();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token && token.accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false); // 로그인 상태 없을 때 업데이트
    }
  }, [setType]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeToken();
      console.log("logout");
    }, 10000); // 30분

    return () => clearTimeout(timeout);
  });

  const handleLogout = () => {
    removeToken();
    setType("");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return { type, setType, isLoggedIn, handleLogout };
};

export default useCheckLogin;
