import Image from "next/image";
import styles from "./ServiceFour.module.scss";

const ServiceFour = ({ img, service, desc }) => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className={styles.imgContainer}>
          <Image src={img} alt="camille jensen profile picture" fill={true} />
        </div>
        <h5>{service}</h5>
        <p className={styles.subtitle}>{desc}</p>
      </div>
    </>
  );
};

export default ServiceFour;
