import { useEffect, useState } from "react";
import { useLogin } from "../_context/LoginProvider";
import { checkTokenExpiry, removeToken } from "../_utils/handleToken";

const useCheckLogin = () => {
  const { type, setType } = useLogin();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkTokenExpiry();
  });

  const handleLogout = () => {
    removeToken();
    setType("");
    setIsLoggedIn(false);
  };

  return { type, setType, isLoggedIn, handleLogout, setIsLoggedIn };
};

export default useCheckLogin;
