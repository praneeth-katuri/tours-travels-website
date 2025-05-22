import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Tours & Travels. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
