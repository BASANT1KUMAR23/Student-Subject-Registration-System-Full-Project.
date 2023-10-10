import React from "react";
import "./Css/Style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <div>
        <h1 style={{ margin: "80px", color: "blue" }}>
          {" "}
          Welcome to Admin Dashboard
        </h1>
      </div>
      <div className="flex">
        <Card className="card1" style={{ width: "18rem" }}>
          <Card.Img src="https://clipground.com/images/subject-png-1.png" />

          <Card.Body>
            <Button variant="primary">
              <Link className="regis" to="/jj">
                Collage Info
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <Card className="card2" style={{ width: "18rem" }}>
          <Card.Img src="https://www.qcpp.com/__data/assets/image/0025/85174/qcpp-portal-image-3.png" />
          <Card.Body>
            <Button variant="primary">
              <Link className="regis" to="/info1">
                Add Faculty
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <Card className="card3" style={{ width: "18rem" }}>
          <Card.Img src="https://s3.amazonaws.com/higherlogicdownload/INCLUDESNETWORK/UploadedImages/L68gFePjTniK0NOPMjns_resources_icon%202-M.jpg" />
          <Card.Body>
            <Button variant="primary">
              <Link className="regis" to="/view">
                View
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
