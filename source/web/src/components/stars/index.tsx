"use client";

import styles from "./stars.module.css";
import { StarIcon } from "lucide-react";

export type StarsAmount = 0 | 1 | 2 | 3 | 4 | 5;

type Props = {
  size: number;
  starsAmount: StarsAmount;
  setStarsAmount?: React.Dispatch<React.SetStateAction<StarsAmount>>;
};

export default function Stars(props: Props) {
  const { size, starsAmount, setStarsAmount } = props;

  function handleClick(amount: StarsAmount) {
    if (setStarsAmount) {
      setStarsAmount(amount as StarsAmount);
    }
  }

  return (
    <ul className={styles.starList}>
      {[1, 2, 3, 4, 5].map((amount) => (
        <li key={amount} className={styles.starItem}>
          <StarIcon
            onClick={() => handleClick(amount as StarsAmount)}
            size={size}
            fill={starsAmount >= amount ? "#FFD21D" : "transparent"}
          />
        </li>
      ))}
    </ul>
  );
}
