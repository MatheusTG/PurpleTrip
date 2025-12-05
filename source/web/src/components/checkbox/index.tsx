import styles from "./checkbox.module.css";
import { CheckIcon } from "lucide-react";

type Props = {
  id: string;
  label: string;
  check: boolean;
  setCheck: (value: boolean) => void;
};

export default function Checkbox(props: Props) {
  const { id, label, check, setCheck } = props;

  function handleClick() {
    setCheck(!check);
  }

  return (
    <div className={styles.checkboxContainer} onClick={handleClick}>
      <span
        className={`
          ${styles.checkbox} 
          ${check ? styles.checkboxActive : ""}
        `}
      >
        {check && (
          <div className={styles.checkboxIconActive}>
            <CheckIcon size={16} color="currentColor" />
          </div>
        )}
      </span>
      <label className={styles.checkboxLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
