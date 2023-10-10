import React from "react"
import Login from "./NavBar"
import Dashboard from "./Dashboard"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Signup() {
    return (
        <Router>
        <div>
            <Login />
            <Route path="/dashboard" component={Dashboard} />
        </div>
        </Router>
        )
}

export default Signup