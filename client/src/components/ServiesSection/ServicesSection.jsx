import styles from "./ServicesSection.module.css";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section>
      <div className={`${styles.hero} text-center`}>
        <h1>Explore Our Tour Packages</h1>
        <p>Choose the perfect destionation for your next adventure</p>
      </div>
      <div className={styles.servicesSection}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className={styles.card} key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
