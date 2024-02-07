import React from "react";

const Footer = () => {
    return (
      <footer
        className="text-center text-lg-start text-white "
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#00008B" }}
        >
          <div className="me-5">
            <span>Get connected on social networks:</span>
          </div>
  
          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}
  
        {/* Section: Links */}
        <section className="">
          <div className="text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">The Power of Consistency</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                  The more work you put in, and the more you constantly and consistently give good performances against good opponents and constantly exceed people's expectations, the more you really endear yourself to the crowd. That's how your career takes off - it's just consistency and time.
                </p>
              </div>
              {/* Grid column */}
  
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Skill set</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">JavaScript</a>
                </p>
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">Express.Js</a>
                </p>
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">React.Js</a>
                </p>
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">MongoDB</a>
                </p>
              </div>
              {/* Grid column */}
  
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">More Skills</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">Bootstrap</a>
                </p>
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">Cloud Technology</a>
                </p>
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">Quality Assurance Testing</a>
                </p>
                <p>
                  <a style={{ textDecoration: "inherit" }} href="#!" className="text-white">Angular Framework</a>
                </p>
              </div>
              {/* Grid column */}
  
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p><i className="fas fa-home mr-3"></i> Nairobi City, KENYA</p>
                <p><i className="fas fa-envelope mr-3"></i> winnieatieno00@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 2547000000</p>
                <p><i className="fas fa-print mr-3"></i> + 2547000000</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}
  
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a style={{ textDecoration: "inherit" }} className="text-white" href="#"
          >Winnie Atieno</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;