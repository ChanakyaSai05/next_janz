import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Container, Nav, Tab, Col, Row, Dropdown } from "react-bootstrap";
import Headerlanding from "../components/headerlanding";
import Footer from "../components/footer";
import product from "../public/images/product.svg";
import cardImg2 from "../public/images/card-img2.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Categoryfilter() {

  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? " filter-show" : "";

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
                  <li className="breadcrumb-item active" aria-current="page">
                    Double Electric Pump
                  </li>
                </ol>
              </nav>
            </div>
            <div className={`col-sm-12 col-lg-3 pb-4 filter-drop ${toggleClassCheck}`}>
              <div className="dropdown w-100">
                <p className="dropdown-toggle fw-bold d-block d-lg-none" type="button" onClick={handleClick}>
                  Filters
                </p>
              </div>
              <div className="filter-box">
                <div className="card border text-center p-3 mb-4">
                  <div className="d-flex justify-content-center pb-3">
                    <div className="d-flex justify-content-center align-items-center" style={{width: "150px", height: "150px"}}>
                        <Image
                          width={140}
                          height={140}
                          src={cardImg2}
                          alt="..."
                        />
                    </div>
                  </div>
                  <p className="fw-bold fs-20">Buy Best Electric Pump</p>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Filters</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      Spectra
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      Medela
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      Babybuddha
                    </span>
                  </label>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Location</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      United States
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      International
                    </span>
                  </label>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Type of product</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      Insurance
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      Cash
                    </span>
                  </label>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">HSA/FSA</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      HSA
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="checkbox" value=""/>
                    <span class="form-check-label">
                      FSA
                    </span>
                  </label>
                </div>
                <div className="text-center pb-3">
                  <strong>OR</strong>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Other</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="radio" value=""/>
                    <span class="form-check-label">
                      Product 1
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="radio" value=""/>
                    <span class="form-check-label">
                      Product 2
                    </span>
                  </label>
                </div>
                <div className="card border p-3 mb-4">
                  <div className="card-headerl">
                    <span className="fw-bold">Other</span>
                    <div className="border-bottom mt-2 mb-3"></div>
                  </div>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="radio" value=""/>
                    <span class="form-check-label">
                      HSA
                    </span>
                  </label>
                  <label className="form-check pb-2">
                    <input class="form-check-input" type="radio" value=""/>
                    <span class="form-check-label">
                      FSA
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="d-flex justify-content-center pb-5">
                <div className="card-shadow rounded-2 p-4 sm-w-100 lg-w-75">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold fs-18 p-0 m-0 me-2">SPECTRA S1 PLUS ELECTRIC BREAST PUMP DUAL VOLTAGE</p>
                    <div className="like-down-box">
                      <svg className="icon">
                        <use href="#icon_like-dull"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex py-2">
                    <span className="fs-6 fw-bold me-2">by</span>
                    <span className="fs-6 fw-bold text-primary">Spectra (SKU: 12345)</span>
                  </div>
                  <div className="d-flex pb-3">
                    <div>
                      <span className="badge text-bg-primary p-2 px-3 me-2">
                        4.3 &#9733;
                      </span>
                      <span className="fw-bold">257 Ratings & 30 Reviews </span>
                    </div>
                  </div>
                  <p>The Spectra S1 Plus Electric Breast Pump is the perfect solution for any new .........</p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                      <Image
                        width={180}
                        height={180}
                        src={cardImg2}
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
                        <button type="button" className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                  <div className="form-check py-2">
                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label text-secondary" for="flexCheckDefault">
                      Add to compare
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center pb-5">
                <div className="card-shadow rounded-2 p-4 sm-w-100 lg-w-75">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold fs-18 p-0 m-0 me-2">SPECTRA S1 PLUS ELECTRIC BREAST PUMP DUAL VOLTAGE</p>
                    <div className="like-down-box">
                      <svg className="icon">
                        <use href="#icon_like-dull"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="d-flex py-2">
                    <span className="fs-6 fw-bold me-2">by</span>
                    <span className="fs-6 fw-bold text-primary">Spectra (SKU: 12345)</span>
                  </div>
                  <div className="d-flex pb-3">
                    <div>
                      <span className="badge text-bg-primary p-2 px-3 me-2">
                        4.3 &#9733;
                      </span>
                      <span className="fw-bold">257 Ratings & 30 Reviews </span>
                    </div>
                  </div>
                  <p>The Spectra S1 Plus Electric Breast Pump is the perfect solution for any new .........</p>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                      <Image
                        width={180}
                        height={180}
                        src={cardImg2}
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
                        <button type="button" className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                  <div className="form-check py-2">
                    <input className="form-check-input rounded-0" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label text-secondary" for="flexCheckDefault">
                      Add to compare
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}
