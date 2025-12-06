"use client";

import { Room } from "@/@types/room";
import styles from "./room-item.module.css";
import {
  BedDoubleIcon,
  Building2Icon,
  CheckIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/utils/format-currency";

type Props = {
  data: Room;
};

export default function RoomItem(props: Props) {
  const { data } = props;

  return (
    <div className={styles.roomItemContainer}>
      <Image
        className={styles.roomImage}
        src="/mock/hotel-image.webp"
        alt="Hotel bed image"
        width={312}
        height={156}
      />
      <div className={styles.roomLocationTypeContainer}>
        <Building2Icon size={16} strokeWidth={3} />
        <span className={styles.roomLocationTypeLabel}>{data.category}</span>
      </div>
      <span className={styles.roomSale}>30% off</span>

      <div className={styles.roomMain}>
        <div className={styles.roomInformations}>
          <h3 className={styles.roomName}>{data.title}</h3>

          <div className={styles.roomRatingAndLocationContainer}>
            <div className={styles.ratingContainer}>
              <span className={styles.ratingAmount}>{data.rating}</span>
              <span className={styles.ratingLabel}>
                {data.numberOfReviews} avaliações
              </span>
            </div>
            <div className={styles.roomLocationContainer}>
              <MapPinIcon size={16} color="currentColor" strokeWidth={3} />
              <span className={styles.roomLocationLabel}>
                {data.address.city}, {data.address.country}
              </span>
            </div>
          </div>

          <ul>
            <li className={styles.amenityItem}>
              <CheckIcon size={16} color="currentColor" strokeWidth={3} />
              <span className={styles.amenityItemLabel}>
                {
                  data.policies.filter(
                    (policie) => policie.type === "amenity"
                  )[0].name
                }
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.paymentAndGuestsContainer}>
          <div className={styles.payment}>
            <span className={styles.paymentAmount}>
              {formatCurrency(data.dailyPrice)}
            </span>
            <span className={styles.paymentLabel}>por diária</span>
          </div>
          <div className={styles.guestsContainer}>
            <div className={styles.guestsItem}>
              <span>
                {data.number_of_single_bed + data.number_of_double_bed}
              </span>
              <BedDoubleIcon size={24} color="currentColor" />
            </div>
            <div className={styles.guestsItem}>
              <span>{data.maximum_guests}</span>
              <UserIcon size={24} color="currentColor" />
            </div>
          </div>
        </div>
        <Link className={styles.roomReserveButton} href="#">
          Reservar
        </Link>
      </div>
    </div>
  );
}
