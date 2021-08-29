import "./style.css";
import React from "react";


const Header = () => {
  return (
    <header data-component="Header">
      

      <div className="container p-5 ps-0 pe-0" data-component="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container ps-0 pe-0">
            <a href="" style={{ color: "white", textDecoration: "none" }}>
              <h2
                className="mb-0 text-uppercase"
                style={{
                  letterSpacing: "4px",
                  fontWeight: 500,
                  fontFamily: '"Big Shoulders Text", cursive',
                }}
              >
                Kshitij Enterprises &amp; Technologies
              </h2>
            </a>
            
            <button
              className="navbar-toggler text-light border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul
                id="navbar-components"
                className="navbar-nav nav ms-auto mb-2
                mb-lg-0"
              >
                <li className="nav-item">
                  <a className="text-white" href="#Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-white" href="#products">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-white" href="#service-section">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-white" href="#contact-us">
                    About
                  </a>
                </li>
                {/* <li className="nav-item">
                                    <a className="text-white" href="signuppage/index.html"><i className="fas fa-user" /> Login</a>
                                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="tagline" data-component="Mainline">
        <div
          id="mainline"
          className="text-uppercase row col-6 animate__animated
          animate__fadeInLeft"
        >
          <h1>
            <strong>Supplier of Electronics components</strong>
          </h1>
          <p >
            Thermal Printer, Elevator Electronics parts <br /> and Many more...
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
