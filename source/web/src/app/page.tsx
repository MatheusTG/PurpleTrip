import { Room } from "@/@types/room";
import FilterAside from "@/components/home/filter-aside";
import FilterBar from "@/components/home/filter-bar";
import Menu from "@/components/home/menu";
import RoomListing from "@/components/home/rooms-listing";
import TripAdd from "@/components/home/trip-add";
import { apiClient } from "@/services/api/client";
import styles from "./page.module.css";

type Props = {
  searchParams: Promise<{
    minPrice?: string;
    maxPrice?: string;
    singleBed?: string;
    doubleBed?: string;
    stayDays?: string;
    title?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
  const singleBed = params.singleBed === "1" ? true : params.singleBed === "0" ? false : undefined;
  const doubleBed = params.doubleBed === "1" ? true : params.doubleBed === "0" ? false : undefined;
  const stayDays = params.stayDays ? Number(params.stayDays) : undefined;
  const title = params.title;

  const queryString = new URLSearchParams();
  if (minPrice !== undefined) queryString.append("minPrice", String(minPrice));
  if (maxPrice !== undefined) queryString.append("maxPrice", String(maxPrice));
  if (singleBed !== undefined) queryString.append("singleBed", singleBed ? "1" : "0");
  if (doubleBed !== undefined) queryString.append("doubleBed", doubleBed ? "1" : "0");
  if (stayDays !== undefined) queryString.append("stayDays", String(stayDays));
  if (title) queryString.append("title", title);

  const {
    data: rooms,
    message,
    status,
  } = await apiClient<Room[]>(`/api/room?${queryString.toString()}`, { method: "GET" });

  const displayMessage = status === 204 ? "Nenhum quarto encontrado" : message || "";

  return (
    <article className={styles.homeContainer}>
      <Menu />
      <TripAdd />
      <div className={`${styles.listingContainer} container`}>
        <div className={styles.filterBarPosition}>
          <FilterBar />
        </div>
        <FilterAside />
        <RoomListing data={rooms || []} message={displayMessage} />
      </div>
    </article>
  );
}
