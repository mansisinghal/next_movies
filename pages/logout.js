import react, { useEffect } from "react";
import router from "next/router";
import { useLocalStorage } from "react-use";
const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  useEffect(() => {
    setIsLoggedIn(false);
    router.push('/signin');
  }, []);
  return <p>Logging You out</p>;
};

export default Logout;
