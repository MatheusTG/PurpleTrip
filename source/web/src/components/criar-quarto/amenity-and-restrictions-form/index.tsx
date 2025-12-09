"use client";
import styles from "./amenity-and-restrictions-form.module.css";
import genericStyles from "../generic-form-styles.module.css";
import {
  BabyIcon,
  BeerIcon,
  CarIcon,
  CigaretteOffIcon,
  EarIcon,
  FanIcon,
  PartyPopperIcon,
  PawPrintIcon,
  PlusIcon,
  TvIcon,
  UsersRoundIcon,
  UtensilsIcon,
  WifiIcon,
} from "lucide-react";
import { useState } from "react";

const amenities = [
  { name: "Wi-Fi", icon: <WifiIcon size={24} color="currentColor" /> },
  { name: "Ar condicionado", icon: <FanIcon size={24} color="currentColor" /> },
  { name: "Café da manhã", icon: <UtensilsIcon size={24} color="currentColor" /> },
  { name: "Estacionamento", icon: <CarIcon size={24} color="currentColor" /> },
  { name: "TV", icon: <TvIcon size={24} color="currentColor" /> },
];

const restrictions = [
  { name: "Fumar", icon: <CigaretteOffIcon size={24} color="currentColor" /> },
  { name: "Festas", icon: <PartyPopperIcon size={24} color="currentColor" /> },
  { name: "Visitas", icon: <UsersRoundIcon size={24} color="currentColor" /> },
  { name: "Pets", icon: <PawPrintIcon size={24} color="currentColor" /> },
  { name: "Crianças (7 anos ou menos)", icon: <BabyIcon size={24} color="currentColor" /> },
  { name: "Barulho", icon: <EarIcon size={24} color="currentColor" /> },
  { name: "Álcool", icon: <BeerIcon size={24} color="currentColor" /> },
];

export default function AmenityAndRestrictionsForm() {
  const [selectedAmenities, setSelectedAmenity] = useState<string[]>([]);
  const [selectedRestrictions, setSelectedRestrictions] = useState<string[]>([]);

  function toggleSelected(setState: React.Dispatch<React.SetStateAction<string[]>>, value: string) {
    setState(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else {
        return [...prev, value];
      }
    });
  }

  return (
    <form className={styles.formContainer}>
      <div>
        <h3 className={styles.subtitle}>Comodidades</h3>
        <ul className={styles.itemList}>
          {amenities.map(amenity => (
            <li
              key={amenity.name}
              className={`${styles.item} ${selectedAmenities.includes(amenity.name) ? styles.active : ""}`}
              onClick={() => toggleSelected(setSelectedAmenity, amenity.name)}
            >
              {amenity.icon}
              <span className={styles.itemLabel}>{amenity.name}</span>
            </li>
          ))}
          <li className={styles.item}>
            <PlusIcon size={24} color="currentColor" />
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles.subtitle}>Restrições</h3>
        <ul className={styles.itemList}>
          {restrictions.map(restriction => (
            <li
              key={restriction.name}
              className={`${styles.item} ${selectedRestrictions.includes(restriction.name) ? styles.active : ""}`}
              onClick={() => toggleSelected(setSelectedRestrictions, restriction.name)}
            >
              {restriction.icon}
              <span className={styles.itemLabel}>{restriction.name}</span>
            </li>
          ))}
          <li className={styles.item}>
            <PlusIcon size={24} color="currentColor" />
          </li>
        </ul>
      </div>
      <button className={`${genericStyles.nextStepButton} ${styles.button}`}>Anunciar</button>
    </form>
  );
}
