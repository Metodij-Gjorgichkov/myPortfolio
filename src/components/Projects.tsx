import React, { useEffect, useState } from "react";
import Card from "./Card";
import dynamic from "next/dynamic";
import { ProjectsSpecificationType } from "@/types/types";
import usePagination from "@/hooks/usePagination";
import Pagination from "./Pagination";
import { project_specifications, project_type } from "@/db";
import { motion } from "framer-motion";
import { variants } from "./Skills";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsSpecificationType[]>(
    project_specifications
  );
  const [filteredProjects, setFilteredProjects] = useState<
    ProjectsSpecificationType[]
  >([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const productsPerPage = 3;
  const {
    currentPage,
    totalPages,
    currentProducts,
    prevPage,
    nextPage,
    changeCurrentPage,
    setCurrentPage,
  } = usePagination(
    filteredProjects.length === 0 ? projects : filteredProjects,
    productsPerPage
  );

  const handleAllProjects = () => {
    setFilteredProjects(projects);
    setCurrentPage(1);
  };

  const handleFilter = (filterName: string) => {
    const filteredArr = projects.filter((project) => {
      return project.category === filterName;
    });
    setCurrentPage(1);
    setFilteredProjects(filteredArr);
  };

  const handleActiveFilter = (name: string) => {
    setActiveFilter(name);
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      id="projects"
      className="container py-8"
    >
      <div className="row py-3 justify-content-around align-items-center flex-wrap">
        <motion.div
          variants={variants}
          className="col-12 text-center font-size-600 font-size-40 pb-3"
        >
          <motion.h3 variants={variants} className="opacity-3">
            {project_type.title}
          </motion.h3>
        </motion.div>
        <div className="col-12 pb-5">
          <motion.div
            variants={variants}
            className="d-flex justify-content-md-center align-items-center choose-project "
          >
            <motion.button
              onClick={() => {
                handleAllProjects();
                handleActiveFilter("All");
              }}
              className={`${activeFilter === "All" ? "activeFilter" : ""}`}
            >
              {project_type.project_type.all}
            </motion.button>
            <motion.button
              onClick={() => {
                handleFilter("nextJS");
                handleActiveFilter("Next JS");
              }}
              className={`${activeFilter === "Next JS" ? "activeFilter" : ""}`}
            >
              {project_type.project_type.nextjs}
            </motion.button>
            <motion.button
              onClick={() => {
                handleFilter("reactJS");
                handleActiveFilter("React JS");
              }}
              className={`${activeFilter === "React JS" ? "activeFilter" : ""}`}
            >
              {project_type.project_type.reactjs}
            </motion.button>
            <motion.button
              onClick={() => {
                handleFilter("javascript");
                handleActiveFilter("Javascript");
              }}
              className={`${
                activeFilter === "Javascript" ? "activeFilter" : ""
              }`}
            >
              {project_type.project_type.javascript}
            </motion.button>
            <motion.button
              onClick={() => {
                handleFilter("bootstrap");
                handleActiveFilter("Bootstrap");
              }}
              className={`${
                activeFilter === "Bootstrap" ? "activeFilter" : ""
              }`}
            >
              {project_type.project_type.bootstrap}
            </motion.button>
            <motion.button
              onClick={() => {
                handleFilter("sass");
                handleActiveFilter("SASS");
              }}
              className={`${activeFilter === "SASS" ? "activeFilter" : ""}`}
            >
              {project_type.project_type.sass}
            </motion.button>
          </motion.div>
        </div>
        {filteredProjects.length === 0 ? (
          <Card projectSpecData={currentProducts} />
        ) : (
          <Card projectSpecData={currentProducts} />
        )}

        <Pagination
          currentProducts={currentProducts}
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
          changeCurrentPage={changeCurrentPage}
        />
      </div>
    </motion.div>
  );
};

export default dynamic(() => Promise.resolve(Projects), {
  ssr: false,
});
