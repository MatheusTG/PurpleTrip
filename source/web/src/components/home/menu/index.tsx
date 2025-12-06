"use client";
import {
  BadgePercentIcon,
  BedDoubleIcon,
  CarTaxiFrontIcon,
  LuggageIcon,
  TicketsPlaneIcon,
} from "lucide-react";
import styles from "./menu.module.css";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [activeBarPositions, setActiveBarPositions] = useState<number[]>([]);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  const menuItens = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const positions = menuItens.current
      .filter(Boolean)
      .map((el) => el?.offsetLeft) as number[];
    setActiveBarPositions(positions);
    setCurrentPositionIndex(0);
  }, []);

  const menuItensData = [
    {
      label: "Quartos",
      icon: <BedDoubleIcon size={28} color="currentColor" />,
    },
    {
      label: "Promoções",
      icon: <BadgePercentIcon size={28} color="currentColor" />,
    },
    {
      label: "Taxis",
      icon: <CarTaxiFrontIcon size={28} color="currentColor" />,
    },
    {
      label: "Malas",
      icon: <LuggageIcon size={28} color="currentColor" />,
    },
    {
      label: "Passeios",
      icon: <TicketsPlaneIcon size={28} color="currentColor" />,
    },
  ];

  return (
    <nav>
      <ul className={`${styles.menuList} container`}>
        {menuItensData.map((item, index) => (
          <li
            key={item.label}
            ref={(el) => {
              menuItens.current[index] = el;
            }}
            className={`
              ${styles.menuItem} 
              ${index === currentPositionIndex ? styles.menuItemActive : ""}
            `}
            onClick={() => setCurrentPositionIndex(index)}
          >
            <div className={styles.menuIcon}>{item.icon}</div>
            <span className={styles.menuItemLabel}>{item.label}</span>
          </li>
        ))}
        <span
          className={styles.menuListBar}
          style={{ left: `${activeBarPositions[currentPositionIndex]}px` }}
        />
      </ul>
    </nav>
  );
}
