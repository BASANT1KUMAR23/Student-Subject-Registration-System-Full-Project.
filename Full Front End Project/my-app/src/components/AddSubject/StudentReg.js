import React from "react";
import "./style.css";
function StudentReg() {
  return (
    <div>
      <form className="body" action="subregister" method="post">
        <div className="title123">
          <h2>Subject Registration Form: </h2>
        </div>
        <div className="name163">
          <h3>Student details*:</h3>
        </div>
        <br />
        <br />
        <br />
        <br />
        <table id="table">
          <tbody>
            <tr>
              <td>Class Name: </td>
              <td>
                <input
                  id="box"
                  type="text"
                  name="classname"
                  placeholder="Enter Class Name"
                />
              </td>
              <td>Student Name: </td>
              <td>
                <input
                  id="box"
                  type="text"
                  name="stdname"
                  placeholder="Enter student name"
                />
              </td>
              <td>RegNo.: </td>
              <td>
                <input
                  id="box"
                  type="reg no."
                  name="regno"
                  placeholder="Enter Reg No."
                />
              </td>
            </tr>
            <tr>
              <td>Academic Year: </td>
              <td>
                <select id="box" name="Academic year">
                  <option value={-1} selected>
                    select..
                  </option>
                  <option value="year">2023-2024</option>
                  <option value="year">2022-2023</option>
                  <option value="year">2021-2022</option>
                  <option value="year">2020-2021</option>
                </select>
              </td>
              <td>Semester: </td>
              <td>
                <select id="box" name="semester">
                  <option value={-1} selected>
                    select..
                  </option>
                  <option value="sem"> Sem 1</option>
                  <option value="sem"> Sem 2</option>
                  <option value="sem"> Sem 3</option>
                  <option value="sem"> Sem 4</option>
                  <option value="sem"> Sem 5</option>
                  <option value="sem"> Sem 6</option>
                  <option value="sem"> Sem 7</option>
                  <option value="sem"> Sem 8</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Program: </td>
              <td>
                <select id="box" name="program">
                  <option value={-1} selected>
                    select..
                  </option>
                  <option value="cse">B.Tech CSE</option>
                  <option value="civil">B.Tech Civil</option>
                  <option value="ece">B.Tech ECE</option>
                  <option value="eee">B.Tech EEE</option>
                  <option value="diploma">Diploma Civil</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Subject details*:</h3>
              </td>
            </tr>
            <tr>
              <td>Subject Name: </td>
              <td>
                <input
                  id="box"
                  type="text"
                  name="subname"
                  placeholder="Enter Sub Name"
                />
              </td>
              <td>Course Credit: </td>
              <td>
                <input
                  id="box"
                  type="text"
                  name="credit"
                  placeholder="Enter credit No"
                />
              </td>
            </tr>
            <tr>
              <td>Basket Name: </td>
              <td>
                <select id="box" name="basket">
                  <option value={-1} selected>
                    select..
                  </option>
                  <option value="sem"> Basket-I</option>
                  <option value="sem"> Basket-II</option>
                  <option value="sem"> Basket-III</option>
                  <option value="sem"> Basket-IV</option>
                  <option value="sem"> Basket-V</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input id="botton" type="submit" Value="Cencle" />
              </td>
              <td>
                <input id="button" type="submit" Value="Register" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default StudentReg;
