import { ThemeContext } from "@/context/themeContextConstructor";
import React, { useContext, useRef, useState } from "react";
import { contact } from "@/db";
import { motion } from "framer-motion";
import { variants } from "./Skills";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const formRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1rqxmve",
        "template_d1k6vcw",
        // @ts-ignore
        formRef.current,
        "MMmwnglbpvVdvMuJy"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          clearFormInputs();
        },
        () => {
          setError(true);
          setSuccess(false);
          console.log(formRef.current);
        }
      );
  };

  const clearFormInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <motion.div
        id="contact"
        className="contact container py-9"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="row py-sm-1 d-flex justify-content-center">
          <motion.div className="col-12 text-center mb-6" variants={variants}>
            <motion.h3 className="opacity-3" variants={variants}>
              {contact.title}
            </motion.h3>
          </motion.div>

          <div className="col-12 col-lg-5 offset-lg-1 mb-3">
            <h1 className="opacity-3 font-weight-500 pb-4">{contact.header}</h1>
            {contact.info.map((cont) => {
              return (
                <motion.div
                  className="contact-section mb-2"
                  variants={variants}
                  key={cont.name}
                >
                  <a href={cont.linkTo} target="_blank">
                    <img src={cont.image} alt={cont.name} />
                    <p className="d-inline ml-2">{cont.name}</p>
                  </a>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="col-12 col-lg-5 text-sm-center"
            variants={variants}
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <motion.input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setName(event.target.value)
                }
                value={name}
                type="text"
                name="name"
                placeholder="Your Name"
                className={`d-block w-100 mb-3 ${
                  theme === "dark" ? "w-border text-white" : ""
                }`}
                variants={variants}
              />
              <motion.input
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
                type="email"
                name="email"
                placeholder="Your Email"
                className={`d-block w-100 mb-3 ${
                  theme === "dark" ? "w-border text-white" : ""
                }`}
                variants={variants}
              />

              <motion.textarea
                value={message}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setMessage(event.target.value);
                }}
                name="message"
                cols={30}
                rows={10}
                className={`d-block w-100 mb-3 ${
                  theme === "dark" ? "w-border text-white" : ""
                }`}
                placeholder="Your Message"
                variants={variants}
              ></motion.textarea>

              <motion.button
                type="submit"
                className="w-100 d-block mb-1"
                variants={variants}
              >
                Submit
              </motion.button>
              {error && (
                <p className="text-danger">
                  Your message has NOT been successfully sent
                </p>
              )}
              {success && (
                <p className="text-success">
                  Your message has been successfully sent
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="container pb-0 pb-md-5"
      >
        <div className="row text-center">
          <div className="col-12">
            <motion.p variants={variants}>
              Copyright &copy; 2023 Metodij Gjorgichkov
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
