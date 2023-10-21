import styles from "./Faq.module.scss";
import FaqQuestion from "./FaqQuestion";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <h3>Frequently Asked Questions</h3>

          <div className={styles.faqContainer}>
            <FaqQuestion
              question="How do I know if I need counseling?"
              answer="If you're facing emotional, mental, or relational challenges that affect your quality of life, counseling can be a valuable resource. However, you don't need to be in crisis to benefit; many seek counseling for personal growth or to improve well-being."
            />
            <FaqQuestion
              question="What can I expect from my first session?"
              answer="The first session is generally a get-to-know-you meeting where your counselor will ask about your reasons for seeking counseling, your background, and any specific goals you have. It's also an opportunity for you to see if you feel comfortable with the counselor."
            />
            <FaqQuestion
              question="Is everything I share in my session confidential?"
              answer="Yes, confidentiality is a cornerstone of counseling. There are some legal exceptions, such as if there's a risk of harm to yourself or others, but these will be fully explained in your initial session."
            />
            <FaqQuestion
              question="How long does each counseling session last?"
              answer="A typical session lasts about 50 minutes, though this can vary depending on the service provided. Frequency and duration are tailored to meet your individual needs."
            />
            <FaqQuestion
              question="Do you offer online or virtual sessions?"
              answer="Yes, we offer both in-person and online sessions to accommodate your schedule and comfort level. Both formats are effective and maintain the same standard of confidentiality."
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
