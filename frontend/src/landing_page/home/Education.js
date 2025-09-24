import React from "react";
import { Link } from "react-router-dom";
function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <img src="media/images/education.svg" className="img-fluid mb-4 mb-md-5" alt="Education" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-4 d-inline-block">
            Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-4 d-inline-block">
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
