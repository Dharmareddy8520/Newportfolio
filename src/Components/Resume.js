import React from "react";
import { motion } from "framer-motion";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocation } from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <div>
      <div className="h1 ">Resume</div>
      <div className="container  my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              className="cont"
              initial={{ scale: 0 }}
              animate={{ rotate: 180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="container ">
              <div className="h1">Hi! I'm Dharma Reddy Pandem</div>
              <div className="p">
                Embark on a digital journey with me as I navigate the realms of
                Computer Science, weaving together the architecture of web
                applications and delving into real-time number plate detection
                projects. Join me in exploring the synergy of creativity and
                technology, as I carve a path towards academic excellence and a
                promising career in software engineering, cloud computing,
                machine learning, and artificial intelligence
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Experience --!> */}

      <div className="dank my-5 text-light">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="h1 ">Work Experience</div>
              <div className="p">Web Designer as intern -Ai4see</div>
              <div>
                <FontAwesomeIcon icon={faBuilding} size="fa-2" />
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faLocation} size="fa-2" />
                </span>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      {/* <!-- Education --!> */}
      <div></div>
    </div>
  );
};

export default Resume;
