import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center text-center g-4">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p className="mb-4">
          Extend your trading and investment experience even further with our partner platforms
        </p>
        <div className="col-12 col-md-4 mt-4">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid mb-3" style={{height:"50px",maxWidth:"175px"}} alt="Zerodha Fundhouse"/>
          <p className="text-muted text-center text-small mb-4">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="media/images/sensibullLogo.svg" className="img-fluid mb-3" style={{height:"95px",maxWidth:"200px"}} alt="Sensibull"/>
          <p className="text-muted text-small mb-4">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="media/images/tijori.svg" className="img-fluid mb-3" style={{height:"50px",maxWidth:"150px"}} alt="Tijori"/>
          <p className="text-muted text-small mb-4">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="media/images/streakLogo.png" className="img-fluid mb-3" style={{height:"55px",maxWidth:"160px"}} alt="Streak"/>
          <p className="text-muted fs-6 mb-4">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="media/images/smallcaseLogo.png" className="img-fluid mb-3" style={{height:"50px",maxWidth:"200px"}} alt="Smallcase"/>
          <p className="text-muted text-small mb-4">
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <img src="media/images/dittoLogo.png" className="img-fluid mb-3" style={{height:"50px",maxWidth:"130px"}} alt="Ditto"/>
          <p className="text-muted text-small mb-4">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4 mb-4">
          <Link to="/signup" className="w-100" style={{maxWidth: "300px"}}>
            <button
              className="p-2 btn btn-primary fs-5 w-100"
              style={{ minWidth: "180px" }}
            >
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
