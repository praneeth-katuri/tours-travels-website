import styles from "./PackageHeroSection.module.css";

const PackageHeroSection = () => {
  return (
    <div className={`${styles.hero} text-center`}>
      <h1>Explore Our Tour Packages</h1>
      <p>Choose the perfect destionation for your next adventure</p>
    </div>
  );
};

export default PackageHeroSection;
