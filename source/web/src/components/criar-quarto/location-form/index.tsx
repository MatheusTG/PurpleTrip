"use client";

import styles from "./location-form.module.css";
import genericStyles from "../generic-form-styles.module.css";
import Select from "@/components/select";
import { useState } from "react";

export default function LocationForm() {
  const [country, setCountry] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [complement, setComplement] = useState<string | null>(null);

  return (
    <form className={styles.formContainer}>
      <div className={styles.topInputLine}>
        <Select
          id={"country"}
          activeValue={country}
          handleChange={option => setCountry(option)}
          label="País"
          options={["Argentina", "Brasil", "Estados Unidos", "México", "Portugal"]}
        />

        <div className={genericStyles.inputContainer}>
          <label className={genericStyles.label} htmlFor="title-input">
            CEP
          </label>
          <input className={genericStyles.input} type="text" id="title-input" placeholder="00000-00" />
        </div>

        <Select
          id={"state"}
          activeValue={state}
          handleChange={option => setState(option)}
          label="Estado"
          options={["Paraná", "Santa Caratina"]}
        />

        <Select
          id={"city"}
          activeValue={city}
          handleChange={option => setCity(option)}
          label="Cidade"
          options={["Campo Mourão", "Araruna", "Peabiru"]}
        />
      </div>

      <div className={styles.bottomInputLine}>
        <div className={`${styles.complementInputContainer} ${genericStyles.inputContainer}`}>
          <label className={styles.label} htmlFor="complement-input">
            Descrição
          </label>
          <textarea
            className={`${styles.complementInput} ${genericStyles.input}`}
            id="complement-input"
            value={complement || ""}
            onChange={({ target }) => setComplement(target.value)}
          />
        </div>

        <div className={styles.neighborhoodAndStreetContainer}>
          <div className={genericStyles.inputContainer}>
            <label className={genericStyles.label} htmlFor="neighborhood-input">
              Bairro
            </label>
            <input className={genericStyles.input} type="text" id="neighborhood-input" />
          </div>
          <div className={genericStyles.inputContainer}>
            <label className={genericStyles.label} htmlFor="street-input">
              Rua
            </label>
            <input className={genericStyles.input} type="text" id="street-input" />
          </div>
        </div>

        <div className={styles.numberAndButtonContainer}>
          <div className={genericStyles.inputContainer}>
            <label className={genericStyles.label} htmlFor="number-input">
              Número
            </label>
            <input className={genericStyles.input} type="text" id="number-input" />
          </div>

          <button className={genericStyles.nextStepButton}>Próximo</button>
        </div>
      </div>
    </form>
  );
}
