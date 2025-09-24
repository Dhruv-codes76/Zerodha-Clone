import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row align-items-center">
        <div className="col-12  mb-4 mb-md-0 text-center text-md-start">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4 mb-md-5"
          />
        </div>
        <div className="col-12 text-center text-md-start">
          <h1 className="mt-2 text-center mt-md-5">Invest in everything</h1>
          <p className="text-center">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <div className="d-flex justify-content-center w-100 mt-4 mb-4">
            <Link to="/signup" className="w-100" style={{maxWidth: "300px"}}>
              <button
                className="p-2 btn btn-primary fs-5 w-100"
                style={{ minWidth: "180px", marginTop: "8px", marginBottom: "8px" }}
              >
                Signup Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
