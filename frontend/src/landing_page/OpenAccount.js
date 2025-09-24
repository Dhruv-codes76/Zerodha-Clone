import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
      <div className="row w-100">
        <div className="col-12 col-md-8 offset-md-2 text-center p-4 p-md-5 bg-white rounded shadow">
          <h1 className="mb-4">Open a Zerodha account</h1>
          <p className="mb-4 fs-5 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <Link
            to="/signup"
            className="btn btn-primary fs-5 px-4 py-2 rounded-pill mb-3"
            style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}
          >
            Sign up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
