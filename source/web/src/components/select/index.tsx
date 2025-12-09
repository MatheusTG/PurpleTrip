"use client";

import { useState } from "react";
import styles from "./select.module.css";
import { ChevronDownIcon } from "lucide-react";

type Props = {
  id: string;
  label: string;
  activeValue: string | null;
  options: string[];
  handleChange: (value: string) => void;
};

export default function Select(props: Props) {
  const { id, label, activeValue, options, handleChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option: string) {
    handleChange(option);
    setIsOpen(false);
  }

  return (
    <div className={styles.selectContainer}>
      <div onClick={handleToggleOpen}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <div className={styles.input}>
          {!activeValue && <span className={styles.placeholder}>Selecione</span>}
          {activeValue && <span className={styles.activeValue}>{activeValue}</span>}
          <div>
            <ChevronDownIcon size={16} color="currentColor" />
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className={styles.optionList}>
          {options
            .filter(value => value !== activeValue)
            .map(option => (
              <li key={option} className={styles.optionItem} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
