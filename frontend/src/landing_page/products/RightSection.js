import React from "react";
import { Link } from "react-router-dom";
function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6 p-4 p-md-5 mt-4 mt-md-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="mb-4">{productDesription}</p>
          <div className="mb-4">
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <img src={imageURL} className="img-fluid mb-4 mb-md-5" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
