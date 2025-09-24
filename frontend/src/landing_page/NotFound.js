import React from "react";

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
      <div className="row w-100">
        <div className="col-12 col-md-8 offset-md-2 text-center p-4 p-md-5 bg-white rounded shadow">
          <div className="mb-4">
            <span style={{ fontSize: "4rem", color: "#ff6f61" }}>
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </span>
          </div>
          <h1 className="mb-3">404 Not Found</h1>
          <p className="mb-4 fs-5 text-muted">Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary px-4 py-2 rounded-pill">Go Home</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
