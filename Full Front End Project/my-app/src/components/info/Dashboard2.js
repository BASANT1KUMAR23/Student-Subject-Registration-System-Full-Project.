import React from "react";

import "./Dash2.css";

import { Link } from "react-router-dom";

function Dashboard2() {
  return (
    <div className="body123">
      <h1>Collage information</h1>
      <table className="table">
        <tr>
          <th>
            <div className="row-table1">
              <div className="in-table">
                <Link to="/student">
                  <img
                    src="https://www.sas.com/content/dam/SAS/en_us/image/sas-com/icons/navmenu/students-icon.png/_jcr_content/renditions/original"
                    alt=""
                  />
                </Link>
              </div>
              Add Student
            </div>
            <br />
            <div className="row-table1">
              <div className="in-table">
                <img
                  src="https://th.bing.com/th/id/OIP.75FQLmD7FG2bD1QbzVu3LwHaHa?pid=ImgDet&w=580&h=580&rs=1"
                  alt=""
                />
              </div>
              Certificates
            </div>
            <br />
            <div className="row-table1">
              <div className="in-table">
                <img
                  src="https://cdn.dribbble.com/users/147052/screenshots/1073846/calendar.jpg"
                  alt=""
                />
              </div>
              Calendar
            </div>
          </th>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <th>
            <div className="row-table2">
              <div className="in-table">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/013/252/718/non_2x/celebration-decoration-easter-egg-holiday-abstract-circle-background-flat-color-icon-free-vector.jpg"
                  alt=""
                />
              </div>
              Departments
            </div>
            <br />

            <div className="row-table1">
              <div className="in-table">
                <img
                  src="https://w7.pngwing.com/pngs/862/125/png-transparent-computer-icons-course-teacher-education-school-cisco.png"
                  alt=""
                />
              </div>
              Rooms
            </div>
          </th>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <th>
            <div className="row-table2">
              <div className="in-table">
                <Link to="/form">
                  <img
                    src="https://clipground.com/images/subject-png-1.png"
                    alt=""
                  />
                </Link>
              </div>
              Registration
            </div>
            <br />
            <div className="row-table1">
              <div className="in-table">
                {/* <Link to="/form2"> */}
                <img
                  src="https://cdn1.iconfinder.com/data/icons/business-and-finance-1-blue-tone/100/business_finance_working_man_businessman-1024.png"
                  alt=""
                />
                {/* </Link> */}
              </div>
              Programme
            </div>
          </th>
        </tr>
      </table>
    </div>
  );
}

export default Dashboard2;
