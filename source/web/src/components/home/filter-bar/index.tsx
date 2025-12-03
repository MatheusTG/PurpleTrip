"use client";

import styles from "./filter-bar.module.css";

import {
  ArrowRightIcon,
  BedDoubleIcon,
  CalendarDaysIcon,
  SearchIcon,
  SunMoonIcon,
  UserIcon,
} from "lucide-react";

import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { addDays, differenceInDays, format, set } from "date-fns";
import { ptBR } from "date-fns/locale";

import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function FilterBar() {
  const [isCalendarActive, setIsCalendarActive] = useState(false);
  const [dateInterval, setDateInterval] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [placeInputValue, setPlaceInputValue] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [numberOfBeds, setNumberOfBeds] = useState(1);

  const stayContainerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    function handleCLick(event: MouseEvent) {
      if (
        isCalendarActive &&
        event.target &&
        !stayContainerRef.current?.contains(event.target as Node)
      ) {
        setIsCalendarActive(false);
      }
    }

    if (isCalendarActive) {
      window.addEventListener("click", handleCLick);
    }
  }, [isCalendarActive]);

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("?teste=2");
  }

  function transformDateToString(date: Date) {
    const firstStepFormatted = format(date, "eee dd MMM", {
      locale: ptBR,
    });
    const firstStepFormattedList = firstStepFormatted.split(" ");
    firstStepFormattedList[0] = firstStepFormattedList[0].slice(0, 3);
    return firstStepFormattedList.join(" ");
  }

  function handleNumberOfPeople({ target }: ChangeEvent<HTMLInputElement>) {
    if (!(target.value.length > 1)) {
      setNumberOfPeople(Number(target.value));
    }
  }

  function handleNumberOfBeds({ target }: ChangeEvent<HTMLInputElement>) {
    if (!(target.value.length > 1)) {
      setNumberOfBeds(Number(target.value));
    }
  }

  return (
    <form className={styles.formContainer} method="GET">
      <div className={styles.searchPlaceInputContainer}>
        <div className="icon">
          <SearchIcon name="place" size={24} color="currentColor" />
        </div>
        <input
          value={placeInputValue}
          onChange={({ target }) => setPlaceInputValue(target.value)}
          className={styles.placeInput}
          placeholder="Onde você está indo?"
        />
      </div>

      <div className={styles.rightSide}>
        <div
          ref={stayContainerRef}
          className={styles.stayContainer}
          onClick={() => setIsCalendarActive(true)}
        >
          <div className="icon">
            <CalendarDaysIcon size={24} color="currentColor" />
          </div>
          <div className={styles.stayDates}>
            <span className={styles.dateText}>
              {transformDateToString(
                dateInterval[0].startDate
                  ? new Date(dateInterval[0].startDate)
                  : new Date()
              )}
            </span>
            <div>
              <ArrowRightIcon size={16} color="currentColor" />
            </div>
            <span className={styles.dateText}>
              {transformDateToString(
                dateInterval[0].endDate
                  ? new Date(dateInterval[0].endDate)
                  : new Date()
              )}
            </span>
          </div>
          <div className={styles.stayDaysNumberContainer}>
            <span className={styles.stayDayNumber}>
              {dateInterval[0].startDate &&
                dateInterval[0].endDate &&
                differenceInDays(
                  dateInterval[0].endDate,
                  dateInterval[0].startDate
                )}
            </span>
            <div className="icon">
              <SunMoonIcon size={14} color="currentColor" />
            </div>
          </div>
          <DateRange
            className={`${
              isCalendarActive ? styles.dateRangeActive : styles.dateRange
            }`}
            onChange={(item) => setDateInterval([item.selection])}
            ranges={dateInterval}
            direction="horizontal"
            locale={
              {
                ...ptBR,
                localize: {
                  ...ptBR.localize,
                  day: (n: number) => {
                    const dias = [
                      "dom",
                      "seg",
                      "ter",
                      "qua",
                      "qui",
                      "sex",
                      "sáb",
                    ];
                    return dias[n];
                  },
                },
              } as typeof ptBR
            }
          />
        </div>

        <div className={styles.peopleAndBedContainer}>
          <div className={styles.peopleAndBedItem}>
            <input
              className={styles.peopleAndBedInput}
              type="number"
              value={numberOfPeople}
              onChange={handleNumberOfPeople}
              max={9}
              min={1}
            />
            <div className="icon">
              <UserIcon size={16} color="currentColor" />
            </div>
          </div>
          <div className={styles.peopleAndBedItem}>
            <input
              className={styles.peopleAndBedInput}
              type="number"
              value={numberOfBeds}
              onChange={handleNumberOfBeds}
              min={1}
              max={9}
            />
            <div className="icon">
              <BedDoubleIcon size={16} color="currentColor" />
            </div>
          </div>
        </div>
        <button className={styles.filterBarButton} onClick={handleSubmit}>
          Buscar
        </button>
      </div>
    </form>
  );
}
