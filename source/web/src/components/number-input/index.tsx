import { ReactNode } from "react";
import styles from "./money-input.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

type Props = {
  id: string;
  label?: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  beforeIcon?: ReactNode;
};

export default function NumberInput(props: Props) {
  const { id, label, value, setValue, beforeIcon } = props;

  function handleChange(value: string) {
    setValue(Number(value));
  }

  function handleAdd() {
    setValue(value + 1);
  }

  function handleMinus() {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <div className={styles.numberInputContainer} style={{ marginTop: label ? "0.25rem" : "" }}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {beforeIcon && <span className={styles.beforeIcon}>{beforeIcon}</span>}
      <input
        className={styles.numberInput}
        type="number"
        id={id}
        value={value}
        onChange={({ target }) => handleChange(target.value)}
        min={0}
      />
      <div className={styles.controls}>
        <ChevronUpIcon size={12} color="currentColor" onClick={handleAdd} />
        <ChevronDownIcon size={12} color="currentColor" onClick={handleMinus} />
      </div>
    </div>
  );
}
