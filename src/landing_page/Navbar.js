import React from "react";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
        <div class="container p-2">
          <a class="navbar-brand" href="#">
            <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-muted" aria-current="page" href="#">
                  SignUp
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-muted" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-muted" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-muted" href="#">
                  Pricing
                </a>
              </li>
                <li class="nav-item">
                <a class="nav-link active text-muted" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
