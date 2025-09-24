import React from "react";
import { Link } from "react-router-dom";
function Stats() {
  return (
    <div className="container p-3 mb-5">
      <div className="row p-3 p-md-5 g-4">
        <div className="col-12 col-md-6 p-4 p-md-5 mb-4 mb-md-0">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6 p-4 p-md-5">
          <img src="media/images/ecosystem.png" className="img-fluid mb-4 mb-md-5" alt="Ecosystem" />
          <div className="text-center mb-4 mb-md-5">
            <a href="" className="mx-5 mb-3 d-inline-block" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="mb-3 d-inline-block" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
