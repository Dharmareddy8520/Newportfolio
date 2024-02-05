import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import avatar from "../images/avatar.png";
import Skills2 from "./Skills2";
const About = () => {
  return (
    <div className="pt-2 my-5">
      <div className="h1 text-center container">About</div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 mb-0">
            <div className="space">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2 }}
                src={avatar}
                alt="avatar"
                height={250}
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="h4 head pt-4">
              I'am <span className="name">Dharma Reddy P </span>
            </div>
            <div className="p har">
              {" "}
              I am a Full Stack Web Developer with a Bachelor's degree in
              Computer Science Engineering from NMREC College of Engineering,
              J.N.T.U. Hyderabad. I have a strong command of programming
              languages such as C, C++, Python, and Java, and I am proficient in
              working with databases such as MySQL and Mongo dB. I am also
              skilled in Full Stack Web Development and have worked on several
              projects utilizing technologies such as Nodejs, HTML, CSS,
              JavaScript, and BootStrap
            </div>
          </div>
        </div>
      </div>
      <Skills2 />
    </div>
  );
};

export default About;
