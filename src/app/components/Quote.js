import styles from "./Quote.module.scss";

const Quote = () => {
  return (
    <>
      {" "}
      <section className={styles.quoteSection}>
        <div className="container">
          <div className={styles.quoteContainer}>
            <h4>"All good things are Wild and Free"</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
