import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom w-100"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container-fluid px-4">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ minWidth: "120px" }}>
            <img
              src="media/images/logo.svg"
              className="img-fluid"
              style={{ maxHeight: "32px", maxWidth: "120px", width: "auto" }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 d-flex align-items-center gap-2">
              {!isLoggedIn && (
                <>
                  <li className="nav-item mb-2 mb-lg-0">
                    <Link className="nav-link active" aria-current="page" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item mb-2 mb-lg-0">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item mb-2 mb-lg-0">
                  <button type="button" className="nav-link active btn btn-link" style={{textDecoration: "none"}} onClick={handleSignout}>
                    Signout
                  </button>
                </li>
              )}
              <li className="nav-item mb-2 mb-lg-0">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
