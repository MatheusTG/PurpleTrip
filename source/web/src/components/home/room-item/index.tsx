"use client";

import { Room } from "@/@types/room";
import { formatCurrency } from "@/utils/format-currency";
import { hashString } from "@/utils/hash-string";
import { BedDoubleIcon, Building2Icon, CheckIcon, MapPinIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./room-item.module.css";

type Props = {
  data: Room;
};

const mockImagePaths = ["/mock/hotel-image.webp", "/hotel-image-2.webp"];

export default function RoomItem(props: Props) {
  const { data } = props;

  const totalBeds = data.singleBeds + data.doubleBeds;

  const imageIndex = hashString(data.id) % mockImagePaths.length;
  const imagePath = mockImagePaths[imageIndex];

  return (
    <div className={styles.roomItemContainer}>
      <Image className={styles.roomImage} src={imagePath} alt="Hotel bed image" width={312} height={156} />
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
              <span className={styles.ratingAmount}>{data.rating || 0}</span>
              <span className={styles.ratingLabel}>{data.numberOfReviews} avaliações</span>
            </div>
            <div className={styles.roomLocationContainer}>
              <MapPinIcon size={16} color="currentColor" strokeWidth={3} />
              <span className={styles.roomLocationLabel}>
                {data.address?.city || "Cidade"}, {data.address?.country || "País"}
              </span>
            </div>
          </div>

          {data.policies && data.policies.length > 0 && (
            <ul>
              <li className={styles.amenityItem}>
                <CheckIcon size={16} color="currentColor" strokeWidth={3} />
                <span className={styles.amenityItemLabel}>
                  {data.policies.filter(policie => policie.type === "amenity")[0].name}
                </span>
              </li>
            </ul>
          )}

          <div className={styles.stayDaysInfo}>
            <span className={styles.stayDaysLabel}>
              Estadia: {data.minimumStayDays || 1} - {data.maximumStayDays || 30} dias
            </span>
          </div>
        </div>
        <div className={styles.paymentAndGuestsContainer}>
          <div className={styles.payment}>
            <span className={styles.paymentAmount}>{formatCurrency(data.dailyPrice || 0)}</span>
            <span className={styles.paymentLabel}>por diária</span>
          </div>
          <div className={styles.guestsContainer}>
            <div className={styles.guestsItem}>
              <span>{totalBeds}</span>
              <BedDoubleIcon size={24} color="currentColor" />
            </div>
            <div className={styles.guestsItem}>
              <span>{data.maximum_guests || "-"}</span>
              <UserIcon size={24} color="currentColor" />
            </div>
          </div>
        </div>
        <Link className={styles.roomReserveButton} href="/reserva">
          Reservar
        </Link>
      </div>
    </div>
  );
}
