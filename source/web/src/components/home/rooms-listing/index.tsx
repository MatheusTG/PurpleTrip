"use client";

import styles from "./room-listing.module.css";
import RoomItem from "../room-item";
import { Room } from "@/@types/room";

type Props = {
  data: Room[];
};

export default function RoomListing(props: Props) {
  const { data } = props;

  return (
    <div>
      <ul className={styles.roomListing}>
        {data.map((room) => (
          <li key={room.id}>
            <RoomItem data={room} />
          </li>
        ))}
      </ul>
      <button className={styles.showMoreButton}>Mostrar mais</button>
    </div>
  );
}
