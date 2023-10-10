import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
// import Header from "./components/pages/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";
import "./home.css";
// import { Form } from "react-bootstrap";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <h4 style={{ color: "yellow" }}>CUTM</h4>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  <h4>Home</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  <h4>Admin</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  <h4>Student</h4>
                </NavLink>
              </li>
            </ul>
          </div>

          <Link className="btn btn-outline-light" to="/users/add">
            Login
          </Link>

          <Link className="btn btn-outline-light" to="/users/add">
            LogOut
          </Link>
        </div>
      </nav>
      <div className="homebody">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="images123"
              src="https://cutm.ac.in/wp-content/uploads/school-slider/PKD/3.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="card169">
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="images123"
              src="https://convocation.cutm.ac.in/images/gallery/_DSC0305.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="images123"
              src="https://th.bing.com/th/id/R.8d5f0e7521a2f55702d871a4e85c69eb?rik=FM92POdzUKEe9Q&riu=http%3a%2f%2fwww.srms.ac.in%2fparamedical%2fwp-content%2fuploads%2f2018%2f05%2flibrary.jpg&ehk=sV8xaUElLvvVrKTWEdV9jPQI%2fIl2Yv59l0QGLouGvdc%3d&risl=&pid=ImgRaw&r=0"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="images123"
              src="https://convocation.cutm.ac.in/images/gallery/DSC_6203.JPG"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="images123"
              src="https://cutm.ac.in/wp-content/uploads/school-slider/BBSR/2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="images123"
              src="https://www.wecuk.com/wp-content/uploads/2021/02/Reviewing-models-and-plans-on-screen-1600px550px.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="images123"
              src="https://www.jvb.co.in/wp-content/uploads/2020/07/Fixed-Asset-Mgt-1..jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="title127">Student Subject Registration</h3>
              <p className="font123">
                Centurion University of Technology and Management, Odisha,
                Paralakhemudi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Header /> */}
        </Carousel>

        <div className="border12">
          <span className="spane123">
            Centurion University of Technology and Management, Odisha,
            Paralakhemudi
          </span>
        </div>

        <div className="animation12" data-aos="fade-right">
          <ul>
            <li className="list23">
              <img
                className="imge1223"
                src="https://png.pngtree.com/png-clipart/20220510/original/pngtree-3d-location-icon-design-symbol-png-transparent-background-png-image_7692906.png"
              />
            </li>
            <li className="list24">
              <h3 style={{ color: "yellow" }}>PARALAKHEMUNDI</h3>
              <p>
                Village Alluri Nagar, R Sitapur, Via- Uppalada, Paralakhemundi,
              </p>
            </li>
          </ul>
        </div>

        <div className="animation13" data-aos="fade-left">
          <ul>
            <li className="list23">
              <img
                className="imge1223"
                src="https://png.pngtree.com/png-clipart/20220510/original/pngtree-3d-location-icon-design-symbol-png-transparent-background-png-image_7692906.png"
              />
            </li>
            <li className="list24">
              <h3 style={{ color: "yellow" }}>BHUBANESWAR</h3>
              <p>Ramchandrapur, Jatni, Bhubaneswar Dist, Khurda Odisha,</p>
            </li>
          </ul>
        </div>

        <div className="animation14" data-aos="flip-right">
          <ul>
            <li className="list23">
              <img
                className="imge1223"
                src="https://png.pngtree.com/png-clipart/20220510/original/pngtree-3d-location-icon-design-symbol-png-transparent-background-png-image_7692906.png"
              />
            </li>
            <li className="list24">
              <h3 style={{ color: "yellow" }}>BALANGIR</h3>
              <p>
                Behind BSNL Office, IDCO Land, Rajib Nagar, Balangir, Odisha .
              </p>
            </li>
          </ul>
        </div>

        <div className="animation15" data-aos="zoom-in">
          <ul>
            <li className="list23">
              <img
                className="imge1223"
                src="https://png.pngtree.com/png-clipart/20220510/original/pngtree-3d-location-icon-design-symbol-png-transparent-background-png-image_7692906.png"
              />
            </li>
            <li className="list24">
              <h3 style={{ color: "yellow" }}>RAYAGADA</h3>
              <p>IDCO Industrial Area, Pitamahal, Rayagada, Odisha.</p>
            </li>
          </ul>
        </div>

        <div className="footer">
          <h2
            style={{
              color: "yellow",
              textAlign: "center",
            }}
          >
            Student Subject Registration
          </h2>
          <h4 className="title190">
            Centurion University of Technology and Management, Odisha,
            Paralakhemudi
          </h4>
          <br />

          <ul className="ullist">
            <th className="first2">Model</th>
            <li className="first">Admin</li>
            <li className="first">Student</li>
          </ul>

          <ul className="ullist12">
            <th className="first2">Group</th>
            <li className="first">Mantu Singh</li>
            <li className="first">Om Prakash kumar</li>
            <li className="first">MD Aadilhussain Khan</li>
            <li className="first">Basant Kumar</li>
            <li className="first">Rajeev Baitha</li>
            <li className="first">Rahul Yadov</li>
            <li className="first">MD Dilshad Ali</li>
            <li className="first">MD Asif Raza</li>
            <li className="first">MD Arman Ali</li>
          </ul>
          <ul className="ullist123">
            <li className="first2">http://www.cutm.ac.in</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
