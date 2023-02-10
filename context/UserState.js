import UserContext from "./UserContext";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const UserState = (props) => {
  const router = useRouter();
  const closeRefRegisterModalandOpenLogin = useRef();
  const [productsData, setProductsData] = useState(null);
  const [loginUserAvalilable, setloginUserAvalilable] = useState(false);

  // check loginuser available or not function
  const checkLoginUser = () => {
    const user = JSON.parse(localStorage.getItem("janz_medical_user"));
    if (!user) {
      setloginUserAvalilable(false);
    } else {
      setloginUserAvalilable(true);
    }
  };
  // logout button
  const logoutBtn = () => {
    localStorage.removeItem("janz_medical_user");
    localStorage.removeItem("janz_medical_login_token");
    router.push("/");
    checkLoginUser();
  };
  return (
    <UserContext.Provider
      value={{
        closeRefRegisterModalandOpenLogin,
        productsData,
        setProductsData,
        loginUserAvalilable,
        setloginUserAvalilable,
        logoutBtn,
        checkLoginUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
