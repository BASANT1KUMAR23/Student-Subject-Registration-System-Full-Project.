import React, { Component } from "react";
// import "./Css/style.css";
export class Course extends Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <img src="/R.png" alt="" />
          <div className="top-bar">
            <h2>Add Course Faculty</h2>

            <form className="card-main" action=" app">
              <div className="title">
                <h3 className="h1">Faculty details*:</h3>
              </div>
              <div>
                Session Year:{" "}
                <select className="box1" name="Academic year">
                  <option value={-1} selected>
                    -- select Years --
                  </option>
                  <option value="year">2023-2024</option>
                  <option value="year">2022-2023</option>
                  <option value="year">2021-2022</option>
                  <option value="year">2020-2021</option>
                </select>{" "}
                &nbsp;&nbsp; Semester:{" "}
                <select className="box1" name="semester">
                  <option value={-1} selected>
                    -- Select Class --
                  </option>
                  <option value="sem">B.Tech CSE Sem 1</option>
                  <option value="sem">B.Tech CSE Sem 2</option>
                  <option value="sem">B.Tech CSE Sem 3</option>
                  <option value="sem">B.Tech CSE Sem 4</option>
                  <option value="sem">B.Tech CSE Sem 5</option>
                  <option value="sem">B.Tech CSE Sem 6</option>
                  <option value="sem">B.Tech CSE Sem 7</option>
                  <option value="sem">B.Tech CSE Sem 8</option>
                </select>{" "}
                &nbsp;&nbsp; Practical Types:{" "}
                <select className="box1" name="program">
                  <option value={-1} selected>
                    -- Select Subject --
                  </option>
                  <option value="cse">All</option>
                  <option value="civil">Theory</option>
                  <option value="ece">Practical</option>
                  <option value="eee">Tutorial</option>
                </select>
                <br />
                <br />
                Faculty Name:{" "}
                <input
                  className="box1"
                  type="text"
                  name="facname"
                  placeholder="Enter Faculty Name"
                />
                &nbsp;&nbsp;
              </div>
              <br></br>
              <div>
                <h3>Subject details*:</h3>
              </div>

              <tr>
                <td>
                  Subject Name:
                  <input
                    className="box1"
                    type="text"
                    name="subjname"
                    placeholder="Enter Subject name"
                  />
                  &nbsp;&nbsp; Course Code:{" "}
                  <input
                    className="box1"
                    type="code"
                    name="code"
                    placeholder="Enter course Code"
                  />
                  <br />
                  <br />
                  Subject Credit:{" "}
                  <input
                    className="box1"
                    type="credit"
                    name="credit"
                    placeholder="Enter Sub credit"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input className="button" type="submit" Value="Add Faculty" />
                  <input className="botton" type="submit" Value="Cencle" />
                  &nbsp;&nbsp;
                </td>
              </tr>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
