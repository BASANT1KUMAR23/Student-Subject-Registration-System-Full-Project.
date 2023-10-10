import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./viewuser.css";
export default function ViewUser() {
  const [user, setUser] = useState({
    id: "",
    session_year: "",
    semester: "",
    subject_name: "",
    faculty_name: "",
    subject_code: "",
    subject_credit: "",
    subject_type: "",
    basket: "",
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
    <div className="container100">
      {/* <h2 className="text-center m-4"></h2> */}

      <div className="row107">
        <div className="box000">
          {/* Details of user id : {user.id} */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b> id : </b>
              {user.id}
            </li>
            <li className="list-group-item">
              <b> Session </b>
              {user.session_year}
            </li>
            <li className="list-group-item">
              <b> semester: </b>
              {user.semester}
            </li>
            <li className="list-group-item">
              <b> subject_name: </b>
              {user.subject_name}
            </li>
            <li className="list-group-item">
              <b> faculty_name: </b>
              {user.faculty_name}
            </li>
            <li className="list-group-item">
              <b> subject_code: </b>
              {user.subject_code}
            </li>
            <li className="list-group-item">
              <b> subject_credit: </b>
              {user.subject_credit}
            </li>
            <li className="list-group-item">
              <b> subject_type: </b>
              {user.subject_type}
            </li>
            <li className="list-group-item">
              <b> basket: </b>
              {user.basket}
            </li>
          </ul>
        </div>
      </div>
      <Link className="btn btn-primary my-2" to={"/info"}>
        Back to Home
      </Link>
    </div>
  );
}
