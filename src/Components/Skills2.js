import React from "react";
import { motion } from "framer-motion";
import "./skills2.css";
import web from "../images/web-0d05165f.png";
import mobile from "../images/mobile-896ef2f5.png";
import back from "../images/backend-565fc01f.png";
import create from "../images/creator-dbbffaec.png";
const Skills2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12 px-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 20 }}
            className="jolly"
            transition={{ ease: "easeIn", duration: 2 }}
          >
            <div className="text-center align-items-center p-5">
              <img src={web} alt="web Developer" height={60} width={60} />
            </div>
            <div className="text-center align-items-center text-light">
              <h4>Web Developer</h4>
            </div>
          </motion.div>
        </div>
        <div className="col-md-3 col-sm-12">
          <motion.div
            className="jolly"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 40 }}
            transition={{ ease: "easeIn", duration: 4 }}
          >
            <div className="text-center align-items-center p-5">
              <img src={mobile} alt="web Developer" height={60} width={60} />
            </div>
            <div className="text-center align-items-center text-light">
              <h4>Backend Developer</h4>
            </div>
          </motion.div>
        </div>
        <div className="col-md-3 col-sm-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 60 }}
            className="jolly"
            transition={{ ease: "easeIn", duration: 6 }}
          >
            <div className="text-center align-items-center p-5">
              <img src={back} alt="web Developer" height={60} width={60} />
            </div>
            <div className="text-center align-items-center text-light">
              <h4>Automation Specialist</h4>
            </div>
          </motion.div>
        </div>
        <div className="col-md-3 col-sm-12 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 80 }}
            className="jolly"
            transition={{ ease: "easeIn", duration: 8 }}
          >
            <div className="text-center align-items-center p-5">
              <img src={create} alt="web Developer" height={60} width={60} />
            </div>
            <div className="text-center align-items-center text-light">
              <h4>Data Scientist</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
