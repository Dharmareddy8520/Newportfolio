import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
const Footer = () => {
  return (
    <div>
      <div className="foot">
        <div className="container  ">
          <div className="h1 text-center py-5">Dharmareddy</div>
          <div className="text-center text-dark pb-3">
            <span className="mx-2">
              <a href="https://www.linkedin.com/in/dharmareddy-p-21177824b/">
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
              </a>
            </span>
            <span className="mx-2">
              {" "}
              <a href="https://www.instagram.com/dharmareddy0887/">
                {" "}
                <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
              </a>
            </span>
            <span className="mx-2">
              {" "}
              <a href="https://github.com/Dharmareddy8520">
                {" "}
                <FontAwesomeIcon icon={faGithub} className="fa-2x" />
              </a>
            </span>
            <span className="mx-2">
              {" "}
              <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
            </span>
          </div>
          <div className="text-center bg-aqua py-3">
            © All rigths reserved by Dharmareddy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
