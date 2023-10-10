import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddUser() {
  //let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    //navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Add Subject </h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                {" "}
                Branch{" "}
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your branch"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Session Year
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your session"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Semester" className="form-label">
                {" "}
                Semester
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your semester"
                name="semester"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                {" "}
                Subject Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your subject Name"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Subject Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your subject Code"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                {" "}
                Subject Type{" "}
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your subject Type "
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                {" "}
                Basket{" "}
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your basket "
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <Link className="btn btn-outline-primary mx-2" to="/">
              Add Subject
            </Link>
            <Link className="btn btn-outline-danger mx-2" to="/">
              {" "}
              Cancel{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
