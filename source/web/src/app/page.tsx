import FilterBar from "@/components/home/filter-bar";
import Menu from "@/components/home/menu";
import TripAdd from "@/components/home/trip-add";
import styles from "./page.module.css";
import FilterAside from "@/components/home/filter-aside";

export default function Home() {
  return (
    <article className={styles.homeContainer}>
      <Menu />
      <TripAdd />
      <div className={`${styles.listingContainer} container`}>
        <div className={styles.filterBarPosition}>
          <FilterBar />
        </div>
        <FilterAside />
      </div>
    </article>
  );
}
