import FilterBar from "@/components/home/filter-bar";
import Menu from "@/components/home/menu";
import TripAdd from "@/components/home/trip-add";
import styles from "./page.module.css";

export default function Home() {
  return (
    <article>
      <Menu />
      <TripAdd />
      <div className={styles.filterBarPosition}>
        <FilterBar />
      </div>
    </article>
  );
}
