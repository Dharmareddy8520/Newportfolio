import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion } from "framer-motion";
import {
  faCode,
  faLaptopCode,
  faRobot,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Skills = () => {
  let now = 60;
  return (
    <div>
      <div className="container ">
        <div className="text-center h1 headers">Skills</div>
        <div className="container h2 mt-3">Profesional Skills</div>
        {/* <ProgressBar now={now} label={`${now}%`} /> */}
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            {" "}
            <div className=" bg-white rounded shadow-lg my-5">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <FontAwesomeIcon icon={faCode} className="px-5 " /> C , C++
                </div>
                <div className="col-md-6">
                  {" "}
                  <span className="pd">95</span>
                </div>
              </div>
              <motion.div
                className="kill"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "95%" }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <ProgressBar now={95} style={{ height: "5px" }} />
              </motion.div>
            </div>
            <div className=" bg-white rounded shadow-lg my-5 ">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <FontAwesomeIcon icon={faLaptopCode} className="px-5 " />
                  Python ,java{" "}
                </div>
                <div className="col-md-6">
                  {" "}
                  <span className="pd">80</span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "80%" }}
                transition={{ ease: "easeIn", duration: 2 }}
              >
                <ProgressBar now={80} style={{ height: "5px" }} />
              </motion.div>
            </div>
            <div className=" bg-white rounded shadow-lg my-5 ">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <FontAwesomeIcon icon={faLaptopCode} className="px-5 " />
                  MERN stack developer{" "}
                </div>
                <div className="col-md-6">
                  {" "}
                  <span className="pd">60</span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "60%" }}
                transition={{ ease: "easeIn", duration: 2 }}
              >
                <ProgressBar
                  now={60}
                  className="kill"
                  style={{ height: "5px" }}
                />
              </motion.div>
            </div>
            <div className=" bg-white rounded shadow-lg my-5 ">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <FontAwesomeIcon
                    icon={faMarker}
                    className="px-5 "
                  /> UX/UI{" "}
                </div>
                <div className="col-md-6">
                  {" "}
                  <span className="pd">80</span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "80%" }}
                transition={{ ease: "easeIn", duration: 2 }}
              >
                <ProgressBar
                  now={80}
                  className="kill"
                  style={{ height: "5px" }}
                />
              </motion.div>
            </div>
            <div className=" bg-white rounded shadow-lg my-5">
              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <FontAwesomeIcon icon={faRobot} className="px-5 " />
                  machine learning{" "}
                </div>
                <div className="col-md-6">
                  {" "}
                  <span className="pd">65</span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "65%" }}
                transition={{ ease: "easeIn", duration: 2 }}
              >
                {" "}
                <ProgressBar
                  now={65}
                  className="kill"
                  style={{ height: "5px" }}
                />
              </motion.div>
            </div>
            {/* <div className=" bg-white rounded shadow-lg mt-3 h4">
              C , C++ <ProgressBar now={60} className="kill" />
            </div>
            <div className=" bg-white rounded shadow-lg mt-3 h4">
              C , C++ <ProgressBar now={60} className="kill" />
            </div> */}
          </div>

          {/* Python ,java */}
          <div className="col-sm-12 col-lg-6">
            <img
              src="https://portfolio-ten-pi-18.vercel.app/images/work3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
