import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const linkStyle = { textDecoration: "none", lineHeight: "2.5" };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>

          <Link to="/resident" style={linkStyle}>Resident individual</Link><br />
          <Link to="/minor" style={linkStyle}>Minor</Link><br />
          <Link to="/nri" style={linkStyle}>Non Resident Indian (NRI)</Link><br />
          <Link to="/company" style={linkStyle}>Company, Partnership, HUF and LLP</Link><br />
          <Link to="/glossary" style={linkStyle}>Glossary</Link>
        </div>

        <div className="col-4 p-5 mt-2">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i> Your Account
          </h4>

          <Link to="/profile" style={linkStyle}>Your Profile</Link><br />
          <Link to="/account-modification" style={linkStyle}>Account modification</Link><br />
          <Link to="/cmr" style={linkStyle}>Client Master Report</Link><br />
          <Link to="/nomination" style={linkStyle}>Nomination</Link><br />
          <Link to="/transfer" style={linkStyle}>Transfer and conversion of securities</Link>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
