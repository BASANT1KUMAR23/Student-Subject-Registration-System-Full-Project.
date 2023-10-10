import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function AddUser() {
  let history = useHistory();

  const [user, setUser] = useState({
    session_year: "",
    semester: "",
    subject_name: "",
    faculty_name: "",
    subject_code: "",
    subject_credit: "",
    subject_type: "",
    basket: "",
  });

  const {
    session_year,
    semester,
    subject_name,
    faculty_name,
    subject_code,
    subject_credit,
    subject_type,
    basket,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    history.push("/info1");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Course Faculty</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="session_year" className="form-label">
                Session Year :
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Session Year"
                name="session_year"
                value={session_year}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="semester" className="form-label">
                Semester :{" "}
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Semester"
                name="semester"
                value={semester}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject_name" className="form-label">
                {" "}
                Subject Name :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Subject Name"
                name="subject_name"
                value={subject_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="faculty_name" className="form-label">
                {" "}
                Faculty Name :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Faculty Name"
                name="faculty_name"
                value={faculty_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject_code" className="form-label">
                {" "}
                Subject Code :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Subject Code"
                name="subject_code"
                value={subject_code}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject_credit" className="form-label">
                {" "}
                Subject Credit :
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Subject Credit"
                name="subject_credit"
                value={subject_credit}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject_type" className="form-label">
                {" "}
                Subject Type :
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Subject Type"
                name="subject_type"
                value={subject_type}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="basket" className="form-label">
                {" "}
                Basket :
              </label>

              <input
                type={"text"}
                className="form-control"
                placeholder="Basket"
                name="basket"
                value={basket}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
