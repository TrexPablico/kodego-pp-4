import React from "react";

function Footer() {
  return (
    <div className="main-footer mt-0 bg-dark text-light">
      <div className="footer-middle">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              {" "}
              {/* 1st column */}
              <h4 className="mt-4">Contact Us</h4>
              <ul className="list-unstyled">
                <li>Disney Burbank, California </li>
                <li>999-9999</li>
                <li>Lucasfilm San Francisco</li>
                <li>988-8989</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              {/* 2nd column */}
              <h4 className="mt-4">More From Star Wars</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube"></i> YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              {/* 3rd column */}
              <h4 className="mt-4">Shop</h4>
              <ul className="list-unstyled">
                <li>SM Mall of Asia</li>
                <li>Puregold San Joaquin Pasig City</li>
                <li>Shopwise Antipolo</li>
                <li>Ever Gotesco Mall Commonwealth Center</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-5">
            <p className="text-xs-center">&copy;2024 Pablico</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
