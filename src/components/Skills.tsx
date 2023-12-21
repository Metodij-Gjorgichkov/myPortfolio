import React, { useContext } from "react";
import { skills } from "@/db";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/themeContextConstructor";

export const variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      id="skills"
      className="container py-8"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="skills row d-flex justify-content-center align-items-center">
        <motion.div
          className="col-12 text-center font-size-600 font-size-40 pb-5"
          variants={variants}
        >
          <motion.h3 className="opacity-3" variants={variants}>
            {skills.title}
          </motion.h3>
        </motion.div>
        {skills.skills_type.map((skill, index) => {
          return (
            <motion.div
              key={`skill-${index}`}
              className="col-6 col-md-3 skill-main-cont mb-4"
              variants={variants}
            >
              <motion.div
                className={`skills-wrapper ${
                  theme === "dark" ? "dark" : ""
                } mb-2`}
                variants={variants}
              >
                <motion.div className="skills-icon" variants={variants}>
                  <img src={skill.image} alt={skill.title} />
                </motion.div>
              </motion.div>
              <motion.p variants={variants}>{skill.title}</motion.p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
