import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import { Container, Nav, Tab, Col, Row, Dropdown } from "react-bootstrap";
import Headerlanding from "../../../../../components/headerlanding";
import Footer from "../../../../../components/footer";
// import product from "../public/images/product.svg";
import cardImg2 from "../../../../../public/images/card-img2.svg";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import UserContext from "../../../../../context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function Categoryfilter(props) {
  const context = useContext(UserContext);
  const { productsData, getCartItemsFn } = context;
  const router = useRouter();
  const params = router.query;
  const { categoryId, sub_categoryId, sub_sub_categoryId } = params;
  console.log(props, "props");
  const [editCancel, setEditCancel] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedLocationItems, setcheckedLocationItems] = useState([]);
  const [checkedTypeOfProductItems, setcheckedTypeOfProductItems] = useState(
    []
  );

  const handleCheckboxChange = (e) => {
    const brandName = e.target.value;
    if (e.target.checked) {
      // add the checked item to the state
      setCheckedItems([...checkedItems, brandName]);
    } else {
      // remove the unchecked item from the state
      setCheckedItems(checkedItems.filter((item) => item !== brandName));
    }
  };
  //
  const handleCheckboxLocationItemsChange = (e) => {
    let location = e.target.value;
    if (e.target.checked) {
      setcheckedLocationItems([...checkedLocationItems, location]);
    } else {
      setcheckedLocationItems(
        checkedLocationItems.filter((item) => item !== location)
      );
    }
  };
  // product items change
  const handleCheckboxTypeOfProductItemsChange = (e) => {
    let typeOfProduct = e.target.value;
    if (e.target.checked) {
      setcheckedTypeOfProductItems([
        ...checkedTypeOfProductItems,
        typeOfProduct,
      ]);
    } else {
      setcheckedTypeOfProductItems(
        checkedTypeOfProductItems.filter((item) => item !== typeOfProduct)
      );
    }
  };

  // console.log(checkedItems, "checked items");
  // console.log(checkedLocationItems, "checked location items");
  console.log(checkedTypeOfProductItems, "checkedTypeOfProducts");
  const nameSaveButton = () => {
    setEditCancel(!editCancel);
  };

  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? " filter-show" : "";

  console.log(productsData, "products data");

  useEffect(() => {
    getCartItemsFn();
  }, []);

  return (
    <>
      <Headerlanding></Headerlanding>
      <div className="">
        <Container>
          <div className="row">
            <div className="col-12 pt-3 pb-2">
              <nav className="breadcrumb-wrap" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href={`/category/${categoryId}`}>{categoryId}</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href={`/category/${categoryId}/${sub_categoryId}`}>
                      {sub_categoryId}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {sub_sub_categoryId}
                  </li>
                </ol>
              </nav>
            </div>
            <div
              className={`col-sm-12 col-lg-3 pb-4 filter-drop ${toggleClassCheck}`}
            >
              <div className="dropdown w-100">
                <p
                  className="dropdown-toggle fw-bold d-block d-lg-none"
                  type="button"
                  onClick={handleClick}
                >
                  Filters
                </p>
              </div>
              <div className="filter-box">
                <div className="card border text-center p-3 mb-4">
                  <div className="d-flex justify-content-center pb-3">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <Image
                        width={140}
                        height={140}
                        src={
                          props?.categories?.category_image
                            ? `${process.env.NEXT_PUBLIC_MEDIA}${props?.categories?.category_image}`
                            : cardImg2
                        }
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className="fw-bold fs-20">
                    Buy Best {props?.categories?.category_name}
                  </p>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Filters</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  {productsData?.brands?.map((item, index) => (
                    <label className="form-check pb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item?.brand_name}
                        onChange={handleCheckboxChange}
                        checked={checkedItems.includes(item?.brand_name)}
                      />
                      <span className="form-check-label">
                        {item?.brand_name}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Location</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  {["United States", "International"]?.map((item, index) => (
                    <label className="form-check pb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item}
                        onChange={handleCheckboxLocationItemsChange}
                        checked={checkedLocationItems.includes(item)}
                      />
                      <span className="form-check-label">{item}</span>
                    </label>
                  ))}
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Type of product</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  {["Insurance", "Cash", "HSA/FSA"]?.map((item, index) => (
                    <label className="form-check pb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item}
                        onChange={handleCheckboxTypeOfProductItemsChange}
                        checked={checkedTypeOfProductItems.includes(item)}
                      />
                      <span className="form-check-label">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-sm-12 col-lg-9l col-lg-7">
              {props?.products?.map((product, product_index) => (
                <>
                  {product?.products
                    ?.filter((sub_product) => {
                      if (checkedItems.length > 0) {
                        return checkedItems.includes(
                          sub_product?.brand?.brand_name
                        );
                      } else {
                        return sub_product;
                      }
                    })
                    .filter((sub_product) => {
                      if (checkedLocationItems.length > 0) {
                        let location = "";
                        if (sub_product?.location.toLowerCase() === "u") {
                          location = "United States";
                        } else {
                          location = "International";
                        }
                        return checkedLocationItems.includes(location);
                      } else {
                        return sub_product;
                      }
                    })
                    ?.filter((sub_product) => {
                      if (checkedTypeOfProductItems.length > 0) {
                        let type = "";
                        if (
                          sub_product?.insurance_eligible?.toLowerCase() === "n"
                        ) {
                          type = "Insurance";
                        } else {
                          type = "Cash";
                        }

                        return checkedTypeOfProductItems.includes(type);
                      } else {
                        return sub_product;
                      }
                    })
                    .filter((sub_product) => {
                      if (checkedTypeOfProductItems.length > 0) {
                        let type = "";
                        if (
                          !sub_product?.hsa_fsa ||
                          sub_product?.hsa_fsa?.toLowerCase() === "n"
                        ) {
                          type = "";
                        } else {
                          type = "HSA/FSA";
                        }

                        {
                          console.log(type, "type");
                        }
                        if (type === "") {
                          return sub_product;
                        } else {
                          return checkedTypeOfProductItems.includes(type);
                        }
                      } else {
                        return sub_product;
                      }
                    })
                    ?.map((sub_product, sub_product_index) => (
                      <div className="d-flex justify-content-center pb-5 ">
                        <div className="card-shadow rounded-2 p-4 sm-w-100 lg-w-75 w-100 ">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="fw-bold fs-18 p-0 m-0 me-2">
                              {sub_product?.product_name}
                            </p>
                            {editCancel ? (
                              <div
                                className="like-down-box"
                                onClick={() => setEditCancel(!editCancel)}
                              >
                                <svg className="icon">
                                  <use href="#icon_like-dull"></use>
                                </svg>
                              </div>
                            ) : (
                              <div
                                className="like-down-box"
                                onClick={() => setEditCancel(!editCancel)}
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
                              {sub_product?.brand?.brand_name}
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
                          <p>
                            {sub_product?.product_short_description?.slice(
                              0,
                              77
                            )}
                            ........
                          </p>
                          <div className="row">
                            <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                              <Image
                                width={180}
                                height={180}
                                src={`${process.env.NEXT_PUBLIC_MEDIA}${sub_product?.product_image[0]?.image_file}`}
                                alt="..."
                              />
                            </div>
                            <div className="col-lg-4 col-sm-12 d-flex align-items-center">
                              <ul>
                                <li>Feature list 01</li>
                                <li>Feature list 02</li>
                                <li>Feature list 03</li>
                              </ul>
                            </div>
                            <div className="col-lg-4 col-sm-12 d-flex align-items-center ">
                              <div className="text-center text-md-start w-100">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => {
                                    if (
                                      sub_product?.product_variants?.length > 0
                                    ) {
                                      router.push(
                                        `/category/${categoryId}/${sub_categoryId}/${sub_sub_categoryId}/${sub_product?.product_variants[0]?.variant_permlink}`
                                      );
                                    }
                                  }}
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="form-check py-2">
                            <input
                              className="form-check-input rounded-0"
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
                        </div>
                      </div>
                    ))}
                </>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}
export async function getServerSideProps({ params }) {
  // console.log(params, "params");
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_URL}category/details`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        category_slug: params.sub_sub_categoryId,
      },
    });
    // console.log(response.data);
    if (response.data.status != false) {
      // console.log(response.data);
      return {
        props: response.data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
