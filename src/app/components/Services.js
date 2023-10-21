import styles from "./Services.module.scss";
import Service from "./Service";
import Servicetwo from "./ServiceTwo";
import ServiceThree from "./ServiceThree";
import Image from "next/image";
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

const Services = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headerContainer}>
            <h2>Services</h2>
            <p>What We Offer</p>
          </div>
          <div className={styles.servicesContainer}>
            <ServiceThree
              icon={<SlPeople />}
              img="/images/holdinghands.jpg"
              service="Couples Counseling"
              desc=" Navigate challenges, enhance communication, and foster a deeper connection."
            />
            <ServiceThree
              icon={<SlUser />}
              img="/images/pinkflower.jpg"
              service="Individual Counseling"
              desc="Personalized one-on-one counseling sessions."
            />
            <ServiceThree
              icon={<SlChemistry />}
              img="/images/assessment.jpg"
              service="Chemical Health Assessments"
              desc="Comprehensive Assessments for Informed Chemical Health Solutions."
            />
            <ServiceThree
              icon={<SlBookOpen />}
              img="/images/tree.jpg"
              service="Mental Health Assessments"
              desc="Evaluate Your Well-being and start your mental health journey"
            />
            <ServiceThree
              icon={<SlBubbles />}
              img="/images/handonwater.jpg"
              service="Anxiety"
              desc="Empowering you to conquer fears, reduce stress, and live a calmer life."
            />
            <ServiceThree
              icon={<SlCompass />}
              img="/images/persononmountain.jpg"
              service="Depression"
              desc="Expert support to lift the fog, restore hope, and reclaim your life."
            />
            <ServiceThree
              icon={<SlGraduation />}
              img="/images/glasses.jpg"
              service="ADHD"
              desc="Manage focus, improve organization, and cultivate a balanced life."
            />
            <ServiceThree
              icon={<SlGraph />}
              img="/images/bridgeinforest.jpg"
              service="Bi-Polar"
              desc="Providing expert guidance to manage mood swings and achieve emotional balance."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
