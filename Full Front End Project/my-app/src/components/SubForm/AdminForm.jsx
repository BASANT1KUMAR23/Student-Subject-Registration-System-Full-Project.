import axios from "axios";
import React, {useState } from "react";

const AdminForm = () => {
  const [data, setData] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [stateval, setStateVal] = useState("");

  const API_URL = "http://localhost:8080/api/admin/addAdmin";

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(
      firstname,
      middlename,
      lastname,
      username,
      address,
      phone,
      password,
      email,
      dob,
      gender,
      country,
      stateval
    );
  };

  const addData = (
    firstname,
    middlename,
    lastname,
    username,
    address,
    phone,
    password,
    email,
    dob,
    gender,
    country,
    stateval
  ) => {
    axios
      .post(API_URL, {
        firstName: firstname,
        middleName: middlename,
        lastName: lastname,
        userName: username,
        address: address,
        phone: phone,
        password: password,
        emailId: email,
        DOB: dob,
        gender: gender,
        country: country,
        state: stateval,
      })
      .then((response) => {
        setData([response.data, ...data]);
      });
    setFirstname("");
    setMiddlename("");
    setLastname("");
    setUsername("");
    setAddress("");
    setPhone("");
    setPassword("");
    setEmail("");
    setDob("");
    setGender("");
    setCountry("");
    setStateVal("");
  };

  return (
    <div className="container px-5 mt-5 text-dark bg-gradient shadow-lg rounded rounded-2 my-5">
      <div className="col mt-5 pt-4 ">
        <div className="row">
          <h1>
            Admin Registration
            <hr />
          </h1>
        </div>
      </div>
      <form>
        <div className="row row-cols-1 row-cols-md-4 g-4 py-4">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name: 
              </label>
              <input
                type="text"
                name="firstName"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className="form-control"
                id="firstName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name: 
              </label>
              <input
                type="text"
                name="middleName"
                onChange={(e) => {
                  setMiddlename(e.target.value);
                }}
                className="form-control"
                id="middleName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name: 
              </label>
              <input
                type="text"
                name="lastName"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className="form-control"
                id="lastName"
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address: 
              </label>
              <input
                type="text"
                name="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="form-control"
                id="address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone: 
              </label>
              <input
                type="number"
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="form-control"
                id="phone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password: 
              </label>
              <input
                type="text"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                id="password"
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username: 
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="form-control"
                id="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Id: 
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth: 
              </label>
              <input
                type="date"
                name="DOB"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                className="form-control"
                id="dob"
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Gender: 
              </label>
              <div className="d-flex mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="male"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male: 
                  </label>
                </div>
                <div className="form-check mx-3 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="female"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female: 
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country: 
              </label>
              <input
                type="text"
                name="country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                className="form-control"
                id="country"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State: 
              </label>
              <input
                type="text"
                name="state"
                onChange={(e) => {
                  setStateVal(e.target.value);
                }}
                className="form-control"
                id="state"
              />
            </div>
          </div>
        </div>
        <div className="col pb-4">
          {" "}
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-outline-secondary"
          >
            Submit
          </button>
          <button type="reset" className="btn btn-outline-danger mx-4 my-2">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
