import { ProjectsSpecificationType } from "@/types/types";
import Link from "next/link";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { variants } from "./Skills";
import { ThemeContext } from "@/context/themeContextConstructor";

interface Props {
  projectSpecData: ProjectsSpecificationType[];
}

const Card = ({ projectSpecData }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {projectSpecData.map((project) => {
        return (
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            key={project.id}
            className={`col-12 col-md-6 col-lg-4 card position-relative mb-3 text-dark ${
              theme === "dark" ? "dark" : ""
            } `}
          >
            <div className="card-wrapper">
              <picture>
                <img src={project.image} alt="" />
              </picture>

              <div className="card-icons d-flex justify-content-center align-items-center text-center">
                {project.linkTo && (
                  <div className="wrapped-img mr-2">
                    <Link href={project.linkTo} target="_blank">
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <img
                          src="https://ik.imagekit.io/metodijgj99/eye.png?updatedAt=1702301862168"
                          alt=""
                          style={{ width: "40px" }}
                        />
                      </div>
                    </Link>
                  </div>
                )}
                <div className="wrapped-img ">
                  <Link href={project.linkGithub} target="_blank">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <img
                        src="https://ik.imagekit.io/metodijgj99/github.png?updatedAt=1702243006294"
                        alt=""
                        style={{ width: "30px" }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-content p-3">
              <h5 className="text-center font-weight-600">{project.name}</h5>
              <p className="opacity-3">{project.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Card;
