import { useContext, useEffect, useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import Header from "../../components/header";
import Asidebar from "../../components/asidebar";
// import cardImg2 from "../public/images/card-img2.svg";
import no_image from "../../public/images/no_image.jpg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import UserContext from "../../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, set_data_fetched } from "../../features/userSlice";
import { getWishListDetails } from "../../components/FunctionCalls";
export default function Wishlist() {
  const context = useContext(UserContext);
  const { getCartItemsFn, cartItems } = context;
  const dispatch = useDispatch();
  const selectedUser = useSelector(selectUser);
  const router = useRouter();
  // console.log(product_wishlist, "product wishlist");
  // wishlist add
  const submitWishListButton = async (sub_product) => {
    try {
      let user = JSON.parse(localStorage.getItem("janz_medical_user"));
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_URL}customer/wishlist/add`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          product_id: sub_product?.product_id,
          product_variant_id: sub_product?.product_variants[0]
            ?.product_variant_id
            ? sub_product?.product_variants[0]?.product_variant_id
            : null,
          customer_id: user?.customer_id,
        },
      });

      // console.log(response, "result");
      if (response.data.status == false) {
        console.log("Error");
      } else {
        // console.log(response?.data, "product wishlist");
        getWishListButton();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // wishlist delete
  const deleteWishListItem = async (sub_product) => {
    try {
      let user = JSON.parse(localStorage.getItem("janz_medical_user"));
      const response = await axios({
        url: `${process.env.NEXT_PUBLIC_URL}customer/wishlist/delete`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          product_id: sub_product?.product_id,
          customer_id: user?.customer_id,
        },
      });

      // console.log(response, "result");
      if (response.data.status == false) {
        console.log("Error");
      } else {
        // console.log(response?.data, "product wishlist");
        getWishListButton();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // get wishlist
  const getWishListButton = async () => {
    try {
      let wishlistData = await getWishListDetails();
      dispatch(
        set_data_fetched({
          wishlist_items_fetched: true,
          wishlistData: wishlistData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const findInWishlist = (sub_product) => {
    for (let i = 0; i < selectedUser?.wishlistData?.length; i++) {
      const element = selectedUser?.wishlistData[i];
      if (element?.product_id == sub_product?.product_id) {
        return true;
      }
    }

    return false;
  };
  useEffect(() => {
    if (!selectedUser.cart_items_fetched) {
      getCartItemsFn();
    }
    if (!selectedUser.wishlist_items_fetched) {
      getWishListButton();
    }
  }, []);
  return (
    <>
      <Header></Header>
      <Asidebar></Asidebar>
      <div className="wrapper">
        <div className="row">
          <div className="col text-center py-4">
            <h2>Wishlist</h2>
          </div>
        </div>

        <div className="">
          <div className="container">
            <div className="">
              <div className="container">
                {selectedUser?.wishlistData?.map((item, index) => (
                  <div
                    className=" d-flex justify-content-center pb-5 "
                    key={index}
                  >
                    <div className="col-sm-12 col-lg-9 mb-3 ">
                      <div className="card-shadow rounded-2 p-4 sm-w-100 lg-w-75 w-85 mx-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fw-bold fs-18 p-0 m-0 me-2">
                            {item?.product?.product_name}
                          </p>
                          {!findInWishlist(item) ? (
                            <div
                              className="like-down-box"
                              onClick={() => {
                                submitWishListButton(item);
                              }}
                            >
                              <svg className="icon">
                                <use href="#icon_like-dull"></use>
                              </svg>
                            </div>
                          ) : (
                            <div
                              className="like-down-box"
                              onClick={() => deleteWishListItem(item)}
                            >
                              <svg className="icon">
                                <use href="#icon_like"></use>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="d-flex py-2">
                          <span className="fs-6 fw-bold me-2">by</span>
                          <span className="fs-6 fw-bold text-primary">
                            {item?.product?.brand?.brand_name}
                          </span>
                        </div>
                        <div className="d-flex pb-3">
                          <div>
                            <span className="badge text-bg-primary p-2 px-3 me-2">
                              4.3 &#9733;
                            </span>
                            <span className="fw-bold">
                              257 Ratings & 30 Reviews{" "}
                            </span>
                          </div>
                        </div>
                        <p>{item?.product?.product_short_description}</p>
                        <div className="row">
                          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                            <Image
                              width={180}
                              height={180}
                              src={
                                item?.product?.product_image[0]?.image_file
                                  ? `${process.env.NEXT_PUBLIC_MEDIA}${item?.product?.product_image[0]?.image_file}`
                                  : no_image
                              }
                              alt="..."
                            />
                          </div>
                          <div
                            className="col-lg-4 col-sm-12 d-flex align-items-center"
                            style={{ textAlign: "justify" }}
                          >
                            {/* <ul>
                              <li>Feature list 01</li>
                              <li>Feature list 02</li>
                              <li>Feature list 03</li>
                            </ul> */}
                          </div>
                        </div>
                        <div className="row d-flex align-items-center">
                          <div className="form-check py-2 col-lg-6 col-sm-12 my-3 ">
                            <input
                              className="form-check-input rounded-0 "
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label text-secondary"
                              for="flexCheckDefault"
                            >
                              Add to compare
                            </label>
                          </div>
                          <div className="col-lg-6 d-flex  align-items-center col-sm-12 mb-2 ">
                            <div className="text-center text-md-end w-100 ">
                              <button
                                type="button"
                                className="btn btn-primary px-4 py-2"
                                onClick={() => {
                                  if (item?.product_variant) {
                                    router.push(
                                      `/product_detail/wishlist/${item?.product_variant?.variant_permlink}`
                                    );
                                  }
                                }}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
