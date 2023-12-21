import React, { useContext, useState } from "react";
import { GoSun } from "react-icons/go";
import { RiMenu5Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { header } from "@/db";
import { ThemeContext } from "@/context/themeContextConstructor";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, handleThemeChange } = useContext(ThemeContext);

  const mobileNavLinks = {
    initial: {
      y: "30vh",
      tranisiton: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.7,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        delayChildren: 0.3,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const handleOnMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div
        id="home"
        className="header container pt-4 pb-3 jost-font border-bottom-header"
      >
        <motion.div
          className="row"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="col-12">
            <motion.div className="d-flex align-items-center">
              <motion.div
                className={`d-flex align-items-center logo-cont mr-5 ${
                  theme === "dark" ? "white-border" : ""
                }`}
                variants={variants}
              >
                <img src="/images/mgj.png" alt="logo" className="mr-2 logo" />
                <span className="logo-text text-uppercase">
                  {header.logo_name}
                </span>
              </motion.div>
              <motion.nav className="d-none d-md-block" variants={variants}>
                <motion.ul className="d-flex">
                  {header.nav_links.map((link) => {
                    return (
                      <motion.li key={link.title} variants={variants}>
                        <a href={link.href}>{link.title}</a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.nav>
              <motion.div
                className="ml-auto cursor-pointer"
                onClick={() =>
                  handleThemeChange(theme === "light" ? "dark" : "light")
                }
                variants={variants}
              >
                {theme === "light" ? (
                  <GoSun size="30px" />
                ) : (
                  <IoMoonSharp size="30px" />
                )}
              </motion.div>
              <motion.div
                className="ml-3 d-block d-md-none"
                onClick={() => setIsMenuOpen(true)}
                variants={variants}
              >
                <RiMenu5Line size="30px" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="container-fluid fixed-cont bg-color-1 cormorant-garamond-font "
            >
              <div
                className="col-12 text-right px-0 pt-4 pb-5"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoIosCloseCircleOutline size="40px" color="black" />
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="col-12 padding-ham-menu text-center"
              >
                {header.nav_links.map((item, index) => {
                  return (
                    <motion.div variants={mobileNavLinks}>
                      <a
                        key={index}
                        href={item.href}
                        className="d-block font-size-40 line-height-60"
                        style={{ color: "black" }}
                        onClick={handleOnMenuClose}
                      >
                        {item.title.toUpperCase()}
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
