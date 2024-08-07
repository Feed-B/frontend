import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "../_context/LoginProvider";
import { checkTokenExpiry, getToken, removeRedirectUrl, removeToken } from "../_utils/handleToken";

const useCheckLogin = () => {
  const router = useRouter();
  const { type, setType, token } = useLogin();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = getToken();
    if (token || (accessToken && accessToken.accessToken)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token, setIsLoggedIn]);

  useEffect(() => {
    checkTokenExpiry();
  });

  const handleLogout = () => {
    removeToken();
    setType("");
    setIsLoggedIn(false);
    removeRedirectUrl();
    router.push("/main");
  };

  return { type, setType, isLoggedIn, handleLogout, setIsLoggedIn };
};

export default useCheckLogin;
