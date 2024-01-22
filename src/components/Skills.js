import React, { useEffect, useRef, useState } from "react";
import "../css/skills.css";
import { motion, useScroll, useTransform } from "framer-motion";
import axios from "axios";

// --------------------------------------------------
export default function Skills() {
  const [skills, setSkills] = useState({
    skillsetOne: [],
    skillsetTwo: [],
    skillsetThree: [],
    NumberOfPixelsToSlideTo: "0px",
  });
  const [loading, setLoading] = useState(true);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.25 1", "1 1"],
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_LINK}/skills/`)
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch((err) =>
        console.log(
          "some error happened while connecting to backend in skills section" +
            err
        )
      );
  }, []);
  const x = useTransform(
    scrollYProgress,
    [0.25, 1],
    ["0px", skills.NumberOfPixelsToSlideTo]
  );

  return (
    <>
      <motion.div className="skills bg-green" ref={ref}>
        {!loading && (
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
                {skills.skillsetOne.map((element, idx) => {
                  return (
                    <div className="bg-gray skills-card" key={idx}>
                      <h2 className="bold green">{element}</h2>
                    </div>
                  );
                })}
              </div>

              <div className="skills-card-container">
                {skills.skillsetTwo.map((element, idx) => {
                  return (
                    <div className="bg-gray skills-card" key={idx}>
                      <h2 className="bold green">{element}</h2>
                    </div>
                  );
                })}
              </div>

              <div className="skills-card-container">
                {skills.skillsetThree.map((element, idx) => {
                  return (
                    <div className="bg-gray skills-card" key={idx}>
                      <h2 className="bold green">{element}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
