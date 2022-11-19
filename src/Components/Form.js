import React, { useState } from "react";
import Address from "./Address";
import Personal from "./Personal";
import Personalinfo from "./Personalinfo";
import Signup from "./Signup";
import "./Style.css";

function Form() {
  const [page, setPage] = useState(0);

  const formHeading = [
    "Contact details",
    "Personal details",
    "Some more Personal info",
    "Other info",
  ];

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    dOb: "",
    fatherName: "",
    gender: "",
    stAte: "",
    city: "",
    pinCode: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Signup formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Personalinfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Address formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 offset-lg-3 offset-md-2">
            <div className="container">
              <div class="progress mb-5">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{
                    width:
                      page === 0
                        ? "25%"
                        : page === 1
                        ? "50%"
                        : page === 2
                        ? "75%"
                        : "100%",
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="container form-body">
              {/* <div className="header"> */}
              <h1 className="text-center">{formHeading[page]}</h1>
              {/* </div> */}
              {/* <div className="body"> */}
              {PageDisplay()}
              {/* </div> */}

              <div class="row">
                <div class="col-lg-12">
                  <button
                    type="submit"
                    disabled={page === 0}
                    onClick={() => {
                      setPage((curPage) => curPage - 1);
                    }}
                    class="btn btn-primary px-3 mt-3 fs-5 me-2"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    // disabled={page === formHeading.length - 1}

                    onClick={() => {
                      if (page === formHeading.length - 1) {
                        alert("Form Submited");
                      } else {
                        setPage((curPage) => curPage + 1);
                      }
                    }}
                    class="btn btn-primary px-3 mt-3 fs-5 ms-2"
                  >
                    {page === formHeading.length - 1 ? "Submit" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
