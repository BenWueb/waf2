"use client";

import styles from "./Stats.module.scss";
import { MdCalendarToday, MdPeopleAlt, MdAccessTime } from "react-icons/md";
import localFont from "next/font/local";
import CountUp from "react-countup";

const brownSugar = localFont({
  src: "../../../public/fonts/brownsugarfont/BrownSugar.otf",
});

function Stats() {
  return (
    <div className="container">
      <section className={styles.section}>
        <div className={styles.statCard}>
          <h4 className={brownSugar.className}>
            {" "}
            <span className={styles.icon}>
              <MdCalendarToday />
            </span>
            <div className={`${styles.number} ${styles.years}`}>
              <CountUp start={0} end={13} suffix="+" duration={2} />
            </div>
          </h4>
          <p>Years experience</p>
        </div>
        <div className={styles.statCard}>
          <h4 className={brownSugar.className}>
            <span className={styles.icon}>
              <MdPeopleAlt />
            </span>
            <div className={`${styles.number} ${styles.patients}`}>
              <CountUp start={200} end={256} suffix="+" duration={2} />
            </div>
          </h4>
          <p>Patients</p>
        </div>
        <div className={styles.statCard}>
          <h4 className={brownSugar.className}>
            {" "}
            <span className={styles.icon}>
              <MdAccessTime />
            </span>
            <div className={styles.number}>
              <CountUp
                start={1400}
                end={1500}
                suffix="+"
                duration={2}
                // useEasing={true}
              />
            </div>
          </h4>
          <p>Hours in session</p>
        </div>
      </section>
    </div>
  );
}

export default Stats;
