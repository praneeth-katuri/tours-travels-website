import styles from "./PackageCard.module.css";

export default function PackageCard({ tour }) {
  return (
    <div className={styles.tourcard}>
      <h2>{tour.name}</h2>
      <p>{tour.duration}</p>
      <ul>
        {tour.highlights.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>{tour.category}</p>
    </div>
  );
}
