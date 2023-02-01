import { useState } from "react";
import Header from "../components/header";
import Asidebar from "../components/asidebar";
import Image from "next/image";
import breastPump from "../public/images/breast-pump.svg";
import breastPumpMeter from "../public/images/breast-pump-meter.svg";

export default function Myorder() {
  // const [publicPath] = useState(process.env.NEXT_PUBLIC_URL);

  const [editCancel, setEditCancel] = useState(false);
  const [numbereditCancel, setNumberEditCancel] = useState(false);
  const [formedit, setFormEdit] = useState(false);
  const [editform, setEditForm] = useState(false);

  const editForm = (item) => {
    setEditForm(!editform);
  };

  const [table, setTable] = useState([
    { id: 1, isShown: false },
    { id: 2, isShown: false },
    { id: 3, isShown: false },
    { id: 4, isShown: false },
  ]);
  const [tableDelete, setTableDelete] = useState(false);
  function handleClickOpen() {
    setTableDelete((tableDelete) => !tableDelete);
  }
  let toggleClassOpen = tableDelete ? " show" : "";

  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? " show" : "";

  const [formShow, setFormShow] = useState(false);
  function handleClickForm() {
    setFormShow((formShow) => !btnState);
  }
  let toggleClassForm = btnState ? " show-form" : "";

  const mouseEnterFn = (show) => {
    setTable((cate) =>
      cate.map((item, index) => {
        if (item.id === show.id) {
          return { ...item, isShown: true };
        } else {
          return item;
        }
      })
    );
  };

  const mouseLeaveFn = (show) => {
    setTable((cate) =>
      cate.map((item, index) => {
        if (item.id === show.id) {
          return { ...item, isShown: false };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <Header></Header>
      <Asidebar></Asidebar>
      <div className="wrapper pb-2">
        <div className="row">
          <div className="col text-center py-4">
            <h2>Order History</h2>
          </div>
        </div>
        <div className="row mb-4 ">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="d-sm-flex align-items-end align-items-center">
                      <h5 className="pe-3">Order#100</h5>
                      <small className="opacity-75">November 15, 2022</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <h5>Total: $750.00</h5>
                  </div>
                  <div className="col-12">
                    <hr className="mt-2" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-sm-12">
                    <div className="d-flex">
                      <div className="order-imgbox">
                        <Image
                          width={200}
                          height={200}
                          src={breastPump}
                          alt="Breast Pump"
                        />
                      </div>
                      <div className="d-block align-self-center ps-3 ps-sm-4">
                        <h6>Elive Stride Electic Breast Pump</h6>
                        <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item pe-3">
                            <strong className="me-2">SKU:</strong>
                            <span>ES001-3</span>
                          </li>
                          <li className="list-inline-item">
                            <strong className="me-2">Qty:</strong>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-sm-12 ">
                    <h6 className="mt-20px">Processing</h6>
                  </div>
                  <div className="col-lg-auto col-sm-12">
                    <div className="d-flex mt-20px mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_files"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Upload Authorization\RX
                        </span>
                      </a>
                    </div>
                    <div className="d-flex">
                      <a className="text-danger fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_cancel"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Cancel Order
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 ">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="d-sm-flex align-items-end">
                      <h5 className="pe-3">Order#100</h5>
                      <small className="opacity-75">November 15, 2022</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <h5>Total: $750.00</h5>
                  </div>
                  <div className="col-12">
                    <hr className="mt-2" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-sm-12">
                    <div className="d-flex">
                      <div className="order-imgbox">
                        <Image
                          width={200}
                          height={200}
                          src={breastPump}
                          alt="Breast Pump"
                        />
                      </div>
                      <div className="d-block align-self-center ps-3 ps-sm-4">
                        <h6>Elive Stride Electic Breast Pump</h6>
                        <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item pe-3">
                            <strong className="me-2">SKU:</strong>
                            <span>ES001-3</span>
                          </li>
                          <li className="list-inline-item">
                            <strong className="me-2">Qty:</strong>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-sm-12 ">
                    <h6 className="mt-20px">Shipped</h6>
                  </div>
                  <div className="col-lg-auto col-sm-12">
                    <div className="d-flex mt-20px mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_location"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Track order
                        </span>
                      </a>
                    </div>
                    <div className="d-flex mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_files"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          View Authorization\RX
                        </span>
                      </a>
                    </div>
                    <div className="d-flex">
                      <a className="text-danger fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_cancel"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Cancel Order
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 ">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="d-sm-flex align-items-end">
                      <h5 className="pe-3">Order#100</h5>
                      <small className="opacity-75">November 15, 2022</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <h5>Total: $750.00</h5>
                  </div>
                  <div className="col-12">
                    <hr className="mt-2" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-sm-12">
                    <div className="d-flex">
                      <div className="order-imgbox">
                        <Image
                          width={200}
                          height={200}
                          src={breastPump}
                          alt="Breast Pump"
                        />
                      </div>
                      <div className="d-block align-self-center ps-3 ps-sm-4">
                        <h6>Elive Stride Electic Breast Pump</h6>
                        <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item pe-3">
                            <strong className="me-2">SKU:</strong>
                            <span>ES001-3</span>
                          </li>
                          <li className="list-inline-item">
                            <strong className="me-2">Qty:</strong>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-sm-12 ">
                    <h6 className="mt-20px text-primary">Delivered</h6>
                  </div>
                  <div className="col-lg-auto col-sm-12">
                    <div className="d-flex mt-20px mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_location"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Problem with order
                        </span>
                      </a>
                    </div>
                    <div className="d-flex mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_files"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          View Authorization\RX
                        </span>
                      </a>
                    </div>
                    <div className="d-flex mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_review"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Rate & Review
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4 ">
          <div className="col-12">
            <div className="card border-0">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="d-sm-flex align-items-end">
                      <h5 className="pe-3">Order#100</h5>
                      <small className="opacity-75">November 15, 2022</small>
                    </div>
                  </div>
                  <div className="col-auto">
                    <h5>Total: $750.00</h5>
                  </div>
                  <div className="col-12">
                    <hr className="mt-2" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-sm-12">
                    <div className="d-flex">
                      <div className="order-imgbox">
                        <Image
                          width={200}
                          height={200}
                          src={breastPumpMeter}
                          alt="Breast Pump"
                        />
                      </div>
                      <div className="d-block align-self-center ps-3 ps-sm-4">
                        <h6>Elive Stride Electic Breast Pump</h6>
                        <ul className="list-inline mb-0 mt-3">
                          <li className="list-inline-item pe-3">
                            <strong className="me-2">SKU:</strong>
                            <span>ES001-3</span>
                          </li>
                          <li className="list-inline-item">
                            <strong className="me-2">Qty:</strong>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-sm-12 ">
                    <h6 className="mt-20px text-danger text-decoration-underline">
                      Action Required
                    </h6>
                  </div>
                  <div className="col-lg-auto col-sm-12">
                    <div className="d-flex mt-20px mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_location"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Track order
                        </span>
                      </a>
                    </div>
                    <div className="d-flex mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_files"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          View Authorization\RX
                        </span>
                      </a>
                    </div>
                    <div className="d-flex mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_review"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Problem with order
                        </span>
                      </a>
                    </div>
                    <div className="d-flex mb-2">
                      <a className="text-primary fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_subscription"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Manage Subscription
                        </span>
                      </a>
                    </div>
                    <div className="d-flex">
                      <a className="text-danger fw-bold text-decoration-none">
                        <svg className="icon me-2">
                          <use href="#icon_cancel"></use>
                        </svg>
                        <span className="text-decoration-underline">
                          Cancel Order
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`modal ${toggleClassCheck}`}>
          <div className="popup-body">
            <form className="d-flex">
              <div className="reset-box-blue">
                <h5>Reset Password</h5>
                <h6>Your new password must:</h6>
                <ul>
                  <li>Be atleast 8 character length</li>
                  <li>Not be same as your current password</li>
                </ul>
              </div>
              <div className="reset-box-white">
                <div className="pop-close">
                  <button className="pop-btn " onClick={handleClick}>
                    <span>
                      <svg className="icon">
                        <use href="#icon_close-btn"></use>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPws" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPws"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPws" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPws"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPws" className="form-label">
                    Conform Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPws"
                  />
                </div>
                <div className="mb-2">
                  <div className="reset-tick-box">
                    <span>
                      <svg className="icon">
                        <use href="#icon_green-tick"></use>
                      </svg>
                    </span>
                    <span>Atleast 8 character</span>
                  </div>
                  <div className="reset-tick-box">
                    <span>
                      <svg className="icon">
                        <use href="#icon_green-tick"></use>
                      </svg>
                    </span>
                    <span>Atleast One Lower case</span>
                  </div>
                  <div className="reset-tick-box">
                    <span>
                      <svg className="icon">
                        <use href="#icon_wrong-tick"></use>
                      </svg>
                    </span>
                    <span>Atleast One Upper case</span>
                  </div>
                  <div className="reset-tick-box">
                    <span>
                      <svg className="icon">
                        <use href="#icon_green-tick"></use>
                      </svg>
                    </span>
                    <span>Atleast One Number</span>
                  </div>
                  <div className="reset-tick-box">
                    <span>
                      <svg className="icon">
                        <use href="#icon_wrong-tick"></use>
                      </svg>
                    </span>
                    <span>
                      Atleast One Special Character (! @ # $ % ^ & % * ? _ ~)
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Verification Code
                  </label>
                  <input
                    type="email"
                    placeholder="Enter code sent to your email"
                    className="form-control"
                    id="exampleInputEmail"
                  />
                </div>
                <div className="reset-btn">
                  <button typeof="button">Resend Code</button>
                </div>
                <div className="reset-btn-box">
                  <button typeof="button" className="button button-blue">
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={`modal ${toggleClassOpen}`}>
          <div className="popup-body-delete">
            <div className="pop-delete-box">
              <div className="delete-pop-icon py-20">
                <div className="pop-icon">
                  <svg className="icon">
                    <use href="#icon_popdelete"></use>
                  </svg>
                </div>
              </div>
              <h1 className="small-heading d-flex justify-content-center">
                Delete this record?
              </h1>
              <p className="gray py-20 d-flex justify-content-center">
                Do you want to really delete this records?
              </p>
              <div className="d-flex justify-content-center pb-20">
                <button
                  type="button"
                  className="button button-blue same-btn mr-10"
                  onClick={handleClickOpen}
                >
                  Cancel
                </button>
                <button className="button button-default same-btn delete ml-10">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
