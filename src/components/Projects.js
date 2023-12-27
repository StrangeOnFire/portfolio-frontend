import React, { useRef, useState } from "react";
import furnigoodsImg from "../assets/Screenshot 2023-12-10 100420.png";
import yoganationImg from "../assets/yoganation.png";
import grocerifyImg from "../assets/grocerify.png";
import donutImg from '../assets/donut-min.png'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/projects.css";
import ScrollText from "./ScrollText";

// ------------------------------------------------
export default function Projects() {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0.25 1", "1 1"],
  // });

  // const x = useTransform(scrollYProgress, [0.25, 1], ["0px", "-2100px"]);
  return (
    <>
      <div className="projects ">
        <div className="project-pcVersion">
          <div className="projects-heading">
            <h1 className="bold gray">PR
            <img src={donutImg} alt="donut img"/>
            JECTS</h1>
          </div>

          <ProjectPcVersion />
        </div>

        <div className="project-mobileVersion">
          <ProjectMobileVersion />
        </div>
      </div>
    </>
  );
}

const ProjectMobileVersion = () => {
  return (
    <div className="project-mobileVersion">
      <ScrollText />

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="project-card-mobile">
            <img src={furnigoodsImg} alt="" />
            <h3 className="green">Furnigoods</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card-mobile">
            <img src={yoganationImg} alt="" />
            <h3 className="green">Yoganation</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card-mobile">
            <img src={grocerifyImg} alt="" />
            <h3 className="green">Grocerify</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card-mobile">
            <img src={furnigoodsImg} alt="" />
            <h3 className="green">Furnigoods</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-card-mobile">
            <img src={furnigoodsImg} alt="" />
            <h3 className="green">Furnigoods</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const ProjectPcVersion = () => {
  return (
    <section className="project-container-pc ">
      <div className="project-showcase-pc mx-auto max-w-5xl">
        <Link
          heading="Furnigoods"
          subheading="Lorem pixum fnvfuvnfvfuvb dwvnfuvbfnvewv"
          imgSrc={furnigoodsImg}
          href="#"
        />
        <Link
          heading="Yoganation"
          subheading="Lorem pixum fnvfuvnfvfuvb dwvnfuvbfnvewv"
          imgSrc={yoganationImg}
          href="#"
        />
        <Link
          heading="Grocerify"
          subheading="Lorem pixum fnvfuvnfvfuvb dwvnfuvbfnvewv"
          imgSrc={grocerifyImg}
          href="#"
        />
        <Link
          heading="Careers"
          subheading="Lorem pixum fnvfuvnfvfuvb dwvnfuvbfnvewv"
          imgSrc="/imgs/random/5.jpg"
          href="#"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="/imgs/random/10.jpg"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="project-card-pc group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16, color: "var(--green)" },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="project-card-container relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16, color: "var(--green)" },
              }}
              transition={{ type: "spring" }}
              style={{ display: "inline-block" }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          className="project-subHeading-pc relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50"
          variants={{
            whileHover: { color: "var(--green)" },
          }}
        >
          {subheading}
        </motion.span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="project-img-pc absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="project-arrowIcon-div-pc relative z-10 p-4"
      >
        <FiArrowRight className="project-arrowIcon-pc text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
