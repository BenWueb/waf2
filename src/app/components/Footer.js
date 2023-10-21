import styles from "./Footer.module.scss";
import { BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
import { MdNorthEast } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`container ${styles.categories}`}>
            <div className={styles.category}>
              <h5 className="sectionSubtitle">General</h5>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Process</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.category}>
              <h5 className="sectionSubtitle">Clients</h5>
              <ul>
                <li>
                  <Link href="/" className={`btn ${styles.button} `}>
                    client portal{" "}
                    <span>
                      <MdNorthEast
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.category}>
              <h5 className="sectionSubtitle">Contact</h5>
              <ul>
                <li>info@wildandfree.com</li>
                <li>1250 E Moore Lake Dr | Fridley, MN</li>
                <li>555-555-5555</li>
              </ul>
            </div>
            <div className={`${styles.category} ${styles.socialCategory}`}>
              <h5 className="sectionSubtitle">Social</h5>
              <ul className={styles.socialContainer}>
                <li>
                  <BsTwitter />
                </li>
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <BsLinkedin />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.copyrightContainer}>
            &copy; 2023 Wild & Free LLC | Privacy Policy | Terms & Conditions
          </div>
          <div className={styles.signatureContainer}>
            Designed & Developed by Strategic Solutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
