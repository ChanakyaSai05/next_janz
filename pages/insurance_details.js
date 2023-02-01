import { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import Header from "../components/header";
import Asidebar from "../components/asidebar";
import Form from "react-bootstrap/Form";

export default function Insurancedetails() {
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
      <div className="wrapper">
        <div className="row">
          <div className="col text-center py-4">
            <h2>Insurance Details</h2>
          </div>
        </div>
        <div className="w-100 py-4">
          <button
            typeof="button"
            className="button button-blue w-100 p-3 fs-20"
          >
            <span className="plus-icon">
              <svg className="icon">
                <use href="#icon_btnadd"></use>
              </svg>
            </span>
            Add New Address
          </button>
        </div>

        {editform && (
          <div className="edit-form-box">
            <h6 className="mb-3">Edit Insurance</h6>
            <div className="row">
              <div className="col-md-6">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Insurance Name
                    </label>
                    <select
                      name="insurance"
                      id="insurance"
                      className="form-select"
                    >
                      <option value="Tricare">Tricare</option>
                      <option value="Tricare">Tricare</option>
                      <option value="Tricare">Tricare</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      value="01-18-1958"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputId" className="form-label">
                      Subscriber ID
                    </label>
                    <input
                      type="text"
                      value="989-924-2016"
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
                      value="989-924-2016"
                      className="form-control"
                      id="exampleInputMedicalNumber"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Group Number
                    </label>
                    <input
                      type="text"
                      value="9876543210"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Sponsor First Name
                    </label>
                    <input
                      type="text"
                      value="Abc"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Sponsor Last Name
                    </label>
                    <input
                      type="text"
                      value="Def"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Sponsor SSN
                    </label>
                    <input
                      type="text"
                      value="00233"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">
                      Sponsor DBN
                    </label>
                    <input
                      type="text"
                      value="00233"
                      className="form-control"
                      id="exampleInputAddress"
                    />
                  </div>
                  <div className="d-flex justify-content-between ms-0">
                    <button
                      className="button button-default same-btn delete ml-10"
                      onClick={() => setEditForm(!editform)}
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

        <div className="row">
          <div className="col-md-12 pb-4">
            <div className="address-tbl1 card border-0">
              <div className="card-body pt-0">
                {
                  <Table responsive>
                    <colgroup>
                      <col width="35%" />
                      <col />
                      <col width="56" />
                    </colgroup>
                    <tbody>
                      {table.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <a style={{ textDecorationLine: "underline" }}>
                              Tricare
                            </a>
                            <br />
                            <span>Sponsor Name</span>
                          </td>
                          <td>Policy Number</td>
                          <td>
                            <Dropdown className="dots-dropdown">
                              <Dropdown.Toggle as="button" className="btn">
                                <svg className="icon">
                                  <use href="#icon_threedot"></use>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="shadow mmw-96px dropdown-menu-end">
                                <Dropdown.Item
                                  as="button"
                                  className="border-bottom"
                                  onClick={() => editForm(item)}
                                >
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  as="button"
                                  onClick={handleClickOpen}
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                }
              </div>
            </div>
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
