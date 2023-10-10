import React from "react";
import "../student/Reg.css";
// import { ReactPropTypes } from "prop-types";
import { Link } from "react-router-dom";
export default function Registration(props) {
  return (
    <>
      <section className="vh-120 gradient-custom">
        <div className="container py-5 h-70">
          <div className="row justify-content-center align-items-center h-70">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                id="border-radius: 15px;"
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign up</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label for="birthdayDate" className="form-label">
                            DOB
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-1">
                      Upload your image <span className="font-css top">*</span>
                      <div className="">
                        <input type="file" id="file-input" name="ImageStyle" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <select className="select form-control-lg">
                          <option value="1" disabled>
                            Choose Branch
                          </option>
                          <option value="2">CSE</option>
                          <option value="3">ECE </option>
                          <option value="4">MECH </option>
                          <option value="4">CIVIL </option>
                          <option value="4">EEE </option>
                        </select>
                        <label className="form-label select-label">
                          Choose Branch
                        </label>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="col-0">
                        <select className="select form-control-lg">
                          <option value="1" disabled>
                            Choose Semester
                          </option>
                          <option value="2">Semester 1</option>
                          <option value="3">Semester 2</option>
                          <option value="4">Semester 3</option>
                          <option value="4">Semester 4</option>
                          <option value="4">Semester 5</option>
                          <option value="4">Semester 6</option>
                          <option value="4">Semester 7</option>
                          <option value="4">Semester 8</option>
                        </select>
                        <label className="form-label select-label">
                          Choose Semester
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 p/link>t-2">
                      <Link to="/Login">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="Submit"
                        />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
