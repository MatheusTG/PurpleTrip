"use client";

import NumberInput from "@/components/number-input";
import styles from "./informationsForm.module.css";
import Select from "@/components/select";
import { BedDoubleIcon, BedSingleIcon } from "lucide-react";
import { useState } from "react";

export default function InformationsForm() {
  const [category, setCategory] = useState<string | null>(null);
  const [numberOfDoubleBed, setNumberOfDoubleBed] = useState(1);
  const [numberOfSingleBed, setNumberOfSingleBed] = useState(1);
  const [description, setDescription] = useState<string>("");

  return (
    <form className={styles.formContainer}>
      <div className={styles.formColumn}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="title-input">
            Título
          </label>
          <input className={styles.input} type="text" id="title-input" />
        </div>

        <div className={styles.textareaContainer}>
          <label className={styles.label} htmlFor="description-input">
            Descrição
          </label>
          <textarea
            className={styles.textareaInput}
            id="description-input"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>
      </div>
      <div className={styles.formColumn}>
        <Select
          id={"category"}
          activeValue={category}
          handleChange={option => setCategory(option)}
          label="Categoria"
          options={["teste", "teste2"]}
        />
        <Select
          id={"category2"}
          activeValue={"teste"}
          handleChange={() => {}}
          label="Categoria"
          options={["teste", "teste2"]}
        />
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="bed-input">
            Camas
          </label>
          <div className={styles.bedAndGuestAndButtonContainer}>
            <div className={styles.bedAndGuestContainer}>
              <NumberInput
                id="doubleBed-input"
                value={numberOfDoubleBed}
                setValue={setNumberOfDoubleBed}
                beforeIcon={<BedDoubleIcon size={16} color="currentColor" />}
              />
              <NumberInput
                id="singleBed-input"
                value={numberOfSingleBed}
                setValue={setNumberOfSingleBed}
                beforeIcon={<BedSingleIcon size={16} color="currentColor" />}
              />
            </div>
            <button className={styles.nextStepButton}>Próximo</button>
          </div>
        </div>
      </div>
    </form>
  );
}
