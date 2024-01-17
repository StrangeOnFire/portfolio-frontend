import React, { useRef } from "react";
import "../css/footer.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { interpolate } from "flubber";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// -------------------------------------------------------
export default function Footer() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const path1 =
    "M254 82.5C254 140.409 192.727 165 128.408 165C64.0886 165 -4.99994 139.5 0.500038 82.5C6.00004 25.5 64.0886 0 128.408 0C192.727 0 254 24.5913 254 82.5Z";
  const path2 =
    "M124.5 50.3903C124.5 22.5586 96.6438 0 62.25 0C27.8825 0 0 22.5586 0 50.3903C0 64.9627 7.78124 78.0025 19.9933 87.2368L19.8453 87.2581L124.5 172L229.182 87.2581C229.182 87.2368 229.101 87.2368 229.074 87.2032C241.259 77.9812 249 64.9627 249 50.3903C249 22.5586 221.144 0 186.75 0C152.369 0 124.5 22.5586 124.5 50.3903Z";

  const path = useTransform(scrollYProgress, [0.5, 1], [path1, path2], {
    mixer: (a, b) => interpolate(a, b),
  });
  const scale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);
  return (
    <>
    <motion.div ref={ref} className="footer">
      <div className="footer-icons ">
        <a href="https://github.com/StrangeOnFire" target="_blank">
        <h1>Github <OpenInNewIcon /></h1>
        </a>
        <a href="https://www.linkedin.com/in/ayush-kumar-a90999285" target="_blank">
        <h1>LinkedIn <OpenInNewIcon  /></h1>
        </a>
        <a href="">
        <h1>Resume <OpenInNewIcon  /></h1>
        </a>
      </div>
      <div className="footer-eye-div">
        <motion.svg
          className="footer-eye"
          fill="var(--green)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path d={path} fill="var(--green)" />
        </motion.svg>
      </div>
      <motion.div className="bold green footer-text" style={{scale}}>
        <h1>WITH LOVE,</h1>
        <h1>FROM INDIA</h1>
      </motion.div>
    </motion.div>
      <h2 className="copyright">©2023,Ayush Kumar</h2>
      </>
  );
}
