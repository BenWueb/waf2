"use client";

import styles from "./Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdNorthEast, MdEast } from "react-icons/md";

function Nav() {
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 300) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <section
        className={`${colorChange ? styles.sectionScroll : styles.section}`}
      >
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/wildandfreelogotransparent.svg"
                alt="wild and free logo"
                height={120}
                width={120}
              />
            </Link>
          </div>
          {/* <ul className={`${colorChange ? styles.menuScroll : styles.menu}`}> */}
          {/* <Link className={styles.link} href="#services">
              <li>about</li>
            </Link>
            <Link className={styles.link} href="#process">
              <li>services</li>
            </Link>
            <Link className={styles.link} href="#contact">
              <li>contact</li>
            </Link> */}
          {/* <Link className={styles.link} href="">
              <button className={`btn ${styles.button} btn-hover`}>
                client portal
              </button>
            </Link> */}
          <div className={styles.info}>
            <h3>1250 E Moore Lake Dr | Fridley, MN</h3>
            <h3>Info@wildandfree.com | 555-555-5555</h3>
            <div className={styles.buttonContainer}>
              <Link
                href="#contact"
                className={`btn ${styles.button} ${styles.buttonAnimate}`}
              >
                contact us{" "}
              </Link>
              <Link href="" className={`btn ${styles.button} `}>
                <div style={{ transform: "translateX(10px)" }}>
                  client portal{" "}
                </div>

                <span>
                  <MdNorthEast
                    style={{
                      height: "30px",
                      width: "30px",
                      verticalAlign: "middle",
                    }}
                  />
                </span>
              </Link>
            </div>
          </div>
          {/* </ul> */}
        </nav>
      </section>
    </>
  );
}
export default Nav;
