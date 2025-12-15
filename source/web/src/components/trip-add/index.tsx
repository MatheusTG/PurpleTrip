"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./trip-add.module.css";

export default function TripAdd() {
  const [tripAddStep, setTripAddStep] = useState(0);

  const tripAddData = [
    {
      label: "Santuario de la Virgen de los Remedios",
      title: "México",
      image: <Image src={"/trip-image-1.webp"} alt="Imagem de paisagem bonita" width={1040} height={420} />,
    },
    {
      label: "Aproveite e faça agora sua reserva em Bali",
      title: "Indonésia",
      image: <Image src={"/trip-image-2.webp"} alt="Imagem de paisagem bonita" width={1040} height={420} />,
    },
    {
      label: "Explore as luzes vibrantes e a cultura de Tóquio",
      title: "Japão",
      image: <Image src={"/trip-image-3.webp"} alt="Imagem de paisagem bonita" width={1040} height={420} />,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (tripAddData.length - 1 === tripAddStep) {
        setTripAddStep(0);
      } else {
        setTripAddStep(tripAddStep + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [tripAddData.length, tripAddStep]);

  return (
    <section className={styles.tripAddSection}>
      <div className={`${styles.tripAddContent} container`}>
        <p className={styles.tripAddDescription}>{tripAddData[tripAddStep].label}</p>
        <h1 className={styles.TripAddTitle}>{tripAddData[tripAddStep].title}</h1>
        <Link href={"#"} className={styles.actionButton}>
          Mais informações
        </Link>
        <div className={styles.tripAddImageContainer} style={{ transform: `translate(${tripAddStep * 1040}px)` }}>
          <ul className={styles.tripAddImageList}>
            {tripAddData
              .slice()
              .reverse()
              .map(item => (
                <li key={item.label}>{item.image}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className={styles.buildingsImage}>
        <Image src={"/buildings.svg"} alt="Prédios" width={409} height={292} />
      </div>
    </section>
  );
}
