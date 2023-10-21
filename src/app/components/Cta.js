import styles from "./Cta.module.scss";
import Link from "next/link";
import localFont from "next/font/local";
import Stats from "./Stats";

const brownSugar = localFont({
  src: "../../../public/fonts/brownsugarfont/BrownSugar.otf",
});

function Cta() {
  return (
    <section className={styles.ctasection}>
      <div className="container">
        <header className={styles.cta}>
          <h1 className={brownSugar.className}>
            <span>Wild &</span> <span>Free</span> <br />{" "}
            <span className={styles.counseling}>Counseling</span>
          </h1>
          <h3>
            Take the First Step: Your Journey to <br />
            Well-being Starts Here
          </h3>
          {/* <div className={styles.ctaButtons}>
            <Link href="#services" className="btn">
              contact us{" "}
            </Link>
          </div> */}
          {/* <Link href="#services" className={`btn ${styles.ctaBtn}`}>
            our services
          </Link> */}
        </header>
      </div>
    </section>
  );
}
export default Cta;
