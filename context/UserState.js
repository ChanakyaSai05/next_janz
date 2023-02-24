import UserContext from "./UserContext";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserState = (props) => {
  const router = useRouter();
  const closeRefRegisterModalandOpenLogin = useRef();
  const [productsData, setProductsData] = useState({});
  const [loginUserAvalilable, setloginUserAvalilable] = useState(false);
  // cart items
  const [cartItems, setcartItems] = useState([]);
  // total cart price
  const [totalPrice, settotalPrice] = useState(0);
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

  // cart
  const getCartItemsFn = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("janz_medical_user"));
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_URL}product/cartproducts`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          customer_id: user ? user.customer_id : "",
        },
      });

      // console.log(response, "result");
      if (response.data.status == false) {
        console.log("Error");
      } else {
        console.log(response?.data, "cart items");
        calculateTotalCartPrice(response?.data?.cart_products);
        setcartItems(response?.data?.cart_products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // calculate total cart price
  const calculateTotalCartPrice = (data) => {
    let price = 0;
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i]?.variant_sale_price);
      price +=
        parseInt(
          data[i]?.variant_sale_price ? data[i]?.variant_sale_price : 0
        ) * parseInt(data[i]?.qty);
    }
    settotalPrice(price);
  };

  // menu content
  async function fetchData() {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}menu/content`,
        { timeout: 5000 }
      );
      if (res.data.status !== false) {
        setProductsData(res.data);
      }
    } catch (error) {
      console.error(error);
      if (error.code === "ECONNABORTED") {
        // handle timeout error
        setProductsData(null); // set data to null or an empty array, depending on your use case
        return;
      }
      // handle other types of errors
    }
  }

  // get cart from product detail
  const getCartItemsFromProductsDetail = () => {
    getCartItemsFn();
  };
  return (
    <UserContext.Provider
      value={{
        getCartItemsFromProductsDetail,
        fetchData,
        closeRefRegisterModalandOpenLogin,
        productsData,
        setProductsData,
        loginUserAvalilable,
        setloginUserAvalilable,
        logoutBtn,
        checkLoginUser,
        getCartItemsFn,
        calculateTotalCartPrice,
        cartItems,
        totalPrice,
        settotalPrice,
        setcartItems,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
