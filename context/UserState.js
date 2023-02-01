import UserContext from "./UserContext";
import { useRef, useState } from "react";

const UserState = (props) => {
  const closeRefRegisterModalandOpenLogin = useRef();
  return (
    <UserContext.Provider value={{ closeRefRegisterModalandOpenLogin }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
