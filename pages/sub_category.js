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
import subCategoryHero from "../public/images/sub-category-hero.svg";
import subCateg1 from "../public/images/sub-categ1.svg";
import subCateg2 from "../public/images/sub-categ2.svg";
import subCateg3 from "../public/images/sub-categ3.svg";
import subCateg4 from "../public/images/sub-categ4.svg";
import subCateg5 from "../public/images/sub-categ5.svg";
import subCateg6 from "../public/images/sub-categ6.svg";
import cardImg1 from "../public/images/card-img1.svg";
import cardImg2 from "../public/images/card-img2.svg";
import cardImg3 from "../public/images/card-img3.svg";
import cardImg4 from "../public/images/card-img4.svg";
import { useRouter } from "next/router";
// import video from "../public/images/video.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Subcategory() {
  const router = useRouter();
  const hero = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = (id) => {
    const vb = document.getElementById(id);
    if (isPlaying === false) {
      vb.play();
    } else {
      vb.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const [isPlaying2, setIsPlaying2] = useState(false);
  const handlePlayPause2 = (id) => {
    const vb = document.getElementById(id);
    if (isPlaying === false) {
      vb.play();
    } else {
      vb.pause();
    }
    setIsPlaying2(!isPlaying2);
  };

  return (
    <>
      <Headerlanding></Headerlanding>
      <div className="slider-box-category">
        <Slider {...hero}>
          <div className="slider-content">
            <Image
              width={4320}
              height={1890}
              src={subCategoryHero}
              className="carousel-img opacity-50"
              alt="..."
            />
            <Container className="h-100">
              <div className="row h-100 d-flex align-items-center">
                <div className="col-md-6 col-sm-12 text-white">
                  <h1>Breast Pump</h1>
                  <p>
                    We carry a wide range of maternity care products, so you
                    have one less thing to worry about as your family grows.
                    From breast pumps, refill bags and accessories, we have you
                    covered.
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <div className="slider-content">
            <Image
              width={4320}
              height={1890}
              src={subCategoryHero}
              className="carousel-img opacity-50"
              alt="..."
            />
            <Container className="h-100">
              <div className="row h-100 d-flex align-items-center">
                <div className="col-md-6 col-sm-12 text-white">
                  <h1>Breast Pump</h1>
                  <p>
                    We carry a wide range of maternity care products, so you
                    have one less thing to worry about as your family grows.
                    From breast pumps, refill bags and accessories, we have you
                    covered.
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <div className="slider-content">
            <Image
              width={4320}
              height={1890}
              src={subCategoryHero}
              className="carousel-img opacity-50"
              alt="..."
            />
            <Container className="h-100">
              <div className="row h-100 d-flex align-items-center">
                <div className="col-md-6 col-sm-12 text-white">
                  <h1>Breast Pump</h1>
                  <p>
                    We carry a wide range of maternity care products, so you
                    have one less thing to worry about as your family grows.
                    From breast pumps, refill bags and accessories, we have you
                    covered.
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <div className="slider-content">
            <Image
              width={4320}
              height={1890}
              src={subCategoryHero}
              className="carousel-img opacity-50"
              alt="..."
            />
            <Container className="h-100">
              <div className="row h-100 d-flex align-items-center">
                <div className="col-md-6 col-sm-12 text-white">
                  <h1>Breast Pump</h1>
                  <p>
                    We carry a wide range of maternity care products, so you
                    have one less thing to worry about as your family grows.
                    From breast pumps, refill bags and accessories, we have you
                    covered.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </Slider>
      </div>

      <div className="">
        <Container>
          <div className="row">
            <div className="col-12 py-3">
              <p>Home&#62;Maternity Care &#62;Breast Pump</p>
            </div>
            <div className="col-12 line-heading text-center mb-5">
              <h3>About Breast Pumps</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 py-4">
              <p>
                Welcome to JANZ Medical Supply, your source for TRICARE-covered
                breast pumps. Whether you&apos;re a first-time mom or
                experienced pro, our breast pumps make it easier to manage and
                control the feeding schedule of your newborn—so that you can
                take care of everyday responsibilities without stress. We offer
                both manual and electric pumps, so whatever suits your lifestyle
                best is within reach.
              </p>
              <p>
                Our team of highly trained professionals knows exactly how
                important this transition can be for mothers, which is why we
                strive to provide you with the best service possible. Our
                selection provides the best-in-class products to meet all
                different types of needs for mothers during this time. TRICARE
                covers one manual or electric pump per birth or adoption, with a
                prescription from a network or non-network physician required
                for reimbursement.
              </p>
              <p>
                Together at JANZ Medical Supply, let&apos;s give you the gift of
                ease and convenience during this special time in motherhood. Get
                started today by shopping our selection of covered breast pumps!
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="medical-supplier">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-4">
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={subCateg1} alt="..." />
                <h5>Double Electric Pump</h5>
                <button
                  type="button"
                  onClick={() => router.push("/category_filter")}
                >
                  Show more
                </button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={subCateg2} alt="..." />
                <h5>Hospital Grade Pumps</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={subCateg3} alt="..." />
                <h5>Dual Motor Pumps</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={296} src={subCateg4} alt="..." />
                <h5>Hand Free Pumps</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={subCateg5} alt="..." />
                <h5>Manual Pumps</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={subCateg6} alt="..." />
                <h5>Portable Pumps</h5>
                <button type="button">Show more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider 1*/}
      <div className="category-slider-box">
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-12 line-heading text-center">
              <h3>Featured Products</h3>
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

      <Container>
        <div className="row py-5">
          <div className="col-12 my-5 line-heading text-center">
            <h3>How to Choose Best Electric Pump</h3>
          </div>
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
              malesuada augue. Nam at enim at metus consequat porttitor in eu
              augue. Phasellus gravida quam et sem pretium, sed bibendum nulla
              imperdiet. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Maecenas eu tempus diam. Sed velit orci, ultricies vel
              mauris eget, mollis fringilla sem.
            </p>
          </div>
          <div className="col-12 my-5 line-heading text-center">
            <h3>Breast Pumps FAQs</h3>
          </div>
        </div>
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
                    What type of Breast Pump CAN I CHOOSE FROM?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris ut risus est. Maecenas eget feugiat mauris. Morbi
                    sagittis, neque ac vehicula consectetur, quam augue
                    sollicitudin enim, molestie convallis purus purus luctus
                    libero
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
                    What are the pros and cons of electronic breast pump?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item&apos;s accordion body. Let&apos;s imagine
                    this being filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item py-2">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    What are the pros and cons of Manual breast pump?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item&apos;s accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
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
                    Is IT safe more me to use someone else’s breast pump or a
                    used pump?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur odio, vitae, magnam odit sed commodi, optio sint
                    veniam tenetur nesciunt eligendi ipsam in impedit possimus
                    earum minus nulla mollitia deleniti?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="category-slider-box py-5">
        <Container>
          <div className="row pb-5">
            <div className="col-12 line-heading text-center">
              <h3>Breast Pumps Video Guide</h3>
            </div>
          </div>

          <div className="row pb-4">
            <div className="col-md-5 col-lg-4 col-sm-12 pb-3">
              <div className="video-box" data-pp={isPlaying}>
                <video
                  className="video"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  id="vb1"
                />
                <button type="button" onClick={() => handlePlayPause("vb1")}>
                  {/* {isPlaying && 'Hello'} */}
                  <svg className="icon pause">
                    <use href="#icon_pause"></use>
                  </svg>
                  <svg className="icon play">
                    <use href="#icon_play"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-sm-12 pb-3">
              <div>
                <p className="fw-bold m-0">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p>
                  adipiscing elit. Ut eget malesuada augue. Nam at enim at metus
                  consequat porttitor in eu augue. Phasellus gravida quam et sem
                  pretium, sed bibendum nulla imperdiet. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Maecenas eu tempus
                  diam. Sed velit orci, ultricies vel mauris eget, mollis
                  fringilla sem.Nam at enim at metus consequat porttitor in eu
                  augue. Phasellus gravida quam et sem pretium, sed bibendum
                  nulla imperdiet.Nam at enim at metus consequat porttitor in eu
                  augue
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-lg-4 col-sm-12 pb-3 order-md-1">
              <div className="video-box" data-pp={isPlaying2}>
                <video
                  className="video"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls={isPlaying2}
                  onPlay={() => setIsPlaying2(true)}
                  onPause={() => setIsPlaying2(false)}
                  id="vb2"
                />
                <button type="button" onClick={() => handlePlayPause2("vb2")}>
                  {/* {isPlaying && 'Hello'} */}
                  <svg className="icon pause">
                    <use href="#icon_pause"></use>
                  </svg>
                  <svg className="icon play">
                    <use href="#icon_play"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-sm-12 pb-3">
              <div>
                <p className="fw-bold m-0">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p>
                  adipiscing elit. Ut eget malesuada augue. Nam at enim at metus
                  consequat porttitor in eu augue. Phasellus gravida quam et sem
                  pretium, sed bibendum nulla imperdiet. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Maecenas eu tempus
                  diam. Sed velit orci, ultricies vel mauris eget, mollis
                  fringilla sem.Nam at enim at metus consequat porttitor in eu
                  augue. Phasellus gravida quam et sem pretium, sed bibendum
                  nulla imperdiet.Nam at enim at metus consequat porttitor in eu
                  augue
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer></Footer>
    </>
  );
}
