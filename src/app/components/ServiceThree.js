import Image from "next/image";
import styles from "./ServiceThree.module.scss";

const ServiceThree = ({ img, service, desc, icon }) => {
  return (
    <>
      <div
        className={styles.serviceContainer}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={styles.backgroundColor}></div>
        <div className={styles.icon}>{icon}</div>
        <h5>{service}</h5>
        <p className={styles.subtitle}>{desc}</p>
      </div>
    </>
  );
};

export default ServiceThree;
