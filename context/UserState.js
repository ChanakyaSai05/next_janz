import UserContext from "./UserContext";
import { useRef, useState } from "react";

const UserState = (props) => {
  const closeRefRegisterModalandOpenLogin = useRef();
  const [productsData, setProductsData] = useState(null);
  return (
    <UserContext.Provider
      value={{
        closeRefRegisterModalandOpenLogin,
        productsData,
        setProductsData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
