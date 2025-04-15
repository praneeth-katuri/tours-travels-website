import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Custom Tour Planning",
    description:
      "We craft personalized itineraries tailored to your interests and schedule.",
  },
  {
    title: "24/7 Travel Support",
    description: "Get round-the-clock assistance during your entire journey.",
  },
  {
    title: "Visa & Documentation",
    description:
      "End-to-end help with visas, permits, and travel documentation.",
  },
  {
    title: "Airport Transfers",
    description: "Seamless pickups and drop-offs from all major airports.",
  },
  {
    title: "Local Guides",
    description:
      "Explore with knowledgeable local guides for a deeper experience.",
  },
  {
    title: "Group & Corporate Tours",
    description: "Specialized packages for families, friends, and companies.",
  },
];

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
          {services.map((service, idx) => (
            <div className={styles.card} key={idx}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
