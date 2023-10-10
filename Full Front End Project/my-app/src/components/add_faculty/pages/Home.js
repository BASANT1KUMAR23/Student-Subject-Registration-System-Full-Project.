import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./home.css";
export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Add Course Faculty
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/adduser">
            Add Faculty
          </Link>
        </div>
      </nav>
      <div className="container10">
        <div className="box107">
          <table className="table103">
            <thead className="header107">
              <tr className="box51">
                <th scope="col">Id</th>
                <th scope="col">Session</th>
                <th scope="col">Semester</th>
                <th scope="col">Subject Name</th>
                <th scope="col">Faculty Name</th>
                <th scope="col">Subject Code</th>
                <th scope="col">Subject Credit</th>
                <th scope="col">Subject Type</th>
                <th scope="col">Basket</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.session_year}</td>
                  <td>{user.semester}</td>
                  <td>{user.subject_name}</td>
                  <td>{user.faculty_name}</td>
                  <td>{user.subject_code}</td>
                  <td>{user.subject_credit}</td>
                  <td>{user.subject_type}</td>
                  <td>{user.basket}</td>

                  <td>
                    <Link
                      className="btn btn-primary mx-15"
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-15"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-15"
                      onClick={() => deleteUser(user.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
