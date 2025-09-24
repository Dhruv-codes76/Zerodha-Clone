import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-4 p-md-5 text-center text-md-start" id="supportWrapper">
        <h4 className="mb-2">Support Portal</h4>
        <a href="" className="d-inline-block mb-2">Track Tickets</a>
      </div>
      <div className="row p-3 p-md-5 m-1 m-md-3 g-4">
        <div className="col-12 col-md-6 p-3 mb-4 mb-md-0">
          <h1 className="fs-3 mb-4 text-center text-md-start">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="form-control mb-3 w-100" placeholder="Eg. how do I activate F&O" />
          <div className="d-flex flex-wrap gap-2 gap-md-3 mb-4 justify-content-center justify-content-md-start">
            <a href="" className="btn btn-outline-secondary btn-sm mb-2">Track account opening</a>
            <a href="" className="btn btn-outline-secondary btn-sm mb-2">Track segment activation</a>
            <a href="" className="btn btn-outline-secondary btn-sm mb-2">Intraday margins</a>
            <a href="" className="btn btn-outline-secondary btn-sm mb-2">Kite user manual</a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3 mb-4 text-center text-md-start">Featured</h1>
          <ol className="mb-4">
            <li>
              <a href="" className="text-decoration-none">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="text-decoration-none">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
