"use client";

import styles from "./About.module.scss";
import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const brownSugar = localFont({
  src: "../../../public/fonts/brownsugarfont/BrownSugar.otf",
});

const About = () => {
  const aboutContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const left = {
    hidden: { opacity: 0, x: -500 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut", type: "spring" },
    },
  };

  const right = {
    hidden: { opacity: 0, x: 500 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        delay: 1,
      },
    },
  };

  const bottom = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut", type: "spring" },
    },
  };

  return (
    <>
      <section className="container">
        <div className={styles.aboutSection}>
          <h3 className={`${styles.backgroundText} ${brownSugar.className}`}>
            Wild & Free
          </h3>

          <motion.div
            className={styles.textContainer}
            variants={aboutContainer}
            initial="hidden"
            whileInView="show"
          >
            <motion.h2 variants={left} key="about">
              About
            </motion.h2>
            <motion.p variants={bottom}>
              I have been working in the addiction and mental health field since
              2011 in various roles with children, adolescents and adults. I
              have experience with addictions, mood/anxiety disorders,
              personality disorders, trauma, sexual wellness, relationship
              concerns, emotion management, phase of life and identity concerns.
              I am welcoming of all cultures/identities.
            </motion.p>
            <br />
            <motion.p variants={bottom}>
              My approach is person centered and integrative in order to meet
              the unique needs of each individual. I primarily use cognitive
              behavioral therapy, acceptance & commitment therapy, narrative
              therapy, solution focused and strength based modalities. I value
              the therapeutic alliance and focus on building client resiliency
              and motivation for growth and healing.
            </motion.p>
            <motion.div className={styles.signatureContainer} variants={bottom}>
              <p className={styles.signature}>- Camille Jensen</p>
              <p className={styles.signatureSubtitle}>
                MA, LPCC, LADC Mental Health Professional, Owner
              </p>
            </motion.div>
          </motion.div>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/images/camillejensen.jpg"
              alt="camille jensen profile picture"
              fill={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
