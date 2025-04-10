import styles from "./AboutSection.module.css";
import aboutImg from "../../assets/images/trip.jpg"; // adjust path as needed

function AboutSection() {
  return (
    <section className={styles.about}>
      <div className={styles["hero-section"]}>
        <h1>About Us</h1>
        <p>Creating unforgettable travel experiences since 2020</p>
      </div>
      <div>
        <div className={styles.container}>
          <div>
            <p>
              Welcome to Tours & Travels! We are passionate about helping you
              explore the world with ease, comfort, and unforgettable
              experiences.
            </p>
            <p>
              With a curated selection of destinations, carefully designed
              packages, and a commitment to excellent customer service, our goal
              is to turn every journey into a cherished memory.
            </p>
            <p>
              Whether you're seeking adventure, relaxation, family bonding, or a
              romantic getaway, we’ve got something for everyone.
            </p>
          </div>
          <div>
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.why}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced travel planners</li>
          <li>Tailor-made packages</li>
          <li>24/7 customer support</li>
          <li>Handpicked accommodations and experiences</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
