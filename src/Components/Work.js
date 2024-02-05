import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import photo from "../images/og-Number-Plate-Detection.png";
import certificate from "../images/certificate.jpg";
import net from "../images/net.avif";
import shop from "../images/shop.avif";
import data from "./Kills.js"; // Import the data
import { Link } from "react-router-dom";

import Work2 from "./Work2";
import web from "../images/web-0d05165f.png";

const Work = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center h1 mt-5 line">Work</div>
        <div className="h3">EXPIRENCE</div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <div className="p line">
              <span className="text-primary h3 ">Ai4see,</span> Bangalore —
              Website Development Intern
              <ul>
                <li>
                  Design of the overall architecture of the webapplication
                </li>
                <li>Build reusable code and libraries for future use.</li>
                <li>
                  Work on the optimization of the application for maximum speed
                  and scalability
                </li>
                <li>
                  {" "}
                  Work on the implementation of security and data protection
                </li>
                <li>
                  Work on the integration of the front-end and back-end aspects
                  of the web application
                </li>
              </ul>
            </div>
            <div className="h4 mt-4">
              Links:
              <span className="mx-5 text-dark ">
                <a href="https://sample-e2dba.web.app/" className="io">
                  {" "}
                  <FontAwesomeIcon icon={faLink} className="fa-1x" />{" "}
                </a>
              </span>
              <span className="mx-3 io">
                <a href="https://github.com/Dharmareddy8520" className="io">
                  <FontAwesomeIcon icon={faGit} className="fa-1x" />
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mx-5">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "circIn", duration: "5" }}
                src="https://images.unsplash.com/photo-1690393637175-a75f13ff6798?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={350}
                width={300}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" h3 my-5 text-center">Checkout a few of my works</div>
      </div>
      <div className="container mb-5 ">
        <div className="row ">
          {data.map((item) => (
            <div className="col-md-4 mb-5 " key={item.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 20 }}
                className="jolly"
                transition={{ ease: "easeIn", duration: 2 }}
              >
                <div className="card card-fixed-height">
                  <Link to="/projects">
                    <img
                      src={item.img}
                      className="card-img-top img-responsive"
                      alt={item.Title}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{item.Title || item.title}</h5>

                    {item.links.map((link, index) => (
                      <a
                        key={index}
                        href={Object.values(link)[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Object.keys(link)[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
