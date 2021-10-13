import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="container"> */}
      <p>
        Developped By{" "}
        <a
          href="https://www.linkedin.com/in/mathieu-fontaine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mathieu Fontaine{" "}
        </a>
      </p>
      <div className="logos">
        <a
          href="https://www.linkedin.com/in/mathieu-fontaine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fa fa-linkedin" aria-hidden="true"></i> */}
          <FontAwesomeIcon icon={faLinkedin} className="nav-icon" />
        </a>
        <a
          href="https://github.com/mathieufontaine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="nav-icon" />
        </a>
      </div>
      <p>® Copyright 2021</p>
      {/* </div> */}
    </div>
  );
};

export default Footer;
