import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./home1.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8082/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container10">
      <Link className="btn btn-outline-primary " to="/addstudent">
        Add Student
      </Link>
      <div className="box107">
        <table className="table104">
          <thead className="header107">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Student Name</th>
              <th scope="col">Registration Number</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
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
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
