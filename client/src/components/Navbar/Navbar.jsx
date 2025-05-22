import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcontent}>
        <div className={styles.logo}>
          <Link to="/">
            Tours & <span>Travels</span>
          </Link>
        </div>
        <div className={styles["nav-links"]}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
