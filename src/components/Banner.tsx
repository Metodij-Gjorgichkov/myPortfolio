import React from "react";
import { banner, contact } from "@/db";
import { motion } from "framer-motion";

const Banner = () => {
  const variants = {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="banner container py-8 position-relative inter-font overflow-hidden"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="row d-flex justify-content-center">
        <motion.div
          className="col-12 col-md-6 text-center pt-md-4 pb-5 pb-md-0 desc-cont"
          variants={variants}
        >
          <p className="d-block mb-0 font-weight-700 font-size-23 opacity-3">
            {banner.who_am_i}
          </p>
          <motion.h1 variants={variants}>{banner.name}</motion.h1>
          <motion.h3
            className="mb-4 opacity-3 font-size-25"
            variants={variants}
          >
            {banner.front_end}
          </motion.h3>
          <motion.a
            className="position-relative btn background-slide"
            href={banner.contactLinkTo}
            variants={variants}
          >
            {banner.contact}
          </motion.a>
        </motion.div>
        <div className="col-12 col-md-6 tex-center position-relative">
          <div className="img-wrapper d-flex justify-content-center align-items-center">
            <img
              src={banner.image}
              className="portfolio-img"
              alt={banner.name}
            />
          </div>
        </div>
      </div>

      <div className="passionate-front-end-dev text-uppercase">
        <h1 className="infinite-animation">{banner.passionate_frond_end}</h1>
      </div>
    </motion.div>
  );
};

export default Banner;
