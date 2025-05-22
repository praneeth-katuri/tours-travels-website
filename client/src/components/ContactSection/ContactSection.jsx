import { useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to an API or log it
    console.log("Submitted Data:", formData);
    alert("Message sent!");

    // Optionally reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <div className={`${styles.hero} text-center`}>
        <h1>Contact Us</h1>
        <p>
          Have questions or need help with your tour? Fill out the form below:
        </p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p>
            Have questions or need help with your tour? Fill out the form below:
          </p>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
