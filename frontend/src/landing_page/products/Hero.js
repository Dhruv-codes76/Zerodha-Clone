import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center mt-5 p-3">
          <h1 className="mb-4">Technology</h1>
          <h3 className="text-muted mt-3 fs-4 mb-4">
            Sleek, modern and intuitive trading platforms
          </h3>
          <p className="mt-3 mb-5">
            Check out our{' '}
            <a href="" style={{ textDecoration: "none" }}>
              investment offerings{' '}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
