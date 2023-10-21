import styles from "./ServicesFour.module.scss";
import ServiceFour from "./ServiceFour";
import Link from "next/link";
import {
  SlPeople,
  SlUser,
  SlBookOpen,
  SlChemistry,
  SlCompass,
  SlGraduation,
  SlGraph,
  SlBubbles,
} from "react-icons/sl";

const ServicesFour = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headerContainer}>
            <h2>Services</h2>
            <p>What We Offer</p>
          </div>
          <div className={styles.servicesContainer}>
            <ServiceFour
              icon={<SlPeople />}
              img="/images/holdinghands.jpg"
              service="Couples Counseling"
              desc=" Navigate challenges, enhance communication, and foster a deeper connection."
            />
            <ServiceFour
              icon={<SlUser />}
              img="/images/pinkflower.jpg"
              service="Individual Counseling"
              desc="Personalized one-on-one counseling sessions."
            />
            <ServiceFour
              icon={<SlChemistry />}
              img="/images/assessment.jpg"
              service="Chemical Health Assessments"
              desc="Comprehensive Assessments for Informed Chemical Health Solutions."
            />
            <ServiceFour
              icon={<SlBookOpen />}
              img="/images/tree.jpg"
              service="Mental Health Assessments"
              desc="Evaluate Your Well-being and start your mental health journey"
            />
            <ServiceFour
              icon={<SlBubbles />}
              img="/images/handonwater.jpg"
              service="Anxiety"
              desc="Empowering you to conquer fears, reduce stress, and live a calmer life."
            />
            <ServiceFour
              icon={<SlCompass />}
              img="/images/persononmountain.jpg"
              service="Depression"
              desc="Expert support to lift the fog, restore hope, and reclaim your life."
            />
            <ServiceFour
              icon={<SlGraduation />}
              img="/images/glasses.jpg"
              service="ADHD"
              desc="Manage focus, improve organization, and cultivate a balanced life."
            />
            <ServiceFour
              icon={<SlGraph />}
              img="/images/bridgeinforest.jpg"
              service="Bi-Polar"
              desc="Providing expert guidance to manage mood swings and achieve emotional balance."
            />
          </div>
          {/* <div className={styles.btnContainer}>
            <Link href="#contact" className={`btn ${styles.button}`}>
              our services
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ServicesFour;
