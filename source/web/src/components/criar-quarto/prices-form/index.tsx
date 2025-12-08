"use client";
import styles from "./prices-form.module.css";
import genericStyles from "../generic-form-styles.module.css";
import NumberInput from "@/components/number-input";
import { useState } from "react";
import Select from "@/components/select";
import { CalendarXIcon } from "lucide-react";

type DaysOfTheWeek = Record<"seg" | "ter" | "qua" | "qui" | "sex" | "sab" | "dom", boolean>;

export default function PricesForm() {
  const [dailyPrice, setDailyPrice] = useState(0);
  const [cancellationPolicy, setCancellationPolicy] = useState<string | null>(null);
  const [stayStart, setStayStart] = useState(1);
  const [activeDaysOfTheWeek, setActiveDaysOfTheWeek] = useState<DaysOfTheWeek>({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  });

  function toggleActiveDaysOfTheWeek(dayOftheWeek: keyof DaysOfTheWeek) {
    setActiveDaysOfTheWeek(prev => {
      const key = dayOftheWeek as keyof DaysOfTheWeek;
      const updated = { ...prev };
      updated[key] = !prev[key];
      return updated;
    });
  }

  return (
    <form className={styles.formContainer}>
      <div className={styles.topInputLine}>
        <div>
          <label className={genericStyles.label} htmlFor="dailyPrice-input">
            Diária
          </label>
          <NumberInput id="dailyPrice-input" value={dailyPrice} setValue={setDailyPrice} beforeIcon={"R$"} />
        </div>
        <Select
          id={"cancellationPolicy"}
          activeValue={cancellationPolicy}
          handleChange={option => setCancellationPolicy(option)}
          label="Política de cancelamento"
          options={["Flexível (até 1 dia antes)", "Rigido (até 1 semana antes)"]}
        />
      </div>

      <div className={styles.mediumInputLine}>
        <div>
          <label className={genericStyles.label} htmlFor="dailyPrice-input">
            Período de estadia
          </label>
          <div className={styles.stayInputContainer}>
            <NumberInput
              id="dailyPrice-input"
              value={stayStart}
              setValue={setStayStart}
              beforeIcon={"De"}
              AfterValue="dias"
            />
            <NumberInput
              id="dailyPrice-input"
              value={dailyPrice}
              setValue={setDailyPrice}
              beforeIcon={"Até"}
              AfterValue="dias"
            />
          </div>
        </div>

        <div>
          <label className={genericStyles.label} htmlFor="calendar-input">
            Calendário
          </label>
          <div>
            <div className={styles.unavailableDaysContainer}>
              <CalendarXIcon size={24} color="currentColor" />
              <span className={styles.unavailableDaysPlaceholder}>Dias indisponíveis</span>
            </div>
          </div>
        </div>
      </div>

      <div className={genericStyles.inputContainer}>
        <label className={genericStyles.label} htmlFor="calendar-input">
          Disponibilidade semanal
        </label>
        <ul className={styles.weekdaysSelectContainer}>
          {Object.keys(activeDaysOfTheWeek).map(dayOfTheWeek => (
            <li
              key={dayOfTheWeek}
              className={`
                ${styles.weekdaysSelectItem} 
                ${activeDaysOfTheWeek[dayOfTheWeek as keyof DaysOfTheWeek] ? styles.active : ""}`}
              onClick={() => toggleActiveDaysOfTheWeek(dayOfTheWeek as keyof DaysOfTheWeek)}
            >
              {dayOfTheWeek}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
