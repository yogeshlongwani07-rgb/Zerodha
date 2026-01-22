import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <Link to="/track-tickets">Track Tickets</Link>
      </div>

      <div className="row p-5 mx-5">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />

          <div className="d-flex flex-column gap-2">
            <Link to="/account-opening">Track account opening</Link>
            <Link to="/segment-activation">Track segment activation</Link>
            <Link to="/intraday-margins">Intraday margins</Link>
            <Link to="/kite-manual">Kite user manual</Link>
          </div>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <Link to="/takeovers-delisting">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>

            <li>
              <Link to="/intraday-leverages">
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
