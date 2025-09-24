import React from "react";
import { Link } from "react-router-dom";
function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }} className="mb-4 d-inline-block">
            See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-6 mb-5">
          <div className="row text-center g-4">
            <div className="col-12 col-md p-4 border mb-4 mb-md-0">
              <h1 className="mb-4">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-md p-4 border">
              <h1 className="mb-4">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
