"use client";

import { Room } from "@/@types/room";
import RoomItem from "../room-item";
import styles from "./room-listing.module.css";

type Props = {
  data: Room[];
  message?: string;
};

export default function RoomListing({ data, message }: Props) {
  return (
    <div>
      {message && <div className={styles.message}>{message}</div>}
      <ul className={styles.roomListing}>
        {data.map(room => (
          <li key={room.id}>
            <RoomItem data={room} />
          </li>
        ))}
      </ul>

      {/* {data.length > 0 && <button className={styles.showMoreButton}>Mostrar mais</button>} */}
    </div>
  );
}
