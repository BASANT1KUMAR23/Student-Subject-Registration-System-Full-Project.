import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ViewUser.css";
export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container125">
      <div className="card125">
        <h2>User Details</h2>
        <div className="card126">
          <div className="card134">
            Details of user id : {user.id}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name:</b>
                {user.name}
              </li>
              <li className="list-group-item">
                <b>UserName:</b>
                {user.username}
              </li>
              <li className="list-group-item">
                <b>Email:</b>
                {user.email}
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>
          Back to Home{" "}
        </Link>{" "}
        <br />
        <Link className="btn btn-primary my-1" to={"/Edit"}>
          Edit
        </Link>
      </div>
    </div>
  );
}
