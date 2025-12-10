"use client";

import { ChevronRightIcon } from "lucide-react";
import styles from "./formBase.module.css";
import Image from "next/image";
import AmenityAndRestrictionsForm from "../amenity-and-restrictions-form";
import { useState } from "react";
import InformationsForm from "../informations-form";
import LocationForm from "../location-form";
import PricesForm from "../prices-form";

export default function Form() {
  const [activeForm, setActiveForm] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className={styles.formBaseContainer}>
      <div>
        <Image src={"/hotel-image-2.webp"} alt="Image of a hotel room." width={440} height={360} />
      </div>
      <div className={styles.formContent}>
        <div className={styles.breadcrumbs}>
          <button
            className={`${styles.breadcrumbsLink} ${activeForm === 1 ? styles.active : ""}`}
            onClick={() => setActiveForm(1)}
          >
            Informações
          </button>
          <ChevronRightIcon size={16} color="currentColor" />
          <button
            className={`${styles.breadcrumbsLink} ${activeForm === 2 ? styles.active : ""}`}
            onClick={() => setActiveForm(2)}
          >
            Localização
          </button>
          <ChevronRightIcon size={16} color="currentColor" />
          <button
            className={`${styles.breadcrumbsLink} ${activeForm === 3 ? styles.active : ""}`}
            onClick={() => setActiveForm(3)}
          >
            Preços e condições
          </button>
          <ChevronRightIcon size={16} color="currentColor" />
          <button
            className={`${styles.breadcrumbsLink} ${activeForm === 4 ? styles.active : ""}`}
            onClick={() => setActiveForm(4)}
          >
            Comodidades e restrições
          </button>
        </div>
        {activeForm === 1 && <InformationsForm />}
        {activeForm === 2 && <LocationForm />}
        {activeForm === 3 && <PricesForm />}
        {activeForm === 4 && <AmenityAndRestrictionsForm />}
      </div>
    </div>
  );
}
