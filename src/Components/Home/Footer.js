import React from "react";
import footerLogo from "../../Img/logo.png";
const Footer = () => {
  return (
    <div className="footer-container bg-dark">
      <div className="container">
        <div className="row pt-md-5">
          <div className="col-md-6">
            <img
              src={footerLogo}
              alt=""
              style={{ height: "70px" }}
              className="m-3"
            />
          </div>
          <div className="col-md-3">
            <ul className="text-light" style={{ listStyle: "none" }}>
              <li>About Online Food</li>
              <li>Read Our Blog</li>
              <li>Sign up for Deliver</li>
              <li>ADD Your Restaurent</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="text-light" style={{ listStyle: "none" }}>
              <li>Get Help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurent near me</li>
            </ul>
          </div>
        </div>

        <div className="text-light text-center">
          <ul class="nav justify-content-center ">
            <li class="nav-item">
              <a class="nav-link" href="#" text-light>
                Privacy Policy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" text-light>
                Terms of use
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" text-light>
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="text-light d-flex justify-content-center pt-3 pb-3">
          Copyright &copy; 2020 Online Food
        </div>
      </div>
    </div>
  );
};

export default Footer;
