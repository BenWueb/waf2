"use client";

import styles from "./Accolades.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Accolades = () => {
  const accoladesContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const accolade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.accoladesContainer}
          variants={accoladesContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.div className={styles.accolade} variants={accolade}>
            <Image
              src="/images/psychologytodaylogo.png"
              alt="psychology today logo"
              fill={true}
            />
          </motion.div>
          <motion.div className={styles.accolade} variants={accolade}>
            <Image
              src="/images/minnesotaaccolade.png"
              alt="psychology today logo"
              fill={true}
            />
          </motion.div>
          <motion.div className={styles.accolade} variants={accolade}>
            <Image
              src="/images/stmarysaccolade.webp"
              alt="psychology today logo"
              fill={true}
            />
          </motion.div>
          <motion.div className={styles.accolade} variants={accolade}>
            <Image
              src="/images/psychologytodaylogo.png"
              alt="psychology today logo"
              fill={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accolades;
