import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  const linkStyle = { textDecoration: "none" };

  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha company logo"
              style={{ width: "50%" }}
            />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          <div className="col">
            <p>Company</p>

            <Link to="/products" className="text-muted" style={linkStyle}>Products</Link><br />
            <Link to="/pricing" className="text-muted" style={linkStyle}>Pricing</Link><br />
            <Link to="/about" className="text-muted" style={linkStyle}>About</Link><br />
            <Link to="/referral" className="text-muted" style={linkStyle}>Referral programme</Link><br />
            <Link to="/careers" className="text-muted" style={linkStyle}>Careers</Link><br />
            <Link to="/tech" className="text-muted" style={linkStyle}>Zerodha.tech</Link><br />
            <Link to="/opensource" className="text-muted" style={linkStyle}>Open source</Link><br />
            <Link to="/press" className="text-muted" style={linkStyle}>Press & media</Link><br />
            <Link to="/csr" className="text-muted" style={linkStyle}>Zerodha Cares (CSR)</Link>
          </div>

          <div className="col">
            <p>Support</p>

            <Link to="/contact" className="text-muted" style={linkStyle}>Contact us</Link><br />
            <Link to="/support" className="text-muted" style={linkStyle}>Support portal</Link><br />
            <Link to="/blog" className="text-muted" style={linkStyle}>Z-Connect blog</Link><br />
            <Link to="/charges" className="text-muted" style={linkStyle}>List of charges</Link><br />
            <Link to="/downloads" className="text-muted" style={linkStyle}>Downloads & resources</Link><br />
            <Link to="/videos" className="text-muted" style={linkStyle}>Videos</Link><br />
            <Link to="/market" className="text-muted" style={linkStyle}>Market overview</Link><br />
            <Link to="/complaint" className="text-muted" style={linkStyle}>How to file a complaint?</Link><br />
            <Link to="/complaint-status" className="text-muted" style={linkStyle}>Status of your complaints</Link>
          </div>

          <div className="col">
            <p>Account</p>

            <Link to="/open-account" className="text-muted" style={linkStyle}>Open an account</Link><br />
            <Link to="/fund-transfer" className="text-muted" style={linkStyle}>Fund Transfer</Link>
          </div>

        </div>

        <div className="mt-5 text-muted mb-5" style={{ fontSize: "14px" }}>
          <p>Investments in securities market are subject to market risks; read all related documents carefully before investing.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
