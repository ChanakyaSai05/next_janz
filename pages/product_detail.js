import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Container, Nav, Tab, Col, Row, Dropdown } from "react-bootstrap";
import Headerlanding from "../components/headerlanding";
import Footer from "../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "../public/images/product.svg";
import cardImg1 from "../public/images/card-img1.svg";
import cardImg2 from "../public/images/card-img2.svg";
import cardImg3 from "../public/images/card-img3.svg";
import cardImg4 from "../public/images/card-img4.svg";
import fullmask1 from "../public/images/fullmask1.svg";
import fullmask2 from "../public/images/fullmask2.svg";
import fullmask3 from "../public/images/fullmask3.svg";
import fullmask4 from "../public/images/fullmask4.svg";
import checkImg from "../public/images/check-img.svg";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Productdetail() {
  const router = useRouter();
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

  // const [chooseMask, setChooseMask] = useState(true);
  const [stateObj, setstateObj] = useState({
    first: true,
    second: false,
    third: false,
  });

  const [editCancel, setEditCancel] = useState(false);

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
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Maternity Care</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Breast Pump</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Double Electric Pump</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Spectra S1 Plus Electric Breast Pump Dual Voltage
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="product-img-box">
                <div className="multiple-img">
                  <div className="img-box">
                    <Image src={product} width={50} height={50} alt="" />
                  </div>
                  <div className="img-box">
                    <Image src={product} width={50} height={50} alt="" />
                  </div>
                  <div className="img-box">
                    <Image src={product} width={50} height={50} alt="" />
                  </div>
                  <div className="img-box">
                    <Image src={product} width={50} height={50} alt="" />
                  </div>
                </div>
                <div className="view-box">
                  <div className="view-img">
                    <Image src={product} width={250} height={250} alt="" />
                  </div>
                  <button
                    type="button"
                    className="w-100 my-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter1"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <h5>SPECTRA S1 PLUS ELECTRIC BREAST PUMP DUAL VOLTAGE</h5>
              <div className="d-flex py-2">
                <span className="fs-6 fw-bold me-2">by</span>
                <span className="fs-6 fw-bold text-primary">Spectra</span>
              </div>
              <div className="d-flex">
                <div>
                  <span className="badge text-bg-primary p-2 px-3 me-2">
                    4.3 &#9733;
                  </span>
                  <span className="fw-bold">257 Ratings & 30 Reviews </span>
                </div>
                <a className="p-2 px-3 ms-auto fs-6" href="#">
                  Write a review
                </a>
              </div>
              <strong className="fs-20 fw-bold">$150</strong>
              <p className="py-4 fs-18">
                The Spectra S1 Plus Electric Breast Pump is the perfect solution
                for any new mom who needs to pump their breastmilk. This
                award-winning, dual voltage pump was designed with convenience,
                comfort and efficiency in mind. Featuring an ultra quiet
                motor...
              </p>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <svg className="icon fs-2 me-2">
                    <use href="#icon_rx-required"></use>
                  </svg>
                  <span className="fs-18">Rx Required</span>
                </div>
                <div className="d-flex align-items-center mx-auto">
                  <svg className="icon fs-2 me-2">
                    <use href="#icon_insurance-only"></use>
                  </svg>
                  <span className="fs-18">Insurance Only</span>
                </div>
              </div>
              <div>
                <form action="/action_page.php">
                  <div className="py-3">
                    <label htmlFor="quantity" className="me-2 fs-18">
                      Number of Quantity
                    </label>
                    <select name="quantity" id="quantity" className="px-1">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center py-2">
                    <span className="me-4 fs-18 fw-bold">Color</span>
                    <label
                      className="itemcolor-radio"
                      style={{ color: "#E3E1E2" }}
                    >
                      <input type="radio" name="color" />
                      <span></span>
                    </label>
                    <label
                      className="itemcolor-radio"
                      style={{ color: "#7A7A7A" }}
                    >
                      <input type="radio" name="color" />
                      <span></span>
                    </label>
                    <label
                      className="itemcolor-radio"
                      style={{ color: "#77BA9D" }}
                    >
                      <input type="radio" name="color" />
                      <span></span>
                    </label>
                    <label
                      className="itemcolor-radio"
                      style={{ color: "#3586FF" }}
                    >
                      <input type="radio" name="color" />
                      <span></span>
                    </label>
                  </div>
                  <div className="d-flex align-items-center py-3">
                    <span className="me-4 fs-18 fw-bold">Size</span>
                    <label className="itemsize-radio">
                      <input type="radio" name="size" />
                      <span>S</span>
                    </label>
                    <label className="itemsize-radio">
                      <input type="radio" name="size" />
                      <span>M</span>
                    </label>
                    <label className="itemsize-radio">
                      <input type="radio" name="size" />
                      <span>L</span>
                    </label>
                    <label className="itemsize-radio">
                      <input type="radio" name="size" />
                      <span>XL</span>
                    </label>
                    <div className="d-flex align-items-center size-guide ms-2">
                      <svg className="icon fs-2">
                        <use href="#icon_size"></use>
                      </svg>
                      <span className="fs-18">Size Guide</span>
                    </div>
                  </div>
                  <div className="py-3">
                    <span className="me-4 fs-18 fw-bold">Location</span>
                    <span className="me-4 fs-18 text-primary">USA only</span>
                    <span className="fs-18">International</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg className="icon fs-3 me-2">
                      <use href="#icon_user-guide"></use>
                    </svg>
                    <span className="fs-18">User Guide</span>
                  </div>
                </form>
                <div className="border-bottom py-3"></div>
                <div className="row">
                  <div className="col-12">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item py-2">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Included in your package
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <ol>
                              <li>24mm Spectra Breast Flanges</li>
                              <li>28mm Spectra Breast Flanges</li>
                              <li>Spectra Tubing</li>
                              <li>Spectra Duckbill Valves</li>
                              <li>Spectra Backflow Protectors.</li>
                              <li>
                                Includes silicone membrane, uppercase, and
                                lowercase for each Backflow Protector
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item py-2">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Features
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Blanditiis eveniet harum dolorem pariatur
                            laudantium animi numquam quos voluptate itaque, odio
                            impedit distinctio repudiandae quas, illum ipsa
                            consequatur explicabo adipisci natus!
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item py-2">
                        <h2
                          className="accordion-header"
                          id="flush-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Product Specifications
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi modi deserunt voluptatum dicta vero
                            soluta consequuntur laborum molestias architecto,
                            provident deleniti autem illum aspernatur eveniet
                            sapiente! Atque cumque iste nulla?
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item py-2">
                        <h2 className="accordion-header" id="flush-headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            Customer Reviews
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur odio, vitae, magnam odit sed
                            commodi, optio sint veniam tenetur nesciunt eligendi
                            ipsam in impedit possimus earum minus nulla mollitia
                            deleniti?
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Slider 1*/}
      <div className="product-slider-box">
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-12">
              <h3>Bought Togather</h3>
            </div>
          </div>
          <div className="row">
            <div className="12">
              <Slider {...settings}>
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
                          src={cardImg1}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">5 OZ Breast Milk Bottle Set</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.2 &#9733;
                    </span>
                    <span>(166)</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-bodys">
                    <div className="d-flex justify-content-between">
                      <div className="like-down-box">
                        <svg className="icon">
                          <use href="#icon_like"></use>
                        </svg>
                      </div>
                      <div className="download-box">
                        <svg className="icon">
                          <use href="#icon_loader"></use>
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={159}
                          height={160}
                          src={cardImg2}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">
                      Spectra S1 Plus Electric Breast Pump Dual Voltage
                    </p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.1 &#9733;
                    </span>
                    <span>(176)</span>
                  </div>
                </div>
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
                        {/* <span>1</span> */}
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={180}
                          height={180}
                          src={cardImg3}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">Lansinoh Resupply Kit</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.4 &#9733;
                    </span>
                    <span>(200)</span>
                  </div>
                </div>
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
                        {/* <span>1</span> */}
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={125}
                          height={160}
                          src={cardImg4}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">Bambo Nature Love Balm</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.0 &#9733;
                    </span>
                    <span>(123)</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-bodys">
                    <div className="d-flex justify-content-between">
                      <div className="like-down-box">
                        <svg className="icon">
                          <use href="#icon_like"></use>
                        </svg>
                      </div>
                      <div className="download-box">
                        <svg className="icon">
                          <use href="#icon_loader"></use>
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={159}
                          height={160}
                          src={cardImg2}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">
                      Spectra S1 Plus Electric Breast Pump Dual Voltage
                    </p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.1 &#9733;
                    </span>
                    <span>(176)</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="product-slider-box">
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-12">
              <h3>Similar Products</h3>
            </div>
          </div>
          <div className="row">
            <div className="12">
              <Slider {...settings}>
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
                          src={cardImg1}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">5 OZ Breast Milk Bottle Set</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.2 &#9733;
                    </span>
                    <span>(166)</span>
                    <p className="fw-bold pt-2 m-0">$150</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-bodys">
                    <div className="d-flex justify-content-between">
                      <div className="like-down-box">
                        <svg className="icon">
                          <use href="#icon_like"></use>
                        </svg>
                      </div>
                      <div className="download-box">
                        <svg className="icon">
                          <use href="#icon_loader"></use>
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={159}
                          height={160}
                          src={cardImg2}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">
                      Spectra S1 Plus Electric Breast Pump Dual Voltage
                    </p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.1 &#9733;
                    </span>
                    <span>(176)</span>
                  </div>
                </div>
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
                        {/* <span>1</span> */}
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={180}
                          height={180}
                          src={cardImg3}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">Lansinoh Resupply Kit</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.4 &#9733;
                    </span>
                    <span>(200)</span>
                  </div>
                </div>
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
                        {/* <span>1</span> */}
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={125}
                          height={160}
                          src={cardImg4}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">Bambo Nature Love Balm</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.0 &#9733;
                    </span>
                    <span>(123)</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-bodys">
                    <div className="d-flex justify-content-between">
                      <div className="like-down-box">
                        <svg className="icon">
                          <use href="#icon_like"></use>
                        </svg>
                      </div>
                      <div className="download-box">
                        <svg className="icon">
                          <use href="#icon_loader"></use>
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={159}
                          height={160}
                          src={cardImg2}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">
                      Spectra S1 Plus Electric Breast Pump Dual Voltage
                    </p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.1 &#9733;
                    </span>
                    <span>(176)</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="product-slider-box pb-5">
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-12">
              <h3>Recently Viewed</h3>
            </div>
          </div>
          <div className="row">
            <div className="12">
              <Slider {...settings}>
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
                          src={cardImg1}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">5 OZ Breast Milk Bottle Set</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.2 &#9733;
                    </span>
                    <span>(166)</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-bodys">
                    <div className="d-flex justify-content-between">
                      <div className="like-down-box">
                        <svg className="icon">
                          <use href="#icon_like"></use>
                        </svg>
                      </div>
                      <div className="download-box">
                        <svg className="icon">
                          <use href="#icon_loader"></use>
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={159}
                          height={160}
                          src={cardImg2}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">
                      Spectra S1 Plus Electric Breast Pump Dual Voltage
                    </p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.1 &#9733;
                    </span>
                    <span>(176)</span>
                  </div>
                </div>
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
                        {/* <span>1</span> */}
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={180}
                          height={180}
                          src={cardImg3}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">Lansinoh Resupply Kit</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.4 &#9733;
                    </span>
                    <span>(200)</span>
                  </div>
                </div>
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
                        {/* <span>1</span> */}
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={125}
                          height={160}
                          src={cardImg4}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">Bambo Nature Love Balm</p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.0 &#9733;
                    </span>
                    <span>(123)</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-bodys">
                    <div className="d-flex justify-content-between">
                      <div className="like-down-box">
                        <svg className="icon">
                          <use href="#icon_like"></use>
                        </svg>
                      </div>
                      <div className="download-box">
                        <svg className="icon">
                          <use href="#icon_loader"></use>
                        </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="d-flex my-2 py-2 justify-content-center">
                      <div className="card-img">
                        <Image
                          width={159}
                          height={160}
                          src={cardImg2}
                          alt="..."
                        />
                      </div>
                    </div>
                    <p className="card-text">
                      Spectra S1 Plus Electric Breast Pump Dual Voltage
                    </p>
                    <span className="badge text-bg-primary p-2 px-3 me-2">
                      4.1 &#9733;
                    </span>
                    <span>(176)</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* Slider End */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter1"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-md-down">
          <div className="modal-content border-0 rounded-md-4 overflow-hidden">
            <div className="modal-body p-4">
              {stateObj.first && (
                <div className="product-modal">
                  <h4 className="text-center pb-2">Choose Mask</h4>
                  <p className="text-center fs-18 pb-3">
                    Along with CPAP, choosing a mask is mendatory
                  </p>
                  <ul>
                    <li>
                      <h5 className="pb-2">MACHINE ONLY</h5>
                      <p>
                        I already have a mask, would like to buy only machine
                      </p>
                      <svg className="icon">
                        <use href="#icon_rightarrow"></use>
                      </svg>
                    </li>
                  </ul>
                  <ul>
                    <li
                      onClick={() =>
                        setstateObj({
                          ...stateObj,
                          second: true,
                          first: false,
                          third: false,
                        })
                      }
                    >
                      <h5 className="pb-2">CHOOSE MASK</h5>
                      <p>
                        I don&#39;t have a mask, I want to choose a mask &
                        subscription along with the machine
                      </p>
                      <svg className="icon">
                        <use href="#icon_rightarrow"></use>
                      </svg>
                    </li>
                  </ul>
                </div>
              )}
              {stateObj.second && (
                <div className="choosemask-tab">
                  <ul className="backtab">
                    <li
                      onClick={() =>
                        setstateObj({
                          ...stateObj,
                          second: false,
                          first: true,
                          third: false,
                        })
                      }
                    >
                      <svg className="icon">
                        <use href="#icon_leftarrow"></use>
                      </svg>
                      <span>Back to List</span>
                    </li>
                  </ul>
                  <h4 className="text-center pb-2">Choose Mask</h4>
                  <p className="text-center fs-18 pb-3">
                    Along with CPAP, choosing a mask is mendatory
                  </p>
                  <p className="fs-18 pb-2">Filter Masks</p>
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Full Face Mask
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Nasal Masks
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Nasal Pillow Masks
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0"
                    >
                      <div className="row row-cols row-cols-md-4">
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask1}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              Swift™ FX - Mask (One Size)
                            </p>
                            <button
                              className="btn btn-outline-primary w-100"
                              onClick={() =>
                                setstateObj({
                                  ...stateObj,
                                  second: false,
                                  first: false,
                                  third: true,
                                })
                              }
                            >
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask2}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirTouch F20 Replacement Frame System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask3}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask4}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask1}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              Swift™ FX - Mask (One Size)
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask2}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirTouch F20 Replacement Frame System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask3}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask4}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0"
                    >
                      <div className="row row-cols row-cols-md-4">
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask1}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              Swift™ FX - Mask (One Size)
                            </p>
                            <button
                              className="btn btn-outline-primary w-100"
                              onClick={() =>
                                setstateObj({
                                  ...stateObj,
                                  second: false,
                                  first: false,
                                  third: true,
                                })
                              }
                            >
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask2}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirTouch F20 Replacement Frame System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask3}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask4}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask1}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              Swift™ FX - Mask (One Size)
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask2}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirTouch F20 Replacement Frame System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask3}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask4}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
                      <div className="row row-cols row-cols-md-4">
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask1}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              Swift™ FX - Mask (One Size)
                            </p>
                            <button
                              className="btn btn-outline-primary w-100"
                              onClick={() =>
                                setstateObj({
                                  ...stateObj,
                                  second: false,
                                  first: false,
                                  third: true,
                                })
                              }
                            >
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask2}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirTouch F20 Replacement Frame System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask3}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask4}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask1}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              Swift™ FX - Mask (One Size)
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask2}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirTouch F20 Replacement Frame System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask3}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-3 product-box">
                            <div className="img-box">
                              <div>
                                <Image
                                  src={fullmask4}
                                  width={140}
                                  height={140}
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="product-name">
                              AirFit F30i Complete Full Face Mask System
                            </p>
                            <button className="btn btn-outline-primary w-100">
                              View details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {stateObj.third && (
                <div className="">
                  <ul className="backtab">
                    <li
                      onClick={() =>
                        setstateObj({
                          ...stateObj,
                          second: true,
                          first: false,
                          third: false,
                        })
                      }
                    >
                      <svg className="icon">
                        <use href="#icon_leftarrow"></use>
                      </svg>
                      <span>Back to Choose Mask</span>
                    </li>
                  </ul>
                  <h4 className="text-center pb-2">Choose Mask</h4>
                  <p className="text-center fs-18 pb-3">
                    Along with CPAP, choosing a mask is mendatory
                  </p>
                  <div className="row">
                    <div className="col-md-5 col-sm-12 mb-5">
                      <div className="product-img-box">
                        <div className="multiple-img">
                          <div className="img-box">
                            <Image
                              src={fullmask2}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="img-box">
                            <Image
                              src={fullmask2}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="img-box">
                            <Image
                              src={fullmask2}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                          <div className="img-box">
                            <Image
                              src={fullmask2}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="view-box mb-4">
                          <div className="view-img">
                            <Image
                              src={fullmask2}
                              width={250}
                              height={250}
                              alt=""
                            />
                          </div>
                          <button
                            type="button"
                            className="w-100 my-3"
                            onClick={() => router.push("/product")}
                            data-bs-dismiss="modal"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12">
                      <h5>AIRTOUCH F20 FOR HER REPLACEMENT FRAME SYSTEM</h5>
                      <p className="py-4 fs-18">
                        The AirTouch F20 features plus memory foam cushion that
                        is designed to adapt to the unique contours to each
                        individual face, creating light, breathable seal that
                        stays in place throughout the night
                      </p>
                      <div className="d-flex flex-wrap mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <svg className="icon fs-2 me-2">
                            <use href="#icon_check"></use>
                          </svg>
                          <span className="fs-18">In stock</span>
                        </div>
                        <div className="d-flex align-items-center me-md-4 ms-auto mb-2">
                          <svg className="icon fs-2 me-2">
                            <use href="#icon_rx-required"></use>
                          </svg>
                          <span className="fs-18">Rx Required</span>
                        </div>
                        <div className="d-flex align-items-center ms-autol mb-2">
                          <svg className="icon fs-2 me-2">
                            <use href="#icon_insurance-only"></use>
                          </svg>
                          <span className="fs-18">Insurance Only</span>
                        </div>
                        <div className="d-flex align-items-center ms-auto mb-2">
                          <svg className="icon fs-2 me-2">
                            <use href="#icon_wallet"></use>
                          </svg>
                          <span className="fs-18">HSA/FSA</span>
                        </div>
                      </div>
                      <div>
                        <form action="/action_page.php">
                          <div className="py-3">
                            <label
                              htmlFor="quantity"
                              className="me-4 fs-18 fw-bold d-flex mb-2"
                            >
                              Size
                            </label>
                            <select
                              name="quantity"
                              id="quantity"
                              className="px-3 w-25 form-select"
                            >
                              <option value="selectsize">Select Size</option>
                              <option value="size0">S</option>
                              <option value="size1">M</option>
                              <option value="size2">L</option>
                              <option value="size3">XL</option>
                            </select>
                          </div>
                          <div className="form-check form-check-inline my-3">
                            <input
                              className="form-check-input rounded-0"
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                              onClick={() => setEditCancel(!editCancel)}
                            />
                            <label
                              className="form-check-label"
                              for="inlineCheckbox1"
                            >
                              Yes, I would like to opt-in for available
                              subscription based on my prescription.
                            </label>
                          </div>
                          <p>
                            <strong>Disclaimer:</strong>{" "}
                            <i>
                              JANZ will activate your subscription based on the
                              uploaded prescription
                            </i>
                          </p>
                          {editCancel && (
                            <>
                              <h4 className="py-3">Available Subscriptions</h4>
                              <Image
                                className="w-100"
                                src={checkImg}
                                width={500}
                                height={300}
                                alt=""
                              />
                            </>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
