import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <main>
      <div className={styles["bg-image"]}>
        <h1>Discover Your Next Adventure with US</h1>
        <p>
          Explore top destionations, Exclusive Pacakges, and unforgettable
          experiences.
        </p>
        <div>
            <button>Explore Packages</button>
            <button>Contact Us</button>
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
