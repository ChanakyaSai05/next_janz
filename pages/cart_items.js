import React, { useEffect, useState } from "react";
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
const inter = Inter({ subsets: ["latin"] });
import cartImg2 from "../public/images/card-img2.svg";
import airMini from "../public/images/air-mini.svg";
import uploader from "../public/images/uploader.svg";
import { useRouter } from "next/router";

export default function Cart() {
  const [num, setNum] = useState(1);
  const [rawFile, setrawFile] = useState(null);
  const [previewUrl, setpreviewUrl] = useState(null);
  const router = useRouter();
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

  const handleChangeFileFun = (e) => {
    let file = e.target.files[0];
    setrawFile(file);
  };
  // console.log(rawFile, "RAW");
  // console.log(previewUrl, "PREVIEW");

  useEffect(() => {
    if (!rawFile) {
      setpreviewUrl(null);
      return;
    }
    const objectURL = URL.createObjectURL(rawFile);
    setpreviewUrl(objectURL);
  }, [rawFile]);

  return (
    <>
      <Headerlanding></Headerlanding>
      <div className="">
        <Container>
          <div className="row">
            <div className="col-md-8">
              <h5 className="fs-22 fw-bold py-4">Shopping Cart</h5>
              <div className="rounded-2 shadow">
                <Table className="table-cartitems">
                  <colgroup>
                    <col width="60%" />
                    <col />
                  </colgroup>
                  <thead className="">
                    <tr className="px-3">
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <div
                            className="card mb-3 px-2"
                            style={{ maxWidth: "540px" }}
                          >
                            <div className="g-0 d-flex">
                              <div
                                className=""
                                style={{ maxWidth: "140px", minWidth: "140px" }}
                              >
                                <Image
                                  className="img-fluid rounded-start"
                                  width={150}
                                  height={150}
                                  src={cartImg2}
                                  alt="..."
                                />
                              </div>
                              <div className="ms-3">
                                <div className="">
                                  <h5 className="card-title">
                                    Spectra S1 Plus Electric Breast Pump Dual
                                    Voltage
                                  </h5>
                                  <p>SKU: M567</p>
                                  <p>Color: White</p>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                              <span className="text-danger fw-bold">
                                Missing RX
                              </span>
                              <div>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Upload My RX Now</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-bs-target="#exampleModalToggleUpload"
                                  data-bs-toggle="modal"
                                >
                                  Upload Rx
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>Covered with Insurance</td>
                      <td>
                        <div className="d-inline-flex shadow-allside mb-3">
                          <button
                            className="btn p-0 bg-grey rounded-0 mmwh-28"
                            type="button"
                            onClick={decNum}
                            title="Minus"
                          >
                            <svg className="icon">
                              <use href="#icon_dash"></use>
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="form-control rounded-0 mmw-36px p-0 text-center border-0"
                            aria-label=""
                            value={num}
                            onChange={handleChange}
                          />
                          <button
                            className="btn p-0 bg-grey rounded-0 mmwh-28"
                            type="button"
                            id="button-addon2"
                            onClick={incNum}
                            title="Plus"
                          >
                            <svg className="icon">
                              <use href="#icon_plus"></use>
                            </svg>
                          </button>
                        </div>
                        <span className="text-primary fs-12 d-block">
                          Remove item
                        </span>
                      </td>
                      <td>$0.00</td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr className="px-3">
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom"></tr>
                    <tr>
                      <td>
                        <div>
                          <div
                            className="card mb-3 px-2"
                            style={{ maxWidth: "540px" }}
                          >
                            <div className="g-0 d-flex">
                              <div
                                className=""
                                style={{ maxWidth: "140px", minWidth: "140px" }}
                              >
                                <Image
                                  className="img-fluid rounded-start"
                                  width={150}
                                  height={150}
                                  src={airMini}
                                  alt="..."
                                />
                              </div>
                              <div className="ms-3">
                                <div className="">
                                  <h5 className="card-title">
                                    AirMini Autoset with Mask
                                  </h5>
                                  <p>SKU: M567</p>
                                  <p>Color: White</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>60% Covered with Insurance</td>
                      <td>
                        <div className="d-inline-flex shadow-allside mb-3">
                          <button
                            className="btn p-0 bg-grey rounded-0 mmwh-28"
                            type="button"
                            title="Minus"
                          >
                            <svg className="icon">
                              <use href="#icon_dash"></use>
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="form-control rounded-0 mmw-36px p-0 text-center border-0"
                            aria-label=""
                          />
                          <button
                            className="btn p-0 bg-grey rounded-0 mmwh-28"
                            type="button"
                            id="button-addon2"
                            title="Plus"
                          >
                            <svg className="icon">
                              <use href="#icon_plus"></use>
                            </svg>
                          </button>
                        </div>
                        <span className="text-primary fs-12 d-block">
                          Remove item
                        </span>
                      </td>
                      <td>$400.00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
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
                <hr />
                <div className="d-flex pb-2">
                  <span>Order Total</span>
                  <span className="ms-auto">$400.00</span>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary w-100 my-4"
                onClick={() => router.push("/checkout")}
              >
                PROCEED TO CHECKOUT
              </button>
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
                  {/* <img src={uploader}></img> */}
                  <Image
                    className="img-fluid rounded-start"
                    width={80}
                    height={55}
                    src={uploader}
                    alt="..."
                  />
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
    </>
  );
}
