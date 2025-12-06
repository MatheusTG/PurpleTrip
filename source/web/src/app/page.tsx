import FilterBar from "@/components/home/filter-bar";
import Menu from "@/components/home/menu";
import TripAdd from "@/components/home/trip-add";
import styles from "./page.module.css";
import FilterAside from "@/components/home/filter-aside";
import RoomListing from "@/components/home/rooms-listing";
import { rooms } from "@/mock/rooms";

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
        <RoomListing data={rooms} />
      </div>
    </article>
  );
}
