import React, { useEffect, useState, useRef, useContext } from "react";
import SignaturePad from "react-signature-pad";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  Container,
  Nav,
  Tab,
  Col,
  Row,
  Dropdown,
  Table,
} from "react-bootstrap";
import Headerlanding from "../components/headerlanding";
import Form from "react-bootstrap/Form";
import uploader from "../public/images/uploader.svg";
import { useRouter } from "next/router";
import UserContext from "../context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function Checkout() {
  const context = useContext(UserContext);
  const { closeRefRegisterModalandOpenLogin } = context;

  // Login open close
  const [loginUser, setloginUser] = useState(null);

  // Router
  const router = useRouter();
  let sigPad = useRef();
  let data = "";
  const clear = () => {
    sigPad.current.clear();
  };
  const save = () => {
    data = sigPad.current.toDataURL();
    console.log(data);
    // const link = document.createElement("a");
    // link.download = "signature.png";
    // link.href = data;
    // link.click();
  };

  const [editCancel, setEditCancel] = useState(false);
  const nameSaveButton = () => {
    setEditCancel(!editCancel);
  };

  const [editUserprofile, setEditUserprofile] = useState(true);
  const nameSaveButtonProfile = () => {
    setEditUserprofile(!editUserprofile);
  };

  const [formedit, setFormEdit] = useState(false);
  const [editform, setEditForm] = useState(false);

  // 5 states with one object
  const [profileStates, setprofileStates] = useState({
    user_login: true,
    user_profile: false,
    user_insurance: false,
    payment: false,
    order_summary: false,
  });
  const [profileStatesCompleted, setprofileStatesCompleted] = useState({
    user_login: true,
    user_profile: true,
    user_insurance: false,
    payment: false,
    order_summary: false,
  });

  const [num, setNum] = useState(1);
  const [rawFile, setrawFile] = useState(null);
  const [rawFileTwo, setrawFileTwo] = useState(null);
  const [previewUrl, setpreviewUrl] = useState(null);
  const [previewUrlTwo, setpreviewUrlTwo] = useState(null);

  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  // on click change login function
  const changeLoginBtn = () => {
    closeRefRegisterModalandOpenLogin.current.click();
  };

  const handleChangeFileFun = (e) => {
    let file = e.target.files[0];
    setrawFile(file);
  };
  const handleChangeFileFunTwo = (e) => {
    let file = e.target.files[0];
    setrawFileTwo(file);
  };
  console.log(rawFile, "RAW");
  console.log(previewUrl, "PREVIEW");

  useEffect(() => {
    if (!rawFile) {
      setpreviewUrl(null);
      return;
    }
    const objectURL = URL.createObjectURL(rawFile);
    setpreviewUrl(objectURL);
  }, [rawFile]);

  useEffect(() => {
    if (!rawFileTwo) {
      setpreviewUrlTwo(null);
      return;
    }
    const objectURL = URL.createObjectURL(rawFileTwo);
    setpreviewUrlTwo(objectURL);
  }, [rawFileTwo]);

  // Deliver here button
  const deliverHereBtn = () => {
    setprofileStates({
      ...profileStates,
      user_profile: !profileStates.user_profile,
      user_insurance: true,
    });
  };

  // Onclick userInsurance continue button
  const userInsuranceContinueButton = () => {
    setprofileStatesCompleted({
      ...profileStatesCompleted,
      user_insurance: true,
    });
    setprofileStates({ ...profileStates, payment: true });
  };
  // Onclick payment continue button
  const paymentContinueButton = () => {
    setprofileStatesCompleted({
      ...profileStatesCompleted,
      payment: true,
    });
    setprofileStates({ ...profileStates, order_summary: true });
  };
  // Onclick submit continue button
  const SubmitContinueButton = () => {
    // Pending
  };

  // user insurance change button
  const userInsuranceChangeButton = () => {
    setprofileStatesCompleted({
      ...profileStatesCompleted,
      user_insurance: false,
    });
  };
  // payment change button
  const paymentChangeButton = () => {
    setprofileStatesCompleted({
      ...profileStatesCompleted,
      payment: false,
    });
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("janz_medical_user"));
    setloginUser(user);
  }, []);
  return (
    <>
      <Headerlanding></Headerlanding>
      <div className="">
        <Container>
          <div className="row">
            <div className="col-md-8">
              <h5 className="fs-22 fw-bold py-4">Checkout</h5>
              <div className="card-shadow  p-4 d-flex align-items-center mb-4">
                <div className="d-flex">
                  <div className="me-4">
                    <svg className="icon fs-24">
                      <use href="#icon_greencheck"></use>
                    </svg>
                  </div>
                  <div className="">
                    <p className="fw-bold p-0 m-0">User Login</p>
                    <span>{loginUser?.email}</span>
                  </div>
                </div>
                <div className="ms-auto">
                  <button
                    type="button"
                    className="btn btn-default btn-outline-secondary px-4"
                    onClick={changeLoginBtn}
                  >
                    Change
                  </button>
                </div>
              </div>

              {profileStates.user_profile ? (
                <div className="card-shadow  p-4 d-flex align-items-center mb-4">
                  <div className="d-flex">
                    <div className="me-4">
                      <svg className="icon fs-24">
                        <use href="#icon_greencheck"></use>
                      </svg>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0">User Profile</p>
                      <span>
                        JANZ Corp, 9876543210 Address 1, Address 2, City, State,
                        Zip code{" "}
                      </span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <button
                      type="button"
                      className="btn btn-default btn-outline-secondary px-4"
                      onClick={deliverHereBtn}
                    >
                      Change
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card-shadow p-4 mb-4 position-relative">
                  <div className="d-flex pb-3">
                    <div className="me-4">
                      <div
                        className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "#D9D9D9",
                        }}
                      >
                        <span>02</span>
                      </div>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0">User Profile</p>
                    </div>
                    <button className="border-btn ms-auto text-primary">
                      Add Address
                    </button>
                  </div>
                  <div className="d-flex">
                    <div className="">
                      {editCancel ? (
                        <div className="edit-form-box">
                          <h6>Edit address</h6>
                          <div className="row">
                            <div className="col">
                              <Form>
                                {["radio"].map((type) => (
                                  <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                      inline
                                      label="Primary"
                                      name="primary"
                                      type={type}
                                      id={`inline-${type}-3`}
                                    />
                                  </div>
                                ))}
                                <div className="mb-3 w-100">
                                  <label
                                    htmlFor="exampleInputName"
                                    className="form-label"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    value="Janz Corp"
                                    className="form-control"
                                    id="exampleInputName"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputAddress"
                                    className="form-label"
                                  >
                                    Address 01
                                  </label>
                                  <input
                                    type="text"
                                    value="abc 011"
                                    className="form-control"
                                    id="exampleInputAddress"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleInputAddress"
                                    className="form-label"
                                  >
                                    Address 02
                                  </label>
                                  <input
                                    type="text"
                                    value="abrrc22 01221"
                                    className="form-control"
                                    id="exampleInputAddress"
                                  />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                  <span className="me-2">
                                    Do you use APO/FPO Address?
                                  </span>
                                  {["radio"].map((type) => (
                                    <div
                                      key={`inline-${type}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        inline
                                        label="Yes"
                                        name="group4"
                                        type={type}
                                        id={`inline-${type}-4`}
                                        onClick={() => setFormEdit(!formedit)}
                                      />
                                      <Form.Check
                                        inline
                                        label="No"
                                        name="group4"
                                        type={type}
                                        id={`inline-${type}-5`}
                                        onClick={() => setFormEdit(!formedit)}
                                      />
                                    </div>
                                  ))}
                                </div>
                                {formedit ? (
                                  <div className="yes-btn-show">
                                    <div className="mb-3 d-flex justify-content-between">
                                      <span>Address Type</span>
                                      {["radio"].map((type) => (
                                        <div
                                          key={`inline-${type}`}
                                          className="mb-3"
                                        >
                                          <Form.Check
                                            inline
                                            label="APO"
                                            name="group5"
                                            type={type}
                                            id={`inline-${type}-4`}
                                          />
                                          <Form.Check
                                            inline
                                            label="FPO"
                                            name="group5"
                                            type={type}
                                            id={`inline-${type}-5`}
                                          />
                                          <Form.Check
                                            inline
                                            label="DPO"
                                            name="group5"
                                            type={type}
                                            id={`inline-${type}-6`}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputBox"
                                        className="form-label"
                                      >
                                        Unit/Box #
                                      </label>
                                      <input
                                        type="text"
                                        value="CMR 414 Box 1416"
                                        className="form-control"
                                        id="exampleInputBox"
                                      />
                                    </div>
                                    <div className="mb-3 form-group">
                                      <label for="exampleFormControlSelect1">
                                        State
                                      </label>
                                      <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                      >
                                        <option>AE</option>
                                        <option>USA</option>
                                      </select>
                                    </div>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputCountry"
                                        className="form-label"
                                      >
                                        Country
                                      </label>
                                      <input
                                        type="text"
                                        value="Italy"
                                        className="form-control"
                                        id="exampleInputCountry"
                                      />
                                    </div>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputZipcode"
                                        className="form-label"
                                      >
                                        ZIP Code
                                      </label>
                                      <input
                                        type="text"
                                        value="00233"
                                        className="form-control"
                                        id="exampleInputZipcode"
                                      />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="no-btn-show">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputCity"
                                        className="form-label"
                                      >
                                        City
                                      </label>
                                      <input
                                        type="text"
                                        value="New York"
                                        className="form-control"
                                        id="exampleInputCity"
                                      />
                                    </div>
                                    <div className="mb-3 form-group">
                                      <label for="exampleFormControlSelect1">
                                        State
                                      </label>
                                      <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                      >
                                        <option>New York</option>
                                        <option>United State</option>
                                        <option>India</option>
                                        <option>Nepal</option>
                                      </select>
                                    </div>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputCountry"
                                        className="form-label"
                                      >
                                        Country
                                      </label>
                                      <input
                                        type="text"
                                        value="abc"
                                        className="form-control"
                                        id="exampleInputCountry"
                                      />
                                    </div>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="exampleInputZipcode"
                                        className="form-label"
                                      >
                                        ZIP Code
                                      </label>
                                      <input
                                        type="text"
                                        value="00033"
                                        className="form-control"
                                        id="exampleInputZipcode"
                                      />
                                    </div>
                                  </div>
                                )}
                                <div className="d-flex justify-content-between ms-0">
                                  <button
                                    className="button button-default same-btn delete ml-10"
                                    onClick={() => setFormEdit(!formedit)}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="button button-blue same-btn mr-10"
                                  >
                                    Save
                                  </button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <div className="ms-4">
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              JANZ Corp <br /> 9876543210 <br /> Address 1,
                              Address 2, City, State, Zip code
                            </label>
                            <br />
                            <button
                              type="button"
                              className="btn btn-primary px-4 mt-3"
                              onClick={deliverHereBtn}
                            >
                              Deliver Here
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="position-absolute"
                      style={{ right: "25px" }}
                    >
                      {editCancel ? (
                        <button
                          className="border-btn text-primary"
                          onClick={() => setEditCancel(!editCancel)}
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          className="border-btn text-primary"
                          onClick={() => setEditCancel(!editCancel)}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <div className="ms-4">
                      <label class="form-check-label" for="flexRadioDefault2">
                        JANZ Corp <br /> 9876543210 <br /> Address 1, Address 2,
                        City, State, Zip code
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* user insurance */}
              {profileStates.user_insurance === false && (
                <div>
                  <div className="card-shadow p-4 d-flex mb-4">
                    <div className="me-4">
                      <div
                        className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "#D9D9D9",
                        }}
                      >
                        <span>03</span>
                      </div>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0 text-secondary">
                        User Insurance
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {profileStates.user_insurance &&
                profileStatesCompleted.user_insurance === false && (
                  <div>
                    <div className="card-shadow p-4 mb-4">
                      <div className="d-flex pb-3">
                        <div className="me-4">
                          <div
                            className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                            style={{
                              width: "24px",
                              height: "24px",
                              background: "#D9D9D9",
                            }}
                          >
                            <span>03</span>
                          </div>
                        </div>
                        <div className="">
                          <p className="fw-bold p-0 m-0">User Profile</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 pb-2">
                        <label className="form-label fw-bold">
                          Choose your insurance
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Tricare</option>
                          <option value="1">Tricare</option>
                          <option value="2">Tricare</option>
                          <option value="3">Tricare</option>
                        </select>
                      </div>
                      <hr />
                      <div className="position-relative">
                        {editUserprofile ? (
                          <div>
                            <p>
                              <strong>Sponsor Name: </strong>{" "}
                              <span>Vineet</span>
                            </p>
                            <p>
                              <strong>Policy Number: </strong>{" "}
                              <span>98765</span>
                            </p>
                          </div>
                        ) : (
                          <div className="edit-form-box">
                            <div className="row">
                              <div className="col-md-6">
                                <Form>
                                  {["radio"].map((type) => (
                                    <div
                                      key={`inline-${type}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        inline
                                        label="Primary"
                                        name="primary"
                                        type={type}
                                        id={`inline-${type}-3`}
                                      />
                                    </div>
                                  ))}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputName"
                                      className="form-label"
                                    >
                                      Insurance Name
                                    </label>
                                    <select
                                      name="insurance"
                                      id="insurance"
                                      className="form-select"
                                    >
                                      <option defaultValue="Tricare">
                                        Tricare
                                      </option>
                                      <option defaultValue="Tricare">
                                        Tricare
                                      </option>
                                      <option defaultValue="Tricare">
                                        Tricare
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputAddress"
                                      className="form-label"
                                    >
                                      Date of Birth
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="01-18-1958"
                                      className="form-control"
                                      id="exampleInputAddress"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputId"
                                      className="form-label"
                                    >
                                      Subscriber ID
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="989-924-2016"
                                      className="form-control"
                                      id="exampleInputId"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputMedicalNumber"
                                      className="form-label"
                                    >
                                      Policy/Medical Number
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="989-924-2016"
                                      className="form-control"
                                      id="exampleInputMedicalNumber"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputAddress"
                                      className="form-label"
                                    >
                                      Group Number
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="9876543210"
                                      className="form-control"
                                      id="exampleInputAddress"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputAddress"
                                      className="form-label"
                                    >
                                      Sponsor First Name
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="Abc"
                                      className="form-control"
                                      id="exampleInputAddress"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputAddress"
                                      className="form-label"
                                    >
                                      Sponsor Last Name
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="Def"
                                      className="form-control"
                                      id="exampleInputAddress"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputAddress"
                                      className="form-label"
                                    >
                                      Sponsor SSN
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="00233"
                                      className="form-control"
                                      id="exampleInputAddress"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="exampleInputAddress"
                                      className="form-label"
                                    >
                                      Sponsor DBN
                                    </label>
                                    <input
                                      type="text"
                                      defaultValue="00233"
                                      className="form-control"
                                      id="exampleInputAddress"
                                    />
                                  </div>
                                  <div className="d-flex justify-content-between ms-0">
                                    <button
                                      className="button button-default same-btn delete ml-10"
                                      onClick={() =>
                                        setEditUserprofile(!editUserprofile)
                                      }
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="button"
                                      className="button button-blue same-btn mr-10"
                                    >
                                      Save
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        )}
                        <div
                          className="border-btn text-primary position-absolute"
                          style={{ right: "25px", top: 0 }}
                        >
                          {editUserprofile ? (
                            <button
                              className="border-btn text-primary"
                              onClick={() =>
                                setEditUserprofile(!editUserprofile)
                              }
                            >
                              Edit
                            </button>
                          ) : (
                            <button
                              className="border-btn text-primary"
                              onClick={() =>
                                setEditUserprofile(!editUserprofile)
                              }
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                        <div></div>
                      </div>
                      <hr />
                      <div>
                        <p className="fw-bold m-0">Upload ID:</p>
                        <p>
                          We would be needing your ID to process the insurance
                        </p>
                        <butto
                          type="button"
                          class="btn btn-primary px-3 mb-2"
                          data-bs-target="#exampleModalToggleUploadId"
                          data-bs-toggle="modal"
                        >
                          Upload ID
                        </butto>
                      </div>
                      <hr />
                      <div>
                        <p className="fw-bold m-0">Signature:</p>
                        <p>
                          Please upload/add your signature, so JANZ can submit
                          insurance claim form on your behalf
                        </p>
                        <butto type="button" class="btn btn-primary px-3 mb-2">
                          Upload signature
                        </butto>
                      </div>
                      <div className="or-line">
                        <strong>or</strong>
                      </div>
                      <div className="row">
                        <div className="col-md-8 col-sm-12">
                          <div className="border rounded-2">
                            <div
                              className="border-bottom signature-box p-2 d-flex justify-content-center"
                              style={{
                                minHeight: "120px",
                                maxHeight: "200px",
                              }}
                            >
                              <SignaturePad
                                className="sigCanvas"
                                ref={sigPad}
                                penColor="black"
                              />
                            </div>
                            <div className="py-3 d-flex justify-content-center">
                              <button
                                type="button"
                                className="btn btn-outline-secondary px-3 me-3"
                                onClick={clear}
                              >
                                Clear
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary px-3"
                                onClick={save}
                              >
                                use this signature
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 text-center text-md-end">
                          <button
                            type="button"
                            className="btn btn-primary my-3 px-4"
                            onClick={userInsuranceContinueButton}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {profileStatesCompleted.user_insurance && (
                <div className="card-shadow  p-4 d-flex align-items-center mb-4">
                  <div className="d-flex">
                    <div className="me-4">
                      <svg className="icon fs-24">
                        <use href="#icon_greencheck"></use>
                      </svg>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0"> User Insurance</p>
                      <span>Tricare, Vineet, 98765</span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <button
                      type="button"
                      className="btn btn-default btn-outline-secondary px-4"
                      onClick={userInsuranceChangeButton}
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}

              {/* payment  */}
              {profileStates.payment === false && (
                <div>
                  <div className="card-shadow p-4 d-flex mb-4">
                    <div className="me-4">
                      <div
                        className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "#D9D9D9",
                        }}
                      >
                        <span>04</span>
                      </div>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0 text-secondary">Payment</p>
                    </div>
                  </div>
                </div>
              )}

              {profileStates.payment &&
                profileStatesCompleted.payment === false && (
                  <div className="card-shadow p-4 mb-4">
                    <div className="d-flex pb-3">
                      <div className="me-4">
                        <div
                          className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                          style={{
                            width: "24px",
                            height: "24px",
                            background: "#D9D9D9",
                          }}
                        >
                          <span>04</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="fw-bold p-0 m-0">Payment</p>
                      </div>
                    </div>
                    <div className="row">
                      <p className="fs-18 fw-bold">
                        For insurance it is an authorization only
                      </p>
                      <div className="col-lg-6 col-sm-12">
                        <div className="card-shadow rounded-2 p-3 mb-4">
                          <p className="fw-bold">Add new card</p>
                          <hr />
                          <form>
                            <div className="row g-3">
                              <div className="col-auto">
                                <label
                                  Htmlfor="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Card number
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter your card number"
                                  className="form-control"
                                  pattern="[0-9]*"
                                  inputmode="numeric"
                                ></input>
                              </div>
                              <div className="col">
                                <label
                                  Htmlfor="exampleInputEmail1"
                                  class="form-label"
                                >
                                  CVV
                                </label>
                                <input
                                  type="number"
                                  placeholder="CVV"
                                  className="form-control"
                                ></input>
                              </div>
                              <div className="col-auto">
                                <label
                                  Htmlfor="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Holder name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter your name"
                                  className="form-control"
                                ></input>
                              </div>
                              <div className="col">
                                <label
                                  Htmlfor="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Expiry
                                </label>
                                <input
                                  type="number"
                                  placeholder="MM/YYYY"
                                  className="form-control"
                                ></input>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between pt-4 pb-2">
                              <button
                                type="button"
                                className="btn btn-outline-secondary px-4"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary px-4"
                              >
                                Add Card
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-12 text-center text-md-end">
                        <button
                          type="button"
                          className="btn btn-primary flex-lg-end px-5"
                          onClick={paymentContinueButton}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              {profileStatesCompleted.payment && (
                <div className="card-shadow  p-4 d-flex align-items-center mb-4">
                  <div className="d-flex">
                    <div className="me-4">
                      <svg className="icon fs-24">
                        <use href="#icon_greencheck"></use>
                      </svg>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0"> Payment</p>
                      <span>For insurance it is an authorization only</span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <button
                      type="button"
                      className="btn btn-default btn-outline-secondary px-4"
                      onClick={paymentChangeButton}
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}

              {/* Order summary */}
              {profileStates.order_summary === false && (
                <div>
                  <div className="card-shadow p-4 d-flex mb-4">
                    <div className="me-4">
                      <div
                        className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "#D9D9D9",
                        }}
                      >
                        <span>05</span>
                      </div>
                    </div>
                    <div className="">
                      <p className="fw-bold p-0 m-0 text-secondary">
                        Order Summary
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {profileStates.order_summary &&
                profileStatesCompleted.order_summary === false && (
                  <div className="card-shadow p-4 mb-4">
                    <div className="d-flex pb-3">
                      <div className="me-4">
                        <div
                          className="d-flex text-secondary rounded-pill justify-content-center align-items-center fs-10"
                          style={{
                            width: "24px",
                            height: "24px",
                            background: "#D9D9D9",
                          }}
                        >
                          <span>05</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="fw-bold p-0 m-0">Order Summary</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center text-md-end">
                        <button
                          type="button"
                          className="btn btn-primary flex-lg-end px-5"
                          onClick={SubmitContinueButton}
                        >
                          Submit Order
                        </button>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            <div className="col-md-4">
              <h5 className="fs-22 fw-bold py-4">Customer ID: 987654</h5>
              <div className="bg-light px-3 py-3 rounded-2">
                <p className="fw-bold">Pricing Summary</p>
                <hr />
                <p>Apply Discount Coupon</p>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control bg-light me-3 w-50"
                  />
                  <button
                    type="button"
                    className="btn btn-green px-4 w-50 d-flex align-items-center"
                  >
                    <svg className="icon fs-22 me-2">
                      <use href="#icon_checkcoupan"></use>
                    </svg>
                    Applied
                  </button>
                </div>
                <hr />
                <div className="d-flex pb-2">
                  <span>Subtotal (2 Items)</span>
                  <span className="ms-auto">$400.00</span>
                </div>
                <div className="d-flex pb-2">
                  <span>Delivery Fees</span>
                  <span className="ms-auto">$40.00</span>
                </div>
                <div className="d-flex text-green pb-2">
                  <span>Discount</span>
                  <span className="ms-auto">$40.00</span>
                </div>
                <div className="d-flex pb-2">
                  <span>Tax</span>
                  <span className="ms-auto">$40.00</span>
                </div>
                <div className="d-flex pb-2">
                  <span>Shipping Cost</span>
                  <span className="ms-auto">$20.00</span>
                </div>
                <hr />
                <div className="d-flex pb-2">
                  <span>Order Total</span>
                  <span className="ms-auto">$420.00</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggleUpload"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header pb-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4 className="text-center pb-3 fs-22">Upload Rx</h4>
              <div className="upload-box p-3">
                <label className="drag-box input-file">
                  <img src={uploader}></img>
                  <input
                    type="file"
                    accept="image/jpeg,application/pdf"
                    id="fileUpload2"
                    onChange={handleChangeFileFun}
                  />
                  <span>
                    Drag and drop your image or <a href="">browse file</a> on
                    your computer
                  </span>
                </label>
              </div>
              <div className="d-block rounded-2 p-1 my-2">
                {previewUrl ? (
                  <div
                    className="file-import d-flex ai-center mt-10"
                    id="remove_${inputid}"
                  >
                    <img
                      src={previewUrl}
                      style={{
                        width: "40px",
                        height: "30px",
                        margin: "5px",
                        marginRight: "10px",
                      }}
                      alt="doc"
                    />
                    <span style={{ marginRight: "auto" }}>{rawFile?.name}</span>
                    <label htmlFor="fileUpload2" className="mr-10">
                      <svg
                        className="icon"
                        style={{ width: "18px", height: "18px" }}
                      >
                        <use href="#icon_edit"></use>
                      </svg>
                    </label>
                    <button onClick={() => setpreviewUrl(null)}>
                      <svg
                        className="icon"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <use href="#icon_fileclose"></use>
                      </svg>
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-1">
                <label
                  htmlFor="fileUpload2"
                  className="button button-blue upload-btn w-100 py-2 fs-20"
                >
                  Upload
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggleUploadId"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-600 modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header pb-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4 className="text-center pb-3 fs-22">Upload ID</h4>
              <p className="text-center">
                You have to upload both Sides of your document
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12 pb-4">
                  <p className="fw-bold">Front Side</p>
                  <div className="upload-box position-relative p-4">
                    <label className="drag-box input-file p-3">
                      <Image width={40} height={30} src={uploader} alt="..." />
                      <input
                        type="file"
                        accept="image/*"
                        id="fileUpload1"
                        onChange={handleChangeFileFun}
                      />
                      <span>
                        Drag and drop your image or <a href="">browse file</a>{" "}
                        on your computer
                      </span>
                    </label>
                    {previewUrl ? (
                      <div
                        className="file-import full-view"
                        id="remove_${inputid}"
                      >
                        <img src={previewUrl} alt={rawFile?.name} />
                        <button onClick={() => setpreviewUrl(null)}>
                          <svg
                            className="icon"
                            style={{ width: "20px", height: "20px" }}
                          >
                            <use href="#icon_fileclose"></use>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 pb-4">
                  <p className="fw-bold">Back Side</p>
                  <div className="upload-box position-relative p-4">
                    <label className="drag-box input-file p-3">
                      <Image width={40} height={30} src={uploader} alt="..." />
                      <input
                        type="file"
                        accept="image/*"
                        id="fileUpload2"
                        onChange={handleChangeFileFunTwo}
                      />
                      <span>
                        Drag and drop your image or <a href="">browse file</a>{" "}
                        on your computer
                      </span>
                    </label>
                    {previewUrlTwo ? (
                      <div
                        className="file-import full-view"
                        id="remove_${inputid}"
                      >
                        <img src={previewUrlTwo} alt={rawFileTwo?.name} />
                        <button onClick={() => setpreviewUrlTwo(null)}>
                          <svg
                            className="icon"
                            style={{ width: "20px", height: "20px" }}
                          >
                            <use href="#icon_fileclose"></use>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <label
                  htmlFor="fileUpload2"
                  className="button button-blue upload-btn w-100 py-2 fs-20"
                >
                  Upload
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
