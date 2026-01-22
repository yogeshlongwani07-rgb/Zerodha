import React from "react";

function LeftSection({ imageUrl, productName, productDescription }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5 p-5">
        <div className="col-6">
          <img src={imageUrl} alt={productName} />
        </div>

        <div className="col-1"></div>

        <div className="col-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-3">
            <a
              href="/demo"
              style={{ textDecoration: "none" }}
            >
              Try Demo&nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href="/learn-more"
              style={{ textDecoration: "none", marginLeft: "30px" }}
            >
              Learn More&nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div>
            <a href="https://play.google.com" target="_blank" rel="noreferrer">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Download on Google Play"
              />
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on App Store"
                style={{ marginLeft: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
