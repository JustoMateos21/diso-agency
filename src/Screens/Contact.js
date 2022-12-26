import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div name="Contact" className={styles.contactContainer}>
      <p>Contact</p>
      <form
        action="https://getform.io/f/bbdbb7f3-2c9b-4132-abb4-e78f2389e744"
        method="POST"
        className={styles.form}
      >
        <label className={styles.label} for="name">
          Name
        </label>
        <input className={styles.input} type="text" name="name"></input>
        <label className={styles.label} for="email">
          Email
        </label>
        <input className={styles.input} type="email" name="email"></input>
        <label className={styles.label} for="message">
          Message
        </label>
        <textarea className={styles.messageInput}></textarea>
        <button className={styles.formBtn} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
