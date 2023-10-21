"use client";

import { useState, useRef } from "react";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import Spinner from "./Spinner";
import { IoMdClose } from "react-icons/io";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const form = useRef();

  // Phone number validation
  const handlePhoneNumberChange = (event) => {
    const cleanedInput = event.target.value.replace(/\D/g, "");

    const strippedInput = cleanedInput.replace(/-/g, "");

    const formattedPhoneNumber = strippedInput.replace(
      /^(\d{1,3})?[-.\s]?(\d{1,3})?[-.\s]?(\d{1,4})?$/,
      (match, p1, p2, p3) => {
        let phoneNumber = "";
        if (p1) phoneNumber += p1;
        if (p2) phoneNumber += "-" + p2;
        if (p3) phoneNumber += "-" + p3;
        return phoneNumber;
      }
    );

    setPhoneNumber(formattedPhoneNumber);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        "template_rsobroq",
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
    } catch (error) {
      console.log(error);
    }
    setPhoneNumber("");
    contactForm.reset();
    setLoading(false);
    setModal(true);
  };

  return (
    <>
      {modal && (
        <Modal
          className={styles.modal}
          isOpen={modal}
          onRequestClose={() => setModal(false)}
        >
          <IoMdClose className={styles.close} onClick={() => setModal(false)} />

          <h3 className="sectionTitle">Request Sumbmitted!</h3>
          <p>
            Thank you for your request. You will hear back from our team
            shortly.
          </p>
        </Modal>
      )}

      <section id="contact" className={styles.section}>
        <form
          className={styles.form}
          ref={form}
          id="contactForm"
          onSubmit={onSubmit}
        >
          <div className={styles.formTextArea}>
            <h2 className={styles.header}>
              Get in Touch: Your Path to Well-being Starts Here
            </h2>
            <p>
              We're here to listen and guide you on your journey to mental and
              emotional well-being. Reach out to us today to schedule an
              appointment or to learn more about how our specialized services
              can support your individual needs.
            </p>
            <p>
              Your path to a healthier, happier you starts with a simple message
              or call.
            </p>
          </div>
          <div className={styles.inputArea}>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <h3 className="sectionSubtitle">contact us</h3>
                <label htmlFor="name" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <label htmlFor="email" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <label htmlFor="phone" />
                <input
                  type="text"
                  name="phone"
                  maxLength="12"
                  minLength="12"
                  id="phone"
                  placeholder="Phone"
                  onChange={handlePhoneNumberChange}
                  value={phoneNumber}
                  required
                />

                <label htmlFor="describe" />
                <textarea
                  name="describe"
                  id="describe"
                  placeholder="Tell us why you are seeking help"
                  required
                />

                <button className={`btn ${styles.btn}`} type="submit">
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </section>

      {/* SSLabs Email and phone  */}
    </>
  );
};

export default Form;
