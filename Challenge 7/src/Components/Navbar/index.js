import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        aria-label="Offcanvas navbar large"
      >
        <div className="container">
          <Link
            to="/#homepage"
            className="navbar-brand navbrand darkblue04
                    "
          ></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-light w-50"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 pe-3 justify-content-end">
                <li className="nav-item mx-2" data-bs-dismiss="offcanvas">
                  <Link to="/#ourservice" className="nav-link ">
                    Our Service
                  </Link>
                </li>
                <li className="nav-item mx-2" data-bs-dismiss="offcanvas">
                  <Link to="/#whyus" className="nav-link ">
                    Why Us
                  </Link>
                </li>
                <li className="nav-item mx-2" data-bs-dismiss="offcanvas">
                  <Link to="/#testimonial" className="nav-link ">
                    Testimonial
                  </Link>
                </li>
                <li className="nav-item mx-2" data-bs-dismiss="offcanvas">
                  <Link to="/#faq" className="nav-link ">
                    FAQ
                  </Link>
                </li>
              </ul>
              <button
                type="button "
                className="btn btn-success limegreen04"
                data-bs-dismiss="offcanvas"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
