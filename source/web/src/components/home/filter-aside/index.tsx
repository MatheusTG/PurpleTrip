"use client";
import Checkbox from "@/components/checkbox";
import styles from "./filter-aside.module.css";
import NumberInput from "@/components/number-input";
import Stars, { StarsAmount } from "@/components/stars";
import { useState } from "react";

export default function FilterAside() {
  const [minDailyPrice, setMinDailyPrice] = useState(100);
  const [maxDailyPrice, setMaxDailyPrice] = useState(500);
  const [minStarsAmount, setMinStarsAmount] = useState<StarsAmount>(1);
  const [maxStarsAmount, setMaxStarsAmount] = useState<StarsAmount>(5);
  const [bedFilter, setBedFilter] = useState({ single: true, double: false });
  const [animalsFilter, setAnimalsFilter] = useState({
    accepted: true,
    notAccepted: false,
  });
  const [parkingFilter, setParkingFilter] = useState({
    included: true,
    notIncluded: false,
  });

  return (
    <aside className={styles.filtersContainer}>
      <header className={styles.filtersHeader}>
        <h2 className={styles.filtersTitle}>Filtros</h2>
      </header>

      <main className={styles.filtersMain}>
        <div>
          <h3 className={styles.filtersSubtitle}>Diária</h3>
          <div className={styles.moneyInputsContainer}>
            <NumberInput
              id="minDailyPrice"
              label="Min"
              value={minDailyPrice}
              setValue={setMinDailyPrice}
              beforeIcon="R$"
            />
            <NumberInput
              id="maxDailyPrice"
              label="Max"
              value={maxDailyPrice}
              setValue={setMaxDailyPrice}
              beforeIcon="R$"
            />
          </div>
        </div>

        <div>
          <h3 className={styles.filtersSubtitle}>Categoria</h3>
          <div className={styles.starsAmountFilterContainer}>
            <div className={styles.starsAmountFilterItem}>
              <span className={styles.starsFilterAmountLabel}>Min</span>
              <Stars size={24} starsAmount={minStarsAmount} setStarsAmount={setMinStarsAmount} />
            </div>
            <div className={styles.starsAmountFilterItem}>
              <span className={styles.starsFilterAmountLabel}>Max</span>
              <Stars size={24} starsAmount={maxStarsAmount} setStarsAmount={setMaxStarsAmount} />
            </div>
          </div>
        </div>

        <div>
          <h3 className={styles.filtersSubtitle}>Cama</h3>
          <div className={styles.bedCheckboxContainer}>
            <Checkbox
              id="bed-checkbox"
              label="Solteiro"
              check={bedFilter.single}
              setCheck={value => setBedFilter({ ...bedFilter, single: value })}
            />
            <Checkbox
              id="bed-checkbox"
              label="Casal"
              check={bedFilter.double}
              setCheck={value => setBedFilter({ ...bedFilter, double: value })}
            />
          </div>
        </div>

        <div>
          <h3 className={styles.filtersSubtitle}>Animais</h3>
          <div className={styles.bedCheckboxContainer}>
            <Checkbox
              id="bed-checkbox"
              label="Aceita"
              check={animalsFilter.accepted}
              setCheck={value => setAnimalsFilter({ ...animalsFilter, accepted: value })}
            />
            <Checkbox
              id="bed-checkbox"
              label="Não aceita"
              check={animalsFilter.notAccepted}
              setCheck={value => setAnimalsFilter({ ...animalsFilter, notAccepted: value })}
            />
          </div>
        </div>

        <div>
          <h3 className={styles.filtersSubtitle}>Estacionamento </h3>
          <div className={styles.bedCheckboxContainer}>
            <Checkbox
              id="bed-checkbox"
              label="Incluso"
              check={parkingFilter.included}
              setCheck={value => setParkingFilter({ ...parkingFilter, included: value })}
            />
            <Checkbox
              id="bed-checkbox"
              label="Não incluso"
              check={parkingFilter.notIncluded}
              setCheck={value => setParkingFilter({ ...parkingFilter, notIncluded: value })}
            />
          </div>
        </div>
      </main>
    </aside>
  );
}
