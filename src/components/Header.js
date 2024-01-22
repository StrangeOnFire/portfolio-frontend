import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "../assets/logo.png";
import ayushKumarImg from "../assets/AYUSH KUMAR mainHeading.svg";
import eyeBall from "../assets/eyeBall.png";
import { getClockTime } from "../functions/getClockTime";
import SouthIcon from "@mui/icons-material/South";
import "../css/header.css";
import sunImg from "../assets/vector sun.png";
import manImg from "../assets/Man-05-removebg-preview.png";
// ---------------------------------------------------------
export default function Header() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });
  const keepScrolling = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const text1 = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
  const text2 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const text1Scale = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.8]);
  const text2Scale = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);
  const eyeHeight = useTransform(scrollYProgress, [0, 1], ["20px", "120px"]);
  const eyeBallY = useTransform(scrollYProgress, [0.5, 1], ["0%", "130%"]);
  const eyeBallopacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const eyeBallheight = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["4rem", "4rem", "3rem"]
  );
  const eyeBallwidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["4rem", "4rem", "9rem"]
  );
  return (
    <motion.div ref={ref} className="header">
      <TopContainer />
      <MiddleContainer
        eyeHeight={eyeHeight}
        eyeBallY={eyeBallY}
        eyeBallheight={eyeBallheight}
        eyeBallopacity={eyeBallopacity}
        eyeBallwidth={eyeBallwidth}
        text1={text1}
        text2={text2}
        text1Scale={text1Scale}
        text2Scale={text2Scale}
      />
      <motion.h2
        className="header-keepScrolling green "
        style={{ opacity: keepScrolling }}
      >
        Keep scrolling{" "}
        <SouthIcon fontSize="small" className="keepScrollingIcon" />
      </motion.h2>
      <motion.div className="rotating-fixedIcon" style={{ opacity: keepScrolling }}>
        <a href="#contact">
        <img src={sunImg} alt="sun icon" />
        <img src={manImg} alt="man icon" />
        </a>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------
const TopContainer = () => {
  const [time, setTime] = useState("");
  setInterval(() => {
    const currentTime = getClockTime();
    setTime(currentTime);
  }, 1000);
  return (
    <div className="header-topContainer">
      <img src={logo} alt="logo of site" />
      <h2 className=" green">India, {time}</h2>
    </div>
  );
};

// -------------------------------------------------------
const MiddleContainer = ({
  eyeHeight,
  eyeBallY,
  eyeBallheight,
  eyeBallopacity,
  eyeBallwidth,
  text1,
  text2,
  text1Scale,
  text2Scale,
}) => {
  return (
    <>
      <motion.div className="header-eyeContainer" style={{ height: eyeHeight }}>
        <motion.img
          src={eyeBall}
          style={{
            width: eyeBallwidth,
            y: eyeBallY,
            height: eyeBallheight,
            opacity: eyeBallopacity,
          }}
          alt=""
        />
      </motion.div>

      <motion.div
        className="header-middleContainer green"
        style={{ opacity: text1, scale: text1Scale }}
      >
        <h3>
          A{" "}
          <span style={{ color: "white", fontSize: "1.6rem" }}>
            {" "}
            Full-stack{" "}
          </span>{" "}
          Web Alchemist blending digital brilliance with code mastery{" :)"}
        </h3>

        <div className="ayushKumarImg">
          <img src={ayushKumarImg} alt="heading" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: text2, scale: text2Scale }}
        className="header-middleContainer green"
      >
        <h3 style={{ fontSize: "1.7rem" }}>
          As you Explore my Portfolio, witness the fusion of creativity and
          technology!
        </h3>
      </motion.div>
    </>
  );
};
