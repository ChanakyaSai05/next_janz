import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import { Container, Nav, Tab, Col, Row, Dropdown } from "react-bootstrap";
import Headerlanding from "../../components/headerlanding";
import Footer from "../../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import product from "../public/images/product.svg";
import cardImg1 from "../../public/images/card-img1.svg";
import cardImg2 from "../../public/images/card-img2.svg";
import cardImg3 from "../../public/images/card-img3.svg";
import cardImg4 from "../../public/images/card-img4.svg";
// import airminiImg from "../public/images/air-mini.svg";
// import fullmask2 from "../public/images/fullmask2.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Product(props) {
  const router = useRouter();
  const params = router.query;
  const { brandId } = params;
  const { brand, products } = props?.data;
  // console.log(brand);
  console.log(props, "props");
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [editCancel, setEditCancel] = useState(false);

  return (
    <>
      <Headerlanding></Headerlanding>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-12 pt-3 pb-2">
              <nav className="breadcrumb-wrap" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {brandId}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-12 line-heading text-center">
              <h3>{brand?.brand_name}</h3>
            </div>
            <div className="col-12 pt-5">
              <p>{brand?.brand_content}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider 1*/}
      <div className="product-slider-box pb-5">
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-12 line-heading text-center">
              <h3>Top Products From {brand.brand_name}</h3>
            </div>
          </div>
          <div className="row">
            <div className="12">
              <Slider {...settings}>
                {products?.data.map((pro, pro_index) => (
                  <div className="card">
                    <div className="card-bodys">
                      <div className="d-flex justify-content-between">
                        <div className="like-down-box">
                          <svg className="icon">
                            <use href="#icon_like-dull"></use>
                          </svg>
                        </div>
                        <div className="download-box">
                          <svg className="icon">
                            <use href="#icon_loader-dull"></use>
                          </svg>
                        </div>
                      </div>
                      <div className="d-flex my-2 py-2 justify-content-center">
                        <div className="card-img">
                          <Image
                            width={180}
                            height={180}
                            src={
                              pro?.product_image?.length == 0
                                ? cardImg1
                                : `${process.env.NEXT_PUBLIC_MEDIA}${pro?.product_image[0]?.image_file}`
                            }
                            alt="..."
                          />
                        </div>
                      </div>
                      <p className="card-text">{pro?.product_name}</p>
                      <span className="badge text-bg-primary p-2 px-3 me-2">
                        4.2 &#9733;
                      </span>
                      <span>(166)</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* Slider End */}

      <div className="">
        <div className="container">
          <div className="row pb-2">
            <div className="col-12 line-heading text-center">
              <h3>Browse All Products From {brand?.brand_name}</h3>
            </div>
            <div className="col-12 text-center text-md-end pt-4">
              <p className="fw-bold">Total Items: {products?.data.length}</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center pb-5">
            {products?.data.map((pro, pro_index) => (
              <div className="col-sm-12 col-lg-9 mb-3">
                <div className="d-flex justify-content-center">
                  <div className="card-shadow rounded-2 p-4 sm-w-100 lg-w-75">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fw-bold fs-18 p-0 m-0 me-2">
                        SPECTRA S1 PLUS ELECTRIC BREAST PUMP DUAL VOLTAGE
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
                        {brand.brand_name}
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
                      {pro?.product_short_description.slice(0, 80)}{" "}
                      {pro?.product_short_description.length > 80 && <>...</>}
                    </p>

                    <div className="row">
                      <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                        <Image
                          width={180}
                          height={180}
                          src={
                            pro?.product_image?.length == 0
                              ? cardImg1
                              : `${process.env.NEXT_PUBLIC_MEDIA}${pro?.product_image[0]?.image_file}`
                          }
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
                            onClick={() =>
                              router.push(
                                `/category/${categoryId}/${sub_categoryId}/${sub_sub_categoryId}/product_detail`
                              )
                            }
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
              </div>
            ))}
          </div>
          {/* <div className="row d-flex justify-content-center pb-5">
            <div className="d-flex justify-content-center">
              <div className="card-shadow rounded-2 p-4 sm-w-100 lg-w-75">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="fw-bold fs-18 p-0 m-0 me-2">
                    SPECTRA S1 PLUS ELECTRIC BREAST PUMP DUAL VOLTAGE
                  </p>
                  <div className="like-down-box">
                    <svg className="icon">
                      <use href="#icon_like-dull"></use>
                    </svg>
                  </div>
                </div>
                <div className="d-flex py-2">
                  <span className="fs-6 fw-bold me-2">by</span>
                  <span className="fs-6 fw-bold text-primary">
                    Spectra (SKU: 12345)
                  </span>
                </div>
                <div className="d-flex pb-3">
                  <div>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.3 &#9733;
                    </span>
                    <span className="fw-bold">257 Ratings & 30 Reviews </span>
                  </div>
                </div>
                <p>
                  The Spectra S1 Plus Electric Breast Pump is the perfect
                  solution for any new .........
                </p>
                <div className="row">
                  <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                    <Image width={180} height={180} src={cardImg2} alt="..." />
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
                      <button type="button" className="btn btn-primary">
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
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const brandId = params.brandId;
    // console.log(params);
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_URL}brand`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        brand_slug: brandId,
      },
    });
    if (response.data.status != false) {
      // console.log(response);
      return {
        props: {
          data: response.data,
        },
      };
    }
  } catch (error) {
    // console.log(error);
    return {
      props: {},
    };
  }
}
