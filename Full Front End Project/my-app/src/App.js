import React from "react";
import "./App.css";

import Dasshboard from "./Dashboard";
// import Contact from "./components/addfaculty/Contact";
import Home2 from "./components/AddSubject/ViewUser";
import Home4 from "./components/AddSubject/StudentReg";
import Home1 from "./components/subject/UpdateSyllabusComponent";
import Home5 from "./components/AddSubject/EditUser";
import info from "./components/info/Dashboard2";
//import Navbar from "./components/layout/Navbar1";
import Dasshboard1 from "./components/student/Navbar";
import Login from "./components/student/Login";
import Registration from "./components/student/Registration";
import Status from "./components/student/Status";
import LandingPage from "./components/student/LandingPage";
import Subregister from "./components/student/Subregister";
import Profile from "./components/student/Profile";
import Forget from "./components/student/Forget";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//addfaculty
import AddUser from "./components/add_faculty/users/AddUser";
import EditUser from "./components/add_faculty/users/EditUser";
import ViewUser from "./components/add_faculty/users/ViewUser";
import Contact from "./components/add_faculty/pages/Home";

// Add Student

import Student from "./components/Add_Student/pages/Home";
import AddUser2 from "./components/Add_Student/users/AddUser";
import EditUser2 from "./components/Add_Student/users/EditUser";
import ViewUser2 from "./components/Add_Student/users/ViewUser";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/" component={Navbar} /> */}
          <Route exact path="/jj" component={info} />
          <Route exact path="/Apply" component={Home1} />

          <Route exact path="/view" component={Home2} />
          <Route exact path="/form" component={Home4} />

          {/* <Route exact path="/info1" component={HomeUser} /> */}
          <Route exact path="/Edit" component={Home5} />
          <Route exact path="/about" component={Dasshboard} />
          <Route exact path="/contact" component={Dasshboard1} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Login" component={Login} />
          <Route path="/Status" component={Status} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/Subregister" component={Subregister} />
          <Route path="/Forgot" component={Forget} />
          <Route path="/Profile" component={Profile} />

          {/* <Route exact path="/" element={Home} /> */}
          {/* <Route exact path="/info" element={Navbar11} /> */}
          {/* <Route exact path="/adduser" element={AddUser} /> */}
          <Route exact path="/info1" component={Contact} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/edituser/:id" component={EditUser} />
          <Route exact path="/viewuser/:id" component={ViewUser} />

          {/* Add Student */}

          <Route exact path="/student" component={Student} />
          <Route exact path="/addstudent" component={AddUser2} />
          <Route exact path="/edituser/:id" component={EditUser2} />
          <Route exact path="/viewuser/:id" component={ViewUser2} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
