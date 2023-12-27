import React, { useRef, useState } from "react";
import "../css/skills.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Skills() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.25 1", "1 1"],
  });

  //note-the -2100px should be dynamically changable so have to edit the code later on

  const x = useTransform(scrollYProgress, [0.25, 1], ["0px", "-2100px"]);
  const [firstSkills, setFirstSkills] = useState([
    "HTML",
    "JAVASCRIPT",
    "NODE.JS",
    "MONGODB",
    "MATERIAL-UI",
    "MERN",
  ]);
  const [secondSkills, setSecondSkills] = useState([
    "CSS",
    "REACT.JS",
    "EXPRESS.JS",
    "FRAMER-MOTION",
    "TAILWIND.CSS",
    "SOCKET.IO",
  ]);
  const [thirdSkills, setThirdSkills] = useState([
    "REDUX_TOOLKIT",
    "REACT.JS",
    "EXPRESS.JS",
    "FRAMER-MOTION",
    "TAILWIND.CSS",
  ]);

  return (
    <>
      <motion.div className="skills bg-green" ref={ref}>
        <motion.div className="skills-container" style={{ x }}>
          <div className="skills-heading">
            <h1 className="bold gray">SKILLS</h1>
          </div>

          <div className="skills-showcase">
            <div className="skills-skills">
              <h3 className="gray">SKILLS</h3>
              <h3 className="gray">SKILLS</h3>
              <h3 className="gray">SKILLS</h3>
            </div>
            <div className="skills-card-container">
              {firstSkills.map((element, idx) => {
                return (
                  <div className="bg-gray skills-card" key={idx}>
                    <h2 className="bold green">{element}</h2>
                  </div>
                );
              })}
            </div>

            <div className="skills-card-container">
              {secondSkills.map((element, idx) => {
                return (
                  <div className="bg-gray skills-card" key={idx}>
                    <h2 className="bold green">{element}</h2>
                  </div>
                );
              })}
            </div>

            <div className="skills-card-container">
              {thirdSkills.map((element, idx) => {
                return (
                  <div className="bg-gray skills-card" key={idx}>
                    <h2 className="bold green">{element}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
