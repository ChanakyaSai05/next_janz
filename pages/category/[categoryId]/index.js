import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import { Container, Nav, Tab, Col, Row, Dropdown } from "react-bootstrap";
import Headerlanding from "../../../components/headerlanding";
import Footer from "../../../components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoryHero from "../../../public/images/category-hero.svg";
import category1 from "../../../public/images/category1.svg";
import category2 from "../../../public/images/category2.svg";
import category3 from "../../../public/images/category3.svg";
import category4 from "../../../public/images/category4.svg";
import category5 from "../../../public/images/category5.svg";
import category6 from "../../../public/images/category6.svg";
import category7 from "../../../public/images/category7.svg";
import category8 from "../../../public/images/category8.svg";
import cardImg1 from "../../../public/images/card-img1.svg";
import cardImg2 from "../../../public/images/card-img2.svg";
import cardImg3 from "../../../public/images/card-img3.svg";
import cardImg4 from "../../../public/images/card-img4.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Category(props) {
  const router = useRouter();
  const params = router.query;
  const { categoryId } = params;
  // console.log(props, "props");
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
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  // add to cart button
  const cartIconBtn = () => {
    // need to sent to local storage
  };
  return (
    <>
      <Headerlanding></Headerlanding>
      <div className="slider-box-category">
        <Slider {...hero}>
          {props?.categories?.category_banner?.map((banner, banner_index) => (
            <div className="slider-content">
              <Image
                width={4320}
                height={1890}
                src={`${process.env.NEXT_PUBLIC_MEDIA}${banner?.banner_image}`}
                className="carousel-img opacity-50"
                alt="..."
              />
              <Container className="h-100">
                <div className="row h-100 d-flex align-items-center">
                  <div className="col-md-6 col-sm-12 text-white">
                    <h1>Maternity Care </h1>
                    <p>
                      We carry a wide range of maternity care products, so you
                      have one less thing to worry about as your family grows.
                      From breast pumps, refill bags and accessories, we have
                      you covered.
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </Slider>
      </div>

      <div className="">
        <Container>
          <div className="row">
            <div className="col-12 pt-3 pb-2">
              <nav className="breadcrumb-wrap" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {categoryId}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-12 py-4">
              <p>
                <strong>JANZ Medical Supply</strong> is dedicated to helping
                mothers during each step of their motherhood journey. Our
                knowledgeable staff can help you select the perfect breast pump;
                whether it be a convenience-oriented portable style, or one with
                higher suction capabilities for more intensive needs. Best yet –
                most insurance providers cover these products and accessories up
                to 100%, meaning no money out of pocket when obtaining them!
                Equip yourself with everything necessary while on your
                pregnancy, postnatal, and postpartum journeys – JANZ has got you
                covered.
              </p>
              <p>
                <strong>
                  We provide our military members and families with breast pumps
                  and refills at no cost. We direct bill insurance so you
                  don&apos;t have to. We currently accept Tricare, Aetna, VA and
                  AFSPA plans.
                </strong>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="medical-supplier">
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-4">
            {props?.categories?.subcategory?.map((item, index) => (
              <div className="col my-2" key={index}>
                <div className="card-box">
                  <Image width={296} height={300} src={category1} alt="..." />
                  <h5>{item?.category_name}</h5>
                  <Link href={`/category/${categoryId}/${item?.category_slug}`}>
                    <button type="button">Show more</button>
                  </Link>
                </div>
              </div>
            ))}

            {/*  <div className="col my-2">
            
              <div className="card-box">
                <Image width={296} height={300} src={category1} alt="..." />
                <h5>Maternity Care 22</h5>
                <Link href={`/category/${categoryId}/sub_category`}>
                  <button type="button">Show more</button>
                </Link>
              </div>
            </div>
           <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={category2} alt="..." />
                <h5>Respiratory Care</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={category3} alt="..." />
                <h5>Diabetic Care</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={296} src={category4} alt="..." />
                <h5>Mobility</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={category5} alt="..." />
                <h5>Daily Aids</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={category6} alt="..." />
                <h5>Health Devices</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={300} src={category7} alt="..." />
                <h5>Physical Therapy</h5>
                <button type="button">Show more</button>
              </div>
            </div>
            <div className="col my-2">
              <div className="card-box">
                <Image width={296} height={296} src={category8} alt="..." />
                <h5>Support Bands and Braces</h5>
                <button type="button">Show more</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Slider 1*/}
      <div className="category-slider-box">
        {props?.categories?.subcategory?.map(
          (sub_category, sub_category_index) => (
            <>
              {props?.products?.filter(
                (product) => product.category_id == sub_category.category_id
              ).length > 0 && (
                <div className="container py-5">
                  <div className="row pb-5">
                    <div className="col-12 line-heading text-center">
                      <h3>Featured {sub_category?.category_name}</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="12">
                      <Slider {...settings}>
                        {props?.products
                          ?.filter(
                            (product) =>
                              product.category_id == sub_category.category_id
                          )
                          ?.map((product, product_index) => (
                            <>
                              {product?.products?.map(
                                (sub_product, sub_productIndex) => (
                                  <div className="card">
                                    <div className="card-bodys">
                                      <div className="d-flex justify-content-between">
                                        <div className="like-down-box">
                                          <svg className="icon">
                                            <use href="#icon_like"></use>
                                          </svg>
                                        </div>
                                        <div
                                          className="download-box"
                                          onClick={() =>
                                            cartIconBtn(sub_product)
                                          }
                                        >
                                          <svg className="icon">
                                            <use href="#icon_loader"></use>
                                          </svg>
                                          <span>1</span>
                                        </div>
                                      </div>
                                      <div className="d-flex my-2 py-2 justify-content-center">
                                        <div className="card-img">
                                          <Image
                                            src={`${process.env.NEXT_PUBLIC_MEDIA}${sub_product?.product_image[0]?.image_file}`}
                                            alt=""
                                            width="159"
                                            height="160"
                                          />
                                        </div>
                                      </div>
                                      <p className="card-text">
                                        {sub_product?.product_name}
                                      </p>
                                      <span className="badge text-bg-primary p-2 px-3 me-2">
                                        4.1 &#9733;
                                      </span>
                                      <span>(176)</span>
                                    </div>
                                  </div>
                                )
                              )}
                            </>
                          ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div>
      {/* Slider End */}

      <div className="order-step-box">
        <div className="container py-5">
          <div className="row pb-5">
            <div className="col-12 line-heading text-center">
              <h3>How JANZ Medical Can Help You</h3>
              <p className="large-para">
                Order your medical products in 3 easy steps{" "}
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col py-2 text-center">
              <div className="d-flex justify-content-center">
                <div className="icon-box">
                  <svg className="icon">
                    <use href="#icon_choose-product"></use>
                  </svg>
                </div>
              </div>
              <h5 className="py-2">Choose a product</h5>
              <p>
                Register, browse and choose the product you would like to order
              </p>
            </div>
            <div className="col py-2 text-center">
              <div className="d-flex justify-content-center">
                <div className="icon-box">
                  <svg className="icon">
                    <use href="#icon_checkout"></use>
                  </svg>
                </div>
              </div>
              <h5 className="py-2">Checkout</h5>
              <p>
                We will need your insurance information and RX. We will check
                eligibility to get your item covered to lower or eliminate
                out-of-pocket expenses.
              </p>
            </div>
            <div className="col py-2 text-center">
              <div className="d-flex justify-content-center">
                <div className="icon-box">
                  <svg className="icon">
                    <use href="#icon_shipped"></use>
                  </svg>
                </div>
              </div>
              <h5 className="py-2">Shipped</h5>
              <p>
                We ship directly to you, APO/FPO or In Store Pickup. We file the
                paperwork on your behalf and alert you when you are eligible for
                resupplies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  // console.log(params.categoryId, "params");
  // console.log("before axios call");
  // get method is not possible in the dynamic page in this folder []
  // const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}category/details`);
  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_URL}category/details`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        category_slug: params.categoryId,
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
