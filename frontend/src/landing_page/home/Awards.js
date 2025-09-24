import React from "react";
import { Link } from "react-router-dom";
function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 p-4 p-md-5 text-center text-md-start mb-4 mb-md-0">
          <img src="media/images/largestBroker.svg" className="img-fluid mb-4 mb-md-5" alt="Largest Broker" />
        </div>
        <div className="col-12 col-md-6 p-4 p-md-5 mt-4 mt-md-5">
          <h1 className="fs-2 fs-md-1 mb-4 mb-md-5">Largest stock broker in India</h1>
          <p className="mb-4 mb-md-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row g-3 mb-4">
            <div className="col-12 col-sm-6">
              <ul className="ps-3 mb-4">
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="ps-3 mb-4">
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" className="img-fluid mt-4 mb-4 mb-md-5" alt="Press Logos" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
