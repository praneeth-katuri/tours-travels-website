import tours from "../data/packagesData";
import PackageCard from "./PackageCard/PackageCard";

function PackageSection() {
  return (
    <section className="pkg-section">
      {tours.map((tour) => (
        <PackageCard tour={tour} key={tour.name} />
      ))}
    </section>
  );
}

export default PackageSection;
